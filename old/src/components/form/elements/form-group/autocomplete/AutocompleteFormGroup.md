Текстовое поле ввода со списком подсказок для ввода.
Компонент формы (Подпись, подсказка, валидация, текст ошибки). 

```js
const responseList = [
   { name: "redux" },
   { name: "awesome" },
   { name: "reselect" }
];
initialState = { value: "react", autocompleteList: [] };
<AutocompleteFormGroup labelText="Автодополнение"
                       name="name"
                       id="some_id"
                       value={ state.value }
                       items={ state.autocompleteList }
                       onSelect={ 
                          (item, field) => setState({ ...state, ...{ value: item[field] } }) 
                       }
                       onAutocomplete={ 
                          (item, field) => setState({ value: item[field], autocompleteList: responseList })
                       }
                       resetAutocompleteList={ 
                          () => setState({ ...state, ...{ autocompleteList: [] } }) 
                       }
                       onChange={ 
                          (value) => setState({ ...state, ...{ value: value } }) 
                       }
                       help="Подсказка" />
```