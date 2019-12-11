Компонент формы предназначеный для ввода числовых значений

```js

initialState = {
   postIndex: '',
   showError: false
};

onChange = (zipCode) => {
   setState({
   postIndex: zipCode,
   showError: true
   })
};

<NumberFormGroup labelText="Почтовый индекс" 
                 id="postIndexInput"
                 onChange={ this.onChange }
                 value={ state.postIndex }
                 maxLength={ 6 }
                 placeholder="Введите почтовый индекс..."
                 help="Не больше 6 символов"
                 require
                 showError={ state.showError }
                 errorText="Данное поле должно быть заполнено"
                 customValidate={ (value) => value && value.length < 6 }/>

```