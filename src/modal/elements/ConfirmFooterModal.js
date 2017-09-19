import PropTypes from 'prop-types';
import React from 'react';

import CustomFooterModal from './CustomFooterModal';
import Button from '../../buttons/button/Button';

const ConfirmFooterModal = ({ className, confirmBtn, cancelBtn  }) => (
   <CustomFooterModal className={ className } >
      {
         confirmBtn && confirmBtn.action &&
         <Button disabled={ confirmBtn.disabled }
                 onClick={ confirmBtn.action }
                 className={ confirmBtn.className || "btn btn-success" }
                 icon={ confirmBtn.icon }
                 text={ confirmBtn.text || "Добавить" } />
      }
      <Button onClick={ cancelBtn.action }
              href={ cancelBtn.href }
              className="btn btn-default"
              icon={ cancelBtn.icon }
              text={ cancelBtn.text || "Отмена" } />
   </CustomFooterModal>
);


ConfirmFooterModal.propTypes = {
   className: PropTypes.string,
   confirmBtn: PropTypes.shape({
      disabled: PropTypes.string,
      action: PropTypes.func,
      className: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string
   }),
   cancelBtn: PropTypes.shape({
      action: PropTypes.func,
      text: PropTypes.string,
      icon: PropTypes.string
   })
};

ConfirmFooterModal.defaultProps = { confirmBtn: {}, cancelBtn: {} };

export default ConfirmFooterModal;
