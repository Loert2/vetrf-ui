import React from 'react';
import classNames from 'classnames';
import { Color } from '../../../utils/type/Color';
import { Icon, Size } from '../Icon/Icon';

export type IconSpinner = 'circle-o-notch' | 'cog' | 'gear' | 'refresh' | 'spinner';

export type Spin = 'spin' | 'pulse';

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
   /** Иконка. Допустимые типы передаваемых параметров: circle-o-notch, cog, gear, refresh, spinner */
   icon?: IconSpinner;
   /** Тип вращения. Допустимые типы передаваемых параметров: spin, pulse */
   spin?: Spin;
   /** Размер иконки. Допустимые типы передаваемых параметров: 20, 30, 40, 50, 60, 70, 75, 80, 90, 100, 110, 115,
   120, 125, 130, 140, 150, 160, 170, 175, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260, 270, 275, 280, 290, 300 */
   size?: Size;
   /** Цвет. Допустимые типы передаваемых параметров: dark, white, red, red2, light-red, blue, light-blue, green, light-green,
      orange, orange2, light-orange, purple, pink, pink2, brown, grey, light-grey */
   color?: Color;
   /** Текст */
   text?: string;
   /** Стиль формы спиннера */
   style?: object;
}

export const LoadingSpinner = ({
   className,
   style,
   icon = 'spinner',
   spin = 'spin',
   size,
   color = 'blue',
   text,
   ...rest
}: LoadingSpinnerProps) => (
   <span {...rest} className={classNames('animated', color, className)} style={style}>
      <Icon icon={icon} className={classNames(`fa-${spin}`, className)} size={size} color={color} />
      {text || 'Загрузка...'}
   </span>
);

export default LoadingSpinner;
