import React, { Component } from 'react';
import './App.css';
import Form from "./components/form/containers/Form";
import ComplexDateListFormGroup from "./components/form/elements/form-group/complex-date/ComplexDateListFormGroup";
import {Page, setIn} from "./components";

/**
 * Песочница
 * */
class App extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         dateList: []
      };
      this.changeDate = this.changeDate.bind(this);
   }

   changeDate(value, path) {
      this.setState((oldState) => setIn(oldState, path, value));
   }

   render() {
      const breadcrumbs = [{
         home: true,
         active: true,
         text: "Главная"
      }];
      return (
         <Page header="Сложная дата" breadcrumbs={ breadcrumbs }>
            <Form>
               <ComplexDateListFormGroup labelText="Комплексная дата"
                                         getSingleDatePath={ (index) => `dateList[${index}].single` }
                                         getEndDatePath={ (index) => `dateList[${index}].end` }
                                         getBeginDatePath={ (index) => `dateList[${index}].begin` }
                                         getFormatPath={ (index) => `dateList[${index}].format` }
                                         onChangeDate={ this.changeDate }
                                         list={ this.state.dateList }
                                         formatField="format"
                                         singleDateField="single"
                                         beginDateField="begin"
                                         endDateField="end" />
            </Form>
         </Page>
      );
   }
}

export default App;
