"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
var FLOAT_REGEXP_1 = /^\$?\d+.(\d{3})*(,\d*)$/; //Numbers like: 1.123,56
var FLOAT_REGEXP_2 = /^\$?\d+,(\d{3})*(\.\d*)$/; //Numbers like: 1,123.56
var FLOAT_REGEXP_3 = /^\$?\d+(\.\d*)?$/; //Numbers like: 1123.56
var FLOAT_REGEXP_4 = /^\$?\d+(,\d*)?$/; //Numbers like: 1123,56

var NUMBER_REGEXP = /[^0-9]/g;

var onlyFloatFilter = exports.onlyFloatFilter = function onlyFloatFilter(value) {
   var oldValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

   if (!value) {
      return "";
   }
   if (FLOAT_REGEXP_1.test(value)) {
      return value.replace('.', '').replace(',', '.');
   } else if (FLOAT_REGEXP_2.test(value)) {
      return value.replace(',', '');
   } else if (FLOAT_REGEXP_3.test(value)) {
      return value;
   } else if (FLOAT_REGEXP_4.test(value)) {
      return value.replace(',', '.');
   }
   return oldValid;
};

var onlyNumbersFilter = exports.onlyNumbersFilter = function onlyNumbersFilter(value) {
   var oldValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
   return value ? value.replace(NUMBER_REGEXP, '') : oldValid;
};