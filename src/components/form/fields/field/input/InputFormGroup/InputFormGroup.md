Компонент предназначен для ввода информации в текстовой форме

```javascript

initialState = {
   drugName: '',
   showError: false
};

onChange = (name) => {
   setState({ 
    drugName: name,
    showError: true
   })
};

<InputFormGroup labelText="Названия лекарственного препарата" 
                id="drugInputFormGroup"
                value={ state.drugName }
                onChange={ this.onChange }
                placeholder="Введите названия лекарственного препарата..."
                require
                showError={ state.showError }
                errorText="Данное поле должно быть заполнено"/>
                
```

           