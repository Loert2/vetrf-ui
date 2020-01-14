import React from 'react';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import ScrollToTop from './ScrollToTop';

const stories = storiesOf('ScrollToTop', module);

const routes = [
   {
      path: '/',
      exact: true,
      main: () => (
         <div>
            <h2>
               Гора
               <hr />
            </h2>
            <h4>
               Блестящая снегами в вышине,
               <br />
               Вершин твоих кто выше, кроме бога?
               <br />
               Я был мальчишкой, и хотелось мне
               <br />
               Тебя достать, твой белый снег потрогать.
               <br />
               <hr />
               Я на тебя глядел издалека
               <br />
               И шел вблизи, меж скал твоих петляя.
               <br />
               Порой казалось: ты уже близка,
               <br />
               И я смеялся, мула погоняя.
               <br />
               <hr />
               Не за горой уже конец пути,
               <br />
               Немало позади дорог и бедствий.
               <br />
               Я скоро вовсе не смогу идти,
               <br />
               А ты все так же далека, как в детстве.
               <br />
               <hr />
               Ты, как всегда, стоишь белым-бела,
               <br />
               И вечность, а не я, твой собеседник,
               <br />
               И так же, как в мой первый день была,
               <br />
               Ты будешь далека в мой день последний.
            </h4>
            <hr />
         </div>
      )
   },
   {
      path: '/author',
      exact: true,
      main: () => <h2>Кулиев Кайсын</h2>
   }
];

stories.addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add(
   'ScrollToTop',
   () => (
      <ScrollToTop>
         <Switch>
            {routes.map((route, index) => (
               <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
         </Switch>
         <Link to="/author" className="btn decoration-none btn-success btn-sm">
            Автор
         </Link>
      </ScrollToTop>
   ),
   {
      info: {
         inline: true,
         text: `
               ### Notes

                Прокручивать к верху страницы при переходе на новую.

                Для повторной демонстрации работы перезапустите страницу. Для примера реализации из Story Source брать только ScrollToTop, остальная часть для наглядной демонстрации.
                Оборачивает App.js. Пример вызова компонента-обертки:
                ~~~js
                <ScrollToTop>
                   Тут будет вся ваша страница.
                </ScrollToTop>
                ~~~
            `,
         propTables: null
      }
   }
);
