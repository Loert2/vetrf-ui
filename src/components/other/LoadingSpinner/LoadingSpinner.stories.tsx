import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { LoadingSpinner, Spin, IconSpinner } from './LoadingSpinner';
import { Size } from '../../../utils/type/Size';
import { Color } from '../../../utils/type/Color';

const stories = storiesOf('Loading', module);

stories.add(
   'LoadingSpinner',
   () => (
      <LoadingSpinner
         icon={select(
            'spinner',
            [
               'circle-o-notch',
               'cog',
               'gear',
               'refresh',
               'spinner',
               undefined
            ] as SelectTypeOptionsProp<IconSpinner>,
            'spinner'
         )}
         spin={select('spin', ['spin', 'pulse', undefined] as SelectTypeOptionsProp<Spin>, 'spin')}
         size={select(
            'size',
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
            ] as SelectTypeOptionsProp<Size>,
            150
         )}
         color={select(
            'color',
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
            ] as SelectTypeOptionsProp<Color>,
            'blue'
         )}
         text={text('text', 'Загрузка...')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Вращающийся спиннер
         `,
         propTables: [LoadingSpinner]
      }
   }
);
