import React from 'react';
import classNames from 'classnames';
import { Color } from '../../../utils/type/Color';
import { Size } from '../../../utils/type/Size';
import { getSizeClassName } from '../../../utils/function/sizeClassName';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
   /** Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
         Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon: string;
   /** Размер иконки */
   size?: Size;
   /** Цвет иконки */
   color?: Color;
}

export const Icon = ({ icon, size = 110, color, className, ...rest }: IconProps) => (
   <i
      {...rest}
      className={classNames('ace-icon fa', `fa-${icon}`, getSizeClassName(size), color, className)}
   />
);

export default Icon;
