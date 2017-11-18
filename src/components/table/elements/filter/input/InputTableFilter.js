import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Const from '../../constants/index';

class InputTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
      this.timeout = null;
   }

   componentWillUnmount() {
      this.timeout && clearTimeout(this.timeout);
   }

   filter(event) {
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
   }

   render () {
      const { placeholder, name, style, onEnter, className } = this.props;
      return (
         <input placeholder={ placeholder }
                name={ name }
                type="text"
                style={ style }
                onKeyPress={ onEnter }
                onChange={ this.filter }
                className={ className || "input-filter form-control" } />
      );
   }
}

InputTableFilter.propTypes = {
   placeholder: PropTypes.string,
   name: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   delay: PropTypes.number,
   onEnter: PropTypes.func,
   onChange: PropTypes.func
};

export default InputTableFilter;
