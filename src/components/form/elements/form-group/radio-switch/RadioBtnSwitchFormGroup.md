Радиокнопка (переключатель) позволяет пользователю выбрать одну опцию из двух.

```javascript

initialState = { value: null };

onChange = (value) => {
   setState({ value: value })
};

<RadioBtnSwitchFormGroup labelText="Необходимо что-то выполнить?"
                         id="radioButtonSwitch"
                         onChange={ this.onChange }
                         value={ state.value }
                         itemTrue={ { text: "Да, конечно" } }
                         itemFalse={ { text: "Нет, отдохни" } }
                         errorText="Данное поле должно быть заполнено"/>
```