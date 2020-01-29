import React from 'react';
import ConfirmActionButton from '../ConfirmActionButton';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

describe('ConfirmActionButton', () => {
   it('should displayed correctly without modal window', () => {
      const component = create(
         <ConfirmActionButton
            buttonText="Удалить запись"
            buttonColor="danger"
            buttonSize="sm"
            icon="trash"
            iconColor="white"
            iconSize={100}
            tooltip="?"
         />
      );

      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should displayed correctly with modal window', () => {
      const component = create(
         <ConfirmActionButton
            buttonText="Удалить запись"
            buttonColor="danger"
            buttonSize="sm"
            icon="trash"
            iconColor="white"
            iconSize={100}
            tooltip="?"
            confirmHeaderText="Подтвердить удаление"
            confirmBodyContent="Вы уверены что хотите удалить запись?"
            onConfirm={jest.fn()}
         />
      );

      component.root.findByType('button').props.onClick();
      const json = component.toJSON();

      expect(json).toMatchSnapshot();
   });

   it('should render button`s text correctly buttons', () => {
      const component = mount(<ConfirmActionButton buttonText="Удалить запись" className="open" />);

      expect(component.find('button.open').text()).toEqual('Удалить запись');
   });

   it('should render button`s tooltip prop correctly ', () => {
      const component = mount(<ConfirmActionButton tooltip="?" />);

      expect(component.find('span').prop('data-tip')).toEqual('?');
   });

   it('should render modal headerText prop correctly', () => {
      const component = mount(
         <ConfirmActionButton confirmHeaderText="Подтвердить удаление" className="open" />
      );

      component.find('button.open').simulate('click');

      expect(component.find('h4.modal-title').text()).toEqual('Подтвердить удаление');
   });

   it('should render modal bodyContent prop correctly', () => {
      const component = mount(
         <ConfirmActionButton
            confirmBodyContent="Вы уверены что хотите удалить запись?"
            className="open"
         />
      );

      component.find('button.open').simulate('click');

      expect(component.find('div.col-xs-12').text()).toEqual(
         'Вы уверены что хотите удалить запись?'
      );
   });

   it('should handleClick correctly called and should correctly form class show for concealment component', () => {
      const checkOpenModal = (toggleModal) => {
         toggleModal && toggleModal();
      };
      const component = mount(
         <ConfirmActionButton checkOpportunityToOpenModal={checkOpenModal} className="open" />
      );

      component.find('button.open').simulate('click');

      expect(component.find('div.modal').hasClass('show')).toEqual(true);
      expect(component.find('div.modal').hasClass('hide')).toEqual(false);
   });

   it('should correctly form class in for concealment component', () => {
      const component = mount(<ConfirmActionButton className="open" />);

      component.find('button.open').simulate('click');

      expect(component.find('div.modal-backdrop').hasClass('in')).toEqual(true);
      expect(component.find('div.modal-backdrop').hasClass('fade')).toEqual(false);
   });

   it('should confirmBtn correctly called', () => {
      const onClick = jest.fn();
      const component = mount(<ConfirmActionButton onConfirm={onClick} className="open" />);

      component.find('button.open').simulate('click');
      component.find('button.btn.btn-danger').simulate('click');

      expect(onClick).toHaveBeenCalledTimes(1);
   });
});
