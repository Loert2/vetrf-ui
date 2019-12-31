import React from 'react';
import { PageHeader } from '../PageHeader';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('PageHeader', () => {
   it('should display correctly', () => {
      const component = create(
         <PageHeader
            header="Заголовок"
            headerClassName="col-xs-6 no-padding-left"
            subHeader="Подзаголовок"
            toolbar={<button>Кнопка тулбара</button>}
            toolbarClassName="col-xs-6 col-lg-4 no-padding-right toolbar-container"
            additionalInfo={<small>Дополнительный компонент</small>}
            secondLineInfo={<small>Второй дополнительный компонент</small>}
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('with headerClassName prop should correctly form className', () => {
      const component = mount(
         <PageHeader header="Заголовок" headerClassName="col-xs-6 no-padding-left" />
      );

      expect(
         component
            .find('div')
            .at(1)
            .hasClass('col-xs-6 no-padding-left')
      ).toEqual(true);
   });

   it('with toolbar prop should correctly form headerClassName', () => {
      const component = mount(
         <PageHeader header="Заголовок" toolbar={<button>Кнопка тулбара</button>} />
      );

      expect(
         component
            .find('div')
            .at(1)
            .hasClass('col-xs-12 no-padding-left col-lg-8')
      ).toEqual(true);
   });

   it('should render toolbar correctly', () => {
      const component = mount(
         <PageHeader header="Заголовок" toolbar={<button>Кнопка тулбара</button>} />
      );

      expect(component.find('button').length).toEqual(1);
   });

   it('with toolbarClassName prop should correctly form className', () => {
      const component = mount(
         <PageHeader
            header="Заголовок"
            toolbar={<button>Кнопка тулбара</button>}
            toolbarClassName="col-xs-6 col-lg-4 no-padding-right toolbar-container"
         />
      );

      expect(
         component
            .find('div')
            .at(2)
            .hasClass('col-xs-6 col-lg-4 no-padding-right toolbar-container')
      ).toEqual(true);
   });

   it('should render subHeader correctly', () => {
      const component = mount(<PageHeader header="Заголовок" subHeader="Подзаголовок" />);

      expect(component.find('small').length).toEqual(1);
   });

   it('should render additionalInfo correctly', () => {
      const component = mount(
         <PageHeader
            header="Заголовок"
            additionalInfo={<small>Первый дополнительный компонент</small>}
         />
      );

      expect(component.find('small').length).toEqual(1);
   });

   it('should render secondLineInfo correctly', () => {
      const component = mount(
         <PageHeader
            header="Заголовок"
            secondLineInfo={<small>Второй дополнительный компонент</small>}
         />
      );

      expect(component.find('small').length).toEqual(1);
   });

   it('should render text header correctly', () => {
      const component = mount(<PageHeader header="Заголовок" />);

      expect(component.find('h1').text()).toEqual('Заголовок');
   });

   it('should render text subHeader correctly', () => {
      const component = mount(<PageHeader header="Заголовок" subHeader="Подзаголовок" />);

      expect(
         component
            .find('small')
            .text()
            .trim()
      ).toEqual('Подзаголовок');
   });
});
