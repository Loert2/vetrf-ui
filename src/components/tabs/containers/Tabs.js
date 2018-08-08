import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TabList from '../elements/tab-list/TabList';
import TabContentList from '../elements/content-list/TabContentList';

export default class Tabs extends Component {
   constructor(props, context) {
      super(props, context);
      const { selectedName, tabs } = props;
      this.state = {
         selectedName: selectedName || (tabs && tabs.length > 0 && tabs[0].name) || ''
      };
      this.onSelect = this.onSelect.bind(this);
   }

   onSelect(name) {
      this.setState({ selectedName: name });
   }

   render() {
      const { tabs } = this.props;
      const { selectedName } = this.state;
      return (
         <div className="col-xs-12">
            <TabList tabs={tabs} onSelect={this.onSelect} selectedName={selectedName} />
            <TabContentList tabs={tabs} selectedName={selectedName} />
         </div>
      );
   }
}

Tabs.propTypes = {
   selectedName: PropTypes.string,
   tabs: PropTypes.arrayOf(
      PropTypes.shape({
         content: PropTypes.node,
         name: PropTypes.string,
         label: PropTypes.string
      })
   )
};
