import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import CheckboxTreeButton from './inner/components/CheckboxTreeButton/CheckboxTreeButton';
import TreeNode from './inner/components/TreeNode/TreeNode';
import iconsShape from './inner/shapes/iconsShape';
import languageShape from './inner/shapes/languageShape';
import listShape from './inner/shapes/listShape';
import nodeShape from './inner/shapes/nodeShape';
import iconsElementsShape from './inner/shapes/iconsElementsShape';

import { ICON_PREFIX, CHECK, UNCHECK, HALFCHECK } from './inner/const/CheckboxTreeConst';

// TODO: This is old way. Rewrite it!
class CheckboxTree extends React.Component<any> {
   static propTypes = {
      nodes: PropTypes.arrayOf(nodeShape).isRequired,

      checkedList: listShape,
      disabled: PropTypes.bool,
      expandDisabled: PropTypes.bool,
      expandOnClick: PropTypes.bool,
      expandedList: listShape,
      icons: iconsShape,
      customIcons: iconsElementsShape,
      lang: languageShape,
      name: PropTypes.string,
      nameAsArray: PropTypes.bool,
      nativeCheckboxes: PropTypes.bool,
      onlyLeafCheckboxes: PropTypes.bool,
      optimisticToggle: PropTypes.bool,
      showExpandAll: PropTypes.bool,
      showNodeIcon: PropTypes.bool,
      showNodeTitle: PropTypes.bool,
      onCheck: PropTypes.func,
      onClick: PropTypes.func,
      onExpand: PropTypes.func,
      cascade: PropTypes.string
   };

   static defaultProps = {
      checkedList: [],
      disabled: false,
      expandDisabled: false,
      expandOnClick: false,
      expandedList: [],
      icons: {
         check: 'fa-check-square-o',
         uncheck: 'fa-square-o',
         halfCheck: 'fa-check-square-o rct-icon-half-check',
         expandClose: 'fa fa-chevron-right',
         expandOpen: 'fa-chevron-down',
         expandAll: 'fa-plus-square-o',
         collapseAll: 'fa-minus-square-o',
         parentClose: 'fa-folder',
         parentOpen: 'fa-folder-open',
         leaf: 'fa-file-o'
      },
      lang: {
         collapseAll: 'Свернуть всё',
         expandAll: 'Развернуть всё',
         toggle: 'Переключатель'
      },
      name: undefined,
      nameAsArray: false,
      nativeCheckboxes: false,
      cascade: 'cascade',
      onlyLeafCheckboxes: false,
      optimisticToggle: true,
      showExpandAll: false,
      showNodeIcon: true,
      showNodeTitle: false,
      onCheck: () => {},
      onClick: () => {},
      onExpand: () => {}
   };

   id = `rct-${uniqueId()}`;
   flatNodes = {};
   iconsElements = {};

   constructor(props) {
      super(props);

      this.flattenNodes(props.nodes);
      this.getIconsElements({ ...CheckboxTree.defaultProps.icons, ...this.props.icons });
      this.deserializeLists({
         checked: props.checkedList,
         expanded: props.expandedList
      });

      this.onCheck = this.onCheck.bind(this);
      this.onExpand = this.onExpand.bind(this);
      this.onExpandAll = this.onExpandAll.bind(this);
      this.onCollapseAll = this.onCollapseAll.bind(this);
      this.getIconsElements = this.getIconsElements.bind(this);
   }

   getIconsElements(icons) {
      for (let iconName in icons) {
         if (icons.hasOwnProperty(iconName)) {
            this.iconsElements[iconName] = (
               <i className={classNames(ICON_PREFIX, icons[iconName])} />
            );
         }
      }
   }

   componentWillReceiveProps({ nodes, checkedList, expandedList }) {
      if (!isEqual(this.props.nodes, nodes)) {
         this.flattenNodes(nodes);
      }
      this.deserializeLists({ checked: checkedList, expanded: expandedList });
   }

   onCheck(nodeInfo) {
      const { cascade, onCheck } = this.props;
      const node = this.flatNodes[nodeInfo.value];
      this.toggleChecked(nodeInfo, nodeInfo.checked, cascade);
      onCheck(this.serializeList('checked'), { ...nodeInfo, children: node.self.children });
   }

