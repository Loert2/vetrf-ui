import React from 'react';
import PropTypes from 'prop-types';

const TableLoadingBlock = ({ text, icon, style, backgroundClassName }) => (
   <div>
      <div className="animated loading-block" style={ style } >
         <h4><i className={ icon || "fa fa-spinner fa-spin bigger-220 blue" } /> { text || "Загрузка..." }</h4>
      </div>
      <div className={ backgroundClassName || "modal-backdrop fade in loading-background" } />
   </div>
);

TableLoadingBlock.propTypes = {
   text: PropTypes.string,
   icon: PropTypes.string,
   style: PropTypes.object,
   backgroundClassName: PropTypes.string
};

export default TableLoadingBlock;