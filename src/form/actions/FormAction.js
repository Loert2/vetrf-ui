import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../buttons/button/Button';

const FormAction = ({ confirmBtn, resetBtn }) => (
   <div className="clearfix form-actions no-margin-bottom col-xs-12">
      <div className="col-md-offset-5 col-md-7">
         <Button text={ confirmBtn.text }
                 className={ confirmBtn.className || "btn btn-info" }
                 icon={ confirmBtn.icon || "ace-icon fa fa-check bigger-110" }
                 disabled={ confirmBtn.disabled }
                 onClick={ confirmBtn.action } />
         &nbsp;&nbsp;&nbsp;
         <Button onClick={ resetBtn.action }
                 icon={  resetBtn.icon || "ace-icon fa fa-undo bigger-110" }
                 className={ resetBtn.className || "btn" }
                 text={ resetBtn.text }
                 href={ resetBtn.href } />
      </div>
   </div>
);

FormAction.propTypes = {
   confirmBtn: PropTypes.shape({
      className: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ]),
      text: PropTypes.string,
      action: PropTypes.func
   }),
   resetBtn: PropTypes.shape({
      href: PropTypes.string,
      className: PropTypes.string,
      icon: PropTypes.string,
      text: PropTypes.string,
      action: PropTypes.func
   })
};

FormAction.defaultProps = { confirmBtn: {}, resetBtn: {} };

export default FormAction;

