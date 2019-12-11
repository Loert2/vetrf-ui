import React from 'react';
import { Label } from '../Label';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Label', () => {
   it('should display correctly', () => {
      const component = create(
         <Label
            text="Текст"
            color="grey"
            size="lg"
            arrowedRight="arrowed-in"
            arrowedLeft="arrowed"
            icon="exclamation-triangle"
            colorIcon="light-blue"
            sizeIcon={160}
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render text correctly', () => {
      const component = shallow(<Label text="Текст" />);

      expect(component.text()).toEqual('Текст');
   });

   it('with color prop should correctly form className', () => {
      const component = shallow(<Label color="grey" />);

      expect(component.hasClass('label-grey')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const component = shallow(<Label size="lg" />);

      expect(component.hasClass('label-lg')).toEqual(true);
   });

   it('with arrowedRight prop should correctly form className', () => {
      const component = shallow(<Label arrowedRight="arrowed-in" />);

      expect(component.hasClass('arrowed-in-right')).toEqual(true);
   });

   it('with arrowedLeft prop should correctly form className', () => {
      const component = shallow(<Label arrowedLeft="arrowed" />);

      expect(component.hasClass('arrowed')).toEqual(true);
   });

   it('should render icon correctly', () => {
      const component = mount(<Label icon="exclamation-triangle" />);

      expect(component.find('i').length).toEqual(1);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<Label icon="exclamation-triangle" />);

      expect(component.find('i').hasClass('fa-exclamation-triangle')).toEqual(true);
   });

   it('with sizeIcon prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(<Label icon="info" sizeIcon={180} />);
      const componentSmallerSizeIcon = mount(<Label icon="info" sizeIcon={60} />);

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-180')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-60')).toEqual(true);
   });

   it('with right-space prop should correctly form className', () => {
      const component = mount(<Label icon="exclamation-triangle" text="Кнопка" />);

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
