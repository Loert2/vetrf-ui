import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, MassageType } from './Alert';
import { select, object, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

const stories = storiesOf('Alert', module);

stories.add(
   'Alert',
   () => (
      <Alert
         massageType={select(
            'massageType',
            ['info', 'danger', 'success', 'warning', undefined] as SelectTypeOptionsProp<
               MassageType
            >,
            'info'
         )}
         children={object('children', 'Сообщение выведено')}
         closable={boolean('closable', true, 'Other')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Вывод сообщения, требующего внимания пользователя.

            Внимание!!! При закрытии сообщения для его повторного появления перезапустите страницу.
         `,
         propTables: [Alert]
      }
   }
);
