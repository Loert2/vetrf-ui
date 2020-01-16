import React from 'react';
import { ColorButton } from '../../../../utils/type/ColorButton';
import { SizeButton } from '../../../../utils/type/SizeButton';
import CustomFooterModal from '../CustomFooterModal/CustomFooterModal';
import Button from '../../../buttons/Button/Button';

export type ConfirmButton = {
   /** Стили кнопки */
   className?: string;
   /** Текст кнопки */
   text?: string;
   /** Цвет кнопки */
   color?: ColorButton;
   /** Размер кнопки */
   size?: SizeButton;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
    Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Действие при нажатии на кнопку */
   action?: () => void;
   /** Блокировка кнопки */
   disabled?: boolean;
};

export type CancelButton = {
   /** Стили кнопки */
   className?: string;
   /** Текст кнопки */
   text?: string;
   /** Размер кнопки */
   size?: SizeButton;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
    Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Действие при нажатии на кнопку */
   action?: () => void;
   /** Ссылка */
   href?: string;
};

export interface ConfirmFooterModalProps {
   /** Стили */
   className?: string;
   /** Кнопка подтверждения */
   confirmBtn?: ConfirmButton;
   /** Кнопка отмены */
   cancelBtn?: CancelButton;
}

export const ConfirmFooterModal = ({
   className,
   confirmBtn = {},
   cancelBtn = {}
}: ConfirmFooterModalProps) => (
   <CustomFooterModal className={className}>
      {confirmBtn && confirmBtn.action && (
         <Button
            onClick={confirmBtn.action}
            text={confirmBtn.text || 'Добавить'}
            disabled={confirmBtn.disabled}
            className={confirmBtn.className}
            color={confirmBtn.color || 'success'}
            size={confirmBtn.size}
            icon={confirmBtn.icon}
         />
      )}
      <Button
         onClick={cancelBtn.action}
         text={cancelBtn.text || 'Отмена'}
         href={cancelBtn.href}
         className={cancelBtn.className}
         color="default"
         size={cancelBtn.size}
         icon={cancelBtn.icon}
      />
   </CustomFooterModal>
);

export default ConfirmFooterModal;
