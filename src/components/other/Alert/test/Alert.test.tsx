import React from 'react';
import { Alert } from '../Alert';
import { create } from 'react-test-renderer';

describe('Alert', () => {
   it('Alert is displayed correctly', () => {
      const component = create(<Alert />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
   it('Alert is correctly closing', () => {
      const component = create(<Alert closable />);
      component.root.findByType('button').props.onClick();
      expect(component).toMatchObject({});
   });
});
