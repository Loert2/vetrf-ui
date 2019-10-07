'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CheckboxTreeButton = require('./CheckboxTreeButton');

var _CheckboxTreeButton2 = _interopRequireDefault(_CheckboxTreeButton);

var _NativeCheckbox = require('./NativeCheckbox');

var _NativeCheckbox2 = _interopRequireDefault(_NativeCheckbox);

var _iconsElementsShape = require('./shapes/iconsElementsShape');

var _iconsElementsShape2 = _interopRequireDefault(_iconsElementsShape);

var _languageShape = require('./shapes/languageShape');

var _languageShape2 = _interopRequireDefault(_languageShape);

var _CheckboxTreeConst = require('./const/CheckboxTreeConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = function (_React$Component) {
   _inherits(TreeNode, _React$Component);

   function TreeNode(props) {
      _classCallCheck(this, TreeNode);

      var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

      _this.onCheck = _this.onCheck.bind(_this);
      _this.onClick = _this.onClick.bind(_this);
      _this.onExpand = _this.onExpand.bind(_this);
      return _this;
   }

   _createClass(TreeNode, [{
      key: 'onCheck',
      value: function onCheck() {
         var isChecked = false;

         // Toggle off state to checked
         if (this.props.checked === _CheckboxTreeConst.UNCHECK) {
            isChecked = true;
         }

         // Toggle partial state based on cascade model
         if (this.props.checked === _CheckboxTreeConst.HALFCHECK) {
            isChecked = this.props.optimisticToggle;
         }

         this.props.onCheck({
            value: this.props.value,
            checked: isChecked
         });
      }
   }, {
      key: 'onClick',
      value: function onClick() {
         var _props = this.props,
             checked = _props.checked,
             expandOnClick = _props.expandOnClick,
             isParent = _props.isParent,
             optimisticToggle = _props.optimisticToggle,
             value = _props.value,
             onClick = _props.onClick;

         var isChecked = false;

         if (checked === _CheckboxTreeConst.CHECK) {
            isChecked = true;
         }

         // Get partial state based on cascade model
         if (checked === _CheckboxTreeConst.HALFCHECK) {
            isChecked = optimisticToggle;
         }

         // Auto expand if enabled
         if (isParent && expandOnClick) {
            this.onExpand();
         }

         onClick({ value: value, checked: isChecked });
      }
   }, {
      key: 'onExpand',
      value: function onExpand() {
         var _props2 = this.props,
             expanded = _props2.expanded,
             value = _props2.value,
             onExpand = _props2.onExpand;


         onExpand({ value: value, expanded: !expanded });
      }
   }, {
      key: 'renderCollapseButton',
      value: function renderCollapseButton() {
         var _props3 = this.props,
             expandDisabled = _props3.expandDisabled,
             isLeaf = _props3.isLeaf,
             lang = _props3.lang;


         if (isLeaf) {
            return _react2.default.createElement(
               'span',
               { className: 'rct-collapse' },
               _react2.default.createElement('span', { className: 'rct-icon' })
            );
         }

         return _react2.default.createElement(
            _CheckboxTreeButton2.default,
            {
               className: 'rct-collapse rct-collapse-btn',
               disabled: expandDisabled,
               title: lang.toggle,
               onClick: this.onExpand },
            this.renderCollapseIcon()
         );
      }
   }, {
      key: 'renderCollapseIcon',
      value: function renderCollapseIcon() {
         var _props4 = this.props,
             expanded = _props4.expanded,
             _props4$icons = _props4.icons,
             expandClose = _props4$icons.expandClose,
             expandOpen = _props4$icons.expandOpen;

         if (!expanded) {
            return expandClose;
         }

         return expandOpen;
      }
   }, {
      key: 'renderCheckboxIcon',
      value: function renderCheckboxIcon() {
         var _props5 = this.props,
             checked = _props5.checked,
             _props5$icons = _props5.icons,
             uncheck = _props5$icons.uncheck,
             check = _props5$icons.check,
             halfCheck = _props5$icons.halfCheck;


         if (checked === _CheckboxTreeConst.UNCHECK) {
            return uncheck;
         }

         if (checked === _CheckboxTreeConst.CHECK) {
            return check;
         }

         return halfCheck;
      }
   }, {
      key: 'renderNodeIcon',
      value: function renderNodeIcon() {
         var _props6 = this.props,
             expanded = _props6.expanded,
             icon = _props6.icon,
             _props6$icons = _props6.icons,
             leaf = _props6$icons.leaf,
             parentClose = _props6$icons.parentClose,
             parentOpen = _props6$icons.parentOpen,
             isLeaf = _props6.isLeaf;


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
   }, {
      key: 'renderBareLabel',
      value: function renderBareLabel(children) {
         var _props7 = this.props,
             onClick = _props7.onClick,
             title = _props7.title;

         var clickable = onClick.toString() !== TreeNode.defaultProps.onClick.toString();

         return _react2.default.createElement(
            'span',
            { className: 'rct-bare-label', title: title },
            clickable ? _react2.default.createElement(
               'span',
               {
                  className: 'rct-node-clickable',
                  onClick: this.onClick,
                  onKeyPress: this.onClick,
                  role: 'button',
                  tabIndex: 0 },
               children
            ) : children
         );
      }
   }, {
      key: 'renderCheckboxLabel',
      value: function renderCheckboxLabel(children) {
         var _props8 = this.props,
             checked = _props8.checked,
             disabled = _props8.disabled,
             label = _props8.label,
             title = _props8.title,
             treeId = _props8.treeId,
             value = _props8.value,
             onClick = _props8.onClick;

         var clickable = onClick.toString() !== TreeNode.defaultProps.onClick.toString();
         var inputId = treeId + '-' + String(value).split(' ').join('_');

         var render = [_react2.default.createElement(
            'label',
            { className: 'node-label', key: 0, htmlFor: inputId, title: title },
            _react2.default.createElement(_NativeCheckbox2.default, {
               checked: checked === _CheckboxTreeConst.CHECK,
               disabled: disabled,
               id: inputId,
               indeterminate: checked === _CheckboxTreeConst.HALFCHECK,
               onChange: this.onCheck
            }),
            _react2.default.createElement(
               'span',
               { className: 'rct-checkbox' },
               this.renderCheckboxIcon()
            ),
            !clickable ? children : null
         )];

         if (clickable) {
            render.push(_react2.default.createElement(
               'span',
               {
                  key: 1,
                  className: 'rct-node-clickable',
                  onClick: this.onClick,
                  onKeyPress: this.onClick,
                  role: 'link',
                  tabIndex: 0 },
               children
            ));
         }

         return render;
      }
   }, {
      key: 'renderLabel',
      value: function renderLabel() {
         var _props9 = this.props,
             label = _props9.label,
             showCheckbox = _props9.showCheckbox,
             showNodeIcon = _props9.showNodeIcon;

         var labelChildren = [showNodeIcon ? _react2.default.createElement(
            'span',
            { key: 0, className: 'rct-node-icon' },
            this.renderNodeIcon()
         ) : null, _react2.default.createElement(
            'span',
            { key: 1, className: 'rct-title' },
            label
         )];

         if (!showCheckbox) {
            return this.renderBareLabel(labelChildren);
         }

         return this.renderCheckboxLabel(labelChildren);
      }
   }, {
      key: 'renderChildren',
      value: function renderChildren() {
         if (!this.props.expanded) {
            return null;
         }

         return this.props.children;
      }
   }, {
      key: 'renderHalfCheckLabelInfo',
      value: function renderHalfCheckLabelInfo() {
         var _props10 = this.props,
             halfCheckLabelInfo = _props10.halfCheckLabelInfo,
             checked = _props10.checked;
         //Добавить информацию, если узел выделен наполовину

         if (checked === _CheckboxTreeConst.HALFCHECK) {
            return _react2.default.createElement(
               'span',
               null,
               halfCheckLabelInfo
            );
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props11 = this.props,
             className = _props11.className,
             disabled = _props11.disabled,
             expanded = _props11.expanded,
             isLeaf = _props11.isLeaf;

         var nodeClass = (0, _classnames2.default)({
            'rct-node': true,
            'rct-node-leaf': isLeaf,
            'rct-node-parent': !isLeaf,
            'rct-node-expanded': !isLeaf && expanded,
            'rct-node-collapsed': !isLeaf && !expanded,
            'rct-disabled': disabled
         }, className);
         return _react2.default.createElement(
            'li',
            { className: nodeClass },
            _react2.default.createElement(
               'span',
               { className: 'rct-text' },
               this.renderCollapseButton(),
               this.renderLabel(),
               this.renderHalfCheckLabelInfo()
            ),
            this.renderChildren()
         );
      }
   }]);

   return TreeNode;
}(_react2.default.Component);

TreeNode.propTypes = {
   checked: _propTypes2.default.string.isRequired,
   disabled: _propTypes2.default.bool.isRequired,
   expandDisabled: _propTypes2.default.bool.isRequired,
   expanded: _propTypes2.default.bool.isRequired,
   icons: _iconsElementsShape2.default.isRequired,
   isLeaf: _propTypes2.default.bool.isRequired,
   isParent: _propTypes2.default.bool.isRequired,
   label: _propTypes2.default.node.isRequired,
   lang: _languageShape2.default.isRequired,
   optimisticToggle: _propTypes2.default.bool.isRequired,
   showNodeIcon: _propTypes2.default.bool.isRequired,
   treeId: _propTypes2.default.string.isRequired,
   value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
   onCheck: _propTypes2.default.func.isRequired,
   onExpand: _propTypes2.default.func.isRequired,
   children: _propTypes2.default.node,
   className: _propTypes2.default.string,
   expandOnClick: _propTypes2.default.bool,
   icon: _propTypes2.default.node,
   showCheckbox: _propTypes2.default.bool,
   title: _propTypes2.default.string,
   onClick: _propTypes2.default.func,
   halfCheckLabelInfo: _propTypes2.default.node,
   nodesInsteadIcons: _propTypes2.default.bool
};
TreeNode.defaultProps = {
   children: null,
   className: null,
   expandOnClick: false,
   icon: null,
   showCheckbox: true,
   title: null,
   onClick: function onClick() {}
};
exports.default = TreeNode;