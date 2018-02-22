import React, { Component } from 'react';
import './App.css';
import { Page } from "./components";

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
