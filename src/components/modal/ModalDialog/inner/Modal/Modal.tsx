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
      <div
         className={classNames(
            'bootbox modal fade bootbox-prompt in',
            isVisible ? 'show' : 'hide'
         )}>
         <div className="modal-dialog" style={{ width }}>
            <div className="modal-content">{children}</div>
         </div>
      </div>
      <div className={classNames('modal-backdrop', isVisible ? 'in' : 'fade')} />
   </div>
);

export default Modal;
