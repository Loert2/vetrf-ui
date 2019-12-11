import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

// TODO: This is old way. Rewrite it!
const TabContent = ({ content, selected }) => (
   <div className={classNames('tab-pane', { active: selected })}>
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
