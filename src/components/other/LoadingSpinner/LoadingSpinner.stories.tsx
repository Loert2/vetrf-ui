import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { LoadingSpinner, Spin, IconSpinner } from './LoadingSpinner';
import { SizeOption, ColorOption } from '../../../utils/stories/options';

const stories = storiesOf('LoadingSpinner', module);

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
         size={select('size', SizeOption, 150)}
         color={select('color', ColorOption, 'blue')}
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
