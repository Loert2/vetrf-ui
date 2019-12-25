import React from 'react';
import { Breadcrumb } from './inner/Breadcrumb/Breadcrumb';
import uniqueId from 'lodash/uniqueId';

export interface BreadcrumbType {
   link?: string;
   text: string;
}

export interface BreadcrumbsProps {
   /** Массив хлебных крошек */
   breadcrumbs: BreadcrumbType[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
   <div className="breadcrumbs">
      <ul className="breadcrumb">
         {breadcrumbs.map((elem, index, array) => (
            <Breadcrumb
               key={uniqueId()}
               link={elem.link}
               text={elem.text}
               active={index === array.length - 1}
            />
         ))}
      </ul>
   </div>
);

export default Breadcrumbs;
