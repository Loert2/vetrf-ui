import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
/**
 * Компонет-обертка над input
 * если есть name, то в onChange передается сам event, иначе только его checked
 * */
// TODO: This is old way. Rewrite it!
const Checkbox = (props) => (
   <label>
      <input
         type="checkbox"
         id={props.id}
         name={props.name}
         value={props.value}
         style={props.style}
         disabled={props.disabled}
         onKeyPress={(e) => (e.which === 10 || e.which === 13) && props.onEnter && props.onEnter()}
         onChange={(e) => props.onChange && props.onChange(e.target.checked)}
         className={classNames('ace input-sm', props.className)}
         checked={props.value}
      />
      <span className="lbl padding-top-6">{props.text}</span>
   </label>
);

Checkbox.propTypes = {
   value: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   text: PropTypes.string,
   style: PropTypes.object,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   onKeyPress: PropTypes.func,
   className: PropTypes.string
};

export default Checkbox;
