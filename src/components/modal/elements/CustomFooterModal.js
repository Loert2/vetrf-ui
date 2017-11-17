import PropTypes from 'prop-types';
import React from 'react';

const CustomFooterModal = ({ className, children }) => (
   <div className={ className || "modal-footer" }>
      { children }
   </div>
);

CustomFooterModal.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default CustomFooterModal;
