import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import Tab from '../tab/Tab';

const TabList = ({ tabs, selectedName, onSelect }) => {
   const tabList = [];
   for (let i = 0; i < tabs.length; i++) {
      tabList.push(
         <Tab
            key={tabs[i].name || uniqueId()}
            name={tabs[i].name}
            onSelect={onSelect}
            label={tabs[i].label}
            selected={selectedName === tabs[i].name}
         />
      );
   }

   return <ul className="nav nav-tabs nav-justified">{tabList}</ul>;
};

TabList.propTypes = {
   selectedName: PropTypes.string,
   tabs: PropTypes.arrayOf(
      PropTypes.shape({
         content: PropTypes.node,
         name: PropTypes.string,
         label: PropTypes.string
      })
   ),
   onSelect: PropTypes.func
};

export default TabList;
