import React from 'react';
import Button from '../Button';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';
configure({ adapter: new Adapter() });
describe('Button', () => {
   it('Button is displayed correctly', () => {
      const component = create(
         <Button
            text="Кнопка"
            color="pink"
            size="lg"
            icon="info"
            colorIcon="blue"
            sizeIcon={140}
            disabled
            onClick={spy()}
         />
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
   });
   it('Button onClick correctly called', () => {
      const onClick = spy();
      const component = shallow(<Button sizeIcon={140} onClick={onClick} />);
      component.simulate('click');
      expect(onClick.callCount).toEqual(1);
   });
   it('Button onClick correctly called at disable', () => {
      const onClick = spy();
      const component = shallow(<Button disabled sizeIcon={140} onClick={onClick} />);
      component.simulate('click');
      expect(onClick.callCount).toEqual(0);
   });
   it('Button renders text', () => {
      const component = shallow(<Button text="Кнопка" onClick={spy()} />);
      expect(component.text()).toEqual('Кнопка');
   });
   it('Button renders icon', () => {
      const component = mount(<Button icon="info" onClick={spy()} />);
      expect(component.find('i').length).toEqual(1);
   });
   it('Button color correctly className', () => {
      const component = mount(<Button color="pink" onClick={spy()} />);
      expect(component.find('button').hasClass('btn-pink')).toEqual(true);
   });
   it('Button size correctly className', () => {
      const component = mount(<Button size="xlg" onClick={spy()} />);
      expect(component.find('button').hasClass('btn-xlg')).toEqual(true);
   });
   it('Button icon correctly className', () => {
      const component = mount(<Button icon="info" onClick={spy()} />);
      expect(component.find('i').hasClass('fa-info')).toEqual(true);
   });
   it('Button sizeIcon correctly className', () => {
      const componentBiggerSizeIcon = mount(<Button icon="info" sizeIcon={140} onClick={spy()} />);
      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-140')).toEqual(true);
      const componentSmallerSizeIcon = mount(<Button icon="info" sizeIcon={80} onClick={spy()} />);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-80')).toEqual(true);
   });
   it('Button right-space correctly className', () => {
      const component = mount(<Button icon="info" text="Кнопка" onClick={spy()} />);
      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