   onExpand(nodeInfo) {
      const { onExpand } = this.props;
      const node = this.flatNodes[nodeInfo.value];

      this.toggleNode(nodeInfo.value, 'expanded', nodeInfo.expanded);
      onExpand(this.serializeList('expanded'), { ...nodeInfo, children: node.self.children });
   }

   onExpandAll() {
      this.expandAllNodes();
   }

   onCollapseAll() {
      this.expandAllNodes(false);
   }

   getShallowCheckState(node, cascade) {
      const flatNode = this.flatNodes[node.value];

      if (flatNode.isLeaf || 'noCascade' === cascade) {
         return flatNode.checked ? CHECK : UNCHECK;
      }

      if (this.isEveryChildChecked(node) && flatNode.checked) {
         return CHECK;
      }

      if (this.isSomeChildChecked(node)) {
         return HALFCHECK;
      }

      return UNCHECK;
   }

   getDisabledState(node, parent, disabledProp, cascade) {
      return Boolean(disabledProp || ('noCascade' !== cascade && parent.disabled) || node.disabled);
   }

   nodeHasChildren(node) {
      return Array.isArray(node.children) && node.children.length > 0;
   }

   expandAllNodes(expand = true) {
      const { onExpand } = this.props;

      Object.keys(this.flatNodes).forEach((value) => {
         if (this.flatNodes[value].isParent) {
            this.flatNodes[value].expanded = expand;
         }
      });

      onExpand(this.serializeList('expanded'));
   }

   toggleChecked(node, isChecked, cascade) {
      const flatNode = this.flatNodes[node.value];
      if (node.disabled) {
         return;
      }
      //Если снимаем выделение у потомка - снимаем и у родителя
      else if (
         Object.keys(flatNode.parent).length !== 0 &&
         !isChecked &&
         'halfCascade' === cascade
      ) {
         this.toggleNode(flatNode.parent.value, 'checked', isChecked);
      }
      //Если снимаем выделение - не трогаем потомков
      if (flatNode.isLeaf || 'noCascade' === cascade || (!isChecked && 'halfCascade' === cascade)) {
         // Set the check status of a leaf node or an uncoupled parent
         this.toggleNode(node.value, 'checked', isChecked);
      } else {
         //Добавляем в массив родителя
         this.toggleNode(node.value, 'checked', isChecked);
         // Percolate check status down to all children
         flatNode.self.children.forEach((child) => {
            this.toggleChecked(child, isChecked, cascade);
         });
      }
   }

   toggleNode(nodeValue, key, toggleValue) {
      this.flatNodes[nodeValue][key] = toggleValue;
   }

   flattenNodes(nodes, parent = {}) {
      if (!Array.isArray(nodes) || nodes.length === 0) {
         return;
      }

      const { disabled, cascade } = this.props;

      nodes.forEach((node) => {
         const isParent = this.nodeHasChildren(node);

         this.flatNodes[node.value] = {
            self: node,
            parent,
            isParent,
            isLeaf: !isParent,
            showCheckbox: node.showCheckbox !== undefined ? node.showCheckbox : true,
            disabled: this.getDisabledState(node, parent, disabled, cascade)
         };
         this.flattenNodes(node.children, node);
      });
   }

   deserializeLists(lists) {
      // Reset values to false
      Object.keys(this.flatNodes).forEach((value) => {
         Object.keys(lists).forEach((listKey) => {
            this.flatNodes[value][listKey] = false;
         });
      });

      // Deserialize values and set their nodes to true
      Object.keys(lists).forEach((listKey) => {
         lists[listKey].forEach((value) => {
            if (this.flatNodes[value] !== undefined) {
               this.flatNodes[value][listKey] = true;
            }
         });
      });
   }

   serializeList(key) {
      const list = [];

      Object.keys(this.flatNodes).forEach((value) => {
         if (this.flatNodes[value][key]) {
            list.push(value);
         }
      });

      return list;
   }

   isEveryChildChecked(node) {
      return node.children.every((child) => this.flatNodes[child.value].checkState === CHECK);
   }

