import React from 'react';
import classNames from 'classnames';
import Icon from '../../other/Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export type ButtonColor =
   | 'info'
   | 'primary'
   | 'warning'
   | 'default'
   | 'success'
   | 'danger'
   | 'purple'
   | 'pink'
   | 'inverse'
   | 'grey'
   | 'light'
   | 'yellow';

export type ButtonSize = 'minier' | 'xs' | 'sm' | 'lg' | 'xlg';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   /** Текст кнопки */
   text?: string;
   /** Цвет кнопки */
   color?: ButtonColor;
   /** Размер кнопки */
   size?: ButtonSize;
   /** Блокировка кнопки */
   disabled?: boolean;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
         Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   colorIcon?: ColorIcon;
   /** Размер иконки */
   sizeIcon?: SizeIcon;
   /** Действие при нажатии на кнопку */
   onClick: () => void | Function;
}

export const Button = ({
   className,
   text,
   color,
   size,
   disabled,
   icon,
   colorIcon,
   sizeIcon,
   onClick,
   ...rest
}: ButtonProps) => {
   return (
      <button
         {...rest}
         type="button"
         className={classNames(
            'btn',
            color && `btn-${color}`,
            size && `btn-${size}`,
            disabled && 'disabled',
            className
         )}
         onClick={disabled ? undefined : onClick}
         disabled={disabled}>
         {icon && (
            <Icon icon={icon} size={sizeIcon} color={colorIcon} className={text && 'right-space'} />
         )}
         {text}
      </button>
   );
};

export default Button;
