import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomActionButton from './CustomActionButton';
import Textarea from "../../form/elements/simple/Textarea";

class PromptConfirmActionButton extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         showModal: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.onEnableConfirmBtn = this.onEnableConfirmBtn.bind(this);
   }

   toggleModal () {
      this.setState({ showModal: !this.state.showModal });
   };

   onEnableConfirmBtn() {
      const { textAreaValue } = this.props;
      if (textAreaValue && textAreaValue.length > 0) {
         return true;
      }
      return false;
   };

   render () {
      const {
         id,
         className,
         icon,
         buttonText,
         tooltip,
         disabled,
         onConfirm,
         confirmHeaderText,
         confirmBodyText,
         confirmBtnText,
         confirmBtnClass,
         confirmBtnIcon,
         cancelBtnIcon,
         cancelBtnText,
         onChangeTextArea,
         textAreaValue,
         textAreaPlaceholder,
         textAreaClassName
      } = this.props;

      return (
         <div className="inline" >
            <CustomActionButton id={ id }
                                className={ className }
                                icon={ icon }
                                buttonText={ buttonText }
                                disabled={ disabled }
                                tooltip={ tooltip }
                                body={
                                   <Textarea value={ textAreaValue }
                                             onChange={ onChangeTextArea }
                                             id={ "idTextArea" }
                                             placeholder={ textAreaPlaceholder }
                                             className={ textAreaClassName || "form-control width-300" }/>
                                }
                                confirmHeaderText={ confirmHeaderText }
                                confirmBodyText={ confirmBodyText }
                                onConfirm={ onConfirm }
                                onEnableConfirmBtn={ this.onEnableConfirmBtn }
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
   cancelBtnIcon: PropTypes.string,
   confirmBtnText: PropTypes.string,
   cancelBtnText: PropTypes.string,
   icon: PropTypes.string,
   onConfirm: PropTypes.func,
   onChangeTextArea: PropTypes.func,
   textAreaValue: PropTypes.string,
   textAreaPlaceholder: PropTypes.string,
   textAreaClassName: PropTypes.string
};

export default PromptConfirmActionButton;