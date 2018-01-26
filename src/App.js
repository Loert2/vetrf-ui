import React, { Component } from 'react';
import './App.css';
import Form from "./components/form/containers/Form";
import ComplexDateListFormGroup from "./components/form/elements/form-group/complex-date/ComplexDateListFormGroup";

/**
 * Песочница
 * */
class App extends Component {
   render() {
      return (
         <div className="main-content-inner">
            <div className="page-content">
               <div className="row">
                  <div className="col-xs-12">
                     <Form>
                        <ComplexDateListFormGroup labelText="Комплексная дата" />
                     </Form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
