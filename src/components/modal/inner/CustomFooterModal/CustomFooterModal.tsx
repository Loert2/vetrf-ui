import React, { ReactNode } from 'react';

export interface CustomFooterModalProps {
   /** Стили */
   className?: string;
   /** Контент */
   children: ReactNode;
}

export const CustomFooterModal = ({
   className = 'modal-footer',
   children
}: CustomFooterModalProps) => <div className={className}>{children}</div>;

export default CustomFooterModal;
