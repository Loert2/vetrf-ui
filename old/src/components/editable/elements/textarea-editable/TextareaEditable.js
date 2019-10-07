import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TextareaEditable extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         edit: props.editId === props.id
      };
      this.onChangeTextarea = this.onChangeTextarea.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      this.setState({ edit: nextProps.editId === nextProps.id });
   }

   onChangeTextarea(e) {
      const val = e.target.value;
      const { onChange } = this.props;
      onChange && onChange(val);
   }

   render() {
      let { edit } = this.state;
      const { viewFormatter, value } = this.props;
      const fullWidth = { width: '100%' };
      if (edit) {
         return (
            <div className="editable-wrap editable-textarea" style={fullWidth}>
               <div className="editable-controls form-group">
                  <textarea
                     className="form-control"
                     value={value}
                     onChange={this.onChangeTextarea}
                  />
               </div>
            </div>
         );
      } else {
         let val = value ? value : '';
         if (viewFormatter) {
            return viewFormatter(val);
         } else {
            return <p>{val}</p>;
         }
      }
   }
}

TextareaEditable.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
   id: PropTypes.string,
   editId: PropTypes.string,
   viewFormatter: PropTypes.node
};

export default TextareaEditable;
