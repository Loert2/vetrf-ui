import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import RequireStar from '../../require-star/RequireStar';

const FormGroup = (props) => {
   const {
      hasError,
      errorText,
      errorClassName,
      labelText,
      require,
      help,
      children,
      additionalBlock,
      labelClassName,
      fieldClassName
   } = props;
   return(
      <div className={ classNames("form-group", hasError ? (errorClassName || "has-error") : "" ) }>
         <label className={ labelClassName || "col-sm-3 control-label no-padding-right" }>
            { labelText }
            { require && <RequireStar /> }
         </label>
         <div className={ fieldClassName || "col-sm-9 padding-top-10" }><span className="block input-icon input-icon-right"/>
            { children }
            {
               help &&
               <p className="help-block">{ help }</p>
            }
            { additionalBlock }
            {
               hasError && errorText &&
               <p className="help-block has-error">{ errorText }</p>
            }
         </div>
      </div>
   )
};

FormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.node,
   require: PropTypes.bool,
   hasError: PropTypes.bool,
   errorClassName: PropTypes.string,
   labelClassName: PropTypes.string,
   fieldClassName: PropTypes.string,
   errorText: PropTypes.node,
   children: PropTypes.node,
   additionalBlock: PropTypes.node
};

export default FormGroup;