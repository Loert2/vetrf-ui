import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TabContent = ({ content, selected }) => (
   <div className={classNames('tab-pane', selected ? 'active' : '')}>
      <div className="row">
         <div className="col-xs-12">{content}</div>
      </div>
   </div>
);

TabContent.propTypes = {
   selected: PropTypes.bool,
   content: PropTypes.node
};

export default TabContent;
