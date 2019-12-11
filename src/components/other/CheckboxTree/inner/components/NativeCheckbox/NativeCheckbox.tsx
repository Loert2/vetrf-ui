import PropTypes from 'prop-types';
import React from 'react';

// TODO: This is old way. Rewrite it!
class NativeCheckbox extends React.PureComponent<any> {
   static propTypes = {
      indeterminate: PropTypes.bool
   };

   static defaultProps = {
      indeterminate: false
   };

   checkbox: any = {}; // TODO: этого изначально не было, я добавил, чтобы TS не ругался, надо проверять работу

   componentDidMount() {
      this.updateDeterminateProperty();
   }

   componentDidUpdate() {
      this.updateDeterminateProperty();
   }

   updateDeterminateProperty() {
      const { indeterminate }: any = this.props;

      this.checkbox.indeterminate = indeterminate;
   }

   render() {
      const props: any = { ...this.props };

      // Remove property that does not exist in HTML
      delete props.indeterminate;

      return (
         <input
            {...props}
            ref={(c) => {
               this.checkbox = c;
            }}
            type="checkbox"
         />
      );
   }
}

export default NativeCheckbox;
