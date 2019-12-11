import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import { select, text } from '@storybook/addon-knobs';
import { SizeOption, ColorOption } from '../../../utils/stories/options';

const stories = storiesOf('Icon', module);

stories.add(
   'Icon',
   () => (
      <Icon
         icon={text('icon', 'file')}
         color={select('color', ColorOption, 'blue')}
         size={select('size', SizeOption, 150)}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Иконка [Font Awesome v4.7](https://fontawesome.com/v4.7.0/icons/)
         `,
         propTables: [Icon]
      }
   }
);
