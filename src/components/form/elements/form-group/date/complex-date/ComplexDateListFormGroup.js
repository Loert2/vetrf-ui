import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from "../../index";
import {ComplexDateList} from "../../../index";
import validate from "../../../../utils/validate-utils";
import isEmpty from 'lodash/isEmpty';

const defaultValidate = (props = {}) => {
   const isEmptyList = isEmpty(props.value) ||
      isEmpty(
         props.value.filter(
            it => it.singleDateTime || (it.dateInterval && (it.dateInterval.startDateTime || it.dateInterval.endDateTime))
         )
      );
   return props.require && isEmptyList;
};

const getHasError = (props, count, oldHasError) => {
   return validate(props, () => count > 0 || defaultValidate(props), oldHasError);
};

class ComplexDateListFormGroup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
         invalidityCount: 0
      };

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
      this.setState(oldState => {
         const { hasError: oldHasError, invalidityCount } = oldState;

         const newCount = isDecrement ? invalidityCount - 1 : invalidityCount + 1;
         const hasError = getHasError(this.props, newCount, oldHasError);

         return ({
            hasError: hasError,
            invalidityCount:newCount
         })
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
         maxListLength
      } = this.props;

      const { hasError, invalidityCount } = this.state;

      const showError = invalidityCount === 0;

      const errorMassage = showError &&
         (errorText || "Данная форма обязательна для заполнения");

      return (
         <FormGroup labelText={ labelText }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    require={ require }
                    hasError={ showError && hasError }
                    errorText={ errorMassage } >
            <ComplexDateList list={ value }
                             onChangeDate={ onChangeDate }
                             formatList={ formatList }
                             listPath={ field }
                             maxListLength={ maxListLength }
                             handleChangeValidity={ this.handleChangeValidity } />
         </FormGroup>
      );
   }

}

ComplexDateListFormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   field: PropTypes.string,
   value: PropTypes.arrayOf(PropTypes.object),
   formatList: PropTypes.arrayOf(PropTypes.object),
   require: PropTypes.bool,
   errorText: PropTypes.string,
   maxListLength: PropTypes.number,
   errorHandler: PropTypes.func,
   onChangeDate: PropTypes.func
};

ComplexDateListFormGroup.defaultProps = {};

export default ComplexDateListFormGroup;