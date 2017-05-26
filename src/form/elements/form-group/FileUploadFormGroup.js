import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FileUpload from '../simple/file-upload/FileUpload';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

class FileUploadFormGroup extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => nextProps.require && !nextProps.value, this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError
         });
      }
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
         field,
         onChange,
         className,
      } = this.props;
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <FileUpload id={ id }
                        dataText={ dataText }
                        value={ value }
                        className={ className }
                        onChange={ (e) => onChange && onChange(e, field) } />
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