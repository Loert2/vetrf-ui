import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Modal from '../../elements/modal/Modal';
import HeaderModal from '../../elements/header/HeaderModal';
import BodyModal from '../../elements/body/BodyModal';
import CustomFooterModal from '../../elements/custom-footer/CustomFooterModal';
import ConfirmFooterModal from '../../elements/confirm-footer/ConfirmFooterModal';

class ModalDialog extends Component {
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
         headerClass,
         header,
         onClose,
         footerClass,
         footer,
         bodyStyle,
         confirmBtn,
         cancelBtn,
         width,
         children
      } = this.props;

      return (
         <Modal style={{ display: this.state.show ? "block" : "none"}} width={ width } >
            <HeaderModal className={ headerClass }
                         title={ header }
                         onClose={ () => { this.hide(); onClose && onClose(); } } />
            <BodyModal style={ bodyStyle } >
               { children }
            </BodyModal>
            {
               footer ?
                  <CustomFooterModal className={ footerClass } >
                     { footer }
                  </CustomFooterModal>
                  :
                  <ConfirmFooterModal confirmBtn={ confirmBtn }
                                      cancelBtn={{
                                         action: () => { this.hide(); onClose && onClose(); },
                                         text: cancelBtn && cancelBtn.text,
                                         icon: cancelBtn && cancelBtn.icon
                                      }}
                                      className={ footerClass } />
            }
         </Modal>
      )
   }
}

ModalDialog.propTypes = {
   header: PropTypes.string,
   headerClass: PropTypes.string,
   footerClass: PropTypes.string,
   width: PropTypes.string,
   footer: PropTypes.node,
   bodyStyle: PropTypes.object,
   children: PropTypes.node,
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

export default ModalDialog;