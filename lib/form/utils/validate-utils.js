"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var defaultValidate = arguments[1];
   var showError = props.showError,
       value = props.value,
       customValidate = props.customValidate,
       errorHandler = props.errorHandler,
       field = props.field,
       labelText = props.labelText,
       errorText = props.errorText;

   var hasError = showError && (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
   if (errorHandler) {
      errorHandler(hasError, field, labelText, errorText);
   }
   return hasError;
};