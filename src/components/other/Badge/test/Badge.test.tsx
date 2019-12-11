import React from 'react';
import Badge from '../Badge';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Badge', () => {
   it('should display correctly', () => {
      const component = create(<Badge children="1" color="warning" />);

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render children correctly', () => {
      const component = shallow(<Badge children="1" />);

      expect(component.text()).toEqual('1');
   });

   it('with color prop should correctly form className', () => {
      const component = shallow(<Badge children="1" color="warning" />);

      expect(component.hasClass('badge-warning')).toEqual(true);
   });
});
