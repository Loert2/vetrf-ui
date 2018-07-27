import PropTypes from 'prop-types';
import React from 'react';

class Alert extends React.PureComponent {
   constructor() {
      super();
      this.state = {
         showAlert: true
      };
      this.closeAlert = this.closeAlert.bind(this);
   }

   closeAlert() {
      this.setState({ showAlert: false });
   }

   render() {
      const { id, className, closeButton, children } = this.props;
      if (this.state.showAlert) {
         return (
            <div id={id} className={className || 'alert alert-info'}>
               {closeButton && (
                  <button
                     type="button"
                     className="close"
                     onClick={this.closeAlert}>
                     <i className="ace-icon fa fa-times" />
                  </button>
               )}
               {children}
            </div>
         );
      } else {
         return null;
      }
   }
}

Alert.propTypes = {
   children: PropTypes.node,
   closeButton: PropTypes.bool,
   className: PropTypes.string,
   id: PropTypes.string
};

export default Alert;
