import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalDialog from './ModalDialog';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { text, object } from '@storybook/addon-knobs';

const stories = storiesOf('ModalDialog', module);

const routesStory = [
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

stories.add(
   'ModalDialog',
   () => (
      <MemoryRouter initialEntries={['/']}>
         <ModalDialog
            header={text('header', 'Отправка сообщения в консоль браузера')}
            children={object('children', 'Вы уверены, что хотите подтвердить отправку сообщения?')}
            confirmBtn={{
               action: () => console.log('Вы подтвердили отправку'),
               text: 'Подтвердить',
               color: 'success',
               size: 'sm',
               icon: 'info'
            }}
            cancelBtn={{
               text: 'Вернуться',
               href: '/example',
               size: 'sm',
               icon: 'times'
            }}
         />
         <Switch>
            {routesStory.map((route, index) => (
               <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
         </Switch>
      </MemoryRouter>
   ),
   {
      info: {
         inline: true,
         text: `
             ### Notes
 
             Модальное окно с заготовленной нижней понелью с кнопками по умолчанию.

             Примечание:
             1. MemoryRouter тут только для демонстрации работы относительных ссылок.
             2. При нажатии на кнопку подтвердить в косоли браузера выведется сообщение.
             3. При нажатии на кнопку закрытия в нижней панели также происходит переход 
             по ссылке из-за чего меняется контент на странице.
             4. При закрытии модального окна для его повторного появления 
             перейдите в другую вкладку или перезапустите страницу.
          `,
         propTables: [ModalDialog]
      }
   }
);

stories.add(
   'ModalDialog wich CustomFooterModal',
   () => (
      <ModalDialog
         header="Заголовок"
         children="Здесь может быть ваш контент"
         footer={object(
            'footer',
            <button type="button" className="btn btn-primary">
               Кнопка-заглушка
            </button>
         )}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Модальное окно с созданной вручную нижней понелью с кнопкой

            Примечание:
            При закрытии модального окна для его повторного появления 
            перейдите в другую вкладку или перезапустите страницу.
         `,
         propTables: [ModalDialog]
      }
   }
);
