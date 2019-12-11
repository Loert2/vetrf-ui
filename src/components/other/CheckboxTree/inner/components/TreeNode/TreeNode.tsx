import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CheckboxTreeButton from '../CheckboxTreeButton/CheckboxTreeButton';
import NativeCheckbox from '../NativeCheckbox/NativeCheckbox';
import iconsElementsShape from '../../shapes/iconsElementsShape';
import languageShape from '../../shapes/languageShape';

import { CHECK, UNCHECK, HALFCHECK } from '../../const/CheckboxTreeConst';

// TODO: This is old way. Rewrite it!
class TreeNode extends React.Component<any> {
   static propTypes = {
      checked: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
      expandDisabled: PropTypes.bool.isRequired,
      expanded: PropTypes.bool.isRequired,
      icons: iconsElementsShape.isRequired,
      isLeaf: PropTypes.bool.isRequired,
      isParent: PropTypes.bool.isRequired,
      label: PropTypes.node.isRequired,
      lang: languageShape.isRequired,
      optimisticToggle: PropTypes.bool.isRequired,
      showNodeIcon: PropTypes.bool.isRequired,
      treeId: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      onCheck: PropTypes.func.isRequired,
      onExpand: PropTypes.func.isRequired,
      children: PropTypes.node,
      className: PropTypes.string,
      expandOnClick: PropTypes.bool,
      icon: PropTypes.node,
      showCheckbox: PropTypes.bool,
      title: PropTypes.string,
      onClick: PropTypes.func,
      halfCheckLabelInfo: PropTypes.node,
      nodesInsteadIcons: PropTypes.bool
   };

   static defaultProps = {
      children: null,
      className: null,
      expandOnClick: false,
      icon: null,
      showCheckbox: true,
      title: null,
      onClick: () => {}
   };

   constructor(props) {
      super(props);

      this.onCheck = this.onCheck.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onExpand = this.onExpand.bind(this);
   }

   onCheck() {
      let isChecked = false;

      // Toggle off state to checked
      if (this.props.checked === UNCHECK) {
         isChecked = true;
      }

      // Toggle partial state based on cascade model
      if (this.props.checked === HALFCHECK) {
         isChecked = this.props.optimisticToggle;
      }

      this.props.onCheck({
         value: this.props.value,
         checked: isChecked
      });
   }

   onClick() {
      const { checked, expandOnClick, isParent, optimisticToggle, value, onClick } = this.props;
      let isChecked = false;

      if (checked === CHECK) {
         isChecked = true;
      }

      // Get partial state based on cascade model
      if (checked === HALFCHECK) {
         isChecked = optimisticToggle;
      }

      // Auto expand if enabled
      if (isParent && expandOnClick) {
         this.onExpand();
      }

      onClick({ value, checked: isChecked });
   }

   onExpand() {
      const { expanded, value, onExpand } = this.props;

      onExpand({ value, expanded: !expanded });
   }

   renderCollapseButton() {
      const { expandDisabled, isLeaf, lang } = this.props;

      if (isLeaf) {
         return (
            <span className="rct-collapse">
               <span className="rct-icon" />
            </span>
         );
      }

      return (
         <CheckboxTreeButton
            className="rct-collapse rct-collapse-btn"
            disabled={expandDisabled}
            title={lang.toggle}
            onClick={this.onExpand}>
            {this.renderCollapseIcon()}
         </CheckboxTreeButton>
      );
   }

   renderCollapseIcon() {
      const {
         expanded,
         icons: { expandClose, expandOpen }
      } = this.props;
      if (!expanded) {
         return expandClose;
      }

      return expandOpen;
   }

   renderCheckboxIcon() {
      const {
         checked,
         icons: { uncheck, check, halfCheck }
      } = this.props;

      if (checked === UNCHECK) {
         return uncheck;
      }

      if (checked === CHECK) {
         return check;
      }

      return halfCheck;
   }

   renderNodeIcon() {
      const {
         expanded,
         icon,
         icons: { leaf, parentClose, parentOpen },
         isLeaf
      } = this.props;

      if (icon !== null) {
         return icon;
      }

      if (isLeaf) {
         return leaf;
      }

      if (!expanded) {
         return parentClose;
      }

      return parentOpen;
   }

   renderBareLabel(children) {
      const { onClick, title } = this.props;
      const clickable = onClick.toString() !== TreeNode.defaultProps.onClick.toString();

      return (
         <span className="rct-bare-label" title={title}>
            {clickable ? (
               <span
                  className="rct-node-clickable"
                  onClick={this.onClick}
                  onKeyPress={this.onClick}
                  role="button"
                  tabIndex={0}>
                  {children}
               </span>
            ) : (
               children
            )}
         </span>
      );
   }

   renderCheckboxLabel(children) {
      const { checked, disabled, title, treeId, value, onClick } = this.props;
      const clickable = onClick.toString() !== TreeNode.defaultProps.onClick.toString();
      const inputId = `${treeId}-${String(value)
         .split(' ')
         .join('_')}`;

      const render = [
         <label className="node-label" key={0} htmlFor={inputId} title={title}>
            <NativeCheckbox
               checked={checked === CHECK}
               disabled={disabled}
               id={inputId}
               indeterminate={checked === HALFCHECK}
               onChange={this.onCheck}
            />
            <span className="rct-checkbox">{this.renderCheckboxIcon()}</span>
            {!clickable ? children : null}
         </label>
      ];

      if (clickable) {
         render.push(
            <span
               key={1}
               className="rct-node-clickable"
               onClick={this.onClick}
               onKeyPress={this.onClick}
               role="link"
               tabIndex={0}>
               {children}
            </span>
         );
      }

      return render;
   }

   renderLabel() {
      const { label, showCheckbox, showNodeIcon } = this.props;
      const labelChildren = [
         showNodeIcon ? (
            <span key={0} className="rct-node-icon">
               {this.renderNodeIcon()}
            </span>
         ) : null,
         <span key={1} className="rct-title">
            {label}
         </span>
      ];

      if (!showCheckbox) {
         return this.renderBareLabel(labelChildren);
      }

      return this.renderCheckboxLabel(labelChildren);
   }

   renderChildren() {
      if (!this.props.expanded) {
         return null;
      }

      return this.props.children;
   }

   renderHalfCheckLabelInfo() {
      const { halfCheckLabelInfo, checked } = this.props;
      //Добавить информацию, если узел выделен наполовину
      if (checked === HALFCHECK) {
         return <span>{halfCheckLabelInfo}</span>;
      }

      return null;
   }

   render() {
      const { className, disabled, expanded, isLeaf } = this.props;
      const nodeClass = classNames(
         {
            'rct-node': true,
            'rct-node-leaf': isLeaf,
            'rct-node-parent': !isLeaf,
            'rct-node-expanded': !isLeaf && expanded,
            'rct-node-collapsed': !isLeaf && !expanded,
            'rct-disabled': disabled
         },
         className
      );
      return (
         <li className={nodeClass}>
            <span className="rct-text">
               {this.renderCollapseButton()}
               {this.renderLabel()}
               {this.renderHalfCheckLabelInfo()}
            </span>
            {this.renderChildren()}
         </li>
      );
   }
}

export default TreeNode;
