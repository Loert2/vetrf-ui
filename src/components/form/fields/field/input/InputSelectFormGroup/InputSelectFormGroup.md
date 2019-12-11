Компонент предназначен для ввода в поле текста или числовых значений и выбора значения из представленного списка

```javascript
initialState = {
   inputValue: '',
   selectValue: null
};

onChangeInput = (value) => {
   setState({
       ...state,
       inputValue: value
   })
};

onChangeSelect = (value) => {
   setState({
       ...state,
       selectValue: value
   })
};

const selectOptions = [ 
   { guid: '1', name: 'Килограммы' },
   { guid: '2', name: 'Палеты' },
   { guid: '3', name: 'Таблетки' },
   { guid: '4', name: 'Миллилитры' }
];

<InputSelectFormGroup labelText="Количество лекарственного препарата" 
                      id="inputSelect"
                      input={{
                         id: 'input',
                         value: state.inputValue,
                         onChange: this.onChangeInput,
                         number: true,
                         placeholder: "Введите кол-во препарата..."
                      }}
                      select={{
                         id: 'select',
                         value: state.selectValue,
                         valueKey: "guid",
                         labelKey:"name",
                         options: selectOptions,
                         onChange: this.onChangeSelect,
                         placeholder: "Выберите меру измерения..."
                      }}
                      errorText="Данное поле должно быть заполнено"/>
                      
```