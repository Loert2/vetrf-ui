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

      expect(
         component
            .find('div')
            .at(3)
            .text()
      ).toEqual('Тут может быть ваш контент.');
   });

   it('should render text header correctly', () => {
      const component = mount(
         <Page title="Заголовок сайта" children="Тут может быть ваш контент." header="Заголовок" />
      );

      expect(component.find('h1').text()).toEqual('Заголовок');
   });

   it('with headerClassName prop should correctly form className', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            headerClassName="col-xs-6"
            toolbar={<button>Кнопка тулбара</button>}
         />
      );

      expect(
         component
            .find('div')
            .at(5)
            .hasClass('col-xs-6 col-lg-8')
      ).toEqual(true);
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

      expect(component.find('small').text()).toEqual(result.find('p').text());
   });

   it('should render text additionalInfo correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            additionalInfo={<small>Первый дополнительный компонент</small>}
         />
      );

      expect(component.find('small').text()).toEqual('Первый дополнительный компонент');
   });

   it('should render text secondLineInfo correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            secondLineInfo={<small>Второй дополнительный компонент</small>}
         />
      );

      expect(component.find('small').text()).toEqual('Второй дополнительный компонент');
   });

   it('should render text toolbar correctly', () => {
      const component = mount(
         <Page
            title="Заголовок сайта"
            children="Тут может быть ваш контент."
            header="Заголовок"
            toolbar={<button>Кнопка тулбара</button>}
         />
      );

      expect(component.find('button').text()).toEqual('Кнопка тулбара');
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
         component
            .find('div')
            .at(6)
            .hasClass('col-xs-6 col-lg-4 toolbar-container')
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

      expect(component.find('span').text()).toEqual(' Активная ');
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

      const countBreadcrumbs = component.find('Link').length + component.find('span').length;

      expect(breadcrumbs).toHaveLength(countBreadcrumbs);
   });
});
