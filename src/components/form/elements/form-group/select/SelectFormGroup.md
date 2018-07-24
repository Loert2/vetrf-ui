Выподающий список предназначеный для отображения значений

```javascript

const animalType = [ 
   { guid: '1', name: 'Свинья' },
   { guid: '2', name: 'Собака' },
   { guid: '3', name: 'Кошка' },
   { guid: '4', name: 'Корова' }
];

initialState = {
   type: null,
   showError: false
};

onChange = (type) => {
   setState({
    type: type,
    showError: true
   })
};

<SelectFormGroup labelText="Тип животного" 
                 id="animalSelect"
                 onChange={ this.onChange }
                 value={ state.type }
                 valueKey="guid"
                 labelKey="name"
                 options={ animalType }
                 placeholder="Выберите тип животного..."
                 require
                 showError={ state.showError }
                 errorText="Данное поле должно быть заполнено"/>
```