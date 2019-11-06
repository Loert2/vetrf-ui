import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { Label, LabelColor, LabelSize, Arrowed } from './Label';
import { Size as SizeIcon } from '../../../utils/type/Size';
import { Color as ColorIcon } from '../../../utils/type/Color';

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
         colorIcon={select(
            'colorIcon',
            [
               'dark',
               'white',
               'red',
               'red2',
               'light-red',
               'blue',
               'light-blue',
               'green',
               'light-green',
               'orange',
               'orange2',
               'light-orange',
               'purple',
               'pink',
               'pink2',
               'brown',
               'grey',
               'light-grey',
               undefined
            ] as SelectTypeOptionsProp<ColorIcon>,
            'white'
         )}
         sizeIcon={select(
            'sizeIcon',
            [
               20,
               30,
               40,
               50,
               60,
               70,
               75,
               80,
               90,
               100,
               110,
               115,
               120,
               125,
               130,
               140,
               150,
               160,
               170,
               175,
               180,
               190,
               200,
               210,
               220,
               225,
               230,
               240,
               250,
               260,
               270,
               275,
               280,
               290,
               300,
               undefined
            ] as SelectTypeOptionsProp<SizeIcon>,
            100
         )}
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
