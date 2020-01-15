import React, { ReactNode } from 'react';

export interface ModalProps {
   /** Видимость */
   isVisible?: boolean;
   /** Контент */
   children: ReactNode;
   /** Ширина */
   width?: string;
}

export const Modal = ({ isVisible, children, width }: ModalProps) => (
   <div className={isVisible ? 'show' : 'hide'}>
      <div className="bootbox modal fade bootbox-prompt in">
         <div className="modal-dialog" style={{ width }}>
            <div className="modal-content">{children}</div>
         </div>
      </div>
      <div className="modal-backdrop fade in" />
   </div>
);

export default Modal;
