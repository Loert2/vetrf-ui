import PropTypes from 'prop-types';
import React   from 'react';
import uniqueId from 'lodash/uniqueId';

import TabContent from './TabContent';

const TabContentList = ({ tabs, selectedName }) =>{
   const tabContentList = [];
   for (let i = 0; i < tabs.length; i++){
      tabContentList.push(
         <TabContent key={ tabs[i].name || uniqueId() }
                     content={ tabs[i].content }
                     selected={ selectedName === tabs[i].name } />
      );
   }

   return (
      <div className="tab-content">
         { tabContentList }
      </div>
   )
};

TabContentList.propTypes = {
   selectedName: PropTypes.string,
   tabs: PropTypes.arrayOf(
      PropTypes.shape({
         content: PropTypes.node,
         name: PropTypes.string,
         label: PropTypes.string
      })
   )
};

export default TabContentList;