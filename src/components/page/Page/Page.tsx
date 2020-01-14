import React, { ReactNode } from 'react';
import DocumentTitle from 'react-document-title';
import { Breadcrumbs, BreadcrumbType } from './inner/Breadcrumbs/Breadcrumbs';
import PageHeader from './inner/PageHeader/PageHeader';

export interface PageProps {
   /** Заголовок сайта */
   title: string;
   /** Контент */
   children: ReactNode;
   /** Массив хлебных крошек */
   breadcrumbs?: BreadcrumbType[];
   /** Заголовок страницы */
   header?: string;
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

export const Page = ({
   breadcrumbs,
   children,
   title,
   toolbar,
   toolbarClassName,
   header,
   headerClassName,
   subHeader,
   additionalInfo,
   secondLineInfo
}: PageProps) => (
   <DocumentTitle title={title}>
      <div className="main-content-inner">
         {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
         <div className="page-content">
            <div className="row">
               <div className="col-xs-12">
                  {header && (
                     <PageHeader
                        header={header}
                        headerClassName={headerClassName}
                        additionalInfo={additionalInfo}
                        toolbar={toolbar}
                        toolbarClassName={toolbarClassName}
                        subHeader={subHeader}
                        secondLineInfo={secondLineInfo}
                     />
                  )}
                  {children}
               </div>
            </div>
         </div>
      </div>
   </DocumentTitle>
);

export default Page;
