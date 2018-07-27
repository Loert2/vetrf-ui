'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableActions = function (_Component) {
   _inherits(EditableActions, _Component);

   function EditableActions(props, context) {
      _classCallCheck(this, EditableActions);

      var _this = _possibleConstructorReturn(this, (EditableActions.__proto__ || Object.getPrototypeOf(EditableActions)).call(this, props, context));

      _this.state = {
         edit: props.editId === props.id
      };
      _this.toggleEdit = _this.toggleEdit.bind(_this);
      _this.cancel = _this.cancel.bind(_this);
      _this.save = _this.save.bind(_this);
      return _this;
   }

   _createClass(EditableActions, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         if (nextProps.editId !== nextProps.id) {
            this.setState({ edit: false });
         } else {
            this.setState({ edit: true });
         }
      }
   }, {
      key: 'toggleEdit',
      value: function toggleEdit() {
         this.setState({ edit: !this.state.edit });
         this.props.toggleEdit && this.props.toggleEdit(this.props.id);
      }
   }, {
      key: 'cancel',
      value: function cancel() {
         if (this.state.edit) {
            this.setState({ edit: !this.state.edit });
            this.props.cancel && this.props.cancel();
         }
      }
   }, {
      key: 'save',
      value: function save() {
         var save = this.props.save;

         this.state.edit && save && save();
      }
   }, {
      key: 'render',
      value: function render() {
         if (this.state.edit) {
            var nowrap = { whiteSpace: 'nowrap' };
            var marginLeft = { marginLeft: '5px' };
            var btnPadding = { padding: '1px 7px' };
            return _react2.default.createElement(
               'span',
               { style: nowrap },
               _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                     'button',
                     {
                        type: 'button',
                        onClick: this.props.save,
                        className: 'btn btn-primary btn-xs' },
                     _react2.default.createElement('i', { className: 'fa fa-check' })
                  )
               ),
               _react2.default.createElement(
                  'span',
                  { style: marginLeft },
                  _react2.default.createElement(
                     'button',
                     {
                        type: 'button',
                        onClick: this.cancel,
                        className: 'btn btn-default btn-xs',
                        style: btnPadding },
                     _react2.default.createElement('i', { className: 'fa fa-times' })
                  )
               )
            );
         } else {
            return _react2.default.createElement(_Button2.default, {
               tooltip: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C',
               onClick: this.toggleEdit,
               icon: 'fa fa-pencil bigger-130 no-padding-right',
               className: 'blue'
            });
         }
      }
   }]);

   return EditableActions;
}(_react.Component);

EditableActions.propTypes = {
   cancel: _propTypes2.default.func,
   save: _propTypes2.default.func,
   toggleEdit: _propTypes2.default.func,
   id: _propTypes2.default.string,
   editId: _propTypes2.default.string
};

exports.default = EditableActions;