import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// TODO: This is old way. Rewrite it!
const ItemLinkList = ({ className, href, text }) => (
   <li className={className}>
      <Link to={href}>{text}</Link>
   </li>
);

ItemLinkList.propTypes = {
   className: PropTypes.string,
   href: PropTypes.string,
   text: PropTypes.string
};

export default ItemLinkList;
