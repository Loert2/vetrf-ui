import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Modal from '../inner/Modal/Modal';
import HeaderModal from '../inner/HeaderModal/HeaderModal';
import BodyModal from '../inner/BodyModal/BodyModal';
import ConfirmFooterModal from '../inner/ConfirmFooterModal/ConfirmFooterModal';

// TODO: This is old way. Rewrite it!
class ConfirmModal extends Component {
   state = {
      show: true
   };

   constructor(props, context) {
      super(props, context);
      this.hide = this.hide.bind(this);
   }

   hide() {
      this.setState({ show: false });
   }

   render() {
      const { header, body, confirmBtn, onClose, cancelBtn, bodyText }: any = this.props;

      return (
         <Modal isVisible={this.state.show}>
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

(ConfirmModal as any).propTypes = {
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

export default ConfirmModal as any;
