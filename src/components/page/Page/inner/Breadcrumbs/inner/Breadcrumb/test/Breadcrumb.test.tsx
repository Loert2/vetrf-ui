import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

const routesTest = [
   {
      path: '/',
      exact: true,
      main: () => <h2>Главная страница</h2>
   },
   {
      path: '/example',
      exact: true,
      main: () => <h2>Страница при переходе по ссылке</h2>
   }
];

describe('Breadcrumb', () => {
   it('should display correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb link="/example" text="Крошка-ссылка" active />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should onClick correctly called', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb link="/example" text="Крошка-ссылка" />
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
      component
         .find('Link')
         .at(0)
         .simulate('click', { button: 0 });

      expect(component.find('h2').text()).toEqual('Страница при переходе по ссылке');
   });

   it('with active prop should not call onClick', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb link="/example" text="Крошка-ссылка" active />
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

      //active срабатывает с задержкой, так как он реализован через стили
      setTimeout(
         () =>
            component
               .find('Link')
               .at(0)
               .simulate('click', { button: 0 }),
         300
      );

      expect(component.find('h2').text()).toEqual('Главная страница');
   });

   it('should renders link', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb text="Крошка" />
         </MemoryRouter>
      );

      expect(component.find('span').length).toEqual(1);
   });

   it('should renders span', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb link="/example" text="Крошка-ссылка" />
         </MemoryRouter>
      );

      expect(component.find('Link').length).toEqual(1);
   });

   it('should renders text', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb text="Крошка" />
         </MemoryRouter>
      );
      const componentLink = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb link="/example" text="Крошка-ссылка" />
         </MemoryRouter>
      );

      expect(component.find('span').text()).toEqual(' Крошка ');
      expect(componentLink.find('Link').text()).toEqual(' Крошка-ссылка ');
   });

   it('with active prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumb text="Крошка-ссылка" active />
         </MemoryRouter>
      );

      expect(component.find('li').hasClass('active')).toEqual(true);
   });
});
