import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from "../index";
import {ComplexDateList} from "../../index";
import validate from "../../../utils/validate-utils";
import isEmpty from 'lodash/isEmpty';

class ComplexDateListFormGroup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
      this.defaultValidate = this.defaultValidate.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => this.defaultValidate(nextProps), this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError
         });
      }
   }

   defaultValidate(props = {}) {
      const isEmptyList = isEmpty(props.list) ||
         isEmpty(
            props.list.filter(
               it => !it[props.singleDateField] || (!it[props.beginDateField] && !it[props.endDateField])
            )
         );
      return props.require && isEmptyList;
   }

   render() {
      const {
         labelText,
         help,
         additionalBlock,
         list = [],
         onChangeDate,
         beginDateField,
         endDateField,
         singleDateField,
         formatField,
         formatList,
         require,
         errorText,
         listPath
      } = this.props;

      return (
         <FormGroup labelText={ labelText }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    require={ require }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <ComplexDateList list={ list }
                             onChangeDate={ onChangeDate }
                             beginDateField={ beginDateField }
                             endDateField={ endDateField }
                             singleDateField={ singleDateField }
                             formatField={ formatField }
                             formatList={ formatList }
                             listPath={ listPath } />
         </FormGroup>
      );
   }

}

ComplexDateListFormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   validate: PropTypes.func,
   beginDateField: PropTypes.string,
   endDateField: PropTypes.string,
   singleDateField: PropTypes.string,
   formatField: PropTypes.string,
   listPath: PropTypes.string,
   list: PropTypes.arrayOf(PropTypes.object),
   formatList: PropTypes.arrayOf(PropTypes.object),
   require: PropTypes.bool,
   errorText: PropTypes.string,
   onChangeDate: PropTypes.func
};

ComplexDateListFormGroup.defaultProps = {};

export default ComplexDateListFormGroup;