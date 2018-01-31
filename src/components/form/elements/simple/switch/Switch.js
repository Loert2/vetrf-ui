import React from 'react';
import PropTypes from 'prop-types';

const Switch = (props) => (
   <label>
      <input type="checkbox"
             id={ props.id }
             name={ props.name }
             value={ props.value }
             style={ props.style }
             disabled={ props.disabled || "" }
             onChange={ props.name ? props.onChange : (e) => props.onChange && props.onChange(e.target.checked) }
             className={ props.className || "ace ace-switch ace-switch-4" } />
      <span className="lbl" data-lbl={ props.text } />
   </label>
);

Switch.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   name: PropTypes.string,
   id: PropTypes.string,
   text: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default Switch;