import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { Size as SizeIcon } from '../../../utils/type/Size';

export type LabelColor =
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

export type LabelSize = 'sm' | 'lg' | 'xlg';

export type Arrowed = 'arrowed' | 'arrowed-in';

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
   /** Текст ярлыка */
   text?: string;
   /** Цвет ярлыка  */
   color?: LabelColor;
   /** Размер ярлыка */
   size?: LabelSize;
   /** Стрелка с правого края */
   arrowedRight?: Arrowed;
   /** Стрелка с левого края */
   arrowedLeft?: Arrowed;
   /** Иконка. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
   Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки */
   colorIcon?: ColorIcon;
   /** Размер иконки */
   sizeIcon?: SizeIcon;
}

export const Label = ({
   className,
   text,
   color,
   size,
   arrowedRight,
   arrowedLeft,
   icon,
   sizeIcon,
   colorIcon,
   ...rest
}: LabelProps) => (
   <span
      {...rest}
      className={classNames(
         'label',
         color && `label-${color}`,
         size && `label-${size}`,
         arrowedRight && `${arrowedRight}-right`,
         arrowedLeft,
         className
      )}>
      {icon && (
         <Icon icon={icon} size={sizeIcon} color={colorIcon} className={text && 'right-space'} />
      )}
      {text}
   </span>
);

export default Label;
