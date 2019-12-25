import React from 'react';
import ScrollToTop from '../ScrollToTop';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('ScrollToTop', () => {
   it('should display correctly', () => {
      const component = create(
         <MemoryRouter initialEntries={['/']}>
            <ScrollToTop>
               <h2>Страница</h2>
            </ScrollToTop>
         </MemoryRouter>
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });
});
