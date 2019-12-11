import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../../buttons/Button/Button';

// TODO: This is old way. Rewrite it!
class EditableActions extends Component<any> {
   state = {
      edit: false
   };

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
      this.setState({ edit: nextProps.editId === nextProps.id });
   }

   toggleEdit() {
      this.setState({ edit: !this.state.edit });
      this.props.toggleEdit && this.props.toggleEdit(this.props.id);
   }

   cancel() {
      if (this.state.edit) {
         this.setState({ edit: !this.state.edit });
         this.props.cancel && this.props.cancel();
      }
   }

   save() {
      const { save } = this.props;
      this.state.edit && save && save();
   }

   render() {
      if (this.state.edit) {
         // TODO: ну css-классы же лучше, одуматься и переписать
         const nowrap: any = { whiteSpace: 'nowrap' };
         const marginLeft = { marginLeft: '5px' };
         const btnPadding = { padding: '1px 7px' };
         return (
            <span style={nowrap}>
               <span>
                  <button
                     type="button"
                     onClick={this.props.save}
                     className="btn btn-primary btn-xs">
                     <i className="fa fa-check" />
                  </button>
               </span>
               <span style={marginLeft}>
                  <button
                     type="button"
                     onClick={this.cancel}
                     className="btn btn-default btn-xs"
                     style={btnPadding}>
                     <i className="fa fa-times" />
                  </button>
               </span>
            </span>
         );
      } else {
         return (
            <Button
               // tooltip="Редактировать" // TODO: тут должена быть кнопка-иконка
               onClick={this.toggleEdit}
               icon="fa fa-pencil bigger-130 no-padding-right"
               className="blue"
            />
         );
      }
   }
}

(EditableActions as any).propTypes = {
   cancel: PropTypes.func,
   save: PropTypes.func,
   toggleEdit: PropTypes.func,
   id: PropTypes.string,
   editId: PropTypes.string
};

export default EditableActions;
