import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { create } from 'react-test-renderer';

describe('LoadingSpinner', () => {
   it('LoadingSpinner is displayed correctly', () => {
      const component = create(<LoadingSpinner />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
