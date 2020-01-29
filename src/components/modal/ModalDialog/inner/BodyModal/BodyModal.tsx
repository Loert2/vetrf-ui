import React, { HTMLAttributes, ReactNode } from 'react';

export interface BodyModalProps extends HTMLAttributes<HTMLDivElement> {
   /** Контент */
   children: ReactNode;
}

export const BodyModal = ({ className = 'modal-body', children }: BodyModalProps) => (
   <div className={className}>
      <div className="row">
         <div className="col-xs-12">{children}</div>
      </div>
   </div>
);

export default BodyModal;
