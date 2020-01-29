import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../../../containers/FormGroup/FormGroup';
import ComplexDateList from '../../../base/date/ComplexDateList/ComplexDateList';
import validate from '../../../../utils/validate-utils';
import isEmpty from 'lodash/isEmpty';

const defaultValidate = (props: any = {}) => {
   const isEmptyList =
      isEmpty(props.value) ||
      isEmpty(
         props.value.filter(
            (it) =>
               it.singleDateTime ||
               (it.dateInterval && (it.dateInterval.startDateTime || it.dateInterval.endDateTime))
         )
      );
   return props.require && isEmptyList;
};

const getHasError = (props, count, oldHasError) => {
   return validate(props, () => count > 0 || defaultValidate(props), oldHasError);
};

// TODO: This is old way. Rewrite it!
// @Deprecated
class ComplexDateListFormGroup extends Component<any> {
   state = {
      hasError: false,
      invalidityCount: 0
   };

   constructor(props) {
      super(props);

      this.handleChangeValidity = this.handleChangeValidity.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      const { hasError: oldHasError, invalidityCount } = this.state;

      const hasError = getHasError(nextProps, invalidityCount, oldHasError);
      if (hasError !== oldHasError) {
         this.setState({
            ...this.state,
            hasError: hasError
         });
      }
   }

   handleChangeValidity(isDecrement) {
      this.setState((oldState: any) => {
         const { hasError: oldHasError, invalidityCount } = oldState;

         const newCount = isDecrement ? invalidityCount - 1 : invalidityCount + 1;
         const hasError = getHasError(this.props, newCount, oldHasError);

         return {
            hasError: hasError,
            invalidityCount: newCount
         };
      });
   }

   render() {
      const {
         labelText,
         help,
         additionalBlock,
         value = [],
         onChangeDate,
         formatList,
         require,
         errorText,
         field,
         maxListLength,
         fieldClassName,
         labelClassName
      } = this.props;

      const { hasError, invalidityCount } = this.state;

      const showError = invalidityCount === 0;

      const errorMassage = showError && (errorText || 'Данная форма обязательна для заполнения');

      return (
         <FormGroup
            labelText={labelText}
            help={help}
            additionalBlock={additionalBlock}
            require={require}
            hasError={showError && hasError}
            errorText={errorMassage}
            fieldClassName={fieldClassName}
            labelClassName={labelClassName}>
            <ComplexDateList
               list={value}
               onChangeDate={onChangeDate}
               formatList={formatList}
               listPath={field}
               maxListLength={maxListLength}
               handleChangeValidity={this.handleChangeValidity}
            />
         </FormGroup>
      );
   }
}

(ComplexDateListFormGroup as any).propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   field: PropTypes.string,
   fieldClassName: PropTypes.string,
   labelClassName: PropTypes.string,
   value: PropTypes.arrayOf(PropTypes.object),
   formatList: PropTypes.arrayOf(PropTypes.object),
   require: PropTypes.bool,
   errorText: PropTypes.string,
   maxListLength: PropTypes.number,
   errorHandler: PropTypes.func,
   onChangeDate: PropTypes.func
};

(ComplexDateListFormGroup as any).defaultProps = {};

export default ComplexDateListFormGroup;
