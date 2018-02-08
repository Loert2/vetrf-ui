import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) =>  (
   <input type={ props.type || "text" } autoComplete="off"
          name={ props.name }
          id={ props.id }
          maxLength={ props.maxLength }
          value={ props.value || "" }
          style={ props.style }
          autoFocus={ props.autoFocus }
          onFocus={ props.onFocus }
          disabled={ props.disabled || "" }
          onKeyUp={ props.onKeyUp }
          onKeyPress={ e => (e.which === 10 || e.which === 13) && props.onEnter ? props.onEnter() : props.onKeyPress && props.onKeyPress() }
          onChange={ (e) => props.onChange && props.onChange(e.target.value) }
          onClick={ props.onClick }
          className={ props.className }
          placeholder={ props.placeholder }/>
);

Input.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   type: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   onKeyUp: PropTypes.func,
   onKeyPress: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   className: PropTypes.string
};

export default Input;