import React from 'react';
import classNames from 'classnames';
import Icon from '../../other/Icon/Icon';
import { ColorButton } from '../../../utils/type/ColorButton';
import { SizeButton } from '../../../utils/type/SizeButton';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   /** Текст кнопки */
   text?: string;
   /** Цвет кнопки */
   color?: ColorButton;
   /** Размер кнопки */
   size?: SizeButton;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
         Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   colorIcon?: ColorIcon;
   /** Размер иконки */
   sizeIcon?: SizeIcon;
   /** Действие при нажатии на кнопку */
   onClick: () => void;
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
