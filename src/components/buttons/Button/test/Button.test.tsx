import React from 'react';
import Button from '../Button';
import { create } from 'react-test-renderer';

describe('Button', () => {
   it('Button is displayed correctly', () => {
      const component = create(<Button onClick={() => console.log('click')} />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
