import React from 'react';
import ModalDialog from '../ModalDialog';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

const routesTest = [
   {
      path: '/',
      exact: true,
      main: () => <h2>Начальная страница</h2>
   },
   {
      path: '/example',
      exact: true,
      main: () => <h2>Страница при переходе по ссылке</h2>
   }
];

describe('ModalDialog', () => {
   it('should displayed correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <ModalDialog
               header="Заголовок"
               children="Контент"
               confirmBtn={{
                  action: jest.fn(),
                  text: 'Подтвердить',
                  color: 'success',
                  size: 'sm',
                  icon: 'info'
               }}
               cancelBtn={{
                  text: 'Вернуться',
                  href: '/',
                  size: 'sm',
                  icon: 'times'
               }}
            />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   //TODO Так как нельзя передать функцию в HeaderModal, то проверяем работоспособность кнопки по видимости модального окна
   it('should in HeaderModal onClick correctly called ', () => {
      const component = mount(<ModalDialog header="Заголовок" children="Контент" />);

      component
         .find('button')
         .first()
         .simulate('click');

      expect(
         component
            .find('div')
            .at(1)
            .hasClass('hide')
      ).toEqual(true);
      expect(
         component
            .find('div')
            .at(1)
            .hasClass('show')
      ).toEqual(false);
   });

   it('with isVisible prop should has class show', () => {
      const component = mount(
         <ModalDialog
            header="Заголовок"
            children="Контент"
            cancelBtn={{
               text: 'Вернуться'
            }}
         />
      );

      component
         .find('button')
         .at(1)
         .simulate('click');

      expect(
         component
            .find('div')
            .at(1)
            .hasClass('hide')
      ).toEqual(true);
      expect(
         component
            .find('div')
            .at(1)
            .hasClass('show')
      ).toEqual(false);
   });

   it('with isVisible prop should has class fade', () => {
      const component = mount(
         <ModalDialog
            header="Заголовок"
            children="Контент"
            cancelBtn={{
               text: 'Вернуться'
            }}
         />
      );

      component
         .find('button')
         .at(1)
         .simulate('click');

      expect(
         component
            .find('div')
            .at(9)
            .hasClass('fade')
      ).toEqual(true);
      expect(
         component
            .find('div')
            .at(9)
            .hasClass('in')
      ).toEqual(false);
   });

   it('based on link in cancelBtn should call onClick correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ModalDialog header="Заголовок" children="Контент" cancelBtn={{ href: '/example' }} />
            <Switch>
               {routesTest.map((route, index) => (
                  <Route
                     key={index}
                     path={route.path}
                     exact={route.exact}
                     children={<route.main />}
                  />
               ))}
            </Switch>
         </MemoryRouter>
      );

      //в компоненте Link присутствует условие event.button === 0 (игнорировать все, кроме левых кликов),
      //которое мешает корректной работе simulate, в связи с этим был добавлен дополнительный параметр в simulate
      //https://github.com/airbnb/enzyme/issues/516
      component.find('a').simulate('click', { button: 0 });

      expect(component.find('h2').text()).toEqual('Страница при переходе по ссылке');
   });

   it('should render custom footer correctly', () => {
      const component = mount(
         <ModalDialog
            header="Заголовок"
            children="Контент"
            footer={<button>Кнопка-заглушка</button>}
         />
      );

      expect(
         component
            .find('button')
            .at(1)
            .text()
      ).toEqual('Кнопка-заглушка');
   });

   it('should render confirm footer correctly', () => {
      const component = mount(
         <ModalDialog
            header="Заголовок"
            children="Контент"
            confirmBtn={{
               text: 'Подтвердить',
               action: jest.fn()
            }}
            cancelBtn={{
               text: 'Вернуться'
            }}
         />
      );

      expect(
         component
            .find('button')
            .at(1)
            .text()
      ).toEqual('Подтвердить');
      expect(
         component
            .find('button')
            .at(2)
            .text()
      ).toEqual('Вернуться');
   });
});
