import React from 'react';
import { SubHeader } from '../SubHeader';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('SubHeader', () => {
   it('should display correctly', () => {
      const component = create(
         <SubHeader
            className="lighter no-padding-left"
            header="Подзаголовок"
            level={5}
            icon="linux"
            colorIcon="blue"
            sizeIcon={100}
            description="Подпись"
            underline
            toolbar={<button>Кнопка тулбара</button>}
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('with underline prop should correctly form className', () => {
      const component = mount(<SubHeader header="Подзаголовок" icon="linux" underline />);

      expect(
         component
            .find('div')
            .at(1)
            .hasClass('widget-header-my header blue')
      ).toEqual(true);
   });

   it('should render description correctly', () => {
      const component = mount(
         <SubHeader header="Подзаголовок" icon="linux" description="Подпись" />
      );

      expect(component.find('p').length).toEqual(1);
   });

   it('with level prop should render header correctly', () => {
      const component = mount(<SubHeader header="Подзаголовок" icon="linux" level={5} />);

      expect(component.find('h5').length).toEqual(1);
   });

   it('with className prop should correctly form className', () => {
      const component = mount(
         <SubHeader header="Подзаголовок" icon="linux" className="lighter no-padding-left" />
      );

      expect(component.find('h4').hasClass('lighter no-padding-left')).toEqual(true);
   });

   it('should render text header correctly', () => {
      const component = mount(<SubHeader header="Подзаголовок" icon="linux" />);

      expect(
         component
            .find('h4')
            .text()
            .trim()
      ).toEqual('Подзаголовок');
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<SubHeader header="Подзаголовок" icon="linux" />);

      expect(component.find('i').hasClass('fa-linux')).toEqual(true);
   });

   it('with iconSize prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <SubHeader header="Подзаголовок" icon="linux" sizeIcon={200} />
      );
      const componentSmallerSizeIcon = mount(
         <SubHeader header="Подзаголовок" icon="linux" sizeIcon={50} />
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-200')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-50')).toEqual(true);
   });

   it('should render toolbar correctly', () => {
      const component = mount(
         <SubHeader header="Подзаголовок" icon="linux" toolbar={<button>Кнопка тулбара</button>} />
      );

      expect(component.find('button').length).toEqual(1);
   });
});
