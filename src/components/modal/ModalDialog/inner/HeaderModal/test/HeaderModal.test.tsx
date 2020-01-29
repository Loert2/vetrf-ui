import React from 'react';
import { HeaderModal } from '../HeaderModal';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('HeaderModal', () => {
   it('should displayed correctly', () => {
      const component = create(<HeaderModal title="Заголовок" onClose={jest.fn()} />);

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render title correctly', () => {
      const component = mount(<HeaderModal title="Заголовок" />);

      expect(component.find('h4.modal-title').text()).toEqual('Заголовок');
   });

   it('should onClick correctly called', () => {
      const onClick = jest.fn();
      const component = mount(<HeaderModal title="Заголовок" onClose={onClick} />);

      component.find('button.close').simulate('click');

      expect(onClick).toHaveBeenCalledTimes(1);
   });
});
