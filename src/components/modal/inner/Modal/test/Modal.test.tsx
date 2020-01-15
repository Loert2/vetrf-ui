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
         <Modal children="Тут может быть ваш контент." width="200px" isVisible={true} />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render children correctly', () => {
      const component = shallow(<Modal children="Тут может быть ваш контент." isVisible={true} />);

      expect(component.text()).toEqual('Тут может быть ваш контент.');
   });

   // TODO: по хорошему надо проверить на видимость, но так и не нашёл способа пока что.
   it('with isVisible prop should has class show', () => {
      const component = shallow(<Modal children="Тут может быть ваш контент." isVisible={true} />);

      expect(component.find('div').first().hasClass('show')).toEqual(true);
      expect(component.find('div').first().hasClass('hide')).toEqual(false);
   });

   it('without isVisible prop should has class hide', () => {
      const component = shallow(<Modal children="Тут может быть ваш контент." isVisible={false} />);

      expect(component.find('div').first().hasClass('hide')).toEqual(true);
      expect(component.find('div').first().hasClass('show')).toEqual(false);
   });
});
