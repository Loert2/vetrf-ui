Выподающий список предназначеный для асинхронного получения и отображения значений

```javascript
   initialState = { pharmaceutical: {} };
   
   onChangeHandler = (value) => {
       setState({ pharmaceutical: value });
    };
   
   findPharmaceutical = (value, callback) => {      
      if (value && value.length > 1) {
         let pharmaceuticalList = [
            { guid: '1', name: 'Азитронит М' }, 
            { guid: '2', name: 'Бутофан' }, 
            { guid: '3', name: 'Гелерон' }, 
            { guid: '4', name: 'Дитрим' }, 
            { guid: '5', name: 'Ивермек OR' },
            { guid: '5', name: 'Йодопен' },
            { guid: '6', name: 'Кальция борглюконат 20%' },
            { guid: '7', name: 'Комплекс витаминов A,D3,E в масле' },
            { guid: '8', name: 'Левамизол 75' },
            { guid: '9', name: 'Мерадок' },
            { guid: '10', name: 'Утеротон' },
            { guid: '11', name: 'Цефтонит' }
         ];
         const newList = pharmaceuticalList.filter(
            (obj) => (obj && obj.name && obj.name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
         );
         callback(null, { options: newList })
      } else {
         callback(null, { options: [] })
      }      
   };   

  <AsyncSelectFormGroup labelText="Лекарственный препарат" 
                        id="asyncSelect"
                        onChange={ this.onChangeHandler }
                        value={ state.pharmaceutical }
                        valueKey="guid"
                        labelKey="name"
                        loadOptions={ this.findPharmaceutical }
                        ignoreCase
                        placeholder="Введите название лекарственного препарата..."
                        require
                        showError
                        errorText="Данное поле должно быть заполнено"/>

```