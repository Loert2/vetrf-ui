import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalDialog from './ModalDialog';
import { MemoryRouter } from 'react-router-dom';
import { text, object } from '@storybook/addon-knobs';
import useToggle from '../../../utils/hooks/useToggle';

const stories = storiesOf('ModalDialog', module);

stories.add(
   'ModalDialog',
   () => {
      const [isVisible, toggleModal] = useToggle(true);
      return (
         <MemoryRouter initialEntries={['/']}>
            {isVisible && (
               <ModalDialog
                  header={text('header', 'Отправка сообщения в консоль браузера')}
                  children={object(
                     'children',
                     'Вы уверены, что хотите подтвердить отправку сообщения?'
                  )}
                  onClose={toggleModal}
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
            )}
            <button type="button" className="btn btn-success" onClick={toggleModal}>
               Открыть модальное окно
            </button>
         </MemoryRouter>
      );
   },
   {
      info: {
         inline: true,
         text: `
             ### Notes

             Модальное окно с заготовленной нижней понелью с кнопками по умолчанию.

             Примечание:
             1. Button добавлена для возможности открытия модального окна после его закрытия;
             2. При нажатии на кнопку "Подтвердить" в косоли браузера выведется сообщение.

             ### Story Source
             ***

             ~~~jsx
             <ModalDialog
                header="Отправка сообщения в консоль браузера"
                onClose={toggleModal}
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
             >
                 Вы уверены, что хотите подтвердить отправку сообщения?
             </ModalDialog>
             ~~~
          `,
         propTables: [ModalDialog],
         source: false
      }
   }
);

stories.add(
   'ModalDialog wich CustomFooterModal',
   () => {
      const [isVisible, toggleModal] = useToggle(true);
      return (
         <div>
            {isVisible && (
               <ModalDialog
                  header="Заголовок"
                  children="Здесь может быть ваш контент"
                  onClose={toggleModal}
                  footer={
                     <button type="button" className="btn btn-primary">
                        Кнопка-заглушка
                     </button>
                  }
               />
            )}
            <button type="button" className="btn btn-success" onClick={toggleModal}>
               Открыть модальное окно
            </button>
         </div>
      );
   },
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Модальное окно с созданной вручную нижней понелью с кнопкой

            Примечание:
            1. Button добавлена для возможности открытия модального окна после его закрытия;

            ### Story Source
            ***

            ~~~jsx
            <ModalDialog
              header="Заголовок"
              onClose={toggleModal}
              footer={
                 <button type="button" className="btn btn-primary">
                    Кнопка-заглушка
                 </button>
              }
            >
                Здесь может быть ваш контент
            </ModalDialog>
            ~~~
         `,
         propTables: [ModalDialog],
         source: false
      }
   }
);
