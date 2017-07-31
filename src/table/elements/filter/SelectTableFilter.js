import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Const from '../../elements/constants';

export default class SelectTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.timeout = null;
   }

   componentWillUnmount() {
      this.timeout && clearTimeout(this.timeout);
   }

   filter = (event) => {
      let filter;
      const { onChange, delay, name } = this.props;
      if (name){
         event.persist();
         filter = { [event.target.name]: event.target.value };
      } else {
         filter = event;
      }
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
         onChange(filter);
      },  delay || Const.FILTER_DELAY);
   };

   render () {
      const { placeholder, name, style, onEnter, className, valuesSelect } = this.props;
      let selectOptionList = null;
      if(valuesSelect && valuesSelect.length > 0){
          for (let i = 0; i < valuesSelect.length; i++){
              selectOptionList += <option>valuesSelect[{i}].value</option>
          }
      }
      return (
      <div>
         <select name={ name }
                 style={style}
                 onChange={ this.filter }
                 className={ className || "input-filter form-control" }>
             {selectOptionList}
         </select>
         {/*<input placeholder={ placeholder }*/}
                {/*name={ name }*/}
                {/*type="text"*/}
                {/*style={ style }*/}
                {/*onKeyPress={ onEnter }*/}
                {/*onChange={ this.filter }*/}
                {/*className={ className || "input-filter form-control" } />*/}
      </div>
      );
   }
}

SelectTableFilter.propTypes = {
   name: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   delay: PropTypes.number,
   onEnter: PropTypes.func,
   onChange: PropTypes.func,
   valuesSelect: PropTypes.object
};

