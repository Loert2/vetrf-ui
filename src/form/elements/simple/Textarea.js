import PropTypes from 'prop-types';
import React from 'react';

const Textarea = (props) => (
   <textarea type="text"
             id={ props.id }
             name={ props.name }
             value={ props.value || "" }
             style={ props.style }
             disabled={ props.disabled || "" }
             onChange={ e => props.onChange && props.onChange(e.target.value) }
             className={ props.className }
             placeholder={ props.placeholder } />
);

Textarea.propTypes = {
   value: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string,
   placeholder: PropTypes.string
};

export default Textarea;
