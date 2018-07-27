import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../../../modal/containers/confirm-modal/ConfirmModal';
import Button from '../../button/Button';

class ConfirmActionButton extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         showModal: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   toggleModal() {
      this.setState({ showModal: !this.state.showModal });
   }

   handleClick() {
      const { checkOpportunityToOpenModal } = this.props;
      if (checkOpportunityToOpenModal !== undefined && !this.state.showModal) {
         checkOpportunityToOpenModal(this.toggleModal);
      } else {
         this.toggleModal();
      }
   }

   render() {
      const {
         id,
         className,
         icon,
         buttonText,
         tooltip,
         confirmHeaderText,
         confirmBodyText,
         onConfirm,
         disabled,
         confirmBtnClass,
         confirmBtnIcon,
         cancelBtnIcon,
         confirmBtnText,
         confirmBtnDisabled,
         cancelBtnText
      } = this.props;

      return (
         <div className="inline">
            <Button
               id={id}
               className={className}
               onClick={this.handleClick}
               icon={icon}
               text={buttonText}
               disabled={disabled}
               tooltip={tooltip}
            />
            {this.state.showModal && (
               <ConfirmModal
                  onClose={this.toggleModal}
                  header={confirmHeaderText || 'Подтверждение'}
                  bodyText={confirmBodyText || 'Вы уверены?'}
                  confirmBtn={{
                     action: onConfirm,
                     className: confirmBtnClass || 'btn btn-danger',
                     text: confirmBtnText || 'Удалить',
                     icon: confirmBtnIcon,
                     disabled: confirmBtnDisabled
                  }}
                  cancelBtn={{
                     text: cancelBtnText || 'Отмена',
                     icon: cancelBtnIcon
                  }}
               />
            )}
         </div>
      );
   }
}

ConfirmActionButton.propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   tooltip: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   confirmBtnDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   icon: PropTypes.string,
   onConfirm: PropTypes.func,
   checkOpportunityToOpenModal: PropTypes.func
};

export default ConfirmActionButton;
