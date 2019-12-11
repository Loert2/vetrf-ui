Компонент предназначен для выбора файлов

```javascript
initialState = {
   file: null
};

onChange = (file) => {
   setState({ file: file });
};

<FileFormGroup
   labelText="Выберите файл"
   id="fileFormGroup"
   onChange={this.onChange}
   placeholder="Выберите необходимый файл..."
/>;
```
