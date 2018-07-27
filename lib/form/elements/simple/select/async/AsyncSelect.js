'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Компонент-обертка над Select из react-select: https://github.com/JedWatson/react-select
 * */
exports.default = function (props) {
   return _react2.default.createElement(_reactSelect2.default.Async, _extends({}, props, {
      id: props.id,
      multi: props.multi,
      valueKey: props.valueKey || 'id',
      labelKey: props.labelKey || 'name',
      value: props.value,
      ignoreCase: props.ignoreCase || true,
      searchPromptText: props.searchPromptText || 'Для начала поиска введите ещё 2 символа',
      loadingPlaceholder: props.loadingPlaceholder || 'Загрузка...',
      loadOptions: props.loadOptions,
      cache: props.cache || false
   }));
};