import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import useClose from '../../../utils/hooks/useClose';

export type MassageType = 'info' | 'danger' | 'success' | 'warning';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
   /** Тип сообщения */
   massageType?: MassageType;
   /** Контент сообщения */
   children: ReactNode;
   /** Кнопка для закрытия сообщения */
   closable?: boolean;
}

export const Alert = ({
   massageType = 'info',
   children,
   closable,
   className,
   ...rest
}: AlertProps) => {
   const [showAlert, close] = useClose();
   if (!showAlert) {
      return null;
   }
   return (
      <div {...rest} className={classNames('alert', `alert-${massageType}`, className)}>
         {closable && (
            <button type="button" className="close" onClick={close}>
               <Icon icon="times" />
            </button>
         )}
         {children}
      </div>
   );
};

export default Alert;
