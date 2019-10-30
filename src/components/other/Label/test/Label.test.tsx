import React from 'react';
import { Label } from '../Label';
import { create } from 'react-test-renderer';

describe('Label', () => {
   it('Label is displayed correctly', () => {
      const component = create(<Label icon="exclamation-triangle" />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
