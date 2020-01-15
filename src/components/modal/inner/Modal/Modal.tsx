import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface ModalProps {
   /** Видимость */
   isVisible?: boolean;
   /** Контент */
   children: ReactNode;
   /** Ширина */
   width?: string;
}

export const Modal = ({ isVisible, children, width }: ModalProps) => (
   <div>
      <div className={classNames('bootbox modal fade bootbox-prompt in', isVisible && 'show')}>
         <div className="modal-dialog" style={{ width: width }}>
            <div className="modal-content">{children}</div>
         </div>
      </div>
      <div className="modal-backdrop fade in" />
   </div>
);

export default Modal;
