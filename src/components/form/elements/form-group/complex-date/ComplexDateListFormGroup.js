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
         validate,
         list,
         onChangeDate
      } = this.props;
      return (
         <FormGroup labelText={ labelText } help={ help } additionalBlock={ additionalBlock } >
            <ComplexDateList list={[]}
                             onChangeDate={ onChangeDate } />
         </FormGroup>
      );
   }

}

ComplexDateListFormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   validate: PropTypes.func,
   list: PropTypes.arrayOf(PropTypes.object),
   onChangeDate: PropTypes.func
};

ComplexDateListFormGroup.defaultProps = {};

export default ComplexDateListFormGroup;