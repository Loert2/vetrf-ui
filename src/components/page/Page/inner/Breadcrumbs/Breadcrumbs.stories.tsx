import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const stories = storiesOf('Breadcrumbs', module);

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <h2>Главная страница</h2>
   },
   {
      path: '/example',
      exact: true,
      main: () => <h2>Активная страница</h2>
   }
];

stories.addDecorator((story) => (
   <MemoryRouter initialEntries={['/example']}>{story()}</MemoryRouter>
));

stories.add(
   'Breadcrumbs',
   () => (
      <div>
         <Breadcrumbs
            breadcrumbs={[
               {
                  link: '/',
                  text: 'Главная'
               },
               {
                  text: 'Активная'
               }
            ]}
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

            Компонент-контейнер хлебных крошек (Breadcrumb).

            По умолчанию последняя хлебная крошка в массиве будет активной, поэтому атрибут active не нужно передавать
            в последний элемент.

            //TODO: Сюда должен будет входить нереализованный еще компонент - строка глобального поиска по системе.
            Естественно, также пропсы для конфигурирования этого компонента-поиска.

            ~~~js
            <Breadcrumbs breadcrumbs={
                           [{
                              link: "/",
                              text: "Главная"
                           }, {
                              text: "Активная"
                           }]
                        }/>
            ~~~
         `,
         propTables: [Breadcrumbs]
      }
   }
);
