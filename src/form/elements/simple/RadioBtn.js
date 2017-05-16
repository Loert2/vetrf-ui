import React from 'react';
import PropTypes from 'prop-types';

const RadioBtn = (props) => (
   <label>
      <input type="radio"
             id={ props.id }
             name={ props.name }
             value={ props.value }
             style={ props.style }
             disabled={ props.disabled }
             checked={ props.checked }
             onKeyPress={ e => (e.which === 10 || e.which === 13) && props.onEnter && props.onEnter() }
             onChange={(e) => props.onChange && props.onChange(e.target.value) }
             className={ props.className } />
      <span className="lbl">
         &nbsp;{ props.text }
      </span>
   </label>
);

RadioBtn.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   checked: PropTypes.bool,
   name: PropTypes.string,
   id: PropTypes.string,
   text: PropTypes.string,
   style: PropTypes.object,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default RadioBtn;