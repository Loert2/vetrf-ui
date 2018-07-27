import PropTypes from 'prop-types';
import React from 'react';

const HeaderModal = ({ className, onClose, title }) => (
   <div className={className || 'modal-header'}>
      <button type="button" className="close" onClick={onClose}>
         &times;
      </button>
      <h4 className="modal-title">{title}</h4>
   </div>
);

HeaderModal.propTypes = {
   title: PropTypes.string,
   className: PropTypes.string,
   onClose: PropTypes.func
};

export default HeaderModal;
