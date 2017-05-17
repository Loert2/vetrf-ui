export default (props = {}, defaultValidate, oldHasError) => {
   const {
      showError,
      value,
      customValidate,
      errorHandler,
      field,
      labelText,
      errorText
   } = props;
   const hasError = showError && (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
   if (errorHandler && (oldHasError !== hasError)) {
      errorHandler(hasError, field, labelText, errorText);
   }
   return hasError;
}