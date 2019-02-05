'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _CheckboxTreeButton = require('./CheckboxTreeButton');

var _CheckboxTreeButton2 = _interopRequireDefault(_CheckboxTreeButton);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _iconsShape = require('./shapes/iconsShape');

var _iconsShape2 = _interopRequireDefault(_iconsShape);

var _languageShape = require('./shapes/languageShape');

var _languageShape2 = _interopRequireDefault(_languageShape);

var _listShape = require('./shapes/listShape');

var _listShape2 = _interopRequireDefault(_listShape);

var _nodeShape = require('./shapes/nodeShape');

var _nodeShape2 = _interopRequireDefault(_nodeShape);

var _iconsElementsShape = require('./shapes/iconsElementsShape');

var _iconsElementsShape2 = _interopRequireDefault(_iconsElementsShape);

var _CheckboxTreeConst = require('./const/CheckboxTreeConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxTree = function (_React$Component) {
   _inherits(CheckboxTree, _React$Component);

   function CheckboxTree(props) {
      _classCallCheck(this, CheckboxTree);

      var _this = _possibleConstructorReturn(this, (CheckboxTree.__proto__ || Object.getPrototypeOf(CheckboxTree)).call(this, props));

      _this.id = 'rct-' + (0, _uniqueId2.default)();
      _this.flatNodes = {};
      _this.iconsElements = {};

      _this.flattenNodes(props.nodes);
      _this.getIconsElements(_extends({}, CheckboxTree.defaultProps.icons, _this.props.icons));
      _this.deserializeLists({
         checked: props.checkedList,
         expanded: props.expandedList
      });

      _this.onCheck = _this.onCheck.bind(_this);
      _this.onExpand = _this.onExpand.bind(_this);
      _this.onExpandAll = _this.onExpandAll.bind(_this);
      _this.onCollapseAll = _this.onCollapseAll.bind(_this);
      _this.getIconsElements = _this.getIconsElements.bind(_this);
      return _this;
   }

   _createClass(CheckboxTree, [{
      key: 'getIconsElements',
      value: function getIconsElements(icons) {
         for (var iconName in icons) {
            if (icons.hasOwnProperty(iconName)) {
               this.iconsElements[iconName] = _react2.default.createElement('i', { className: (0, _classnames2.default)(_CheckboxTreeConst.ICON_PREFIX, icons[iconName]) });
            }
         }
      }
   }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref) {
         var nodes = _ref.nodes,
             checkedList = _ref.checkedList,
             expandedList = _ref.expandedList;

         if (!(0, _isEqual2.default)(this.props.nodes, nodes)) {
            this.flattenNodes(nodes);
         }
         this.deserializeLists({ checked: checkedList, expanded: expandedList });
      }
   }, {
      key: 'onCheck',
      value: function onCheck(nodeInfo) {
         var _props = this.props,
             cascade = _props.cascade,
             onCheck = _props.onCheck;

         var node = this.flatNodes[nodeInfo.value];
         this.toggleChecked(nodeInfo, nodeInfo.checked, cascade);
         onCheck(this.serializeList('checked'), _extends({}, nodeInfo, { children: node.self.children }));
      }
   }, {
      key: 'onExpand',
      value: function onExpand(nodeInfo) {
         var onExpand = this.props.onExpand;

         var node = this.flatNodes[nodeInfo.value];

         this.toggleNode(nodeInfo.value, 'expanded', nodeInfo.expanded);
         onExpand(this.serializeList('expanded'), _extends({}, nodeInfo, { children: node.self.children }));
      }
   }, {
      key: 'onExpandAll',
      value: function onExpandAll() {
         this.expandAllNodes();
      }
   }, {
      key: 'onCollapseAll',
      value: function onCollapseAll() {
         this.expandAllNodes(false);
      }
   }, {
      key: 'getShallowCheckState',
      value: function getShallowCheckState(node, cascade) {
         var flatNode = this.flatNodes[node.value];

         if (flatNode.isLeaf || 'noCascade' === cascade) {
            return flatNode.checked ? _CheckboxTreeConst.CHECK : _CheckboxTreeConst.UNCHECK;
         }

         if (this.isEveryChildChecked(node) && flatNode.checked) {
            return _CheckboxTreeConst.CHECK;
         }

         if (this.isSomeChildChecked(node)) {
            return _CheckboxTreeConst.HALFCHECK;
         }

         return _CheckboxTreeConst.UNCHECK;
      }
   }, {
      key: 'getDisabledState',
      value: function getDisabledState(node, parent, disabledProp, cascade) {
         return Boolean(disabledProp || 'noCascade' !== cascade && parent.disabled || node.disabled);
      }
   }, {
      key: 'nodeHasChildren',
      value: function nodeHasChildren(node) {
         return Array.isArray(node.children) && node.children.length > 0;
      }
   }, {
      key: 'expandAllNodes',
      value: function expandAllNodes() {
         var _this2 = this;

         var expand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
         var onExpand = this.props.onExpand;


         Object.keys(this.flatNodes).forEach(function (value) {
            if (_this2.flatNodes[value].isParent) {
               _this2.flatNodes[value].expanded = expand;
            }
         });

         onExpand(this.serializeList('expanded', null));
      }
   }, {
      key: 'toggleChecked',
      value: function toggleChecked(node, isChecked, cascade) {
         var _this3 = this;

         var flatNode = this.flatNodes[node.value];
         if (node.disabled) {
            return;
         }
         //Если снимаем выделение у потомка - снимаем и у родителя
         else if (Object.keys(flatNode.parent).length !== 0 && !isChecked && 'halfCascade' === cascade) {
               this.toggleNode(flatNode.parent.value, 'checked', isChecked);
            }
         //Если снимаем выделение - не трогаем потомков
         if (flatNode.isLeaf || 'noCascade' === cascade || !isChecked && 'halfCascade' === cascade) {
            // Set the check status of a leaf node or an uncoupled parent
            this.toggleNode(node.value, 'checked', isChecked);
         } else {
            //Добавляем в массив родителя
            this.toggleNode(node.value, 'checked', isChecked);
            // Percolate check status down to all children
            flatNode.self.children.forEach(function (child) {
               _this3.toggleChecked(child, isChecked, cascade);
            });
         }
      }
   }, {
      key: 'toggleNode',
      value: function toggleNode(nodeValue, key, toggleValue) {
         this.flatNodes[nodeValue][key] = toggleValue;
      }
   }, {
      key: 'flattenNodes',
      value: function flattenNodes(nodes) {
         var _this4 = this;

         var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

         if (!Array.isArray(nodes) || nodes.length === 0) {
            return;
         }

         var _props2 = this.props,
             disabled = _props2.disabled,
             cascade = _props2.cascade;


         nodes.forEach(function (node) {
            var isParent = _this4.nodeHasChildren(node);

            _this4.flatNodes[node.value] = {
               self: node,
               parent: parent,
               isParent: isParent,
               isLeaf: !isParent,
               showCheckbox: node.showCheckbox !== undefined ? node.showCheckbox : true,
               disabled: _this4.getDisabledState(node, parent, disabled, cascade)
            };
            _this4.flattenNodes(node.children, node);
         });
      }
   }, {
      key: 'deserializeLists',
      value: function deserializeLists(lists) {
         var _this5 = this;

         // Reset values to false
         Object.keys(this.flatNodes).forEach(function (value) {
            Object.keys(lists).forEach(function (listKey) {
               _this5.flatNodes[value][listKey] = false;
            });
         });

         // Deserialize values and set their nodes to true
         Object.keys(lists).forEach(function (listKey) {
            lists[listKey].forEach(function (value) {
               if (_this5.flatNodes[value] !== undefined) {
                  _this5.flatNodes[value][listKey] = true;
               }
            });
         });
      }
   }, {
      key: 'serializeList',
      value: function serializeList(key) {
         var _this6 = this;

         var list = [];

         Object.keys(this.flatNodes).forEach(function (value) {
            if (_this6.flatNodes[value][key]) {
               list.push(value);
            }
         });

         return list;
      }
   }, {
      key: 'isEveryChildChecked',
      value: function isEveryChildChecked(node) {
         var _this7 = this;

         return node.children.every(function (child) {
            return _this7.flatNodes[child.value].checkState === _CheckboxTreeConst.CHECK;
         });
      }
   }, {
      key: 'isSomeChildChecked',
      value: function isSomeChildChecked(node) {
         var _this8 = this;

         return node.children.some(function (child) {
            return _this8.flatNodes[child.value].checkState === _CheckboxTreeConst.CHECK || _this8.flatNodes[child.value].checkState === _CheckboxTreeConst.HALFCHECK;
         });
      }
   }, {
      key: 'renderTreeNodes',
      value: function renderTreeNodes(nodes) {
         var _this9 = this;

         var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var _props3 = this.props,
             expandDisabled = _props3.expandDisabled,
             expandOnClick = _props3.expandOnClick,
             customIcons = _props3.customIcons,
             lang = _props3.lang,
             cascade = _props3.cascade,
             onlyLeafCheckboxes = _props3.onlyLeafCheckboxes,
             optimisticToggle = _props3.optimisticToggle,
             showNodeTitle = _props3.showNodeTitle,
             showNodeIcon = _props3.showNodeIcon,
             onClick = _props3.onClick,
             halfCheckLabelInfo = _props3.halfCheckLabelInfo;

         var treeNodes = nodes.map(function (node) {
            var key = '' + node.value;
            var flatNode = _this9.flatNodes[node.value];
            var children = flatNode.isParent ? _this9.renderTreeNodes(node.children, node) : null;

            // Get the check state after all children check states are determined
            flatNode.checkState = _this9.getShallowCheckState(node, cascade);

            // Show checkbox only if this is a leaf node or showCheckbox is true
            var showCheckbox = onlyLeafCheckboxes ? flatNode.isLeaf : flatNode.showCheckbox;

            // Render only if parent is expanded or if there is no root parent
            var parentExpanded = parent.value ? _this9.flatNodes[parent.value].expanded : true;

            if (!parentExpanded) {
               return null;
            }

            return _react2.default.createElement(
               _TreeNode2.default,
               {
                  key: key,
                  checked: flatNode.checkState,
                  className: node.className,
                  disabled: flatNode.disabled,
                  expandDisabled: expandDisabled,
                  expandOnClick: expandOnClick,
                  expanded: flatNode.expanded,
                  icon: node.icon,
                  icons: _extends({}, _this9.iconsElements, customIcons),
                  label: node.label,
                  lang: lang,
                  optimisticToggle: optimisticToggle,
                  isLeaf: flatNode.isLeaf,
                  isParent: flatNode.isParent,
                  showCheckbox: showCheckbox,
                  showNodeIcon: showNodeIcon,
                  title: showNodeTitle ? node.title || node.label : node.title,
                  treeId: _this9.id,
                  value: node.value,
                  onCheck: _this9.onCheck,
                  onClick: onClick,
                  onExpand: _this9.onExpand,
                  halfCheckLabelInfo: halfCheckLabelInfo },
               children
            );
         });

         return _react2.default.createElement(
            'ol',
            null,
            treeNodes
         );
      }
   }, {
      key: 'renderExpandAll',
      value: function renderExpandAll() {
         var _props4 = this.props,
             lang = _props4.lang,
             showExpandAll = _props4.showExpandAll;
         var _iconsElements = this.iconsElements,
             expandAll = _iconsElements.expandAll,
             collapseAll = _iconsElements.collapseAll;


         if (!showExpandAll) {
            return null;
         }

         return _react2.default.createElement(
            'div',
            { className: 'rct-options' },
            _react2.default.createElement(
               _CheckboxTreeButton2.default,
               {
                  className: 'rct-option rct-option-expand-all',
                  title: lang.expandAll,
                  onClick: this.onExpandAll },
               expandAll
            ),
            _react2.default.createElement(
               _CheckboxTreeButton2.default,
               {
                  className: 'rct-option rct-option-collapse-all',
                  title: lang.collapseAll,
                  onClick: this.onCollapseAll },
               collapseAll
            )
         );
      }
   }, {
      key: 'renderHiddenInput',
      value: function renderHiddenInput() {
         var _props5 = this.props,
             name = _props5.name,
             nameAsArray = _props5.nameAsArray;


         if (name === undefined) {
            return null;
         }

         if (nameAsArray) {
            return this.renderArrayHiddenInput();
         }

         return this.renderJoinedHiddenInput();
      }
   }, {
      key: 'renderArrayHiddenInput',
      value: function renderArrayHiddenInput() {
         var _props6 = this.props,
             checkedList = _props6.checkedList,
             inputName = _props6.name;


         return checkedList.map(function (value) {
            var name = inputName + '[]';

            return _react2.default.createElement('input', { key: value, name: name, type: 'hidden', value: value });
         });
      }
   }, {
      key: 'renderJoinedHiddenInput',
      value: function renderJoinedHiddenInput() {
         var _props7 = this.props,
             checkedList = _props7.checkedList,
             name = _props7.name;

         var inputValue = checkedList.join(',');

         return _react2.default.createElement('input', { name: name, type: 'hidden', value: inputValue });
      }
   }, {
      key: 'render',
      value: function render() {
         var _props8 = this.props,
             disabled = _props8.disabled,
             nodes = _props8.nodes,
             nativeCheckboxes = _props8.nativeCheckboxes;

         var treeNodes = this.renderTreeNodes(nodes);

         var className = (0, _classnames2.default)({
            'react-checkbox-tree': true,
            'rct-disabled': disabled,
            'rct-native-display': nativeCheckboxes
         });

         return _react2.default.createElement(
            'div',
            { className: className },
            this.renderExpandAll(),
            this.renderHiddenInput(),
            treeNodes
         );
      }
   }]);

   return CheckboxTree;
}(_react2.default.Component);

CheckboxTree.propTypes = {
   nodes: _propTypes2.default.arrayOf(_nodeShape2.default).isRequired,

   checkedList: _listShape2.default,
   disabled: _propTypes2.default.bool,
   expandDisabled: _propTypes2.default.bool,
   expandOnClick: _propTypes2.default.bool,
   expandedList: _listShape2.default,
   icons: _iconsShape2.default,
   customIcons: _iconsElementsShape2.default,
   lang: _languageShape2.default,
   name: _propTypes2.default.string,
   nameAsArray: _propTypes2.default.bool,
   nativeCheckboxes: _propTypes2.default.bool,
   onlyLeafCheckboxes: _propTypes2.default.bool,
   optimisticToggle: _propTypes2.default.bool,
   showExpandAll: _propTypes2.default.bool,
   showNodeIcon: _propTypes2.default.bool,
   showNodeTitle: _propTypes2.default.bool,
   onCheck: _propTypes2.default.func,
   onClick: _propTypes2.default.func,
   onExpand: _propTypes2.default.func,
   cascade: _propTypes2.default.string
};
CheckboxTree.defaultProps = {
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
   onCheck: function onCheck() {},
   onClick: function onClick() {},
   onExpand: function onExpand() {}
};
exports.default = CheckboxTree;