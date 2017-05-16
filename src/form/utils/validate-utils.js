export default (props = {}) => {
   const {
      showError,
      value,
      defaultValidate,
      customValidate,
      errorHandler,
      field,
      labelText,
      errorText
   } = props;
   const hasError = showError && (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
   if (errorHandler) {
      errorHandler(hasError, field, labelText, errorText);
   }
   return hasError;
}