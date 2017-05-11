import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Modal from './elements/Modal';
import HeaderModal from './elements/HeaderModal';
import BodyModal from './elements/BodyModal';
import ConfirmFooterModal from './elements/ConfirmFooterModal';

class ConfirmModal extends Component {
   constructor(props, context) {
      super(props, context);
      this.hide = this.hide.bind(this);
      this.state = { show: true };
   }

   hide() {
      this.setState({ show: false });
   }

   render () {
      const {
         header,
         onClose,
         confirmBtn,
         cancelBtn,
         bodyText
      } = this.props;

      return (
         <Modal style={{ display: this.state.show ? "block" : "none"}} >
            <HeaderModal title={ header }
                         onClose={ () => { this.hide(); onClose && onClose(); } } />
            <BodyModal>
               <p style={{ whiteSpace: "normal" }} >{ bodyText }</p>
            </BodyModal>
            <ConfirmFooterModal confirmBtn={ confirmBtn }
                                cancelBtn={{
                                   action: () => { this.hide(); onClose && onClose(); },
                                   text: cancelBtn && cancelBtn.cancelText,
                                   icon: cancelBtn && cancelBtn.cancelIcon
                                }} />
         </Modal>
      )
   }
}

ConfirmFooterModal.propTypes = {
   header: PropTypes.string,
   bodyText: PropTypes.string,
   onClose: PropTypes.func,
   confirmBtn: PropTypes.shape({
      disabled: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ]),
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