import React from 'react';
import { Badge } from '../Badge';
import { create } from 'react-test-renderer';

describe('Badge', () => {
   it('Badge is displayed correctly when transmitting the body and color', () => {
      const component = create(<Badge color="warning">1</Badge>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
