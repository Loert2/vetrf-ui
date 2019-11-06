import React from 'react';
import classNames from 'classnames';
import { Color } from '../../../utils/type/Color';
import { Size } from '../../../utils/type/Size';
import Icon from '../Icon/Icon';
import { getSizeClassName } from '../../../utils/function/sizeClassName';

export type IconSpinner = 'circle-o-notch' | 'cog' | 'gear' | 'refresh' | 'spinner';

export type Spin = 'spin' | 'pulse';

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
   /** Иконка */
   icon?: IconSpinner;
   /** Тип вращения */
   spin?: Spin;
   /** Размер */
   size?: Size;
   /** Цвет */
   color?: Color;
   /** Текст */
   text?: string;
}

export const LoadingSpinner = ({
   className,
   icon = 'spinner',
   spin = 'spin',
   size = 110,
   color = 'blue',
   text = 'Загрузка...',
   ...rest
}: LoadingSpinnerProps) => (
   <span {...rest} className={classNames(color, getSizeClassName(size), className)}>
      <Icon
         icon={icon}
         className={classNames(`fa-${spin}`, text && 'text-margin-right')}
         color={color}
      />
      {text}
   </span>
);

export default LoadingSpinner;
