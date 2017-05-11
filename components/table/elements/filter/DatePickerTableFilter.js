import React, { Component } from 'react';

import Const from 'components/table/elements/constants';
import DatePicker from 'components/form/elements/simple/date/DatePicker'

//todo: недоделано
export default class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
      this.timeout = null;
   }

   filter(event) {
      let filter;
      if (this.props.name){
         event.persist();
         filter = { [event.target.name]: event.target.value };
      } else {
         filter = event;
      }
      if (this.timeout) {
         clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
         this.props.onChange(filter);
      }, this.props.delay || Const.FILTER_DELAY);
   }

   render () {

      return (
         <DatePicker />
      )
   }
}
