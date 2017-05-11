import PropTypes from 'prop-types';
import React from 'react';

const BodyModal = ({ className, style, children }) => (
   <div className={ className || "modal-body" } style={ style }>
      <div className="row">
         <div className="col-xs-12">
            { children }
         </div>
      </div>
   </div>
);

BodyModal.propTypes = {
   style: PropTypes.object,
   className: PropTypes.string,
   children: PropTypes.node
};

export default BodyModal;
