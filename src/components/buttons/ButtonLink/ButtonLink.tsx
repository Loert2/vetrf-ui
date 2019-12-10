import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../../other/Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export type ButtonLinkColor =
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

export type ButtonLinkSize = 'minier' | 'xs' | 'sm' | 'lg' | 'xlg';

export interface ButtonLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
   /** Адресс ссылки */
   href: string;
   /** Текст кнопки */
   text?: string;
   /** Цвет кнопки */
   color?: ButtonLinkColor;
   /** Размер кнопки */
   size?: ButtonLinkSize;
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

export const ButtonLink = ({
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
}: ButtonLinkProps) => {
   return (
      <Link
         {...rest}
         to={href}
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
      </Link>
   );
};

export default ButtonLink;
