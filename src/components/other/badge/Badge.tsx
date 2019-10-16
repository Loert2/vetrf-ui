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
   colorClass?: BadgeColor;
   /** Контент */
   children: string;
}

/** Знак, формирующийся исходя из передаваемых в него параметров - цвета и контента */
export const Badge = ({ colorClass, children }: BadgeProps) => (
   <span className={classNames('badge', 'badge-' + colorClass)}>{children}</span>
);

export default Badge;
