import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonAnchor } from './ButtonAnchor';
import {
   SizeOption,
   ColorOption,
   SizeButtonOption,
   ColorButtonOption
} from '../../../utils/stories/options';
import { text, select, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('ButtonAnchor', module);

stories.add(
   'ButtonAnchor',
   () => (
      <ButtonAnchor
         href="https://about.gitlab.com/"
         text={text('text', 'Ссылка на внешний сайт')}
         color={select('color', ColorButtonOption, 'pink')}
         size={select('size', SizeButtonOption, 'sm')}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'link')}
         colorIcon={select('colorIcon', ColorOption, 'white')}
         sizeIcon={select('sizeIcon', SizeOption, 100)}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка-ссылка с иконкой (опционально). Только для использования в качестве стилизированной ссылки на внешний ресурс.
            Для кнопки-ссылки на внутренний ресурс (в приложение) воспользуйтесь компонентом ButtonLink, вместо данного.
            Для обычных кнопок используйте Button
         `,
         propTables: [ButtonAnchor]
      }
   }
);
