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

var _InputFormGroup = require('../../form-group/input/InputFormGroup');

var _InputFormGroup2 = _interopRequireDefault(_InputFormGroup);

var _IkarAddressConst = require('./IkarAddressConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IkarAddressForeign = function IkarAddressForeign(props) {
   var getChangeHandlerByField = props.getChangeHandlerByField,
       formClassName = props.formClassName,
       selectClassName = props.selectClassName,
       inputClassName = props.inputClassName,
       formGroupLabelClassName = props.formGroupLabelClassName,
       formGroupFieldClassName = props.formGroupFieldClassName,
       _props$ikarAddressOpt = props.ikarAddressOptions,
       countryOptions = _props$ikarAddressOpt.countryOptions,
       regionOptions = _props$ikarAddressOpt.regionOptions,
       foreignAddressOptions = _props$ikarAddressOpt.foreignAddressOptions,
       countries = props.countries,
       regions = props.regions,
       _props$address = props.address,
       country = _props$address.country,
       region = _props$address.region,
       foreignAddress = _props$address.foreignAddress,
       showError = props.showError;


   return _react2.default.createElement(
      'div',
      { className: formClassName },
      countryOptions && !countryOptions.isHidden && _react2.default.createElement(_SelectFormGroup2.default, {
         id: 'ikarAddressSelectCountry',
         onChange: getChangeHandlerByField(_IkarAddressConst.COUNTRY_FIELD),
         labelText: countryOptions.label || 'Страна',
         require: countryOptions.isRequiredField,
         value: country,
         valueKey: countryOptions.selectOptionValueKey || 'guid',
         labelKey: countryOptions.selectOptionLabelKey || 'name',
         options: countries,
         className: selectClassName,
         placeholder: countryOptions.placeholder || 'Выберите страну...',
         help: countryOptions.help,
         showError: showError,
         errorText: countryOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      }),
      regionOptions && !regionOptions.isHidden && _react2.default.createElement(_SelectFormGroup2.default, {
         id: 'ikarAddressSelectRegion',
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
      foreignAddressOptions && !foreignAddressOptions.isHidden && _react2.default.createElement(_InputFormGroup2.default, {
         id: 'ikarAddressInputForeignAddress',
         onChange: getChangeHandlerByField(_IkarAddressConst.FOREIGN_ADDRESS_FIELD),
         labelText: foreignAddressOptions.label || 'Адрес',
         require: foreignAddressOptions.isRequiredField,
         value: foreignAddress,
         className: inputClassName,
         placeholder: foreignAddressOptions.placeholder || 'Введите адрес...',
         help: foreignAddressOptions.help,
         showError: showError,
         errorText: foreignAddressOptions.errorText || _IkarAddressConst.THIS_FIELD_MUST_BE_FILLED,
         labelClassName: formGroupLabelClassName,
         fieldClassName: formGroupFieldClassName
      })
   );
};

IkarAddressForeign.propTypes = {
   countries: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      guid: _propTypes2.default.string,
      name: _propTypes2.default.string
   })).isRequired,
   regions: _propTypes2.default.array,
   address: _propTypes2.default.shape({
      country: _propTypes2.default.object,
      region: _propTypes2.default.object,
      foreignAddress: _propTypes2.default.string
   }),
   getChangeHandlerByField: _propTypes2.default.func,
   formClassName: _propTypes2.default.string,
   selectClassName: _propTypes2.default.string,
   inputClassName: _propTypes2.default.string,
   formGroupLabelClassName: _propTypes2.default.string,
   formGroupFieldClassName: _propTypes2.default.string,
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
      foreignAddressOptions: _propTypes2.default.shape({
         label: _propTypes2.default.string,
         isHidden: _propTypes2.default.bool,
         placeholder: _propTypes2.default.string,
         isRequiredField: _propTypes2.default.bool,
         help: _propTypes2.default.node,
         errorHandler: _propTypes2.default.func,
         errorText: _propTypes2.default.node
      })
   })
};

exports.default = IkarAddressForeign;