import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

const stories = storiesOf('Badge', module);

stories.add('Badge', () => <Badge color="success">1</Badge>, {
   info: {
      inline: true,
      text: `
            ### Notes

            Badge
         `,
      propTables: [Badge]
   }
});
