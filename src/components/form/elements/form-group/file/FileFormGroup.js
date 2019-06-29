import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FileDownload from '../../simple/file-download/FileDownload';
import FileUpload from '../../simple/file-upload/FileUpload';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from '../withValidate';

import get from 'lodash/get';

class FileFormGroup extends PureComponent {
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
         hasError,
         editable,
         removeAction,
         urlFile
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
            {value ? (
               <FileDownload
                  id={id}
                  fileModel={value}
                  editable={editable}
                  removeAction={removeAction}
                  urlFile={urlFile}
               />
            ) : (
               <FileUpload
                  id={id}
                  dataText={dataText || fileName}
                  value={value}
                  className={className}
                  onChange={this.onChangeHandler}
               />
            )}
         </FormGroup>
      );
   }
}

FileFormGroup.propTypes = {
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
   className: PropTypes.string,
   editable: PropTypes.bool,
   removeAction: PropTypes.func,
   urlFile: PropTypes.func
};

FileFormGroup.defaultProps = {};

export default withValidate(FileFormGroup);
