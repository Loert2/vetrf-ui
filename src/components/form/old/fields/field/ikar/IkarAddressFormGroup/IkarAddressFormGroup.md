Компонент предназначен для работы с API "Икара", с помощью компонента можно создавать и редактировать адреса.

```javascript
const COUNTRY_RUSSIA_GUID = "74a3cbb1-56fa-94f3-ab3f-e8db4940d96b";
const USA = "222";
const MSK_OBL = "111-1";
const MSK = "111-2";
const ODINCOVSKIY_RAYON = "111-1-2";
const ODINCOVO = "111-1-2-1";
const ZELENOGRAD = "111-2-11";
const CAO = "111-2-2-1";
const LENINS_RAYON = "111-2-11-1";
const ZELENIY_RAYON = "111-2-11-22";
const COUNTRIES = [
   { guid: COUNTRY_RUSSIA_GUID, name: "Российская Федерация" },
   { guid: "222", name: "США" }
];  
const breadcrumbs = [{
              home: true,
              active: true,
              text: "Главная"
           }];

initialState = {
  countries: [],
  address: {
     country: { guid: COUNTRY_RUSSIA_GUID, name: "Российская Федерация" },
     region: { guid: "111-2", name: "Москва", hasStreets: true },
     addressView: ""
  }
};

   findCountry = () => {
      return  [
         { guid: COUNTRY_RUSSIA_GUID, name: "Российская Федерация" },
         { guid: USA, name: "США" }
      ];
   };

   findRegion = (country) => {
      switch (country.guid) {
         case COUNTRY_RUSSIA_GUID:
            return [
               { guid: MSK_OBL, view: "Московская область" },
               { guid: MSK, view: "Москва", hasStreets: true } ];
         case USA:
            return [
               { guid: "222-1", view: "Вашингтон" },
               { guid: "222-2", view: "Калифорния" } ];

            default: return [];
      }
   };

   findDistrict = (region) => {
      if (region.guid === MSK_OBL) {
         return [ { guid: ODINCOVSKIY_RAYON, view: "Одинцовский район" } ];
      }
   };

   findLocality = (parent, input, callback) => {
      let localities = [];
      switch (parent.guid){
         case MSK:
            localities = [
               { guid: ZELENOGRAD, view: "Зеленоград" },
               { guid: CAO, view: "Центральный округ" },
            ];
            break;
         case MSK_OBL:
         case ODINCOVSKIY_RAYON:
            localities = [{ guid: "111-1-2-1", view: "Одинцово" }];
            break;

         default: return [];
      }
      const newArray = localities.filter(
         (obj) => (obj && obj.view && obj.view.toLowerCase().indexOf(input.toLowerCase()) >= 0)
      );
      callback(null, { options: newArray })
   };

   // Функция получение подчиненных населенных пунктов
   findSubLocality = (parent, input, callback) => {
      let subLocalities = [];
      switch (parent.guid){
         case ZELENOGRAD:
            subLocalities = [ { guid: LENINS_RAYON, view: "Ленинский район" } ];
            break;
         case ODINCOVO:
            subLocalities = [ { guid: ZELENIY_RAYON, view: "Зеленый район" } ];
            break;

         default: return [];
      }         
      
   subLocalities.filter((obj) => (obj && obj.view  && obj.view.toLowerCase().indexOf(input.toLowerCase()) >= 0));
   callback(null, { options: subLocalities })
   };

   // Функция получение улиц
   findStreet = (parent, input, callback) => {
      let streets = [];
      switch (parent.guid) {
         case MSK:
            streets = [ { guid: "1-tw-1", view: "ул. Тверская" } ];
            break;
         case CAO:
            streets = [ { guid: "1-ar-1", view: "ул. Арбат" } ];
            break;
         case ZELENOGRAD:
         case LENINS_RAYON:
            streets = [ { guid: "1-cn-1", view: "ул. Центральная" }, { guid: "1-ln-1", view: "ул. Ленина" }  ];
            break;
         case ODINCOVO:
         case ZELENIY_RAYON:
            streets = [  { guid: "1-zelstr", view: "ул. Зеленая" }, { guid: "1-cneg", view: "ул. Снежная" } ];
            break;

         default: return [];
      }
      const newStreets = streets.filter(
         (obj) => (obj && obj.view && obj.view.toLowerCase().indexOf(input.toLowerCase()) >= 0)
      );
      callback(null, { options: newStreets })
   };
   
  onChangeAddress = (newAddress, path) => {
     setState({ address: newAddress});
  };
   
<Page breadcrumbs={ breadcrumbs }>
    <IkarAddressFormGroup labelText="Адрес"
                          address={ state.address }
                          countries={ COUNTRIES }
                          findRegion={ this.findRegion }
                          findDistrict={ this.findDistrict }
                          findLocality={ this.findLocality }
                          findSubLocality={ this.findSubLocality }
                          findStreet={ this.findStreet }
                          onChange={ this.onChangeAddress }
                          countryOptions={ { isRequiredField: true } }
                          regionOptions={ { isRequiredField: true } }
                          districtOptions={ { isHidden: false, isRequiredField: true } }
                          localityOptions={ { isRequiredField: true } }                                   
                          subLocalityOptions={ { isHidden: false, isRequiredField: true } }
                          streetOptions={ { isRequiredField: true } }
                          houseOptions={ { isRequiredField: true } }
                          roomOptions={ { isRequiredField: true } }
                          postIndexOptions={ { isRequiredField: true } }
                          require
                          showError/>
</Page>

```


