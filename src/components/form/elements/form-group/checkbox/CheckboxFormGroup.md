Компонент (флажок) предназначеный для выбора определенной опции

```javascript

initialState = {
   checkboxValue: ''
};

onChange = (value) => {
   setState({
    checkboxValue: value
   })
};

<CheckboxFormGroup labelText="Выбрать опцию" 
                   id="сheckboxFormGroup"
                   onChange={ this.onChange }
                   value={ state.checkboxValue }/>
      