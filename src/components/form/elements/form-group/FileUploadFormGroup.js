import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FileUpload from '../simple/file-upload/FileUpload';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

import get from 'lodash/get';

class FileUploadFormGroup extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
         fileName: ""
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => nextProps.require && !nextProps.value, this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError,
            fileName: this.state.fileName
         });
      }
   }

   onChangeHandler(event) {
      const { onChange, field } = this.props;
      event.persist();
      const value = get(event, "target.value");
      const fileName = value ? value.replace(/.*(\/|\\)/, "") : "";
      this.setState({
         fileName: fileName,
         hasError: this.state.hasError
      });
      const file = { file: get(event, "target.files[0]"), name: fileName };
      onChange && onChange(file, field);
   }

   render() {
      const {
         labelText,
         require,
         help,
         additionalBlock,
         value,
         errorText,
         dataText,
         id,
         className,
      } = this.props;
      const {
         hasError,
         fileName
      } = this.state;
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ hasError }
                    errorText={ errorText } >
            <FileUpload id={ id }
                        dataText={ dataText || fileName }
                        value={ value }
                        className={ className }
                        onChange={ this.onChangeHandler } />
         </FormGroup>
      );
   }

}

FileUploadFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   dataText: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

FileUploadFormGroup.defaultProps = {};

export default FileUploadFormGroup;