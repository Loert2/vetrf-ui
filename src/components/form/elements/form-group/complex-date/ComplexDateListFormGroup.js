import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from "../index";
import {ComplexDateList} from "../../index";

class ComplexDateListFormGroup extends Component {

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
         listField
      } = this.props;
      return (
         <FormGroup labelText={ labelText } help={ help } additionalBlock={ additionalBlock } >
            <ComplexDateList list={ list }
                             onChangeDate={ onChangeDate }
                             beginDateField={ beginDateField }
                             endDateField={ endDateField }
                             singleDateField={ singleDateField }
                             formatField={ formatField }
                             formatList={ formatList }
                             listField={ listField } />
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
   listField: PropTypes.string,
   list: PropTypes.arrayOf(PropTypes.object),
   formatList: PropTypes.arrayOf(PropTypes.object),
   onChangeDate: PropTypes.func
};

ComplexDateListFormGroup.defaultProps = {};

export default ComplexDateListFormGroup;