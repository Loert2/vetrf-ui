import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../buttons/Button/Button';
import FormActionsPanel from '../FormActionsPanel/FormActionsPanel';

// TODO: This is old way. Rewrite it!
const FormAction = ({ confirmBtn, resetBtn }) => (
   <FormActionsPanel>
      <Button
         text={confirmBtn.text}
         color={confirmBtn.color || 'info'}
         size={confirmBtn.size}
         className={confirmBtn.className}
         icon={confirmBtn.icon || 'check'}
         disabled={confirmBtn.disabled}
         onClick={confirmBtn.action}
      />
      &nbsp;&nbsp;&nbsp;
      <Button
         onClick={resetBtn.action}
         icon={resetBtn.icon || 'undo'}
         className={resetBtn.className}
         color={resetBtn.color}
         size={resetBtn.size}
         text={resetBtn.text}
         href={resetBtn.href}
      />
   </FormActionsPanel>
);

FormAction.propTypes = {
   confirmBtn: PropTypes.shape({
      className: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      text: PropTypes.string,
      action: PropTypes.func
   }),
   resetBtn: PropTypes.shape({
      href: PropTypes.string,
      className: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      icon: PropTypes.string,
      text: PropTypes.string,
      action: PropTypes.func
   })
};

FormAction.defaultProps = { confirmBtn: {}, resetBtn: {} };

export default FormAction;
