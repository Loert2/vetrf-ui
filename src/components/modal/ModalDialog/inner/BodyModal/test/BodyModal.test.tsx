import React from 'react';
import BodyModal from '../BodyModal';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('BodyModal', () => {
   it('should displayed correctly', () => {
      const component = create(<BodyModal children="Тут может быть ваш контент" />);

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render children correctly', () => {
      const component = shallow(<BodyModal children="Тут может быть ваш контент" />);

      expect(component.text()).toEqual('Тут может быть ваш контент');
   });
});
