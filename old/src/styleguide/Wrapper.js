import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default class Wrapper extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="row">
               <div className="col-xs-12">{this.props.children}</div>
            </div>
         </BrowserRouter>
      );
   }
}
