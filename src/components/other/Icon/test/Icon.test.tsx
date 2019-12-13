import React from 'react';
import { Icon } from '../Icon';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Icon', () => {
   it('should display correctly', () => {
      const component = create(<Icon icon="coffee" size={140} color="purple" />);

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('with icon prop should correctly form className', () => {
      const component = shallow(<Icon icon="coffee" />);

      expect(component.hasClass('fa-coffee')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const componentBiggerSize = mount(<Icon icon="info" size={200} />);
      const componentSmallerSize = mount(<Icon icon="info" size={20} />);

      expect(componentBiggerSize.find('i').hasClass('bigger-200')).toEqual(true);
      expect(componentSmallerSize.find('i').hasClass('smaller-20')).toEqual(true);
   });

   it('with color prop should correctly form className', () => {
      const component = shallow(<Icon icon="coffee" color="purple" />);

      expect(component.hasClass('purple')).toEqual(true);
   });
});
