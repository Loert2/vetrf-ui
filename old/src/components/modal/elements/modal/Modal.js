import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({ style, children, width }) => (
   <div>
      <div style={style} className="bootbox modal fade bootbox-prompt in">
         <div className="modal-dialog" style={{ width: width }}>
            <div className="modal-content">{children}</div>
         </div>
      </div>
      <div className="modal-backdrop fade in" />
   </div>
);

Modal.propTypes = {
   style: PropTypes.object,
   children: PropTypes.node,
   width: PropTypes.string
};

export default Modal;
