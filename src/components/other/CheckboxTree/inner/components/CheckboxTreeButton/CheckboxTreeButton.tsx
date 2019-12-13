import PropTypes from 'prop-types';
import React from 'react';

// TODO: This is old way. Rewrite it!
class CheckboxTreeButton extends React.PureComponent<any> {
   static propTypes = {
      children: PropTypes.node.isRequired,
      title: PropTypes.string
   };

   static defaultProps = {
      title: null
   };

   render() {
      const { children, title, ...props }: any = this.props;

      return (
         <button aria-label={title} title={title} type="button" {...props}>
            {children}
         </button>
      );
   }
}

export default CheckboxTreeButton;
