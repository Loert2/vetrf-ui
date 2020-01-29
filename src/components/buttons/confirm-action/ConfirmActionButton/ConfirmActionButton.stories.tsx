import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import ConfirmActionButton from './ConfirmActionButton';
import {
   ColorButtonOption,
   SizeButtonOption,
   ColorOption,
   SizeOption
} from '../../../../utils/stories/options';

const stories = storiesOf('ConfirmActionButton', module);

stories.add(
   'ConfirmActionButton',
   () => {
      return (
         <ConfirmActionButton
            buttonText={text('buttonText', 'Удалить запись')}
            buttonColor={select('buttonColor', ColorButtonOption, 'danger')}
            buttonSize={select('buttonSize', SizeButtonOption, 'sm')}
            isOnlyIconButton={boolean('isOnlyIconButton', false)}
            icon={text('icon', 'trash')}
            iconColor={select('iconColor', ColorOption, 'white')}
            iconSize={select('iconSize', SizeOption, 100)}
            tooltip={text('tooltip', '?')}
            disabled={boolean('disabled', false, 'Other')}
            confirmHeaderText={text('confirmHeaderText', 'Подтверждение удаления')}
            confirmBodyContent="Вы уверены что хотите удалить запись?"
            onConfirm={() => console.log('Вы удалили запись')}
            confirmBtnColor={select('confirmBtnColor', ColorButtonOption, 'danger')}
            confirmBtnSize={select('confirmBtnSize', SizeButtonOption, 'sm')}
            confirmBtnText={text('confirmBtnText', 'Удалить')}
            confirmBtnIcon={text('confirmBtnIcon', 'check')}
            confirmBtnDisabled={boolean('confirmBtnDisabled', false, 'Other')}
            closeAfterConfirm={boolean('closeAfterConfirm', true, 'Other')}
            cancelBtnSize={select('cancelBtnSize', SizeButtonOption, 'sm')}
            cancelBtnText={text('cancelBtnText', 'Отмена')}
            cancelBtnIcon={text('cancelBtnIcon', 'close')}
         />
      );
   },
   {
      info: {
         inline: true,
         text: `
             ### Notes

             Кнопка, по нажатию на которую открывается модальное окно с подтверждением действия

             Примечание:
             Для демонстрации работы нажатия кнопки "Удалить" в модальном окне результат отображается в консоли браузера
          `,
         propTables: [ConfirmActionButton]
      }
   }
);
