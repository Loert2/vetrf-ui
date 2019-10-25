import React from 'react';
import { Icon } from '../Icon';
import { create } from 'react-test-renderer';

describe('Icon', () => {
   it('Icon is displayed correctly', () => {
      const component = create(<Icon icon="coffee" />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
