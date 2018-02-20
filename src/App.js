import React, { Component } from 'react';
import './App.css';
import Form from "./components/form/containers/Form";
import ComplexDateListFormGroup from "./components/form/elements/form-group/date/complex-date/ComplexDateListFormGroup";
import {deleteIn, Page, setIn} from "./components";
import {defaultFormat} from "./components/form/utils/moment-utils";

/**
 * Песочница
 * */
class App extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {};
   }

   render() {
      const breadcrumbs = [{
         home: true,
         active: true,
         text: "Главная"
      }];
      return (
         <Page header="Some header" breadcrumbs={ breadcrumbs }>

         </Page>
      );
   }
}

export default App;
