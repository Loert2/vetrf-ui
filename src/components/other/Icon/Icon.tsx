import React from 'react';
import classNames from 'classnames';
import { Color } from '../../../utils/type/Color';

export type Size =
   | 20
   | 30
   | 40
   | 50
   | 60
   | 70
   | 75
   | 80
   | 90
   | 100
   | 110
   | 115
   | 120
   | 125
   | 130
   | 140
   | 150
   | 160
   | 170
   | 175
   | 180
   | 190
   | 200
   | 210
   | 220
   | 225
   | 230
   | 240
   | 250
   | 260
   | 270
   | 275
   | 280
   | 290
   | 300;

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
   /** Допустимые типы передаваемых параметров: https://fontawesome.com/v4.7.0/icons/.
         Вместо полного css-класса иконки необходимо указывать её название без префикса fa-, например file, а не fa-file */
   icon: string;
   /** Размер иконки */
   size?: Size;
   /** Допустимые типы передаваемых параметров: dark, white, red, red2, light-red, blue, light-blue, green, light-green,
         orange, orange2, light-orange, purple, pink, pink2, brown, grey, light-grey */
   color?: Color;
}

function getSizeClassName(size: Size) {
   if (size !== 100) {
      if (size > 100) {
         return `bigger-${size}`;
      } else {
         return `smaller-${size}`;
      }
   }
   return null;
}

export const Icon = ({ icon, size = 110, color, className, ...rest }: IconProps) => (
   <i
      {...rest}
      className={classNames(
         'ace-icon fa',
         `fa-${icon}`,
         size && getSizeClassName(size),
         color,
         className
      )}
   />
);

export default Icon;
