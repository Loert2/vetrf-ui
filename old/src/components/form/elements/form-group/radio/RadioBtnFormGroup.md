Радиокнопка (переключатель) позволяет пользователю выбрать одну опцию (пункт) из предопределенного набора (группы).

```javascript

const radioButtons = [ 
   { value: 'React', text: 'React 16', disabled : false },
   { value: 'Vew.js', text: 'Vew.js 3', disabled : false },
   { value: 'Ember', text: 'Ember', disabled : true },
   { }
];

initialState = {
   doSomething: null,
   showError: false
};

onChange = (value) => {
   setState({
      doSomething: value,
      showError: true
   })
};

<RadioBtnFormGroup labelText="Выберите JS фреймворк?" 
                   id="radioButton"
                   value={ state.doSomething }
                   onChange={ this.onChange }
                   options={ radioButtons }
                   require
                   showError={ state.showError }
                   errorText="Данное поле должно быть заполнено"/>
```