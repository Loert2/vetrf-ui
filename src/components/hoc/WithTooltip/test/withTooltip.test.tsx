import React from 'react';
import withTooltip from '../withTooltip';
import { create } from 'react-test-renderer';

describe('withTooltip', () => {
   it('withTooltip is displayed correctly', () => {
      const LabelExample = () => {
         return <label>Наведи на меня</label>;
      };
      const WithTooltip = withTooltip(LabelExample);
      const component = create(<WithTooltip />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
});
