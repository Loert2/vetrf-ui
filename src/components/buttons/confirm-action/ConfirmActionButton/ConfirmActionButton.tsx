import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../../../modal/ConfirmModal/ConfirmModal';
import { Button } from '../../Button/Button';

// TODO: This is old way. Rewrite it!
class ConfirmActionButton extends Component<any> {
   state = {
      showModal: false
   };

   constructor(props, context) {
      super(props, context);

      this.toggleModal = this.toggleModal.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   toggleModal() {
      this.setState({ showModal: !this.state.showModal });
   }

   handleClick() {
      const { checkOpportunityToOpenModal }: any = this.props;
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
         // tooltip, // TODO: Вернуть в процессе переписывания и появления новых компонентов кнопок
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
               // tooltip={tooltip} // TODO: Вернуть в процессе переписывания и появления новых компонентов кнопок
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

(ConfirmActionButton as any).propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   // tooltip: PropTypes.string, // TODO: Вернуть в процессе переписывания и появления новых компонентов кнопок
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.node,
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