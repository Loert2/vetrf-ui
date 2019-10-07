import PropTypes from 'prop-types';
import React from 'react';
import classSet from 'classnames';

const PageButton = ({ active, disable, hidden, changePage, children }) => {
   const classes = classSet({
      active: active,
      disabled: disable,
      hidden: hidden,
      'page-item': true
   });
   return (
      <li className={classes}>
         <a
            onClick={(e) => {
               e.preventDefault();
               changePage(e.currentTarget.textContent);
            }}
            className="page-link">
            {children}
         </a>
      </li>
   );
};

PageButton.propTypes = {
   active: PropTypes.bool,
   disable: PropTypes.bool,
   hidden: PropTypes.bool,
   changePage: PropTypes.func,
   children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default PageButton;
