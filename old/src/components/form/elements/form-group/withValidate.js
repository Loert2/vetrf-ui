import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import validate from '../../utils/validate-utils';

const withValidate = (WrappedComponent, defaultValidate) =>
   class extends React.PureComponent {
      constructor(props) {
         super(props);
         this.state = { hasError: false };

         this.validateRequire = this.validateRequire.bind(this);
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

      validateRequire(value) {
         const { require } = this.props;
         return require && !value;
      }

      componentWillReceiveProps(nextProps) {
         const hasError = validate(
            nextProps,
            isFunction(defaultValidate)
               ? (value) => defaultValidate({ ...nextProps, value })
               : this.validateRequire,
            this.state.hasError
         );
         if (hasError !== this.state.hasError) {
            this.setState({
               hasError: hasError
            });
         }
      }

      render() {
         return <WrappedComponent {...this.props} hasError={this.state.hasError} />;
      }
   };

export default withValidate;
