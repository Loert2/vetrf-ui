export default (props = {}, defaultValidate, oldHasError, defaultErrorText) => {
   const {
      showError,
      value,
      customValidate,
      errorHandler,
      field,
      labelText,
      errorText
   } = props;
   const hasError =
      showError &&
      (customValidate
         ? customValidate(value)
         : defaultValidate && defaultValidate(value));
   if (oldHasError !== hasError && errorHandler) {
      errorHandler(hasError, field, labelText, errorText || defaultErrorText);
   }
   return hasError;
};

const DATE_LENGTH = 10;
export const isValidDate = (value) => {
   if (!value || value.length !== DATE_LENGTH) {
      return false;
   }
   return value.match(
      /(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20)\d\d/i
   );
};
