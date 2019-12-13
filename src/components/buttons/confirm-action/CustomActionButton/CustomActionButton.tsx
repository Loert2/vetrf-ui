import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../../../modal/ConfirmModal/ConfirmModal';
import Button from '../../Button/Button';

// TODO: This is old way. Rewrite it!
class CustomActionButton extends Component {
   state = {
      showModal: false
   };

   constructor(props: any, context: any) {
      super(props, context);
      this.toggleModal = this.toggleModal.bind(this);
   }

   toggleModal() {
      this.setState({ showModal: !this.state.showModal });
   }

   render() {
      const {
         id,
         className,
         icon,
         iconSize,
         iconColor,
         buttonText,
         buttonColor,
         buttonSize,
         isOnlyIconButton,
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
      }: any = this.props;

      return (
         <div className="inline">
            <Button
               id={id}
               className={className}
               onClick={this.toggleModal}
               color={buttonColor}
               size={buttonSize}
               icon={icon}
               iconSize={iconSize}
               iconColor={iconColor}
               text={buttonText}
               disabled={disabled}
               tooltip={tooltip}
               onlyIcon={isOnlyIconButton}
            />
            {this.state.showModal && (
               <ConfirmModal
                  onClose={this.toggleModal}
                  header={confirmHeaderText || 'Подтверждение'}
                  bodyText={confirmBodyText || 'Вы уверены?'}
                  body={body}
                  confirmBtn={{
                     action: onConfirm,
                     disabled: disabledConfirmBtn,
                     className: confirmBtnClass || 'btn btn-danger', // TODO: Переписать с учётом нового ком-та Button
                     text: confirmBtnText || 'Удалить',
                     icon: confirmBtnIcon
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

(CustomActionButton as any).propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   buttonColor: PropTypes.string,
   buttonSize: PropTypes.string,
   isOnlyIconButton: PropTypes.bool,
   icon: PropTypes.string,
   iconColor: PropTypes.string,
   iconSize: PropTypes.number,
   body: PropTypes.node,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   tooltip: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   disabledConfirmBtn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   onConfirm: PropTypes.func
};

export default CustomActionButton as any;
