import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';

const Breadcrumb = ({ elem: { active, text, link } }) => (
   <li key={uniqueId()} className={active ? 'active' : ''}>
      {link ? <Link to={link}> {text} </Link> : <span> {text} </span>}
   </li>
);

Breadcrumb.propTypes = {
   elem: PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
      active: PropTypes.bool
   })
};

export default Breadcrumb;
