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
             1. В StorySource основной компонент отображается только во время открытия;
             2. MemoryRouter добавлен для возможности добавления ссылок в кнопку cancelBtn;
             3. Button добавлена для возможности открытия модального окна после его закрытия; 
             4. При нажатии на кнопку подтвердить в косоли браузера выведется сообщение.
          `,
         propTables: [ModalDialog]
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
            При закрытии модального окна для его повторного появления
            перейдите в другую вкладку или перезапустите страницу.
         `,
         propTables: [ModalDialog]
      }
   }
);
