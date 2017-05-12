import React, { Component } from 'react'
import update from 'react-addons-update'

export default class FileUpload extends Component {

   constructor(props, context) {
      super(props, context);
      this.state = {
         dragState: "off",
         defaultMessage: "Выберите файл ..."
      }
   }

   onDragStart() {
      this.setState(update(this.state, {
         dragState: { $set: "on" },
         defaultMessage: { $set: "" }
      }));
   }

   onDragEnd() {
      this.setState(update(this.state, {
         dragState: { $set: "off" },
         defaultMessage: { $set: "Выберите файл ..." }
      }));
   }

   render () {
      return (
         <div className="file-upload-container">
            <div className="file-upload-form"
                 onDragOver={this.onDragStart.bind(this)}
                 onDragLeave={this.onDragEnd.bind(this)}>
               <div className={classNames("file-upload-wrapper", { "drag-state-on": this.state.dragState === "on"})}
                    data-text={this.props.dataText || this.state.defaultMessage}>
                  <input type="file"
                         value={this.props.value}
                         className={this.props.className}
                         onChange={e => {
                            this.onDragEnd();
                            this.props.onChange && this.props.onChange(e);
                         }}/>
               </div>
            </div>
         </div>
      )
   }
}