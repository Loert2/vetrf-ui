import React from 'react';
import PropTypes from 'prop-types';

// TODO: This is old way. Rewrite it!
const FileInput = (props) => (
   <input
      type="file"
      autoComplete="off"
      name={props.name}
      id={props.id}
      value={props.value}
      style={props.style}
      disabled={props.disabled || ''}
      onKeyPress={(e) => (e.which === 10 || e.which === 13) && props.onEnter && props.onEnter()}
      onChange={
         props.name ? props.onChange : (e) => props.onChange && props.onChange(e.target.files[0])
      }
      className={props.className}
      placeholder={props.placeholder}
   />
);

FileInput.propTypes = {
   value: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default FileInput;
