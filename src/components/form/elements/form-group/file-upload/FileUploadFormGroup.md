Компонент предназначен для выбора файлов

```javascript

initialState = {
   file: null
};

onChange = (file) => {
   setState({ file: file })
};

<FileUploadFormGroup labelText="Выберите файл" 
                     id="fileUploadFormGroup"
                     onChange={ this.onChange }
                     placeholder="Выберите необходимый файл..."/>
      