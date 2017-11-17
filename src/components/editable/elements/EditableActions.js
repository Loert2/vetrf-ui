import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../../buttons/button/Button';

class EditableActions extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         edit: props.editId === props.id
      };
      this.toggleEdit = this.toggleEdit.bind(this);
      this.cancel = this.cancel.bind(this);
      this.save = this.save.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.editId !== nextProps.id){
         this.setState({ edit: false });
      } else {
         this.setState({ edit: true });
      }
   }

   toggleEdit() {
      this.setState({ edit: !this.state.edit });
      this.props.toggleEdit && this.props.toggleEdit(this.props.id);
   }

   cancel() {
      if (this.state.edit){
         this.setState({ edit: !this.state.edit });
         this.props.cancel && this.props.cancel();
      }
   }

   save() {
      const { save } = this.props;
      this.state.edit && save && save();
   }

   render() {
      if (this.state.edit){
         const nowrap = { whiteSpace: "nowrap" };
         const marginLeft = { marginLeft: "5px" };
         const btnPadding = { padding: "1px 7px" };
         return (
            <span style={ nowrap }>
               <span>
                  <button type="button"
                          onClick={ this.props.save }
                          className="btn btn-primary btn-xs">
                     <i className="fa fa-check"/>
                  </button>
               </span>
               <span style={ marginLeft }>
                  <button type="button"
                          onClick={ this.cancel }
                          className="btn btn-default btn-xs"
                          style={ btnPadding }>
                     <i className="fa fa-times" />
                  </button>
               </span>
            </span>
         );
      } else {
         return (
            <Button tooltip="Редактировать"
                    onClick={ this.toggleEdit }
                    icon="fa fa-pencil bigger-130 no-padding-right"
                    className="blue" />
         );
      }
   }
}

EditableActions.propTypes = {
   cancel: PropTypes.func,
   save: PropTypes.func,
   toggleEdit: PropTypes.func,
   id: PropTypes.string,
   editId: PropTypes.string
};

export default EditableActions;