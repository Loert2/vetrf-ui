'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectFormGroup = require('../../form-group/select/SelectFormGroup');

var _SelectFormGroup2 = _interopRequireDefault(_SelectFormGroup);

var _AsyncSelectFormGroup = require('../../form-group/select/async/AsyncSelectFormGroup');

var _AsyncSelectFormGroup2 = _interopRequireDefault(_AsyncSelectFormGroup);

var _InputFormGroup = require('../../form-group/input/InputFormGroup');

var _InputFormGroup2 = _interopRequireDefault(_InputFormGroup);

var _NumberFormGroup = require('../../form-group/number/NumberFormGroup');

var _NumberFormGroup2 = _interopRequireDefault(_NumberFormGroup);

var _IkarAddressConst = require('./IkarAddressConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IkarAddressRussia = function IkarAddressRussia(props) {
   var getChangeHandlerByField = props.getChangeHandlerByField,
       selectClassName = props.selectClassName,
       formClassName = props.formClassName,
       formGroupLabelClassName = props.formGroupLabelClassName,
       formGroupFieldClassName = props.formGroupFieldClassName,
       _props$ikarAddressOpt = props.ikarAddressOptions,
       countryOptions = _props$ikarAddressOpt.countryOptions,
       regionOptions = _props$ikarAddressOpt.regionOptions,
       districtOptions = _props$ikarAddressOpt.districtOptions,
       localityOptions = _props$ikarAddressOpt.localityOptions,
       subLocalityOptions = _props$ikarAddressOpt.subLocalityOptions,
       streetOptions = _props$ikarAddressOpt.streetOptions,
       houseOptions = _props$ikarAddressOpt.houseOptions,
       buildingOptions = _props$ikarAddressOpt.buildingOptions,
       roomOptions = _props$ikarAddressOpt.roomOptions,
       postIndexOptions = _props$ikarAddressOpt.postIndexOptions,
       postBoxOptions = _props$ikarAddressOpt.postBoxOptions,
       additionalInfoOptions = _props$ikarAddressOpt.additionalInfoOptions,
       countries = props.countries,
       regions = props.regions,
       districts = props.districts,
       _props$address = props.address,
       country = _props$address.country,
       region = _props$address.region,
       district = _props$address.district,
       locality = _props$address.locality,
       subLocality = _props$address.subLocality,
       street = _props$address.street,
       house = _props$address.house,
       building = _props$address.building,
       room = _props$address.room,
       postIndex = _props$address.postIndex,
       postBox = _props$address.postBox,
       additionalInfo = _props$address.additionalInfo,
       asyncSelectIgnoreCase = props.asyncSelectIgnoreCase,
       findLocality = props.findLocality,
       findSubLocality = props.findSubLocality,
       findStreet = props.findStreet,
       showError = props.showError;


   return _react2.default.createElement(
      'div',
      { className: formClassName },
      countryOptions && !countryOptions.isHidden && _react2.default.createElement(_SelectFormGroup2.default, {
         id: 'ikarAddressSelectInputCountry',
         onChange: getChangeHandlerByField(_IkarAddressConst.COUNTRY_FIELD),
         labelText: countryOptions.label || 'Страна',
         require: countryOptions.isRequiredField,
         value: country,
         className: selectClassName,
         valueKey: countryOptions.selectOptionValueKey || 'guid',
         labelKey: countryOptions.selectOptionLabelKey || 'name',
         options: countries,
         placeholder: countryOptions.placeholder || 'Выберите страну...',
         help: countryOptions.help,
         showError: showError,
         errorText: countryOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      regionOptions && !regionOptions.isHidden && _react2.default.createElement(_SelectFormGroup2.default, {
         id: 'ikarAddressSelectInputRegion',
         onChange: getChangeHandlerByField(_IkarAddressConst.REGION_FIELD),
         labelText: regionOptions.label || 'Регион',
         require: regionOptions.isRequiredField,
         value: region,
         valueKey: regionOptions.selectOptionValueKey || 'guid',
         labelKey: regionOptions.selectOptionLabelKey || 'view',
         options: regions,
         className: selectClassName,
         placeholder: regionOptions.placeholder || 'Выберите регион...',
         help: regionOptions.help,
         showError: showError,
         errorText: regionOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      districtOptions && districtOptions.isHidden === false && _react2.default.createElement(_SelectFormGroup2.default, {
         id: 'ikarAddressSelectInputDistrict',
         onChange: getChangeHandlerByField(_IkarAddressConst.DISTRICT_FIELD),
         labelText: districtOptions.label || 'Район',
         require: districtOptions.isRequiredField,
         value: district,
         valueKey: districtOptions.selectOptionValueKey || 'guid',
         labelKey: districtOptions.selectOptionLabelKey || 'view',
         options: districts,
         className: selectClassName,
         placeholder: districtOptions.placeholder || 'Выберите район...',
         help: districtOptions.help,
         showError: showError,
         errorText: districtOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      localityOptions && !localityOptions.isHidden && _react2.default.createElement(_AsyncSelectFormGroup2.default, {
         id: 'ikarAddressSelectInputLocality',
         onChange: getChangeHandlerByField(_IkarAddressConst.LOCALITY_FIELD),
         labelText: localityOptions.label || 'Населенный пункт',
         require: localityOptions.isRequiredField,
         value: locality,
         valueKey: localityOptions.selectOptionValueKey || 'guid',
         labelKey: localityOptions.selectOptionLabelKey || 'view',
         loadOptions: findLocality,
         className: selectClassName,
         placeholder: localityOptions.placeholder || 'Введите населенный пункт...',
         help: localityOptions.help,
         ignoreCase: asyncSelectIgnoreCase,
         showError: showError,
         errorText: localityOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      subLocalityOptions && subLocalityOptions.isHidden === false && _react2.default.createElement(_AsyncSelectFormGroup2.default, {
         id: 'ikarAddressSelectInputSubLocality',
         onChange: getChangeHandlerByField(_IkarAddressConst.SUB_LOCALITY_FIELD),
         labelText: subLocalityOptions.label || 'Подчиненный населенный пункт',
         require: subLocalityOptions.isRequiredField,
         value: subLocality,
         valueKey: subLocalityOptions.selectOptionValueKey || 'guid',
         labelKey: subLocalityOptions.selectOptionLabelKey || 'view',
         loadOptions: findSubLocality,
         className: selectClassName,
         placeholder: subLocalityOptions.placeholder || 'Введите подчиненный населенный пункт...',
         help: subLocalityOptions.help,
         ignoreCase: asyncSelectIgnoreCase,
         showError: showError,
         errorText: subLocalityOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      streetOptions && !streetOptions.isHidden && _react2.default.createElement(_AsyncSelectFormGroup2.default, {
         id: 'ikarAddressSelectInputStreet',
         onChange: getChangeHandlerByField(_IkarAddressConst.STREET_FIELD),
         labelText: streetOptions.label || 'Улица',
         require: streetOptions.isRequiredField,
         value: street,
         valueKey: streetOptions.selectOptionValueKey || 'guid',
         labelKey: streetOptions.selectOptionLabelKey || 'view',
         loadOptions: findStreet,
         className: selectClassName,
         placeholder: streetOptions.placeholder || 'Введите улицу...',
         help: streetOptions.help,
         ignoreCase: asyncSelectIgnoreCase,
         showError: showError,
         errorText: streetOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      houseOptions && !houseOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputHouse',
         onChange: getChangeHandlerByField(_IkarAddressConst.HOUSE_FIELD),
         labelText: houseOptions.label || 'Дом',
         require: houseOptions.isRequiredField,
         value: house,
         className: houseOptions.className,
         placeholder: houseOptions.placeholder || 'Введите номер дома...',
         help: houseOptions.help,
         showError: showError,
         errorText: houseOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      buildingOptions && !buildingOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputBuilding',
         onChange: getChangeHandlerByField(_IkarAddressConst.BUILDING_FIELD),
         labelText: buildingOptions.label || 'Строение',
         require: buildingOptions.isRequiredField,
         value: building,
         className: buildingOptions.className,
         placeholder: buildingOptions.placeholder || 'Введите строение...',
         help: buildingOptions.help,
         showError: showError,
         errorText: buildingOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      roomOptions && !roomOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputRoom',
         onChange: getChangeHandlerByField(_IkarAddressConst.ROOM_FIELD),
         labelText: roomOptions.label || 'Квартира/Офис',
         require: roomOptions.isRequiredField,
         value: room,
         className: roomOptions.className,
         placeholder: roomOptions.placeholder || 'Введите номер квартиры/офиса...',
         help: roomOptions.help,
         showError: showError,
         errorText: roomOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      postIndexOptions && !postIndexOptions.isHidden && _react2.default.createElement(_NumberFormGroup2.default, {
         id: 'ikarAddressInputPostIndex',
         onChange: getChangeHandlerByField(_IkarAddressConst.POST_INDEX_FIELD),
         labelText: postIndexOptions.label || 'Почтовый индекс',
         require: postIndexOptions.isRequiredField,
         value: postIndex,
         maxLength: 6,
         className: postIndexOptions.className,
         placeholder: postIndexOptions.placeholder || 'Введите почтовый индекс...',
         help: postIndexOptions.help || 'Должен содержать 6 цифр',
         showError: showError,
         customValidate: function customValidate(value) {
            return value && value.length < 6;
         },
         errorText: postIndexOptions.isRequiredField && (postIndexOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED),
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      postBoxOptions && !postBoxOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputPostBox',
         onChange: getChangeHandlerByField(_IkarAddressConst.POST_BOX_FIELD),
         labelText: postBoxOptions.label || 'Абонентский ящик',
         require: postBoxOptions.isRequiredField,
         value: postBox,
         className: postBoxOptions.className,
         placeholder: postBoxOptions.placeholder || 'Введите № абонентского ящика...',
         help: postBoxOptions.help,
         showError: showError,
         errorText: postBoxOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      additionalInfoOptions && !additionalInfoOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputAdditinalInfo',
         onChange: getChangeHandlerByField(_IkarAddressConst.ADDITIONAL_INFO_FIELD),
         labelText: additionalInfoOptions.label || 'Дополнительная информация',
         require: additionalInfoOptions.isRequiredField,
         value: additionalInfo,
         className: additionalInfoOptions.className,
         placeholder: additionalInfoOptions.placeholder || 'Введите дополнительную информацию...',
         help: additionalInfoOptions.help,
         showError: showError,
         errorText: additionalInfoOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      })
   );
};

IkarAddressRussia.propTypes = {
   countries: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      guid: _propTypes2.default.string,
      name: _propTypes2.default.string
   })).isRequired,
   regions: _propTypes2.default.array,
   districts: _propTypes2.default.array,
   address: _propTypes2.default.shape({
      country: _propTypes2.default.object,
      region: _propTypes2.default.object,
      district: _propTypes2.default.object,
      locality: _propTypes2.default.object,
      subLocality: _propTypes2.default.object,
      street: _propTypes2.default.object,
      house: _propTypes2.default.string,
      building: _propTypes2.default.string,
      room: _propTypes2.default.string,
      postIndex: _propTypes2.default.string,
      postBox: _propTypes2.default.string,
      additionalInfo: _propTypes2.default.string
   }),
   getChangeHandlerByField: _propTypes2.default.func,
   findLocality: _propTypes2.default.func,
   findSubLocality: _propTypes2.default.func,
   findStreet: _propTypes2.default.func,
   formClassName: _propTypes2.default.string,
   selectClassName: _propTypes2.default.string,
   inputClassName: _propTypes2.default.string,
   showError: _propTypes2.default.bool,
   ikarAddressOptions: _propTypes2.default.shape({
      countryOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      regionOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      districtOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      localityOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      subLocalityOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      streetOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node,
         selectOptionValueKey: _propTypes2.default.string,
         selectOptionLabelKey: _propTypes2.default.string
      }),
      houseOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      }),
      buildingOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      }),
      roomOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      }),
      postIndexOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      }),
      postBoxOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      }),
      additionalInfoOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         className: _propTypes2.default.string,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      })
   })
};

exports.default = IkarAddressRussia;