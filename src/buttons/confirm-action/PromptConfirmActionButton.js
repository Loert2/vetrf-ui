import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmbeddedConfirmActionButton from './EmbeddedConfirmActionButton';
import Textarea from "../../form/elements/simple/Textarea";

class PromptConfirmActionButton extends Component {
   constructor(props, context) {
      super(props, context);
      const { textAreaValue } = this.props;
      this.state = {
         showModal: false,
         textAreaValue: textAreaValue || ""
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.onChangeTextArea = this.onChangeTextArea.bind(this);
   }

   toggleModal () {
      this.setState({ showModal: !this.state.showModal });
   };

   onChangeTextArea(text) {
      if (text !== this.state.textAreaValue) {
         const newState = update(this.state, {
            textAreaValue: { $set: text }
         });
         this.setState(newState);
      }
   }

   render () {
      const {
         id,
         className,
         icon,
         buttonText,
         tooltip,
         disabled,
         confirmHeaderText,
         confirmBodyText,
         onConfirm,
         confirmBtnText,
         confirmBtnClass,
         confirmBtnIcon,
         cancelBtnIcon,
         cancelBtnText,
         textAreaValue,
         textAreaPlaceholder,
         textAreaClassName
      } = this.props;

      return (
         <div className="inline" >
            <EmbeddedConfirmActionButton id={ id }
                                         className={ className }
                                         icon={ icon }
                                         buttonText={ buttonText }
                                         disabled={ disabled }
                                         tooltip={ tooltip }

            body={
               <Textarea value={ this.state.textAreaValue }
                             onChange={ this.onChangeTextArea }
                             id={ "idTextArea" }
                             placeholder={ textAreaPlaceholder }
                             className={ textAreaClassName || "form-control width-300" }/>

            }
            confirmHeaderText={ confirmHeaderText }
            confirmBodyText={ confirmBodyText }
            onConfirm={ onConfirm }
            onEnableConfirmBtn={  }
            disabledConfirmBtn={ true }
            confirmBtnClass={ confirmBtnClass }
            confirmBtnIcon={ confirmBtnIcon }
            cancelBtnIcon={ cancelBtnIcon }
            confirmBtnText={ confirmBtnText }
            cancelBtnText={ cancelBtnText }/>
         </div>
      )
   }
}

PromptConfirmActionButton.propTypes = {
   id: PropTypes.string,
   className: PropTypes.string,
   buttonText: PropTypes.string,
   body: PropTypes.node,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   tooltip: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   confirmBtnDisabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   icon: PropTypes.string,
   onConfirm: PropTypes.func
};

export default PromptConfirmActionButton;