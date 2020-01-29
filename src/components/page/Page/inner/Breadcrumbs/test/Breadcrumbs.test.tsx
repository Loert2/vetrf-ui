import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

const breadcrumb = [
   {
      link: '/',
      text: 'Главная'
   }
];
const twoBreadcrumbs = [
   {
      link: '/',
      text: 'Главная'
   },
   {
      link: '/example',
      text: 'Активная'
   }
];

describe('Breadcrumbs', () => {
   it('should display correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumbs
               breadcrumbs={[
                  {
                     link: '/',
                     text: 'Главная'
                  },
                  {
                     text: 'Активная'
                  }
               ]}
            />
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should display right amount breadcrumbs', () => {
      const component = mount(
         <MemoryRouter initialEntries={['/']}>
            <Breadcrumbs breadcrumbs={twoBreadcrumbs} />
         </MemoryRouter>
      );

      const countBreadcrumbs =
         component.find('Link.breadcrumb__link').length + component.find('span').length;

      expect(twoBreadcrumbs).toHaveLength(countBreadcrumbs);
   });

   it.each([[breadcrumb], [twoBreadcrumbs]])(
      'in last breadcrumb with active prop should correctly renderer span',
      (arrayBreadcrumbs) => {
         const component = mount(
            <MemoryRouter initialEntries={['/']}>
               <Breadcrumbs breadcrumbs={arrayBreadcrumbs} />
            </MemoryRouter>
         );

         expect(
            component
               .find('li')
               .at(arrayBreadcrumbs.length - 1)
               .find('span.breadcrumb__active').length
         ).toEqual(1);
      }
   );
});
