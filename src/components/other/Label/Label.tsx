import React from 'react';
import classNames from 'classnames';
import { Icon, Size as SizeIcon } from '../Icon/Icon';
import { Color as ColorIcon } from '../../../utils/type/Color';

export type Color =
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

export type Size = 'sm' | 'lg' | 'xlg';

export type Arrowed = 'arrowed' | 'arrowed-in';

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
   /** Текст ярлыка. */
   text?: string;
   /** Цвет ярлыка. Допустимые типы передаваемых параметров: info, primary, warning, default, success, danger,
   purple, pink, inverse, grey, light, yellow  */
   color?: Color;
   /** Размер ярлыка. Допустимые типы передаваемых параметров: sm, lg, xlg */
   size?: Size;
   /** Стрелка с правого края. Допустимые типы передаваемых параметров: arrowed, arrowed-in.
   Вместо полного css-класса стрелки справа необходимо указывать её название
   без префикса -right, например arrowed, а не arrowed-right */
   arrowedRight?: Arrowed;
   /** Стрелка с левого края. Допустимые типы передаваемых параметров: arrowed, arrowed-in */
   arrowedLeft?: Arrowed;
   /** Стиль формы ярлыка */
   style?: object;
   /** Иконка. Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
   Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon?: string;
   /** Цвет иконки. Допустимые типы передаваемых параметров: dark, white, red, red2, light-red, blue, light-blue,
         green, light-green, orange, orange2, light-orange, purple, pink, pink2, brown, grey, light-grey */
   colorIcon?: ColorIcon;
   /** Размер иконки. Допустимые типы передаваемых параметров: 20, 30, 40, 50, 60, 70, 75, 80, 90, 100, 110, 115,
   120, 125, 130, 140, 150, 160, 170, 175, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260, 270, 275, 280, 290, 300 */
   sizeIcon?: SizeIcon;
}

export const Label = ({
   className,
   style,
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
         `label-${color}`,
         `label-${size}`,
         `${arrowedRight}-right`,
         arrowedLeft,
         className
      )}
      style={style}>
      {icon && <Icon icon={icon} size={sizeIcon} color={colorIcon} className={className} />}
      {' ' + text}
   </span>
);

export default Label;
