Компонент предназначен для ввода большого количества текстовой информации

```javascript

initialState = {
   comment: '',
   showError: false
};

onChange = (value) => {
   setState({
       comment: value,
       showError: true
   })
};

<TextareaFormGroup labelText="Комментарий"
                   id="commentTextarea"
                   value={ state.comment }
                   onChange={ this.onChange }
                   placeholder="Оставьте комментарий..."
                   require
                   showError={ state.showError }
                   errorText="Данное поле должно быть заполнено"/>
```