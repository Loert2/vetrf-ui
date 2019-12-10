import React from 'react';
import ButtonLink from '../ButtonLink';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import 'jsdom-global/register';

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
      main: () => <h2>Страница с ссылкой</h2>
   }
];

describe('ButtonLink', () => {
   it('should display correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink
               text="Кнопка-ссылка"
               color="grey"
               size="lg"
               icon="info"
               colorIcon="red2"
               sizeIcon={240}
               disabled
               href="/example"
            />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should onClick correctly called', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink href="/example" />
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
      component.simulate('click', { button: 0 });

      expect(component.find('h2').text()).toEqual('Страница с ссылкой');
   });

   it('with disabled prop should not call onClick', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink disabled href="/example" />
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

      //disabled срабатывает с задержкой, так как он реализован через стили
      setTimeout(() => component.simulate('click', { button: 0 }), 300);

      expect(component.find('h2').text()).toEqual('Начальная страница');
   });

   it('should renders text', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink text="Кнопка-ссылка" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').text()).toEqual('Кнопка-ссылка');
   });

   it('should renders icon', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink icon="info" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('i').length).toEqual(1);
   });

   it('with color prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink color="grey" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('btn-grey')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink size="xlg" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('btn-xlg')).toEqual(true);
   });

   it('with disabled prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink disabled href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('disabled')).toEqual(true);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink icon="info" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('i').hasClass('fa-info')).toEqual(true);
   });

   it('with sizeIcon prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink icon="info" sizeIcon={140} href="/example" />{' '}
         </MemoryRouter>
      );
      const componentSmallerSizeIcon = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink icon="info" sizeIcon={80} href="/example" />{' '}
         </MemoryRouter>
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-140')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-80')).toEqual(true);
   });

   it('with right-space prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <ButtonLink icon="info" text="Кнопка-ссылка" href="/example" />{' '}
         </MemoryRouter>
      );

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
