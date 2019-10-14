Компонент-обертка для Datetime из [react-datetime](https://github.com/YouCanBookMe/react-datetime)
Пердставляет собой компонент выбора даты из календаря либо текстом. Локализован.
Заточен под формат даты _DD.MM.YYYY_. 
Если не передавать функцию валидации даты, то при потере фокуса
пытается привести переданное значение к формату _DD.MM.YYYY_ и поддерживает переформатирование из
форматов _DD-MM-YYYY, DD/MM/YYYY_. Затем передаёт значение в обработчик.
Такое поведение по умолчанию работает не идеально, поэтому рекомендуется передавать 
на вход кастомную функцию валидации.


```js
initialState = { value: "18.11.2017" };
<DatePicker value={ state.value } 
            onChange={ (value) => setState({ value: value }) } 
/>
```