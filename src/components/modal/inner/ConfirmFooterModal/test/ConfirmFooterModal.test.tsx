import React from 'react';
import ConfirmFooterModal from '../ConfirmFooterModal';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { create } from 'react-test-renderer';

import 'jsdom-global/register';

configure({ adapter: new Adapter() });

const routesTest = [
   {
      path: '/',
      exact: true,
      main: () => <h2 className="page__root">Начальная страница</h2>
   },
   {
      path: '/example',
      exact: true,
      main: () => <h2 className="page__exemple">Страница с ссылкой</h2>
   }
];

describe('ConfirmFooterModal', () => {
   it('should displayed correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <ConfirmFooterModal
               className="bg-dark"
               confirmBtn={{
                  action: jest.fn(),
                  text: 'Подтвердить',
                  disabled: true,
                  className: 'border border-info',
                  color: 'yellow',
                  size: 'xs',
                  icon: 'info'
               }}
               cancelBtn={{
                  action: jest.fn(),
                  text: 'Вернуться',
                  href: '/',
                  className: 'border border-warning',
                  size: 'sm',
                  icon: 'times'
               }}
            />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should onClick confirmBtn correctly called', () => {
      const action = jest.fn();
      const component = mount(
         <ConfirmFooterModal confirmBtn={{ action, className: 'confirm-button' }} />
      );

      component.find('button.confirm-button').simulate('click');

      expect(action).toHaveBeenCalledTimes(1);
   });

   it('with disabled prop should not call onClick confirmBtn', () => {
      const action = jest.fn();
      const component = mount(
         <ConfirmFooterModal confirmBtn={{ action, disabled: true, className: 'confirm-button' }} />
      );

      component.find('button.confirm-button').simulate('click');

      expect(action).toHaveBeenCalledTimes(0);
   });

   it('should onClick cancelBtn correctly called', () => {
      const action = jest.fn();
      const component = mount(
         <ConfirmFooterModal cancelBtn={{ action, className: 'cancel-button' }} />
      );

      component.find('button.cancel-button').simulate('click');

      expect(action).toHaveBeenCalledTimes(1);
   });

   it('based on link in cancelBtn should call onClick correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ConfirmFooterModal cancelBtn={{ href: '/example' }} />
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

      expect(component.find('h2.page__exemple').text()).toEqual('Страница с ссылкой');
   });

   it('with color prop in confirmBtn should correctly form className', () => {
      const component = mount(
         <ConfirmFooterModal
            confirmBtn={{ color: 'pink', action: jest.fn(), className: 'confirm-button' }}
         />
      );

      expect(component.find('button.confirm-button').hasClass('btn-pink')).toEqual(true);
   });

   it('with size prop in confirmBtn should correctly form className', () => {
      const component = mount(
         <ConfirmFooterModal
            confirmBtn={{ size: 'sm', action: jest.fn(), className: 'confirm-button' }}
         />
      );

      expect(component.find('button.confirm-button').hasClass('btn-sm')).toEqual(true);
   });

   it('with icon prop in confirmBtn should correctly form className', () => {
      const component = mount(
         <ConfirmFooterModal confirmBtn={{ icon: 'plus', action: jest.fn() }} />
      );

      expect(component.find('i.fa.fa-plus').hasClass('fa-plus')).toEqual(true);
   });

   it('with text and icon prop confirmBtn should correctly form className', () => {
      const component = mount(
         <ConfirmFooterModal confirmBtn={{ icon: 'info', text: 'Отправить', action: jest.fn() }} />
      );

      expect(component.find('i.fa.fa-info').hasClass('right-space')).toEqual(true);
   });
});
