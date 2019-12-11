import PropTypes from 'prop-types';
import React from 'react';

// TODO: This is old way. Rewrite it!
const Tab = ({ name, selected, onSelect, label }) => (
   <li className={selected && 'active'}>
      <a onClick={() => onSelect && onSelect(name)}>{label}</a>
   </li>
);

Tab.propTypes = {
   selected: PropTypes.bool,
   name: PropTypes.string,
   label: PropTypes.string,
   onSelect: PropTypes.func
};

export default Tab;
