'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _IkarAddress = require('../../simple/ikar-address/IkarAddress');

var _IkarAddress2 = _interopRequireDefault(_IkarAddress);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IkarAddressFormGroup = function IkarAddressFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       help = props.help,
       additionalBlock = props.additionalBlock,
       address = props.address,
       onChange = props.onChange,
       countries = props.countries,
       loadCountries = props.loadCountries,
       findRegion = props.findRegion,
       findDistrict = props.findDistrict,
       findLocality = props.findLocality,
       findSubLocality = props.findSubLocality,
       findStreet = props.findStreet,
       formClassName = props.formClassName,
       selectClassName = props.selectClassName,
       inputClassName = props.inputClassName,
       isShownForm = props.isShownForm,
       isShowAddressView = props.isShowAddressView,
       countryOptions = props.countryOptions,
       regionOptions = props.regionOptions,
       districtOptions = props.districtOptions,
       localityOptions = props.localityOptions,
       subLocalityOptions = props.subLocalityOptions,
       streetOptions = props.streetOptions,
       houseOptions = props.houseOptions,
       buildingOptions = props.buildingOptions,
       roomOptions = props.roomOptions,
       postIndexOptions = props.postIndexOptions,
       postBoxOptions = props.postBoxOptions,
       additionalInfoOptions = props.additionalInfoOptions,
       foreignAddressOptions = props.foreignAddressOptions,
       russianAddressViewOptions = props.russianAddressViewOptions,
       asyncSelectIgnoreCase = props.asyncSelectIgnoreCase,
       addressPath = props.addressPath,
       hasError = props.hasError,
       formGroupErrorClassName = props.formGroupErrorClassName,
       formGroupErrorTextClassName = props.formGroupErrorTextClassName,
       formGroupErrorText = props.formGroupErrorText,
       formGroupLabelClassName = props.formGroupLabelClassName,
       formGroupFieldClassName = props.formGroupFieldClassName,
       componentFormGroupLabelClassName = props.componentFormGroupLabelClassName,
       componentFormGroupFieldClassName = props.componentFormGroupFieldClassName,
       showError = props.showError;


   return _react2.default.createElement(
      _FormGroup2.default,
      {
         labelText: labelText,
         hasError: hasError,
         errorClassName: formGroupErrorClassName,
         errorTextClassName: formGroupErrorTextClassName,
         errorText: formGroupErrorText,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName,
         require: require,
         help: help,
         additionalBlock: additionalBlock },
      _react2.default.createElement(_IkarAddress2.default, {
         address: address,
         countryOptions: countryOptions,
         regionOptions: regionOptions,
         districtOptions: districtOptions,
         localityOptions: localityOptions,
         subLocalityOptions: subLocalityOptions,
         streetOptions: streetOptions,
         houseOptions: houseOptions,
         buildingOptions: buildingOptions,
         roomOptions: roomOptions,
         postIndexOptions: postIndexOptions,
         postBoxOptions: postBoxOptions,
         additionalInfoOptions: additionalInfoOptions,
         foreignAddressOptions: foreignAddressOptions,
         onChange: onChange,
         countries: countries,
         loadCountries: loadCountries,
         findRegion: findRegion,
         findDistrict: findDistrict,
         findLocality: findLocality,
         findSubLocality: findSubLocality,
         findStreet: findStreet,
         formClassName: formClassName,
         selectClassName: selectClassName,
         inputClassName: inputClassName,
         isShownForm: isShownForm,
         isShowAddressView: isShowAddressView,
         russianAddressViewOptions: russianAddressViewOptions,
         asyncSelectIgnoreCase: asyncSelectIgnoreCase,
         addressPath: addressPath,
         formGroupLabelClassName: componentFormGroupLabelClassName,
         formGroupFieldClassName: componentFormGroupFieldClassName,
         showError: showError
      })
   );
};

IkarAddressFormGroup.defaultProps = {
   formGroupErrorTextClassName: 'form-group__ikar-address--error-text',
   formGroupErrorText: 'Данная форма должна быть заполнена',
   showError: false
};

IkarAddressFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   hasError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   help: _propTypes2.default.node,
   additionalBlock: _propTypes2.default.node,
   formGroupErrorClassName: _propTypes2.default.string,
   formGroupErrorText: _propTypes2.default.string,
   formGroupLabelClassName: _propTypes2.default.string,
   formGroupFieldClassName: _propTypes2.default.string,
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
      additionalInfo: _propTypes2.default.string,
      foreignAddress: _propTypes2.default.string,
      addressView: _propTypes2.default.string
   }),
   onChange: _propTypes2.default.func,
   countries: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      guid: _propTypes2.default.string,
      name: _propTypes2.default.string
   })),
   loadCountries: _propTypes2.default.func,
   findRegion: _propTypes2.default.func,
   findDistrict: _propTypes2.default.func,
   findLocality: _propTypes2.default.func,
   findSubLocality: _propTypes2.default.func,
   findStreet: _propTypes2.default.func,
   formClassName: _propTypes2.default.string,
   selectClassName: _propTypes2.default.string,
   componentFormGroupLabelClassName: _propTypes2.default.string,
   componentFormGroupFieldClassName: _propTypes2.default.string,
   inputClassName: _propTypes2.default.string,
   isShownForm: _propTypes2.default.bool,
   isShowAddressView: _propTypes2.default.bool,
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
   }),
   foreignAddressOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      help: _propTypes2.default.node,
      errorHandler: _propTypes2.default.func,
      errorText: _propTypes2.default.node
   }),
   asyncSelectIgnoreCase: _propTypes2.default.bool,
   addressPath: _propTypes2.default.string,
   russianAddressViewOptions: _propTypes2.default.shape({
      house: _propTypes2.default.string,
      building: _propTypes2.default.string,
      postBox: _propTypes2.default.string
   }),
   showError: _propTypes2.default.bool
};

exports.default = (0, _withValidate2.default)(IkarAddressFormGroup, function (props) {
   return props.require && props.address && (0, _isEmpty2.default)(props.address.addressView);
});