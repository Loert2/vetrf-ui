import PropTypes from 'prop-types';
import React, { Component } from 'react';

// TODO: This is old way. Rewrite it!
class NumberEditableForm extends Component<any> {
   state = {
      value: null,
      edit: false
   };
   input;

   constructor(props, context) {
      super(props, context);
      this.state = {
         value: props.value,
         edit: false
      };
      this.toggleEdit = this.toggleEdit.bind(this);
      this.cancel = this.cancel.bind(this);
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.saveHandler = this.saveHandler.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         value: nextProps.value,
         edit: nextProps.edit
      });
   }

   toggleEdit() {
      this.setState({
         edit: !this.state.edit,
         value: this.state.value
      });
   }

   onChangeInput(e) {
      const val = e.target.value;
      this.setState({
         edit: this.state.edit,
         value: val
      });
      this.props.onChange && this.props.onChange();
   }

   cancel() {
      this.setState({
         value: this.props.value,
         edit: !this.state.edit
      });
   }

   onBlurHandler() {
      setTimeout(() => {
         const saveBtn = document.getElementById('saveBtn');
         if (document.activeElement !== saveBtn) {
            this.cancel();
         }
      }, 1);
   }

   saveHandler() {
      this.setState({
         value: this.state.value,
         edit: !this.state.edit
      });
      this.props.save && this.props.save(this.state.value);
   }

   render() {
      const { edit, value } = this.state;
      const { viewReadOnlyFormatter } = this.props;
      if (edit) {
         return (
            <div className="editable-input">
               <form className="form-inline editable-wrap editable-number" role="form">
                  <div className="editable-controls form-group">
                     <input
                        type="number"
                        value={value ? value : 0}
                        onChange={this.onChangeInput}
                        ref={(input) => {
                           this.input = input;
                           input && input.focus();
                        }}
                        onBlur={this.onBlurHandler}
                        className="editable-has-buttons editable-input form-control input-sm"
                        min="0"
                     />
                     <span className="editable-buttons">
                        <button
                           id="saveBtn"
                           type="button"
                           className="btn btn-primary btn-sm"
                           onClick={this.saveHandler}>
                           <i className="fa fa-check" />
                        </button>
                        <button
                           type="button"
                           className="btn btn-default btn-sm"
                           onClick={this.cancel}>
                           <i className="fa fa-times" />
                        </button>
                     </span>
                  </div>
               </form>
            </div>
         );
      } else {
         const val = value ? value : '';
         if (this.props.readOnly) {
            return viewReadOnlyFormatter && viewReadOnlyFormatter(val);
         } else {
            return (
               <div className="editable-input">
                  <a onClick={this.toggleEdit} className="editable editable-click">
                     <span>&nbsp;&nbsp;&nbsp;{val}&nbsp;&nbsp;&nbsp;</span>
                  </a>
               </div>
            );
         }
      }
   }
}

(NumberEditableForm as any).propTypes = {
   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   edit: PropTypes.bool,
   readOnly: PropTypes.bool,
   onChange: PropTypes.func,
   save: PropTypes.func,
   viewReadOnlyFormatter: PropTypes.func
};

export default NumberEditableForm;
