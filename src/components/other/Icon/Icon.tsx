import React from 'react';
import classNames from 'classnames';
import { ColorProps } from '../../../utils/type/ColorProps';

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

export type Spin = 'spin' | 'pulse' | ' ';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IconProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, ColorProps {
   /** Допустимые типы передаваемых параметров: Font Awesome v4.7 */
   icon: string;
   /** Размер иконки */
   size?: Size;
   /** Допустимые типы передаваемых параметров: spin, pulse */
   spin?: Spin;
}

export const Icon = ({ icon, size, spin, color, className, ...rest }: IconProps) => (
   <i
      {...rest}
      className={classNames(
         'ace-icon fa',
         `fa-${icon}`,
         size && size !== 100 && (size > 100 ? `bigger-${size}` : `smaller-${size}`),
         spin && `fa-${spin}`,
         color,
         className
      )}
   />
);

Icon.defaultProps = {
   size: 110
};

export default Icon;
