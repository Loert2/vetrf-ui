import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbProps {
   /** Ссылка */
   link?: string;
   /** Текст */
   text: string;
   /** Флаг активности */
   active?: boolean;
}

export const Breadcrumb = ({ active, text, link }: BreadcrumbProps) => (
   <li className={active ? 'active' : undefined}>
      {link && !active ? <Link to={link}> {text} </Link> : <span> {text} </span>}
   </li>
);

export default Breadcrumb;
