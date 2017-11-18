import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../../../modal/containers/confirm-modal/ConfirmModal';
import Button from '../../button/Button';

class CustomActionButton extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         showModal: false
      };
      this.toggleModal = this.toggleModal.bind(this);
   }

   toggleModal () {
      this.setState({ showModal: !this.state.showModal });
   };

   render () {
      const {
         id,
         className,
         icon,
         buttonText,
         tooltip,
         disabled,
         body,
         onConfirm,
         confirmBtnText,
         confirmHeaderText,
         confirmBodyText,
         confirmBtnClass,
         confirmBtnIcon,
         disabledConfirmBtn,
         cancelBtnIcon,
         cancelBtnText
      } = this.props;

      return (
         <div className="inline" >
            <Button id={ id }
                    className={ className }
                    onClick={ this.toggleModal }
                    icon={ icon }
                    text={ buttonText }
                    disabled={ disabled }
                    tooltip={ tooltip } />
            {
               this.state.showModal &&
               <ConfirmModal onClose={ this.toggleModal }
                             header={ confirmHeaderText || "Подтверждение" }
                             bodyText={ confirmBodyText || "Вы уверены?" }
                             body={ body }
                             confirmBtn={{
                                action: onConfirm,
                                disabled: disabledConfirmBtn,
                                className: confirmBtnClass || "btn btn-danger",
                                text: confirmBtnText || "Удалить",
                                icon: confirmBtnIcon
                             }}
                             cancelBtn={{
                                text: cancelBtnText || "Отмена",
                                icon: cancelBtnIcon
                             }} />
            }
         </div>
      )
   }
}

CustomActionButton.propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   icon: PropTypes.string,
   body: PropTypes.node,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   tooltip: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   disabledConfirmBtn: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   onConfirm: PropTypes.func
};

export default CustomActionButton;