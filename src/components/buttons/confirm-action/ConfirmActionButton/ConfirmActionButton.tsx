import React, { ReactNode } from 'react';

import Button from '../../Button/Button';
import ModalDialog from '../../../modal/ModalDialog/ModalDialog';
import useToggle from '../../../../utils/hooks/useToggle';
import { ColorButton } from '../../../../utils/type/ColorButton';
import { SizeButton } from '../../../../utils/type/SizeButton';
import { Color as ColorIcon } from '../../../../utils/type/Color';
import { Size as SizeIcon } from '../../../../utils/type/Size';

export interface ConfirmActionButtonProps {
   /** Текст кнопки (игнорируется при onlyIcon === true) */
   buttonText?: string;
   /** Стиль кнопки */
   className?: string;
   /** Цвет кнопки (игнорируется при onlyIcon === true) */
   buttonColor?: ColorButton;
   /** Размер кнопки (игнорируется при onlyIcon === true) */
   buttonSize?: SizeButton;
   /** Подсказка для кнопки */
   tooltip?: string;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
    Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   iconColor?: ColorIcon;
   /** Размер иконки */
   iconSize?: SizeIcon;
   /** Действие при нажатии на кнопку */
   onClick?: () => void;
   /** Отображать только иконку */
   isOnlyIconButton?: boolean;
   /** Блокировка кнопки */
   disabled?: boolean;
   /** Заголовок модального окна */
   confirmHeaderText?: string;
   /** Контент модального окна */
   confirmBodyContent?: ReactNode;
   /** Действие при нажатии на кнопку подтверждения */
   onConfirm?: () => void;
   /** Цвет кнопки подтверждения */
   confirmBtnColor?: ColorButton;
   /** Размер кнопки подтверждения */
   confirmBtnSize?: SizeButton;
   /** Текст подтверждения */
   confirmBtnText?: string;
   /** Иконка кнопки подтверждения. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
    Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   confirmBtnIcon?: string;
   /** Блокировка кнопки подтверждения */
   confirmBtnDisabled?: boolean;
   /** Размер кнопки отмены */
   cancelBtnSize?: SizeButton;
   /** Текст кнопки отмены. Значение по умолчанию "Отмена".
    * Это значение присваевается в компоненте ConfirmFooterModal */
   cancelBtnText?: string;
   /** Иконка кнопки отмены */
   cancelBtnIcon?: string;
   /** Функция для проверки возможности открытия модального окна */
   checkOpportunityToOpenModal?: (toggleModal: () => void) => void;
}

export const ConfirmActionButton = ({
   className,
   buttonColor,
   buttonSize,
   isOnlyIconButton,
   icon,
   iconSize,
   iconColor,
   buttonText,
   tooltip,
   confirmHeaderText = 'Подтверждение',
   confirmBodyContent = 'Вы уверены?',
   disabled,
   onConfirm,
   confirmBtnColor,
   confirmBtnSize,
   confirmBtnText,
   confirmBtnIcon,
   confirmBtnDisabled,
   cancelBtnSize,
   cancelBtnText,
   cancelBtnIcon,
   checkOpportunityToOpenModal
}: ConfirmActionButtonProps) => {
   const [isVisible, toggleModal] = useToggle(false);
   const handleClick = () => {
      if (checkOpportunityToOpenModal !== undefined && !isVisible) {
         checkOpportunityToOpenModal(toggleModal);
      } else {
         toggleModal();
      }
   };
   return (
      <div className="inline">
         <Button
            className={className}
            onClick={handleClick}
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
         {isVisible && (
            <ModalDialog
               onClose={toggleModal}
               header={confirmHeaderText}
               children={confirmBodyContent}
               confirmBtn={{
                  action: onConfirm,
                  color: confirmBtnColor || 'danger',
                  size: confirmBtnSize,
                  text: confirmBtnText || 'Удалить',
                  icon: confirmBtnIcon,
                  disabled: confirmBtnDisabled
               }}
               cancelBtn={{
                  size: cancelBtnSize,
                  text: cancelBtnText,
                  icon: cancelBtnIcon
               }}
            />
         )}
      </div>
   );
};

export default ConfirmActionButton;
