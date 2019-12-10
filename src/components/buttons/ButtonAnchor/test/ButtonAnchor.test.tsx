import React from 'react';
import ButtonAnchor from '../ButtonAnchor';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('ButtonAnchor', () => {
   it('should display correctly', () => {
      const component = create(
         <ButtonAnchor
            text="Ссылка на внешний сайт"
            color="purple"
            size="lg"
            icon="link"
            colorIcon="red"
            sizeIcon={140}
            disabled
            href="https://about.gitlab.com/"
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should renders href', () => {
      const component = mount(<ButtonAnchor href="https://about.gitlab.com/" />);

      expect(component.find('a').prop('href')).toBe('https://about.gitlab.com/');
   });

   it('should renders text', () => {
      const component = mount(
         <ButtonAnchor text="Ссылка на внешний сайт" href="https://about.gitlab.com/" />
      );

      expect(component.text()).toEqual('Ссылка на внешний сайт');
   });

   it('should renders icon', () => {
      const component = mount(<ButtonAnchor icon="link" href="https://about.gitlab.com/" />);

      expect(component.find('i').length).toEqual(1);
   });

   it('with color prop should correctly form className', () => {
      const component = mount(<ButtonAnchor color="grey" href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('btn-grey')).toEqual(true);
   });

   it('with size prop should correctly form className', () => {
      const component = mount(<ButtonAnchor size="xlg" href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('btn-xlg')).toEqual(true);
   });

   it('with disabled prop should correctly form className', () => {
      const component = mount(<ButtonAnchor disabled href="https://about.gitlab.com/" />);

      expect(component.find('a').hasClass('disabled')).toEqual(true);
   });

   it('with icon prop should correctly form className', () => {
      const component = mount(<ButtonAnchor icon="link" href="https://about.gitlab.com/" />);

      expect(component.find('i').hasClass('fa-link')).toEqual(true);
   });

   it('with sizeIcon prop should correctly form className', () => {
      const componentBiggerSizeIcon = mount(
         <ButtonAnchor icon="link" sizeIcon={175} href="https://about.gitlab.com/" />
      );
      const componentSmallerSizeIcon = mount(
         <ButtonAnchor icon="link" sizeIcon={40} href="https://about.gitlab.com/" />
      );

      expect(componentBiggerSizeIcon.find('i').hasClass('bigger-175')).toEqual(true);
      expect(componentSmallerSizeIcon.find('i').hasClass('smaller-40')).toEqual(true);
   });

   it('with right-space prop should correctly form className', () => {
      const component = mount(
         <ButtonAnchor icon="link" text="Кнопка-ссылка" href="https://about.gitlab.com/" />
      );

      expect(component.find('i').hasClass('right-space')).toEqual(true);
   });
});
