'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectFormGroup = require('../../form/elements/form-group/select/SelectFormGroup');

var _SelectFormGroup2 = _interopRequireDefault(_SelectFormGroup);

var _InputFormGroup = require('../../form/elements/form-group/input/InputFormGroup');

var _InputFormGroup2 = _interopRequireDefault(_InputFormGroup);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IkarAddress = function (_Component) {
   _inherits(IkarAddress, _Component);

   function IkarAddress(props, context) {
      _classCallCheck(this, IkarAddress);

      var _this = _possibleConstructorReturn(this, (IkarAddress.__proto__ || Object.getPrototypeOf(IkarAddress)).call(this, props, context));

      var _this$props = _this.props,
          findCountry = _this$props.findCountry,
          countryList = _this$props.countries;

      _this.state = {
         countries: countryList && countryList.length > 0 ? countryList : findCountry && findCountry()
      };
      _this.setValue = _this.setValue.bind(_this);
      _this.getIkarAddress = _this.getIkarAddress.bind(_this);
      return _this;
   }

   _createClass(IkarAddress, [{
      key: 'setValue',
      value: function setValue(param) {
         var _this2 = this;

         var _state = this.state,
             countries = _state.countries,
             country = _state.country,
             regions = _state.regions,
             region = _state.region,
             districts = _state.districts,
             district = _state.district,
             localities = _state.localities,
             locality = _state.locality,
             subLocalities = _state.subLocalities,
             subLocality = _state.subLocality,
             streets = _state.streets,
             street = _state.street,
             house = _state.house,
             building = _state.building,
             room = _state.room,
             postIndex = _state.postIndex,
             postBox = _state.postBox;


         switch (param) {
            case "country":
               return function (country) {
                  var address = {
                     countries: countries,
                     country: null,
                     regions: [],
                     region: null,
                     districts: [],
                     district: null,
                     localities: [],
                     locality: null,
                     subLocalities: [],
                     subLocality: null,
                     streets: [],
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(country) && countries.indexOf(country) > -1) {
                     var findRegion = _this2.props.findRegion;


                     _this2.setState(_extends({}, address, {
                        country: country,
                        regions: findRegion && findRegion(country)
                     }));
                  } else if (country === null) {
                     _this2.setState(address);
                  }
               };

            case "region":
               return function (region) {
                  var address = {
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: null,
                     districts: [],
                     district: null,
                     localities: [],
                     locality: null,
                     subLocalities: [],
                     subLocality: null,
                     streets: [],
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(region) && regions.indexOf(region) > -1) {
                     var _props = _this2.props,
                         findDistrict = _props.findDistrict,
                         findLocality = _props.findLocality,
                         findStreet = _props.findStreet;

                     if (region.hasStreets) {
                        _this2.setState(_extends({}, address, {
                           region: region,
                           localities: findLocality ? findLocality(region) : [],
                           streets: findStreet ? findStreet(region) : []
                        }));
                     } else {
                        _this2.setState(_extends({}, address, {
                           region: region,
                           districts: findDistrict ? findDistrict(region) : []
                        }));
                     }
                  } else if (region === null) {
                     _this2.setState(address);
                  }
               };

            case "district":
               return function (district) {
                  var address = {
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: region,
                     districts: districts,
                     district: null,
                     localities: [],
                     locality: null,
                     subLocalities: [],
                     subLocality: null,
                     streets: [],
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(district) && districts.indexOf(district) > -1) {
                     var findLocality = _this2.props.findLocality;

                     _this2.setState(_extends({}, address, {
                        district: district,
                        localities: findLocality ? findLocality(district) : []
                     }));
                  } else if (district === null) {
                     _this2.setState(address);
                  }
               };

            case "locality":
               return function (locality) {
                  var address = {
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: region,
                     districts: districts,
                     district: district,
                     localities: localities,
                     locality: null,
                     subLocalities: [],
                     subLocality: null,
                     streets: [],
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(locality) && localities.indexOf(locality) > -1) {
                     var _props2 = _this2.props,
                         findStreet = _props2.findStreet,
                         findSubLocality = _props2.findSubLocality;

                     _this2.setState(_extends({}, address, {
                        locality: locality,
                        subLocalities: findSubLocality ? findSubLocality(locality) : [],
                        streets: findStreet ? findStreet(locality) : []
                     }));
                  } else if (locality === null) {
                     _this2.setState(address);
                  }
               };

            case "subLocality":
               return function (subLocality) {
                  var address = {
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: region,
                     districts: districts,
                     district: district,
                     localities: localities,
                     locality: locality,
                     subLocalities: subLocalities,
                     subLocality: null,
                     streets: [],
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(subLocality) && subLocalities.indexOf(subLocality) > -1) {
                     var findStreet = _this2.props.findStreet;


                     _this2.setState(_extends({}, address, {
                        subLocality: subLocality,
                        streets: findStreet ? findStreet(subLocality) : []
                     }));
                  } else if (subLocality === null) {
                     _this2.setState(address);
                  }
               };

            case "street":
               return function (street) {
                  var address = {
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: region,
                     districts: districts,
                     district: district,
                     localities: localities,
                     locality: locality,
                     subLocalities: subLocalities,
                     subLocality: subLocality,
                     streets: streets,
                     street: null,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  };

                  if (!(0, _isEmpty2.default)(street) && streets.indexOf(street) > -1) {
                     _this2.setState(_extends({}, address, {
                        street: street
                     }));
                  } else if (street === null) {
                     _this2.setState(address);
                  }
               };

            default:
               return function (value) {
                  _this2.setState(_defineProperty({
                     countries: countries,
                     country: country,
                     regions: regions,
                     region: region,
                     districts: districts,
                     district: district,
                     localities: localities,
                     locality: locality,
                     streets: streets,
                     street: street,
                     house: house,
                     building: building,
                     room: room,
                     postIndex: postIndex,
                     postBox: postBox
                  }, param, value));
               };
         }
      }
   }, {
      key: 'getIkarAddress',
      value: function getIkarAddress() {
         //Обработка необходимых полей
         var _state2 = this.state,
             country = _state2.country,
             region = _state2.region,
             district = _state2.district,
             locality = _state2.locality,
             street = _state2.street,
             house = _state2.house,
             building = _state2.building,
             room = _state2.room,
             postIndex = _state2.postIndex,
             postBox = _state2.postBox;


         return {
            country: country,
            region: region,
            district: district,
            locality: locality,
            street: street,
            house: house,
            building: building,
            room: room,
            postIndex: postIndex,
            postBox: postBox
         };
      }
   }, {
      key: 'render',
      value: function render() {
         var _props3 = this.props,
             selectClassName = _props3.selectClassName,
             formClassName = _props3.formClassName,
             _props3$ikarAddressOp = _props3.ikarAddressOptions;
         _props3$ikarAddressOp = _props3$ikarAddressOp === undefined ? {} : _props3$ikarAddressOp;
         var countryPlaceholder = _props3$ikarAddressOp.countryPlaceholder,
             regionPlaceholder = _props3$ikarAddressOp.regionPlaceholder,
             _props3$ikarAddressOp2 = _props3$ikarAddressOp.district;
         _props3$ikarAddressOp2 = _props3$ikarAddressOp2 === undefined ? {} : _props3$ikarAddressOp2;
         var _props3$ikarAddressOp3 = _props3$ikarAddressOp2.isShowDistrict,
             isShowDistrict = _props3$ikarAddressOp3 === undefined ? true : _props3$ikarAddressOp3,
             districtPlaceholder = _props3$ikarAddressOp2.placeholder,
             districtRequiredField = _props3$ikarAddressOp2.isRequiredField,
             _props3$ikarAddressOp4 = _props3$ikarAddressOp.locality;
         _props3$ikarAddressOp4 = _props3$ikarAddressOp4 === undefined ? {} : _props3$ikarAddressOp4;
         var _props3$ikarAddressOp5 = _props3$ikarAddressOp4.isShowLocality,
             isShowLocality = _props3$ikarAddressOp5 === undefined ? true : _props3$ikarAddressOp5,
             localityPlaceholder = _props3$ikarAddressOp4.placeholder,
             localityRequiredField = _props3$ikarAddressOp4.isRequiredField,
             _props3$ikarAddressOp6 = _props3$ikarAddressOp.subLocality;
         _props3$ikarAddressOp6 = _props3$ikarAddressOp6 === undefined ? {} : _props3$ikarAddressOp6;
         var _props3$ikarAddressOp7 = _props3$ikarAddressOp6.isShowSubLocality,
             isShowSubLocality = _props3$ikarAddressOp7 === undefined ? true : _props3$ikarAddressOp7,
             subLocalityPlaceholder = _props3$ikarAddressOp6.placeholder,
             subLocalityRequiredField = _props3$ikarAddressOp6.isRequiredField,
             _props3$ikarAddressOp8 = _props3$ikarAddressOp.street;
         _props3$ikarAddressOp8 = _props3$ikarAddressOp8 === undefined ? {} : _props3$ikarAddressOp8;
         var _props3$ikarAddressOp9 = _props3$ikarAddressOp8.isShowStreet,
             isShowStreet = _props3$ikarAddressOp9 === undefined ? true : _props3$ikarAddressOp9,
             streetPlaceholder = _props3$ikarAddressOp8.placeholder,
             streetRequiredField = _props3$ikarAddressOp8.isRequiredField,
             _props3$ikarAddressOp10 = _props3$ikarAddressOp.house;
         _props3$ikarAddressOp10 = _props3$ikarAddressOp10 === undefined ? {} : _props3$ikarAddressOp10;
         var _props3$ikarAddressOp11 = _props3$ikarAddressOp10.isShowHouse,
             isShowHouse = _props3$ikarAddressOp11 === undefined ? true : _props3$ikarAddressOp11,
             housePlaceholder = _props3$ikarAddressOp10.placeholder,
             houseRequiredField = _props3$ikarAddressOp10.isRequiredField,
             houseClassName = _props3$ikarAddressOp10.className,
             _props3$ikarAddressOp12 = _props3$ikarAddressOp.building;
         _props3$ikarAddressOp12 = _props3$ikarAddressOp12 === undefined ? {} : _props3$ikarAddressOp12;
         var _props3$ikarAddressOp13 = _props3$ikarAddressOp12.isShowBuilding,
             isShowBuilding = _props3$ikarAddressOp13 === undefined ? true : _props3$ikarAddressOp13,
             buildingPlaceholder = _props3$ikarAddressOp12.placeholder,
             buildingRequiredField = _props3$ikarAddressOp12.isRequiredField,
             buildingClassName = _props3$ikarAddressOp12.className,
             _props3$ikarAddressOp14 = _props3$ikarAddressOp.room;
         _props3$ikarAddressOp14 = _props3$ikarAddressOp14 === undefined ? {} : _props3$ikarAddressOp14;
         var _props3$ikarAddressOp15 = _props3$ikarAddressOp14.isShowRoom,
             isShowRoom = _props3$ikarAddressOp15 === undefined ? true : _props3$ikarAddressOp15,
             roomPlaceholder = _props3$ikarAddressOp14.placeholder,
             roomRequiredField = _props3$ikarAddressOp14.isRequiredField,
             roomClassName = _props3$ikarAddressOp14.className,
             _props3$ikarAddressOp16 = _props3$ikarAddressOp.postIndex;
         _props3$ikarAddressOp16 = _props3$ikarAddressOp16 === undefined ? {} : _props3$ikarAddressOp16;
         var _props3$ikarAddressOp17 = _props3$ikarAddressOp16.isShowPostIndex,
             isShowPostIndex = _props3$ikarAddressOp17 === undefined ? true : _props3$ikarAddressOp17,
             postIndexPlaceholder = _props3$ikarAddressOp16.placeholder,
             postIndexRequiredField = _props3$ikarAddressOp16.isRequiredField,
             postIndexClassName = _props3$ikarAddressOp16.className,
             _props3$ikarAddressOp18 = _props3$ikarAddressOp.postBox;
         _props3$ikarAddressOp18 = _props3$ikarAddressOp18 === undefined ? {} : _props3$ikarAddressOp18;
         var _props3$ikarAddressOp19 = _props3$ikarAddressOp18.isShowPostBox,
             isShowPostBox = _props3$ikarAddressOp19 === undefined ? true : _props3$ikarAddressOp19,
             postBoxPlaceholder = _props3$ikarAddressOp18.placeholder,
             postBoxRequiredField = _props3$ikarAddressOp18.isRequiredField,
             postBoxClassName = _props3$ikarAddressOp18.className;
         var _state3 = this.state,
             countries = _state3.countries,
             country = _state3.country,
             regions = _state3.regions,
             region = _state3.region,
             districts = _state3.districts,
             district = _state3.district,
             localities = _state3.localities,
             locality = _state3.locality,
             subLocalities = _state3.subLocalities,
             subLocality = _state3.subLocality,
             streets = _state3.streets,
             street = _state3.street,
             house = _state3.house,
             building = _state3.building,
             room = _state3.room,
             postIndex = _state3.postIndex,
             postBox = _state3.postBox;


         var style = {
            color: 'black'
         };

         return _react2.default.createElement(
            'div',
            { className: formClassName },
            _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressSelectInputCountry',
               onChange: this.setValue("country"),
               labelText: '\u0421\u0442\u0440\u0430\u043D\u0430',
               require: true,
               value: country,
               options: countries,
               className: selectClassName,
               placeholder: countryPlaceholder || "Выберите страну..." }),
            _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressInputRegion',
               onChange: this.setValue("region"),
               labelText: '\u0420\u0435\u0433\u0438\u043E\u043D',
               require: true,
               value: region,
               options: regions,
               className: selectClassName,
               placeholder: regionPlaceholder || "Выберите регион..." }),
            isShowDistrict && _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressSelectInputDistrict',
               onChange: this.setValue("district"),
               labelText: '\u0420\u0430\u0439\u043E\u043D',
               require: districtRequiredField,
               value: district,
               options: districts,
               className: selectClassName,
               placeholder: districtPlaceholder || "Выберите район..." }),
            isShowDistrict && isShowLocality && _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressSelectInputLocality',
               onChange: this.setValue("locality"),
               labelText: '\u041D\u0430\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442',
               require: localityRequiredField,
               value: locality,
               options: localities,
               className: selectClassName,
               placeholder: localityPlaceholder || "Выберите населенный пункт..." }),
            isShowDistrict && isShowLocality && isShowSubLocality && _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressSelectInputSubLocality',
               onChange: this.setValue("subLocality"),
               labelText: '\u041F\u043E\u0434\u043D\u0430\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442',
               require: subLocalityRequiredField,
               value: subLocality,
               options: subLocalities,
               className: selectClassName,
               placeholder: subLocalityPlaceholder || "Выберите поднаселенный пункт..." }),
            isShowDistrict && isShowLocality && isShowStreet && _react2.default.createElement(_SelectFormGroup2.default, { id: 'ikarAddressSelectInputStreet',
               onChange: this.setValue("street"),
               labelText: '\u0423\u043B\u0438\u0446\u0430',
               require: streetRequiredField,
               value: street,
               options: streets,
               className: selectClassName,
               placeholder: streetPlaceholder || "Выберите улицу..." }),
            isShowHouse && _react2.default.createElement(_InputFormGroup2.default, { id: 'ikarAddressInputHouse',
               onChange: this.setValue("house"),
               labelText: '\u0414\u043E\u043C',
               require: houseRequiredField,
               style: style,
               value: house,
               className: houseClassName,
               placeholder: housePlaceholder || "Введите номер дома..." }),
            isShowBuilding && _react2.default.createElement(_InputFormGroup2.default, { id: 'ikarAddressInputBuilding',
               onChange: this.setValue("building"),
               labelText: '\u0421\u0442\u0440\u043E\u0435\u043D\u0438\u0435',
               require: buildingRequiredField,
               style: style,
               value: building,
               className: buildingClassName,
               placeholder: buildingPlaceholder || "Введите номер строения..." }),
            isShowRoom && _react2.default.createElement(_InputFormGroup2.default, { id: 'ikarAddressInputRoom',
               onChange: this.setValue("room"),
               labelText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
               require: roomRequiredField,
               style: style,
               value: room,
               className: roomClassName,
               placeholder: roomPlaceholder || "Введите номер квартиры/помещения..." }),
            isShowPostIndex && _react2.default.createElement(_InputFormGroup2.default, { id: 'ikarAddressInputPostIndex',
               onChange: this.setValue("postIndex"),
               labelText: '\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441',
               require: postIndexRequiredField,
               style: style,
               value: postIndex,
               className: postIndexClassName,
               placeholder: postIndexPlaceholder || "Введите почтовый индекс..." }),
            isShowPostBox && _react2.default.createElement(_InputFormGroup2.default, { id: 'ikarAddressInputPostBox',
               onChange: this.setValue("postBox"),
               labelText: '\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u044F\u0449\u0438\u043A',
               require: postBoxRequiredField,
               style: style,
               value: postBox,
               className: postBoxClassName,
               placeholder: postBoxPlaceholder || "Введите почтовый ящик..." })
         );
      }
   }]);

   return IkarAddress;
}(_react.Component);

IkarAddress.propTypes = {
   countries: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.string
   })),
   findCountry: _propTypes2.default.func,
   findRegion: _propTypes2.default.func,
   findDistrict: _propTypes2.default.func,
   findLocality: _propTypes2.default.func,
   findSubLocality: _propTypes2.default.func,
   findStreet: _propTypes2.default.func,
   formClassName: _propTypes2.default.string,
   selectClassName: _propTypes2.default.string,
   inputClassName: _propTypes2.default.string,
   ikarAddressOptions: _propTypes2.default.shape({
      countryPlaceholder: _propTypes2.default.string,
      regionPlaceholder: _propTypes2.default.string,
      district: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool
      }),
      locality: _propTypes2.default.shape({
         isShowLocality: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool
      }),
      subLocality: _propTypes2.default.shape({
         isShowLocality: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool
      }),
      street: _propTypes2.default.shape({
         isShowStreet: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool
      }),
      house: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string
      }),
      building: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string
      }),
      room: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string
      }),
      postIndex: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string
      }),
      postBox: _propTypes2.default.shape({
         isShowDistrict: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string
      })
   })
};

exports.default = IkarAddress;