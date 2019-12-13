import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';
import { select } from '@storybook/addon-knobs';

const stories = storiesOf('Badge', module);

stories.add('Badge', () =>
   <Badge color={
      select(
         'color', [
            'grey',
            'success',
            'warning',
            'danger',
            'info',
            'purple',
            'inverse',
            'pink',
            'yellow'
         ],
         'success')
   }>1</Badge>, {
   info: {
      inline: true,
      text: `
            ### Notes

            Badge
         `,
      propTables: [Badge]
   }
});
