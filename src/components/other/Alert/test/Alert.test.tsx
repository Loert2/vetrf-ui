import React from 'react';
import { Alert } from '../Alert';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Alert', () => {
   it('should displayed correctly', () => {
      const component = create(<Alert children="Сообщение выведено" massageType="info" closable />);

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should call onClick correctly', () => {
      const component = mount(<Alert children="Сообщение выведено" closable />);

      component.find('button.close').simulate('click');

      expect(component).toEqual({});
   });

   it('should render children correctly', () => {
      const component = shallow(<Alert children="Сообщение выведено" />);

      expect(component.text()).toEqual('Сообщение выведено');
   });

   it('should render button-close correctly', () => {
      const component = mount(<Alert children="Сообщение выведено" closable />);

      expect(component.find('button.close').length).toEqual(1);
   });

   it('with massageType prop should correctly form className', () => {
      const component = mount(<Alert children="Сообщение выведено" massageType="info" />);

      expect(component.find('div.alert').hasClass('alert-info')).toEqual(true);
   });
});
