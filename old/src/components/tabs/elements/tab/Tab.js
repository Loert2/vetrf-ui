import PropTypes from 'prop-types';
import React from 'react';

const Tab = ({ name, selected, onSelect, label }) => (
   <li name={name} className={selected ? 'active' : ''}>
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
