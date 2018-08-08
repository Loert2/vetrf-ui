import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

const withValidate = (WrappedComponent, customValidate) =>
   class extends React.PureComponent {
      constructor(props) {
         super(props);
         this.state = { hasError: false };

         this.validate = this.validate.bind(this);
      }

      static propTypes = {
         showError: PropTypes.bool,
         value: PropTypes.any,
         customValidate: PropTypes.func,
         errorHandler: PropTypes.func,
         errorText: PropTypes.string,
         field: PropTypes.string,
         labelText: PropTypes.string
      };

      componentWillReceiveProps(nextProps) {
         const hasError = this.validate(
            nextProps,
            isFunction(customValidate)
               ? () => customValidate(nextProps)
               : () => nextProps.require && !nextProps.value,
            this.state.hasError
         );
         if (hasError !== this.state.hasError) {
            this.setState({
               hasError: hasError
            });
         }
      }

      validate(props = {}, defaultValidate, oldHasError, defaultErrorText) {
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
            (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
         if (oldHasError !== hasError && errorHandler) {
            errorHandler(hasError, field, labelText, errorText || defaultErrorText);
         }
         return hasError;
      }

      render() {
         return <WrappedComponent {...this.props} hasError={this.state.hasError} />;
      }
   };

export default withValidate;