   isSomeChildChecked(node) {
      return node.children.some(
         (child) =>
            this.flatNodes[child.value].checkState === CHECK ||
            this.flatNodes[child.value].checkState === HALFCHECK
      );
   }

   renderTreeNodes(nodes, parent: any = {}) {
      const {
         expandDisabled,
         expandOnClick,
         customIcons,
         lang,
         cascade,
         onlyLeafCheckboxes,
         optimisticToggle,
         showNodeTitle,
         showNodeIcon,
         onClick,
         halfCheckLabelInfo
      } = this.props;
      const treeNodes = nodes.map((node) => {
         const key = `${node.value}`;
         const flatNode = this.flatNodes[node.value];
         const children = flatNode.isParent ? this.renderTreeNodes(node.children, node) : null;

         // Get the check state after all children check states are determined
         flatNode.checkState = this.getShallowCheckState(node, cascade);

         // Show checkbox only if this is a leaf node or showCheckbox is true
         const showCheckbox = onlyLeafCheckboxes ? flatNode.isLeaf : flatNode.showCheckbox;

         // Render only if parent is expanded or if there is no root parent
         const parentExpanded = parent.value ? this.flatNodes[parent.value].expanded : true;

         if (!parentExpanded) {
            return null;
         }

         return (
            <TreeNode
               key={key}
               checked={flatNode.checkState}
               className={node.className}
               disabled={flatNode.disabled}
               expandDisabled={expandDisabled}
               expandOnClick={expandOnClick}
               expanded={flatNode.expanded}
               icon={node.icon}
               icons={{ ...this.iconsElements, ...customIcons }}
               label={node.label}
               lang={lang}
               optimisticToggle={optimisticToggle}
               isLeaf={flatNode.isLeaf}
               isParent={flatNode.isParent}
               showCheckbox={showCheckbox}
               showNodeIcon={showNodeIcon}
               title={showNodeTitle ? node.title || node.label : node.title}
               treeId={this.id}
               value={node.value}
               onCheck={this.onCheck}
               onClick={onClick}
               onExpand={this.onExpand}
               halfCheckLabelInfo={halfCheckLabelInfo}>
               {children}
            </TreeNode>
         );
      });

      return <ol>{treeNodes}</ol>;
   }

   renderExpandAll() {
      const { lang, showExpandAll } = this.props;

      const { expandAll, collapseAll }: any = this.iconsElements;

      if (!showExpandAll) {
         return null;
      }

      return (
         <div className="rct-options">
            <CheckboxTreeButton
               className="rct-option rct-option-expand-all"
               title={lang.expandAll}
               onClick={this.onExpandAll}>
               {expandAll}
            </CheckboxTreeButton>
            <CheckboxTreeButton
               className="rct-option rct-option-collapse-all"
               title={lang.collapseAll}
               onClick={this.onCollapseAll}>
               {collapseAll}
            </CheckboxTreeButton>
         </div>
      );
   }

   renderHiddenInput() {
      const { name, nameAsArray } = this.props;

      if (name === undefined) {
         return null;
      }

      if (nameAsArray) {
         return this.renderArrayHiddenInput();
      }

      return this.renderJoinedHiddenInput();
   }

   renderArrayHiddenInput() {
      const { checkedList, name: inputName } = this.props;

      return checkedList.map((value) => {
         const name = `${inputName}[]`;

         return <input key={value} name={name} type="hidden" value={value} />;
      });
   }

   renderJoinedHiddenInput() {
      const { checkedList, name } = this.props;
      const inputValue = checkedList.join(',');

      return <input name={name} type="hidden" value={inputValue} />;
   }

   render() {
      const { disabled, nodes, nativeCheckboxes } = this.props;
      const treeNodes = this.renderTreeNodes(nodes);

      const className = classNames({
         'react-checkbox-tree': true,
         'rct-disabled': disabled,
         'rct-native-display': nativeCheckboxes
      });

      return (
         <div className={className}>
            {this.renderExpandAll()}
            {this.renderHiddenInput()}
            {treeNodes}
         </div>
      );
   }
}

export default CheckboxTree;
