'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.getFormattedComplexDateView = exports.defaultDate = exports.defaultStoreFormat = exports.defaultFormat = exports.formatValue = undefined;

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _moment = require('moment/moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatValue = exports.formatValue = function formatValue(value) {
   var oldFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

   var formattedValue = (0, _moment2.default)(value, oldFormat.view, true).format(format.view);
   var isValid = (0, _moment2.default)(formattedValue, format.view, true).isValid();
   if (!isValid || (0, _isEmpty2.default)(value)) {
      return value;
   }
   return formattedValue;
};

var defaultFormat = exports.defaultFormat = {
   id: '1f8833ef-0893-4716-be79-69aeaff2fd28',
   dateFormat: 'DD.MM.YYYY',
   timeFormat: null,
   view: 'DD.MM.YYYY'
};

var defaultStoreFormat = exports.defaultStoreFormat = {
   id: 'b6ff39df-637f-44c2-8524-de85d4de8677',
   dateFormat: 'DD.MM.YYYY',
   timeFormat: 'HH:mm',
   view: 'DD.MM.YYYY HH:mm'
};

var defaultDate = exports.defaultDate = '...';

var getFormattedComplexDateView = exports.getFormattedComplexDateView = function getFormattedComplexDateView() {
   var complexDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var _complexDate$dateInte = complexDate.dateInterval;
   _complexDate$dateInte = _complexDate$dateInte === undefined ? {} : _complexDate$dateInte;
   var startDateTime = _complexDate$dateInte.startDateTime,
       endDateTime = _complexDate$dateInte.endDateTime,
       _complexDate$format = complexDate.format,
       format = _complexDate$format === undefined ? defaultFormat : _complexDate$format,
       singleDateTime = complexDate.singleDateTime;

   if (startDateTime || endDateTime) {
      return (formatValue(startDateTime, defaultStoreFormat, format) || defaultDate) + '-' + (formatValue(endDateTime, defaultStoreFormat, format) || defaultDate);
   } else if (singleDateTime) {
      return formatValue(singleDateTime, defaultStoreFormat, format);
   }
   return '';
};