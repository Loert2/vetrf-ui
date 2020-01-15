import React from 'react';
import Modal from '../Modal';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('Modal', () => {
   it('should displayed correctly', () => {
      const component = create(
         <Modal children="Тут может быть ваш контент." width="200px" isVisible />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render children correctly', () => {
      const component = shallow(<Modal children="Тут может быть ваш контент." />);

      expect(component.text()).toEqual('Тут может быть ваш контент.');
   });
});
