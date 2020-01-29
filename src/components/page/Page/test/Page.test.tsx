import React from 'react';
import { Page } from '../Page';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

const breadcrumbs = [
   {
      link: '/',
      text: 'Главная'
   },
   {
      text: 'Активная'
   }
];

describe('Page', () => {
   it('should display correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <Page
               title="Заголовок сайта"
               children="Тут может быть ваш контент."
               breadcrumbs={[
                  {
                     link: '/',
                     text: 'Главная'
                  },
                  {
                     text: 'Активная'
                  }
               ]}
               header="Заголовок"
               headerClassName="col-xs-6 no-padding-left"
               subHeader="Подзаголовок"
               toolbar={<button>Кнопка тулбара</button>}
               toolbarClassName="col-xs-6 col-lg-4 no-padding-right toolbar-container"
               additionalInfo={<small>Дополнительный компонент</small>}
               secondLineInfo={<small>Второй дополнительный компонент</small>}
            />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render text children correctly', () => {
      const component = mount(
         <Page title="Заголовок сайта" children="Тут может быть ваш контент." />
      );

      expect(component.find('div.page-content').text()).toEqual('Тут может быть ваш контент.');
   });

   it('should render text header correctly', () => {
      const component = mount(
         <Page title="Заголовок сайта" children="Тут может быть ваш контент." header="Заголовок" />
      );

      expect(component.find('h1.page__header').text()).toEqual('Заголовок');
   });

   it('with headerClassName prop should correctly form className', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            headerClassName="top-header col-xs-6"
            toolbar={<button>Кнопка тулбара</button>}
         />
      );

      expect(component.find('div.top-header').hasClass('col-xs-6 col-lg-8')).toEqual(true);
   });

   it('should render text subHeader correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            subHeader="Подзаголовок"
         />
      );
      const result = mount(<p>&nbsp;Подзаголовок</p>);

      expect(component.find('small.page__sub-header').text()).toEqual(result.find('p').text());
   });

   it('should render text additionalInfo correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            additionalInfo={
               <small className="page-header__additional-info">
                  Первый дополнительный компонент
               </small>
            }
         />
      );

      expect(component.find('small.page-header__additional-info').text()).toEqual(
         'Первый дополнительный компонент'
      );
   });

   it('should render text secondLineInfo correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            secondLineInfo={
               <small className="page-header__second-line-info">
                  Второй дополнительный компонент
               </small>
            }
         />
      );

      expect(component.find('small.page-header__second-line-info').text()).toEqual(
         'Второй дополнительный компонент'
      );
   });

   it('should render text toolbar correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            toolbar={<button className="page-header__toolbar">Кнопка тулбара</button>}
         />
      );

      expect(component.find('button.page-header__toolbar').text()).toEqual('Кнопка тулбара');
   });

   it('with toolbarClassName prop should correctly form className', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            toolbar={<button>Кнопка тулбара</button>}
            toolbarClassName="col-xs-6 col-lg-4 toolbar-container"
         />
      );

      expect(
         component.find('div.toolbar-container').hasClass('col-xs-6 col-lg-4 toolbar-container')
      ).toEqual(true);
   });

   it('should render text active breadcrumb correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Page
               title="Заголовок сайта"
               children="Тут может быть ваш контент."
               breadcrumbs={breadcrumbs}
            />
         </MemoryRouter>
      );

      expect(component.find('span.breadcrumb__active').text()).toEqual(' Активная ');
   });

   it('should display right amount breadcrumbs', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Page
               title="Заголовок сайта"
               children="Тут может быть ваш контент."
               breadcrumbs={breadcrumbs}
            />
         </MemoryRouter>
      );

      const countBreadcrumbs =
         component.find('Link.breadcrumb__link').length +
         component.find('span.breadcrumb__active').length;

      expect(breadcrumbs).toHaveLength(countBreadcrumbs);
   });
});
