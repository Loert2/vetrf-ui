import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import {
   SizeOption,
   ColorOption,
   SizeButtonOption,
   ColorButtonOption
} from '../../../utils/stories/options';
import { text, select, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);

stories.add(
   'Button',
   () => (
      <Button
         text={text('text', 'Нажми на меня')}
         color={select('color', ColorButtonOption, 'success')}
         size={select('size', SizeButtonOption, 'sm')}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'bell')}
         colorIcon={select('colorIcon', ColorOption, 'white')}
         sizeIcon={select('sizeIcon', SizeOption, 100)}
         onClick={() => console.log('click')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка с иконкой (опционально)

            Примечание: для демонстрации работы нажатия кнопки результат отображается в консоли браузера
         `,
         propTables: [Button]
      }
   }
);
