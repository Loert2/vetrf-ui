import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomActionButton from '../CustomActionButton/CustomActionButton';
import Textarea from '../../../form/fields/base/textarea/Textarea/Textarea';

// TODO: This is old way. Rewrite it!
class PromptActionButton extends Component {
   state = {
      valueTextArea: ''
   };

   constructor(props: any, context: any) {
      super(props, context);
      this.onChangeTextArea = this.onChangeTextArea.bind(this);
   }

   onChangeTextArea(text: any) {
      if (text !== this.state.valueTextArea) {
         this.setState({ valueTextArea: text });
      }
   }

   render() {
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
      }: any = this.props;

      const { valueTextArea } = this.state;

      return (
         <CustomActionButton
            id={id}
            className={className}
            icon={icon}
            buttonText={buttonText}
            tooltip={tooltip}
            disabled={disabled}
            onConfirm={() => onConfirm && onConfirm(valueTextArea)}
            body={
               <Textarea
                  value={valueTextArea}
                  onChange={this.onChangeTextArea}
                  id="promptTextArea"
                  placeholder={placeholderTextArea}
                  className={classNameTextArea || 'form-control width-300'}
               />
            }
            confirmBtnText={confirmBtnText}
            confirmHeaderText={confirmHeaderText}
            confirmBodyText={confirmBodyText}
            confirmBtnClass={confirmBtnClass}
            confirmBtnIcon={confirmBtnIcon}
            disabledConfirmBtn={valueTextArea.length === 0}
            cancelBtnIcon={cancelBtnIcon}
            cancelBtnText={cancelBtnText}
         />
      );
   }
}

(PromptActionButton as any).propTypes = {
   onConfirm: PropTypes.func,
   id: PropTypes.string,
   className: PropTypes.string,
   icon: PropTypes.string,
   buttonText: PropTypes.string,
   tooltip: PropTypes.string,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
