import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../../modal/containers/ConfirmModal';
import Button from '../button/Button';

class PromptConfirmActionButton extends Component {
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
         bodyObject,
         confirmHeaderText,
         confirmBodyText,
         onConfirm,
         disabledConfirmBtnWithOutComment,
         confirmBtnClass,
         confirmBtnIcon,
         cancelBtnIcon,
         confirmBtnText,
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
                             bodyObject={ bodyObject }
                             confirmBtn={{
                                action: onConfirm,
                                className: confirmBtnClass || "btn btn-danger",
                                disabled: disabledConfirmBtnWithOutComment,
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

PromptConfirmActionButton.propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   bodyObject: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   tooltip: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   confirmBtnDisabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   icon: PropTypes.string,
   onConfirm: PropTypes.func
};

export default PromptConfirmActionButton;