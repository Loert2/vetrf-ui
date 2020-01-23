import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import { text } from '@storybook/addon-knobs';
import Button from '../../buttons/Button/Button';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

const stories = storiesOf('Page', module);

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
   'Page',
   () => (
      <div>
         <Page
            title={text('title', 'Заголовок сайта')}
            breadcrumbs={[
               {
                  link: '/',
                  text: 'Главная'
               },
               {
                  text: 'Активная'
               }
            ]}
            header={text('header', 'Заголовок')}
            toolbar={<Button className="btn btn-primary btn-minier pull-right" text="Кнопка" />}
            subHeader={text('subHeader', 'Подзаголовок')}
            additionalInfo={<small>Дополнительный компонент</small>}
            secondLineInfo={<h6>Компонент для второй строки</h6>}>
            {text('children', 'Тут может быть ваш контент.')}
         </Page>
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

             Компонент-контейнер страницы. Включает в себя title страницы, хлебные крошки, заголовок и подзаголовок страницы, toolbar, два дополнительных компонента.

             title не отображается в storybook. Смотрите его в верстке в теге <title>.

             Для демонстрации работы breadcrumbs реализована простая функция маршрутизации.
             При переходе на главную страницу по ссылке меняется надпись после компонента.

             ### Story Source
             ***

             ~~~jsx
             <Page
                title="Заголовок сайта"
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
                toolbar={<Button className="btn btn-primary btn-minier pull-right" text="Кнопка" />}
                subHeader="Подзаголовок"
                additionalInfo={<small>Дополнительный компонент</small>}
                secondLineInfo={<h6>Компонент для второй строки</h6>}
             >
                Тут может быть ваш контент.
             </Page>
             ~~~
          `,
         propTables: [Page],
         source: false
      }
   }
);

stories.add(
   'Page without toolbar',
   () => (
      <div>
         <Page
            title="Заголовок сайта"
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
            subHeader="Подзаголовок">
            Тут может быть ваш контент.
         </Page>
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

             Компонент-контейнер страницы. Включает в себя хлебные крошки, заголовок и подзаголовок страницы.

             ### Story Source
             ***

             ~~~jsx
             <Page
                title="Заголовок сайта"
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
                subHeader="Подзаголовок"
             >
                Тут может быть ваш контент.
             </Page>
             ~~~
          `,
         propTables: [Page],
         source: false
      }
   }
);

stories.add(
   'Page without breadcrumbs, toolbar',
   () => (
      <Page title="Заголовок сайта" header="Заголовок" subHeader="Подзаголовок">
         Тут может быть ваш контент.
      </Page>
   ),
   {
      info: {
         inline: true,
         text: `
             ### Notes

             Компонент-контейнер страницы. Включает в себя заголовок и подзаголовок страницы.

             ### Story Source
             ***

             ~~~jsx
             <Page title="Заголовок сайта" header="Заголовок" subHeader="Подзаголовок">
                Тут может быть ваш контент.
             </Page>
             ~~~
          `,
         propTables: [Page],
         source: false
      }
   }
);

stories.add(
   'Page without header, toolbar',
   () => (
      <div>
         <Page
            title="Заголовок сайта"
            breadcrumbs={[
               {
                  link: '/',
                  text: 'Главная'
               },
               {
                  text: 'Активная'
               }
            ]}>
            Тут может быть ваш контент.
         </Page>
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

             Компонент-контейнер страницы. Включает в себя хлебные крошки.

             ### Story Source
             ***

             ~~~jsx
             <Page
                title="Заголовок сайта"
                breadcrumbs={[
                   {
                      link: '/',
                      text: 'Главная'
                   },
                   {
                      text: 'Активная'
                   }
                ]}
             >
                Тут может быть ваш контент.
             </Page>
             ~~~
          `,
         propTables: [Page],
         source: false
      }
   }
);
