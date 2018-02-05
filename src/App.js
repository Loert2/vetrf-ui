import React, { Component } from 'react';
import './App.css';
import Form from "./components/form/containers/Form";
import ComplexDateListFormGroup from "./components/form/elements/form-group/complex-date/ComplexDateListFormGroup";
import {Page, setIn} from "./components";

/**
 * Песочница
 * */

const formatList = [
   { id: "1f8833ef-0893-4716-be79-69aeaff2fd28", dateFormat: "DD.MM.YYYY", timeFormat: null,    view: "DD.MM.YYYY"},
   { id: "0de44f4a-d9e2-4302-b131-48d44e235f8c", dateFormat: "DD-MM-YYYY", timeFormat: null,    view: "DD-MM-YYYY"},
   { id: "02e2259a-ec37-4241-928e-f67f2d4efd6b", dateFormat: "DD/MM/YYYY", timeFormat: null,    view: "DD/MM/YYYY"},
   { id: "7483f9ba-ab73-4bb4-b374-7cea8e42998d", dateFormat: "MM/DD/YYYY", timeFormat: null,    view: "MM/DD/YYYY"},
   { id: "81b6b6bb-41ce-4b51-83ff-764522c731f0", dateFormat: "MM/YYYY",    timeFormat: null,    view: "MM/YYYY"},
   { id: "499b7b7b-f5ea-42ac-a579-40bae4a39060", dateFormat: "MM.YYYY",    timeFormat: null,    view: "MM.YYYY"},
   { id: "6be46130-29ae-4bf9-aed4-213c45f41b7c", dateFormat: "YYYY",       timeFormat: null,    view: "YYYY"},
   { id: "b6ff39df-637f-44c2-8524-de85d4de8677", dateFormat: "DD.MM.YYYY", timeFormat: "HH:mm", view: "DD.MM.YYYY HH:mm"},
   { id: "7935b61f-a87c-4deb-af75-2065de4d8ebf", dateFormat: "DD/MM/YYYY", timeFormat: "HH:mm", view: "DD/MM/YYYY HH:mm"},
   { id: "3fd70f77-fd17-423e-8559-6cec89d3504d", dateFormat: "MM/DD/YYYY", timeFormat: "HH:mm", view: "MM/DD/YYYY HH:mm"}
];

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
                                         listField="dateList"
                                         formatField="format"
                                         singleDateField="single"
                                         beginDateField="begin"
                                         endDateField="end"
                                         formatList={ formatList } />
            </Form>
         </Page>
      );
   }
}

export default App;
