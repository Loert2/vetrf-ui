import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../buttons/Button/Button';
import FormActionsPanel from '../FormActionsPanel/FormActionsPanel';

// TODO: This is old way. Rewrite it!
const FormAction = ({ confirmBtn, resetBtn }) => (
   <FormActionsPanel>
      <Button
         text={confirmBtn.text}
         className={confirmBtn.className || 'btn btn-info'}
         icon={confirmBtn.icon || 'ace-icon fa fa-check bigger-110'}
         disabled={confirmBtn.disabled}
         onClick={confirmBtn.action}
      />
      &nbsp;&nbsp;&nbsp;
      <Button
         onClick={resetBtn.action}
         icon={resetBtn.icon || 'ace-icon fa fa-undo bigger-110'}
         className={resetBtn.className || 'btn'}
         text={resetBtn.text}
         // href={resetBtn.href} // TODO: Переписать с поддрежкой новых кнопок
      />
   </FormActionsPanel>
);

FormAction.propTypes = {
   confirmBtn: PropTypes.shape({
      className: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      text: PropTypes.string,
      action: PropTypes.func
   }),
   resetBtn: PropTypes.shape({
      // href: PropTypes.string, // TODO: Переписать с поддрежкой новых кнопок
      className: PropTypes.string,
      icon: PropTypes.string,
      text: PropTypes.string,
      action: PropTypes.func
   })
};

FormAction.defaultProps = { confirmBtn: {}, resetBtn: {} };

export default FormAction;
