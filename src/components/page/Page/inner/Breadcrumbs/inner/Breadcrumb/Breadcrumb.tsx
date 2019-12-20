import React from 'react';
import { Link } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';

export interface BreadcrumbProps {
   /** Ссылка */
   link?: string;
   /** Текст */
   text: string;
   /** Флаг активности */
   active?: boolean;
}

export const Breadcrumb = ({ active, text, link }: BreadcrumbProps) => (
   <li key={uniqueId()} className={active && 'active'}>
      {link ? <Link to={link}> {text} </Link> : <span> {text} </span>}
   </li>
);

export default Breadcrumb;
