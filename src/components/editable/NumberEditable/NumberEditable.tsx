import PropTypes from 'prop-types';
import React, { Component } from 'react';

// TODO: This is old way. Rewrite it!
class NumberEditable extends Component<any> {
   state = {
      edit: false
   };

   constructor(props, context) {
      super(props, context);
      this.state = {
         edit: props.editId === props.id
      };
      this.onChangeInput = this.onChangeInput.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      this.setState({ edit: nextProps.editId === nextProps.id });
   }

   onChangeInput(e) {
      const val = e.target.value;
      const { onChange } = this.props;
      onChange && onChange(val);
   }

   render() {
      const { edit } = this.state;
      const { viewFormatter, value } = this.props;
      if (edit) {
         return (
            <div className="editable-wrap editable-number" role="form">
               <div className="editable-controls form-group">
                  <input
                     type="number"
                     value={value || 0}
                     onChange={this.onChangeInput}
                     className="editable-input form-control input-sm"
                     min="0"
                  />
               </div>
            </div>
         );
      } else {
         const val = value || '';
         if (viewFormatter) {
            return viewFormatter(val);
         }

         return (
            <div className="editable-input">
               <span>&nbsp;&nbsp;{val}&nbsp;&nbsp;</span>
            </div>
         );
      }
   }
}

(NumberEditable as any).propTypes = {
   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   onChange: PropTypes.func,
   id: PropTypes.string,
   editId: PropTypes.string,
   viewFormatter: PropTypes.func
};

export default NumberEditable;
