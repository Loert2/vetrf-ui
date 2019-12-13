import React from 'react';
import Button from '../Button';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

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

describe('Button', () => {
   it('should display correctly', () => {
      const component = create(
         <Button
            text="Кнопка"
            color="pink"
            size="lg"
            icon="info"
            iconColor="blue"
            iconSize={140}
            disabled
            onClick={jest.fn()}
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should onClick correctly called', () => {
      const onClick = jest.fn();
      const component = mount(<Button iconSize={140} onClick={onClick} />);

      component.simulate('click');

      expect(onClick).toHaveBeenCalledTimes(1);
   });

   it('with disabled prop should not call onClick', () => {
      const onClick = jest.fn();
      const component = mount(<Button disabled={true} iconSize={140} onClick={onClick} />);

      component.simulate('click');

      expect(onClick).toHaveBeenCalledTimes(0);
   });

   it('should render text correctly', () => {
      const component = mount(<Button text="Кнопка" onClick={jest.fn()} />);

      expect(component.find('button').text()).toEqual('Кнопка');
   });

   it('should render icon correctly', () => {
      const component = mount(<Button icon="info" onClick={jest.fn()} />);

      expect(component.find('i').length).toEqual(1);
   });

   it('with color prop should correctly form className', () => {
      const component = mount(<Button color="pink" onClick={jest.fn()} />);

      expect(component.find('button').hasClass('btn-pink')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const component = mount(<Button size="lg" onClick={jest.fn()} />);

      expect(component.find('button').hasClass('btn-lg')).toEqual(true);
   });

   it('with disabled prop should correctly form className', () => {
      const component = mount(<Button disabled onClick={jest.fn()} />);

      expect(component.find('button').hasClass('disabled')).toEqual(true);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<Button icon="info" onClick={jest.fn()} />);

      expect(component.find('i').hasClass('fa-info')).toEqual(true);
   });

   it('with iconSize prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <Button icon="info" iconSize={140} onClick={jest.fn()} />
      );
      const componentSmallerSizeIcon = mount(
         <Button icon="info" iconSize={80} onClick={jest.fn()} />
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-140')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-80')).toEqual(true);
   });

   it('with text and icon prop should correctly form className', () => {
      const component = mount(<Button icon="info" text="Кнопка" onClick={jest.fn()} />);

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });

   it('with onlyIcon prop should ignore btn class, text, size and color props', () => {
      global.console = {
         warn: jest.fn()
      } as any;

      const component = mount(
         <Button
            icon="info"
            text="Кнопка"
            onClick={jest.fn()}
            size="lg"
            color="danger"
            onlyIcon={true}
         />
      );

      expect(component.find('button').hasClass('btn')).toEqual(false);
      expect(component.find('button').hasClass('btn-lg')).toEqual(false);
      expect(component.find('button').hasClass('btn-danger')).toEqual(false);
      expect(component.find('button').hasClass('btn-transparent')).toEqual(true);
      expect(console.warn).toHaveBeenCalledWith(
         'Props `color`, `size` or `text` ignored: `onlyIcon` is true'
      );
      expect(component.text()).toBeFalsy();
   });

   it('with onlyIcon prop and without icon prop should log error', () => {
      global.console = {
         error: jest.fn()
      } as any;

      mount(<Button onlyIcon={true} />);

      expect(console.error).toHaveBeenCalledWith(
         "Prop `icon` shouldn't be empty when `onlyIcon` is true"
      );
   });

   it('should render href correctly', () => {
      const component = mount(<Button href="https://about.gitlab.com/" />);

      expect(component.find('a').prop('href')).toBe('https://about.gitlab.com/');
   });

   it('based on anchor should render text correctly', () => {
      const component = mount(
         <Button text="Ссылка на внешний сайт" href="https://about.gitlab.com/" />
      );

      expect(component.text()).toEqual('Ссылка на внешний сайт');
   });

   it('based on anchor should render icon correctly', () => {
      const component = mount(<Button icon="link" href="https://about.gitlab.com/" />);

      expect(component.find('i').length).toEqual(1);
   });

   it('based on anchor with color prop should correctly form className', () => {
      const component = mount(<Button color="grey" href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('btn-grey')).toEqual(true);
   });

   it('based on anchor with size prop should correctly form className', () => {
      const component = mount(<Button size="lg" href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('btn-lg')).toEqual(true);
   });

   it('based on anchor with disabled prop should correctly form className', () => {
      const component = mount(<Button disabled href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('disabled')).toEqual(true);
   });

   it('based on anchor with icon prop should correctly form className', () => {
      const component = mount(<Button icon="link" href="https://about.gitlab.com/" />);

      expect(component.find('i').hasClass('fa-link')).toEqual(true);
   });

   it('based on anchor with iconSize prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <Button icon="link" iconSize={175} href="https://about.gitlab.com/" />
      );
      const componentSmallerSizeIcon = mount(
         <Button icon="link" iconSize={40} href="https://about.gitlab.com/" />
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-175')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-40')).toEqual(true);
   });

   it('based on anchor with right-space prop should correctly form className', () => {
      const component = mount(
         <Button icon="link" text="Кнопка-ссылка" href="https://about.gitlab.com/" />
      );

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });

   it('based on link should call onClick correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button href="/example" />
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

   it('based on link with disabled prop should not call onClick', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button disabled href="/example" />
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

   it('based on link should render text correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button text="Кнопка-ссылка" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').text()).toEqual('Кнопка-ссылка');
   });

   it('based on link should render icon correctly', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button icon="info" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('i').length).toEqual(1);
   });

   it('based on link with color prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button color="grey" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('btn-grey')).toEqual(true);
   });

   it('based on link with size prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button size="lg" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('btn-lg')).toEqual(true);
   });

   it('based on link with disabled prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button disabled href="/example" />
         </MemoryRouter>
      );

      expect(component.find('Link').hasClass('disabled')).toEqual(true);
   });

   it('based on link with icon prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button icon="info" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('i').hasClass('fa-info')).toEqual(true);
   });

   it('based on link with iconSize prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button icon="info" iconSize={140} href="/example" />
         </MemoryRouter>
      );
      const componentSmallerSizeIcon = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button icon="info" iconSize={80} href="/example" />
         </MemoryRouter>
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-140')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-80')).toEqual(true);
   });

   it('based on link with right-space prop should correctly form className', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Button icon="info" text="Кнопка-ссылка" href="/example" />
         </MemoryRouter>
      );

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
