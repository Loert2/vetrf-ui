import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FileUpload extends PureComponent {
   constructor(props, context) {
      super(props, context);
      this.onDragStart = this.onDragStart.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this);
      this.state = {
         dragState: "off",
         defaultMessage: "Выберите файл ..."
      }
   }

   onDragStart() {
      this.setState({
         dragState: "on",
         defaultMessage:  ""
      });
   }

   onDragEnd() {
      this.setState({
         dragState: "off",
         defaultMessage: "Выберите файл ..."
      });
   }

   render () {
      const { dataText, value, className, onChange, id } = this.props;
      const { dragState, defaultMessage } = this.state;
      return (
         <div className="file-upload-container">
            <div className="file-upload-form"
                 onDragOver={ this.onDragStart }
                 onDragLeave={ this.onDragEnd }>
               <div className={ classNames("file-upload-wrapper", { "drag-state-on": dragState === "on" }) }
                    data-text={ dataText || defaultMessage }>
                  <input id={ id }
                         type="file"
                         value={ value }
                         className={ className }
                         onChange={ e => {
                            this.onDragEnd();
                            onChange && onChange(e);
                         }}/>
               </div>
            </div>
         </div>
      )
   }
}

FileUpload.propTypes = {
   dataText: PropTypes.string,
   id: PropTypes.string,
   value: PropTypes.any,
   className: PropTypes.string,
   onChange: PropTypes.func
};

export default FileUpload;