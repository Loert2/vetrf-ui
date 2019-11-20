import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonColor, ButtonSize } from './Button';
import { Size as SizeIcon } from '../../../utils/type/Size';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { text, select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

const stories = storiesOf('Button', module);

stories.add(
   'Button',
   () => (
      <Button
         text={text('text', 'Нажми на меня')}
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
            ] as SelectTypeOptionsProp<ButtonColor>,
            'success'
         )}
         size={select(
            'size',
            ['minier', 'xs', 'sm', 'lg', 'xlg', undefined] as SelectTypeOptionsProp<ButtonSize>,
            'xlg'
         )}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'bell')}
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
         onClick={() => console.log('click')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка с иконкой (опционально)

            Примечание: результат нажатия кнопки отображается в консоли браузера
         `,
         propTables: [Button]
      }
   }
);
