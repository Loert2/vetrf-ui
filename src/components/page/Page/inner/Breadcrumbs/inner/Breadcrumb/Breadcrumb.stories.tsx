import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Breadcrumbs', module);

const routes = [
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

stories.addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add(
   'Breadcrumb',
   () => (
      <div>
         <Breadcrumb
            link="/example"
            text={text('text', 'Крошка-ссылка')}
            active={boolean('active', false, 'Other')}
         />
         <Switch>
            {routes.map((route, index) => (
               <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
         </Switch>
      </div>
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Хлебная крошка. Сама по себе вне компонента хлебных крошек (Breadcrumbs) не используется.
            Принимает на вход объект конфигурации, в котором можно передать адрес ссылки, текст и флаг активности.

            Крошка-ссылка:
            ~~~js
            <Breadcrumb link="some/url/" text="Крошка-ссылка" />
            ~~~
            Крошка активная:
            ~~~js
            <Breadcrumb text="Крошка активная" active }} />
            ~~~
         `,
         propTables: [Breadcrumb]
      }
   }
);
