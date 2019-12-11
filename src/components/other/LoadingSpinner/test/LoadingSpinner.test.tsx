import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('LoadingSpinner', () => {
   it('should display correctly', () => {
      const component = create(
         <LoadingSpinner icon="spinner" text="Загрузка..." color="brown" size={220} spin="spin" />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render text correctly', () => {
      const component = mount(<LoadingSpinner icon="spinner" text="Загрузка..." />);

      expect(component.find('span').text()).toEqual('Загрузка...');
   });

   it('with color prop should correctly form className', () => {
      const component = mount(<LoadingSpinner icon="spinner" color="brown" />);

      expect(component.find('span').hasClass('brown')).toEqual(true);
      expect(component.find('i').hasClass('brown')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(<LoadingSpinner icon="spinner" size={240} />);
      const componentSmallerSizeIcon = mount(<LoadingSpinner icon="spinner" size={70} />);

      expect(componentBiggerSizeIcon.find('span').hasClass('bigger-240')).toEqual(true);
      expect(componentSmallerSizeIcon.find('span').hasClass('smaller-70')).toEqual(true);
   });

   it('with spin prop should correctly form className', () => {
      const component = mount(<LoadingSpinner icon="spinner" spin="pulse" />);

      expect(component.find('i').hasClass('fa-pulse')).toEqual(true);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<LoadingSpinner icon="spinner" />);

      expect(component.find('i').hasClass('fa-spinner')).toEqual(true);
   });

   it('with right-space prop should correctly form className', () => {
      const component = mount(<LoadingSpinner icon="spinner" />);

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
