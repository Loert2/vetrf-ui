import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Icon from '../../../../other/Icon/Icon';

export interface PageHeaderProps {
   /** Заголовок */
   header: string;
   /** Стили заголовка */
   headerClassName?: string;
   /** Маленький подзаголовок (отрисовывается справа от основного через знак  ">>") */
   subHeader?: string;
   /** Панель */
   toolbar?: ReactNode;
   /** Стили панели */
   toolbarClassName?: string;
   /** Какой-либо дополнительный компонент справа от самого заголовка и подзаголовка */
   additionalInfo?: ReactNode;
   /** Вторая строка заголовка (компонент) с дополнительной информацией */
   secondLineInfo?: ReactNode;
}

export const PageHeader = ({
   toolbar,
   toolbarClassName = 'col-xs-12 col-lg-4 no-padding-right toolbar-container',
   header,
   headerClassName = 'col-xs-12 no-padding-left',
   subHeader,
   additionalInfo,
   secondLineInfo
}: PageHeaderProps) => (
   <div className="page-header col-xs-12 no-padding-left no-padding-right">
      <div className={toolbar ? classNames(headerClassName, 'col-lg-8') : headerClassName}>
         <h1 className="page__header">
            {header}
            {subHeader && (
               <small className="page__sub-header">
                  <Icon icon="angle-double-right" />
                  &nbsp;{subHeader}
               </small>
            )}
            {additionalInfo}
         </h1>
      </div>
      {toolbar && <div className={toolbarClassName}>{toolbar}</div>}
      {secondLineInfo && <div className="padding-top-10 col-xs-12">{secondLineInfo}</div>}
   </div>
);

export default PageHeader;
