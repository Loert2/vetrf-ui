'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleSelect = require('../../../../form/elements/simple/select/simple/SimpleSelect');

var _SimpleSelect2 = _interopRequireDefault(_SimpleSelect);

var _index = require('../../constants/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizePerPage = function SizePerPage(_ref) {
   var sizePerPage = _ref.sizePerPage,
       options = _ref.options,
       _onChange = _ref.onChange;
   return _react2.default.createElement(_SimpleSelect2.default, { className: 'clear-both dropdown-width',
      notClearableOptions: true,
      onChange: function onChange(value) {
         return _onChange && _onChange(value);
      },
      value: { id: sizePerPage || _index2.default.SIZE_PER_PAGE, name: sizePerPage || _index2.default.SIZE_PER_PAGE },
      options: options || _index2.default.SIZE_PER_PAGE_LIST });
};

SizePerPage.propTypes = {
   sizePerPage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
   options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      name: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
   })),
   onChange: _propTypes2.default.func
};

exports.default = SizePerPage;