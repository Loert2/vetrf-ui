import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomActionButton from './CustomActionButton';
import Textarea from "../../form/elements/simple/Textarea";

class PromptActionButton extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         valueTextArea: ""
      };
      this.onChangeTextArea = this.onChangeTextArea.bind(this);
   }

   onChangeTextArea (text) {
      if (text !== this.state.valueTextArea) {
         this.setState({ valueTextArea: text });
      }
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
         placeholderTextArea,
         classNameTextArea
      } = this.props;

      const { valueTextArea } = this.state;

      return (
         <CustomActionButton id={ id }
                             className={ className }
                             icon={ icon }
                             buttonText={ buttonText }
                             tooltip={ tooltip }
                             disabled={ disabled }
                             onConfirm={ () => onConfirm && onConfirm(valueTextArea) }
                             body={
                                <Textarea value={ valueTextArea }
                                          onChange={ this.onChangeTextArea }
                                          id="promptTextArea"
                                          placeholder={ placeholderTextArea }
                                          className={ classNameTextArea || "form-control width-300" }/>
                             }
                             confirmBtnText={ confirmBtnText }
                             confirmHeaderText={ confirmHeaderText }
                             confirmBodyText={ confirmBodyText }
                             confirmBtnClass={ confirmBtnClass }
                             confirmBtnIcon={ confirmBtnIcon }
                             disabledConfirmBtn={ valueTextArea.length > 0 }
                             cancelBtnIcon={ cancelBtnIcon }
                             cancelBtnText={ cancelBtnText }/>
      )
   }
}

PromptActionButton.propTypes = {
   onConfirm: PropTypes.func,
   id: PropTypes.string,
   className: PropTypes.string,
   icon: PropTypes.string,
   buttonText: PropTypes.string,
   tooltip: PropTypes.string,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   confirmBtnText: PropTypes.string,
   confirmHeaderText: PropTypes.string,
   confirmBodyText: PropTypes.string,
   confirmBtnClass: PropTypes.string,
   confirmBtnIcon: PropTypes.string,
   cancelBtnIcon: PropTypes.string,
   cancelBtnText: PropTypes.string,
   placeholderTextArea: PropTypes.string,
   classNameTextArea: PropTypes.string
};

export default PromptActionButton;