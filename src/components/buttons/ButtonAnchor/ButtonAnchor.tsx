import React from 'react';
import classNames from 'classnames';
import Icon from '../../other/Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export type ButtonAnchorColor =
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

export type ButtonAnchorSize = 'minier' | 'xs' | 'sm' | 'lg' | 'xlg';

export interface ButtonAnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
   /** Адресс ссылки, который указывается целиком на внешний ресурс */
   href: string;
   /** Текст кнопки */
   text?: string;
   /** Цвет кнопки */
   color?: ButtonAnchorColor;
   /** Размер кнопки */
   size?: ButtonAnchorSize;
   /** Блокировка кнопки */
   disabled?: boolean;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
         Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   colorIcon?: ColorIcon;
   /** Размер иконки */
   sizeIcon?: SizeIcon;
}

export const ButtonAnchor = ({
   className,
   href,
   text,
   color,
   size,
   disabled,
   icon,
   colorIcon,
   sizeIcon,
   ...rest
}: ButtonAnchorProps) => {
   return (
      <a
         {...rest}
         href={href}
         className={classNames(
            'btn decoration-none',
            color && `btn-${color}`,
            size && `btn-${size}`,
            disabled && 'disabled',
            className
         )}>
         {icon && (
            <Icon icon={icon} size={sizeIcon} color={colorIcon} className={text && 'right-space'} />
         )}
         {text}
      </a>
   );
};

export default ButtonAnchor;
