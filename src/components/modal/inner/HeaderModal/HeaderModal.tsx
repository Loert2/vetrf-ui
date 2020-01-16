import React, { HTMLAttributes } from 'react';

export interface HeaderModalProps extends HTMLAttributes<HTMLDivElement> {
   /** Заголовок */
   title: string;
   /** Закрытие при нажатии на кнопку. Обработчик кнопки передаётся извне */
   onClose?: () => void;
}

export const HeaderModal = ({ className = 'modal-header', onClose, title }: HeaderModalProps) => (
   <div className={className}>
      <button type="button" className="close" onClick={onClose}>
         &times;
      </button>
      <h4 className="modal-title">{title}</h4>
   </div>
);

export default HeaderModal;
