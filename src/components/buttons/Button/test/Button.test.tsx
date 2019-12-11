import React from 'react';
import Button from '../Button';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Button', () => {
   it('should display correctly', () => {
      const component = create(
         <Button
            text="Кнопка"
            color="pink"
            size="lg"
            icon="info"
            colorIcon="blue"
            sizeIcon={140}
            disabled
            onClick={jest.fn()}
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should onClick correctly called', () => {
      const onClick = jest.fn();
      const component = shallow(<Button sizeIcon={140} onClick={onClick} />);

      component.simulate('click');

      expect(onClick).toHaveBeenCalledTimes(1);
   });

   it('with disabled prop should not call onClick', () => {
      const onClick = jest.fn();
      const component = shallow(<Button disabled sizeIcon={140} onClick={onClick} />);

      component.simulate('click');

      expect(onClick).toHaveBeenCalledTimes(0);
   });

   it('should renders text', () => {
      const component = shallow(<Button text="Кнопка" onClick={jest.fn()} />);

      expect(component.text()).toEqual('Кнопка');
   });

   it('should renders icon', () => {
      const component = mount(<Button icon="info" onClick={jest.fn()} />);

      expect(component.find('i').length).toEqual(1);
   });

   it('with color prop should correctly form className', () => {
      const component = mount(<Button color="pink" onClick={jest.fn()} />);

      expect(component.find('button').hasClass('btn-pink')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const component = mount(<Button size="lg" onClick={jest.fn()} />);

      expect(component.find('button').hasClass('btn-lg')).toEqual(true);
   });

   it('with disabled prop should correctly form className', () => {
      const component = mount(<Button disabled onClick={jest.fn()} />);

      expect(component.find('button').hasClass('disabled')).toEqual(true);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<Button icon="info" onClick={jest.fn()} />);

      expect(component.find('i').hasClass('fa-info')).toEqual(true);
   });

   it('with sizeIcon prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <Button icon="info" sizeIcon={140} onClick={jest.fn()} />
      );
      const componentSmallerSizeIcon = mount(
         <Button icon="info" sizeIcon={80} onClick={jest.fn()} />
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-140')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-80')).toEqual(true);
   });

   it('with right-space prop should correctly form className', () => {
      const component = mount(<Button icon="info" text="Кнопка" onClick={jest.fn()} />);

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
