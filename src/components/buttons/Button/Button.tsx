import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../../other/Icon/Icon';
import { ColorButton } from '../../../utils/type/ColorButton';
import { SizeButton } from '../../../utils/type/SizeButton';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';
import { withTooltip } from '../../../components/hoc/WithTooltip/withTooltip';

type LinkType = 'a' | 'link';

interface CommonButtonProps {
   /** Текст кнопки (игнорируется при onlyIcon === true) */
   text?: string;
   /** Цвет кнопки (игнорируется при onlyIcon === true) */
   color?: ColorButton;
   /** Размер кнопки (игнорируется при onlyIcon === true) */
   size?: SizeButton;
   /** Иконка кнопки. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
    Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   iconColor?: ColorIcon;
   /** Размер иконки */
   iconSize?: SizeIcon;
   /** Действие при нажатии на кнопку */
   onClick?: () => void;
   /** Отображать только иконку */
   onlyIcon?: boolean;
   /** Блокировка кнопки */
   disabled?: boolean;
}

type ButtonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonButtonProps;
type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonButtonProps & { linkType?: LinkType };

export type ButtonProps = ButtonButtonProps | ButtonLinkProps;

const isUrlAbsolute = (url: string): boolean => url.indexOf('://') > 0 || url.indexOf('//') === 0;

const Button = (props: ButtonProps) => {
   const {
      text,
      disabled,
      color,
      size,
      icon,
      iconSize,
      iconColor,
      className,
      onlyIcon,
      onClick,
      ...rest
   } = props;

   const classNameList = [];
   if (disabled) {
      classNameList.push('disabled');
   }
   if (onlyIcon) {
      if (color || size || text) {
         console.warn('Props `color`, `size` or `text` ignored: `onlyIcon` is true');
      }
      if (!icon) {
         console.error('Prop `icon` shouldn\'t be empty when `onlyIcon` is true');
      }
   } else {
      classNameList.push('btn', color && `btn-${color}`, size && `btn-${size}`);
   }
   classNameList.push(className);

   const iconComponent = icon && (
      <Icon icon={icon} size={iconSize} color={iconColor} className={text && 'right-space'} />
   );

   const children = (
      <Fragment>
         {iconComponent}
         {!onlyIcon && text}
      </Fragment>
   );

   const clickHandler = disabled ? undefined : onClick;

   if ('href' in props && props.href) {
      const { href } = props;
      classNameList.push('decoration-none');

      if (props.linkType === 'a' || isUrlAbsolute(href)) {
         // Избавимся от параметров, которые не должны быть переданы в элемент
         const { linkType, ...restLinkProps } = rest as ButtonLinkProps;
         return (
            <a
               {...(restLinkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
               onClick={clickHandler}
               href={href}
               className={classNames(classNameList)}>
               {children}
            </a>
         );
      }

      return (
         <Link
            {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            onClick={clickHandler}
            to={href}
            className={classNames(classNameList)}>
            {children}
         </Link>
      );
   }

   if (onlyIcon) {
      classNameList.push('btn-transparent');
   }

   return (
      <button
         type="button"
         {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
         onClick={clickHandler}
         disabled={disabled}
         className={classNames(classNameList)}>
         {children}
      </button>
   );
};

export default withTooltip(Button);
