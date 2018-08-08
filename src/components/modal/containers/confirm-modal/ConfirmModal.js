import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Modal from '../../elements/modal/Modal';
import HeaderModal from '../../elements/header/HeaderModal';
import BodyModal from '../../elements/body/BodyModal';
import ConfirmFooterModal from '../../elements/confirm-footer/ConfirmFooterModal';

class ConfirmModal extends Component {
   constructor(props, context) {
      super(props, context);
      this.hide = this.hide.bind(this);
      this.state = {
         show: true
      };
   }

   hide() {
      this.setState({ show: false });
   }

   render() {
      const { header, body, confirmBtn, onClose, cancelBtn, bodyText } = this.props;

      return (
         <Modal style={{ display: this.state.show ? 'block' : 'none' }}>
            <HeaderModal
               title={header}
               onClose={() => {
                  this.hide();
                  onClose && onClose();
               }}
            />
            <BodyModal>
               <p style={{ whiteSpace: 'normal' }}>{bodyText}</p>
               {body}
            </BodyModal>
            <ConfirmFooterModal
               confirmBtn={confirmBtn}
               cancelBtn={{
                  action: () => {
                     this.hide();
                     onClose && onClose();
                  },
                  text: cancelBtn && cancelBtn.text,
                  icon: cancelBtn && cancelBtn.icon
               }}
            />
         </Modal>
      );
   }
}

ConfirmFooterModal.propTypes = {
   header: PropTypes.string,
   bodyText: PropTypes.string,
   body: PropTypes.node,
   onClose: PropTypes.func,
   confirmBtn: PropTypes.shape({
      disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      action: PropTypes.func,
      className: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string
   }),
   cancelBtn: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string
   })
};

export default ConfirmModal;
