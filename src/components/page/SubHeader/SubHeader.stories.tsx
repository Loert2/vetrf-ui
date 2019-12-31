import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubHeader, LevelType } from './SubHeader';
import { text, select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import Button from '../../buttons/Button/Button';
import { SizeOption, ColorOption } from '../../../utils/stories/options';

const stories = storiesOf('SubHeader', module);

stories.add(
   'SubHeader',
   () => (
      <SubHeader
         header={text('header', 'Подзаголовок')}
         level={select('level', [2, 3, 4, 5, 6, undefined] as SelectTypeOptionsProp<LevelType>, 5)}
         icon={text('icon', 'linux')}
         colorIcon={select('colorIcon', ColorOption, 'blue')}
         sizeIcon={select('sizeIcon', SizeOption, 100)}
         underline={boolean('underline', true, 'Other')}
         toolbar={<Button className="btn btn-primary btn-minier" text="Кнопка тулбара" />}
         description={text('description', 'Подпись')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Компонент подзаголовка.

            Сам заголовок представляет собой html заголовок 4-го уровня. Может содержать иконку,
            тулбар (идет сразу после подзаголовка) быть с нижней границей (по умолчанию нет).
            Кроме того снизу можно добавить какую-нибудь подпись.
         `,
         propTables: [SubHeader]
      }
   }
);
