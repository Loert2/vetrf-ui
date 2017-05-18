"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var defaultValidate = arguments[1];
   var oldHasError = arguments[2];
   var showError = props.showError,
       value = props.value,
       customValidate = props.customValidate,
       errorHandler = props.errorHandler,
       field = props.field,
       labelText = props.labelText,
       errorText = props.errorText;

   var hasError = showError && (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
   if (oldHasError !== hasError) {
      errorHandler && errorHandler(hasError, field, labelText, errorText);
   }
   return hasError;
};

var DATE_LENGTH = 10;
var isValidDate = exports.isValidDate = function isValidDate(value) {
   if (!value || value.length !== DATE_LENGTH) {
      return false;
   }
   return value.match(/(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20)\d\d/i);
};