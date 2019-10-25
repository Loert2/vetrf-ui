import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import { select, object } from '@storybook/addon-knobs';

const stories = storiesOf('Icon', module);

stories.add(
   'Icon',
   () => (
      <Icon
         icon={object('icon', 'spinner')}
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
               'light-grey'
            ],
            'blue'
         )}
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
               300
            ],
            200
         )}
         spin={select('spin', ['spin', 'pulse', ' '], 'spin')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Icon
         `,
         propTables: [Icon]
      }
   }
);
