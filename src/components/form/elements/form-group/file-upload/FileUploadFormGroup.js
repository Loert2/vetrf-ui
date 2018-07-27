import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FileUpload from '../../simple/file-upload/FileUpload';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from '../withValidate';

import get from 'lodash/get';

class FileUploadFormGroup extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { fileName: '' };
      this.onChangeHandler = this.onChangeHandler.bind(this);
   }

   onChangeHandler(event) {
      const { onChange, field } = this.props;
      event.persist();
      const value = get(event, 'target.value');
      const fileName = value ? value.replace(/.*(\/|\\)/, '') : '';
      this.setState({
         fileName: fileName
      });
      const file = { file: get(event, 'target.files[0]'), name: fileName };
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
         hasError
      } = this.props;

      const { fileName } = this.state;
      return (
         <FormGroup
            labelText={labelText}
            require={require}
            help={help}
            additionalBlock={additionalBlock}
            hasError={hasError}
            errorText={errorText}>
            <FileUpload
               id={id}
               dataText={dataText || fileName}
               value={value}
               className={className}
               onChange={this.onChangeHandler}
            />
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
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

FileUploadFormGroup.defaultProps = {};

export default withValidate(FileUploadFormGroup);
