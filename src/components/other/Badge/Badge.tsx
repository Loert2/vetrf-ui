import React from 'react';
import classNames from 'classnames';

export type BadgeColor =
   | 'grey'
   | 'success'
   | 'warning'
   | 'danger'
   | 'info'
   | 'purple'
   | 'inverse'
   | 'pink'
   | 'yellow';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
   /** Допустимые типы передаваемых параметров: grey, success, warning, danger, info, purple, inverse, pink, yellow */
   color?: BadgeColor;
   /** Контент */
   children: React.ReactNode;
}

/** Знак, формирующийся исходя из передаваемых в него параметров - цвета и контента */
export const Badge = ({ color, children, className, ...rest }: BadgeProps) => (
   <span {...rest} className={classNames('badge', color && `badge-${color}`, className)}>
      {children}
   </span>
);

export default Badge;
