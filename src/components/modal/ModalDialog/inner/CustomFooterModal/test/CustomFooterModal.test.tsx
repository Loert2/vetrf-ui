import React from 'react';
import CustomFooterModal from '../CustomFooterModal';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('CustomFooterModal', () => {
   it('should displayed correctly', () => {
      const component = create(
         <CustomFooterModal
            children="Тут может быть ваш контент."
            className="modal-footer bg-dark"
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render children correctly', () => {
      const component = shallow(<CustomFooterModal children="Тут может быть ваш контент." />);

      expect(component.text()).toEqual('Тут может быть ваш контент.');
   });
});
