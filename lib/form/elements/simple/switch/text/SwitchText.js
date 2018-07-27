'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Компонент универсального переключателя, для передачи текста в переключатель использовать строку с \u00A0 (неразрывный пробел)
 * между словами - количество зависит от длины слов, длина переключателя ограничена 90px
 * todo: Будет переделано, когда будем избавляться от JQuery
 * */
var SwitchText = function SwitchText(props) {
   return _react2.default.createElement(_Switch2.default, {
      id: props.id,
      name: props.name,
      value: props.value,
      style: props.style,
      disabled: props.disabled,
      onChange: props.onChange,
      className: props.className || 'ace ace-switch ace-switch-view btn-empty',
      text: props.text || '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u0422\u0430\u0431\u043B\u0438\u0446\u0430'
   });
};

SwitchText.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   text: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = SwitchText;