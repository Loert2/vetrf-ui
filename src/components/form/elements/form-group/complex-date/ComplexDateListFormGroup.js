import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from "../index";
import {ComplexDateList} from "../../index";
import validate from "../../../utils/validate-utils";
import isEmpty from 'lodash/isEmpty';

const defaultValidate = (props = {}) => {
   const isEmptyList = isEmpty(props.list) ||
      isEmpty(
         props.list.filter(
            it => !it.singleDateTime || !it.dateInterval || (!it.dateInterval.startDateTime && !it.dateInterval.endDateTime)
         )
      );
   return props.require && isEmptyList;
};

class ComplexDateListFormGroup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => defaultValidate(nextProps), this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError
         });
      }
   }

   render() {
      const {
         labelText,
         help,
         additionalBlock,
         list = [],
         onChangeDate,
         formatList,
         require,
         errorText,
         listPath,
         maxListLength
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
                             formatList={ formatList }
                             listPath={ listPath }
                             maxListLength={ maxListLength } />
         </FormGroup>
      );
   }

}

ComplexDateListFormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   listPath: PropTypes.string,
   list: PropTypes.arrayOf(PropTypes.object),
   formatList: PropTypes.arrayOf(PropTypes.object),
   require: PropTypes.bool,
   errorText: PropTypes.string,
   maxListLength: PropTypes.number,
   onChangeDate: PropTypes.func
};

ComplexDateListFormGroup.defaultProps = {};

export default ComplexDateListFormGroup;