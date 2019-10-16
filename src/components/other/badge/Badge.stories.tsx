import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

const stories = storiesOf('Badge', module);

stories.add('Badge', () => <Badge colorClass="success" children="1" />, {
   info: {
      inline: true,
      text: `
            ### Notes

            Badge
         `,
      propTables: [Badge]
   }
});
