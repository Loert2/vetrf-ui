import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { Label, LabelColor, LabelSize, Arrowed } from './Label';
import { SizeOption, ColorOption } from '../../../utils/stories/options';

const stories = storiesOf('Label', module);

stories.add(
   'Label',
   () => (
      <Label
         text={text('text', 'success')}
         color={select(
            'color',
            [
               'info',
               'primary',
               'warning',
               'default',
               'success',
               'danger',
               'purple',
               'pink',
               'inverse',
               'grey',
               'light',
               'yellow',
               undefined
            ] as SelectTypeOptionsProp<LabelColor>,
            'success'
         )}
         size={select(
            'size',
            ['sm', 'lg', 'xlg', undefined] as SelectTypeOptionsProp<LabelSize>,
            'xlg'
         )}
         arrowedRight={select(
            'arrowedRight',
            ['arrowed', 'arrowed-in', undefined] as SelectTypeOptionsProp<Arrowed>,
            'arrowed'
         )}
         arrowedLeft={select(
            'arrowedLeft',
            ['arrowed', 'arrowed-in', undefined] as SelectTypeOptionsProp<Arrowed>,
            'arrowed-in'
         )}
         icon={text('icon', 'exclamation-triangle')}
         colorIcon={select('colorIcon', ColorOption, 'white')}
         sizeIcon={select('sizeIcon', SizeOption, 100)}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Цветная метка, ярлык. Возможно стреловидной формы
         `,
         propTables: [Label]
      }
   }
);
