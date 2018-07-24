'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _IkarAddressRussia = require('./IkarAddressRussia');

var _IkarAddressRussia2 = _interopRequireDefault(_IkarAddressRussia);

var _IkarAddressForeign = require('./IkarAddressForeign');

var _IkarAddressForeign2 = _interopRequireDefault(_IkarAddressForeign);

var _Button = require('../../../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('../../../containers/Form');

var _Form2 = _interopRequireDefault(_Form);

var _addressUtils = require('../../../utils/addressUtils');

var _IkarAddressConst = require('./IkarAddressConst');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAddressViewLabels = function getAddressViewLabels(props) {
   var _ref;

   var countryOptions = props.countryOptions,
       regionOptions = props.regionOptions,
       districtOptions = props.districtOptions,
       localityOptions = props.localityOptions,
       subLocalityOptions = props.subLocalityOptions,
       streetOptions = props.streetOptions;


   return _ref = {}, _defineProperty(_ref, _IkarAddressConst.COUNTRY_FIELD, countryOptions && countryOptions.selectOptionLabelKey || "name"), _defineProperty(_ref, _IkarAddressConst.REGION_FIELD, regionOptions && regionOptions.selectOptionLabelKey || "view"), _defineProperty(_ref, _IkarAddressConst.DISTRICT_FIELD, districtOptions && districtOptions.selectOptionLabelKey || "view"), _defineProperty(_ref, _IkarAddressConst.LOCALITY_FIELD, localityOptions && localityOptions.selectOptionLabelKey || "view"), _defineProperty(_ref, _IkarAddressConst.SUB_LOCALITY_FIELD, subLocalityOptions && subLocalityOptions.selectOptionLabelKey || "view"), _defineProperty(_ref, _IkarAddressConst.STREET_FIELD, streetOptions && streetOptions.selectOptionLabelKey || "view"), _ref;
};

var notEmpty = function notEmpty(addressElement, pattern, func) {
   return pattern && pattern.length > 1 && !(0, _lodash.isEmpty)(addressElement) && (0, _lodash.isFunction)(func);
};

var isRussia = function isRussia(country) {
   return (0, _lodash.isEmpty)(country) || country.guid === _IkarAddressConst.COUNTRY_RUSSIA_GUID;
};

var getToggleBtnOptions = function getToggleBtnOptions() {
   var hideFormTooltip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Скрыть форму";
   var showFormTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Показать форму";
   var isShownForm = arguments[2];

   if (isShownForm) {
      return {
         tooltip: hideFormTooltip,
         icon: 'fa fa-eye-slash blue bigger-110'
      };
   } else {
      return {
         tooltip: showFormTooltip,
         icon: 'fa fa-pencil blue bigger-110'
      };
   }
};

var emptySelectOptions = { options: [] };

var IkarAddress = function (_Component) {
   _inherits(IkarAddress, _Component);

   function IkarAddress(props, context) {
      _classCallCheck(this, IkarAddress);

      var _this = _possibleConstructorReturn(this, (IkarAddress.__proto__ || Object.getPrototypeOf(IkarAddress)).call(this, props, context));

      var _this$props = _this.props,
          findLocality = _this$props.findLocality,
          findSubLocality = _this$props.findSubLocality,
          findStreet = _this$props.findStreet,
          asyncSelectDelay = _this$props.asyncSelectDelay,
          isShownForm = _this$props.isShownForm;


      _this.state = {
         isShownForm: isShownForm
      };

      if ((0, _lodash.isFunction)(findLocality)) {
         _this.getLocality = (0, _lodash.debounce)(findLocality, asyncSelectDelay);
      }
      if ((0, _lodash.isFunction)(findSubLocality)) {
         _this.getSubLocality = (0, _lodash.debounce)(findSubLocality, asyncSelectDelay);
      }
      if ((0, _lodash.isFunction)(findStreet)) {
         _this.getStreet = (0, _lodash.debounce)(findStreet, asyncSelectDelay);
      }

      _this.getChangeHandlerByField = _this.getChangeHandlerByField.bind(_this);
      _this.handleChange = _this.handleChange.bind(_this);
      _this.loadRegionsAndDistricts = _this.loadRegionsAndDistricts.bind(_this);
      _this.getAddressView = _this.getAddressView.bind(_this);
      _this.findLocality = _this.findLocality.bind(_this);
      _this.findSubLocality = _this.findSubLocality.bind(_this);
      _this.findStreet = _this.findStreet.bind(_this);
      _this.toggleShowForm = _this.toggleShowForm.bind(_this);
      _this.formAndChangeAddress = _this.formAndChangeAddress.bind(_this);
      _this.setStateFromRequestResult = _this.setStateFromRequestResult.bind(_this);

      _this.addressViewLabels = getAddressViewLabels(_this.props);
      return _this;
   }

   _createClass(IkarAddress, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         if ((0, _lodash.isEmpty)(this.props.address) && !(0, _lodash.isEmpty)(nextProps.address)) {
            this.loadRegionsAndDistricts(nextProps);
         }
      }
   }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
         var _props = this.props,
             address = _props.address,
             loadCountries = _props.loadCountries,
             countryList = _props.countries;

         if (!(0, _lodash.isEmpty)(address)) {
            this.loadRegionsAndDistricts(this.props);
            if ((0, _lodash.isEmpty)(address.addressView)) {
               this.handleChange(_extends({}, address, {
                  addressView: this.getAddressView(address)
               }));
            }
         }
         (0, _lodash.isEmpty)(countryList) && loadCountries && loadCountries();
      }
   }, {
      key: 'loadRegionsAndDistricts',
      value: function loadRegionsAndDistricts(props) {
         var findRegion = props.findRegion,
             findDistrict = props.findDistrict,
             _props$address = props.address,
             country = _props$address.country,
             region = _props$address.region;

         var regionsRequest = null,
             districtsRequest = null;
         if (country && findRegion) {
            regionsRequest = findRegion(country);
            this.setStateFromRequestResult(regionsRequest, this.state, 'regions');
         }
         if (findDistrict && isRussia(country) && region) {
            districtsRequest = findDistrict(region);
            this.setStateFromRequestResult(districtsRequest, this.state, 'districts');
         }
      }
   }, {
      key: 'setStateFromRequestResult',
      value: function setStateFromRequestResult(request, state, field) {
         var _this2 = this;

         if (request instanceof Promise) {
            request.then(function (result) {
               return _this2.setState(_extends({}, state, _defineProperty({}, field, result)));
            });
         } else {
            this.setState(_extends({}, state, _defineProperty({}, field, request)));
         }
      }
   }, {
      key: 'getAddressView',
      value: function getAddressView(address) {
         var russianAddressViewOptions = this.props.russianAddressViewOptions;

         if (isRussia(address.country)) {
            return (0, _addressUtils.getRussianAddressView)(address, this.addressViewLabels, russianAddressViewOptions);
         }
         return (0, _addressUtils.getForeignAddressView)(address, this.addressViewLabels);
      }
   }, {
      key: 'getChangeHandlerByField',
      value: function getChangeHandlerByField(field) {
         var _this3 = this;

         var regions = this.state.regions;

         switch (field) {
            case _IkarAddressConst.COUNTRY_FIELD:
               return function (country) {
                  var newState = _extends({}, _this3.state, {
                     regions: [],
                     districts: []
                  });

                  var address = _extends({}, _this3.props.address, {
                     country: null,
                     region: null,
                     district: null,
                     locality: null,
                     subLocality: null,
                     street: null,
                     foreignAddress: null
                  });

                  if (!(0, _lodash.isEmpty)(country)) {
                     var findRegion = _this3.props.findRegion;

                     var regionsRequest = findRegion && findRegion(country);
                     _this3.setStateFromRequestResult(regionsRequest, newState, 'regions');
                     address = _extends({}, address, {
                        country: country
                     });
                  } else {
                     _this3.setState(newState);
                  }

                  _this3.handleChange(address);
               };

            case _IkarAddressConst.REGION_FIELD:
               return function (region) {
                  var newState = _extends({}, _this3.state, {
                     regions: regions,
                     districts: []
                  });
                  var address = _extends({}, _this3.props.address, {
                     region: null,
                     district: null,
                     locality: null,
                     subLocality: null,
                     street: null
                  });
                  if (!(0, _lodash.isEmpty)(region)) {
                     var findDistrict = _this3.props.findDistrict;

                     if (findDistrict && isRussia(address.country)) {
                        var districtsRequest = findDistrict(region);
                        _this3.setStateFromRequestResult(districtsRequest, newState, 'districts');
                     }
                     address = _extends({}, address, {
                        region: region
                     });
                  } else {
                     _this3.setState(newState);
                  }
                  _this3.handleChange(address);
               };

            case _IkarAddressConst.DISTRICT_FIELD:
               return function (district) {
                  var address = _extends({}, _this3.props.address, {
                     district: null,
                     locality: null,
                     subLocality: null,
                     street: null
                  });
                  _this3.formAndChangeAddress(address, district, _IkarAddressConst.DISTRICT_FIELD);
               };

            case _IkarAddressConst.LOCALITY_FIELD:
               return function (locality) {
                  var address = _extends({}, _this3.props.address, {
                     locality: null,
                     subLocality: null,
                     street: null
                  });
                  _this3.formAndChangeAddress(address, locality, _IkarAddressConst.LOCALITY_FIELD);
               };

            case _IkarAddressConst.SUB_LOCALITY_FIELD:
               return function (subLocality) {
                  var address = _extends({}, _this3.props.address, {
                     subLocality: null,
                     street: null
                  });
                  _this3.formAndChangeAddress(address, subLocality, _IkarAddressConst.SUB_LOCALITY_FIELD);
               };

            case _IkarAddressConst.STREET_FIELD:
               return function (street) {
                  var address = _extends({}, _this3.props.address, {
                     street: street
                  });
                  _this3.handleChange(address);
               };

            default:
               return function (value) {
                  _this3.handleChange(_extends({}, _this3.props.address, _defineProperty({}, field, value)));
               };
         }
      }
   }, {
      key: 'formAndChangeAddress',
      value: function formAndChangeAddress(address, value, field) {
         if (!(0, _lodash.isEmpty)(value)) {
            address = _extends({}, address, _defineProperty({}, field, value));
         }
         this.handleChange(address);
      }
   }, {
      key: 'handleChange',
      value: function handleChange(newAddress) {
         var _props2 = this.props,
             onChange = _props2.onChange,
             addressPath = _props2.addressPath;
         var _newAddress = newAddress,
             country = _newAddress.country;

         if (country && country.guid !== _IkarAddressConst.COUNTRY_RUSSIA_GUID) {
            newAddress = {
               country: newAddress.country,
               region: newAddress.region,
               foreignAddress: newAddress.foreignAddress
            };
         }
         var address = _extends({}, newAddress, {
            addressView: this.getAddressView(newAddress)
         });
         onChange && onChange(address, addressPath);
      }
   }, {
      key: 'findLocality',
      value: function findLocality(pattern, callback) {
         var _props3 = this.props,
             findLocality = _props3.findLocality,
             _props3$address = _props3.address,
             region = _props3$address.region,
             district = _props3$address.district;

         var parent = !(0, _lodash.isEmpty)(district) ? district : region;

         if (notEmpty(parent, pattern, findLocality)) {
            return this.getLocality(parent, pattern, callback);
         } else {
            callback(null, emptySelectOptions);
         }
      }
   }, {
      key: 'findSubLocality',
      value: function findSubLocality(pattern, callback) {
         var _props4 = this.props,
             findSubLocality = _props4.findSubLocality,
             locality = _props4.address.locality;

         if (notEmpty(locality, pattern, findSubLocality)) {
            return this.getSubLocality(locality, pattern, callback);
         } else {
            callback(null, emptySelectOptions);
         }
      }
   }, {
      key: 'findStreet',
      value: function findStreet(pattern, callback) {
         var _props5 = this.props,
             findStreet = _props5.findStreet,
             _props5$address = _props5.address,
             region = _props5$address.region,
             locality = _props5$address.locality,
             subLocality = _props5$address.subLocality;


         var parent = {};
         if (!(0, _lodash.isEmpty)(subLocality)) {
            parent = subLocality;
         } else if (!(0, _lodash.isEmpty)(locality)) {
            parent = locality;
         } else if (region && region.hasStreets) {
            parent = region;
         }
         if (notEmpty(parent, pattern, findStreet)) {
            return this.getStreet(parent, pattern, callback);
         } else {
            callback(null, emptySelectOptions);
         }
      }
   }, {
      key: 'toggleShowForm',
      value: function toggleShowForm() {
         this.setState(function (prevState) {
            return _extends({}, prevState, {
               isShownForm: !prevState.isShownForm
            });
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var _props6 = this.props,
             inputClassName = _props6.inputClassName,
             selectClassName = _props6.selectClassName,
             formClassName = _props6.formClassName,
             formGroupLabelClassName = _props6.formGroupLabelClassName,
             formGroupFieldClassName = _props6.formGroupFieldClassName,
             isShowAddressView = _props6.isShowAddressView,
             countryOptions = _props6.countryOptions,
             regionOptions = _props6.regionOptions,
             districtOptions = _props6.districtOptions,
             localityOptions = _props6.localityOptions,
             subLocalityOptions = _props6.subLocalityOptions,
             streetOptions = _props6.streetOptions,
             houseOptions = _props6.houseOptions,
             buildingOptions = _props6.buildingOptions,
             roomOptions = _props6.roomOptions,
             postIndexOptions = _props6.postIndexOptions,
             postBoxOptions = _props6.postBoxOptions,
             additionalInfoOptions = _props6.additionalInfoOptions,
             foreignAddressOptions = _props6.foreignAddressOptions,
             address = _props6.address,
             countries = _props6.countries,
             asyncSelectIgnoreCase = _props6.asyncSelectIgnoreCase,
             hideFormOptionTooltip = _props6.hideFormOptionTooltip,
             showFormOptionTooltip = _props6.showFormOptionTooltip,
             showError = _props6.showError;
         var country = address.country,
             addressView = address.addressView;
         var _state = this.state,
             isShownForm = _state.isShownForm,
             regions = _state.regions,
             districts = _state.districts;


         var form = null;
         var formClassNameCountry = null;
         if (isRussia(country)) {
            formClassNameCountry = 'ikar-address-form--county--russia ikar-address-form--animation--slide';
            var ikarAddressOptions = {
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
               additionalInfoOptions: additionalInfoOptions
            };
            form = _react2.default.createElement(_IkarAddressRussia2.default, { ikarAddressOptions: ikarAddressOptions,
               countries: countries,
               regions: regions,
               districts: districts,
               address: address,
               getChangeHandlerByField: this.getChangeHandlerByField,
               findLocality: this.findLocality,
               findSubLocality: this.findSubLocality,
               findStreet: this.findStreet,
               inputClassName: inputClassName,
               selectClassName: selectClassName,
               formClassName: formClassName,
               formGroupLabelClassName: formGroupLabelClassName,
               formGroupFieldClassName: formGroupFieldClassName,
               asyncSelectIgnoreCase: asyncSelectIgnoreCase,
               showError: showError });
         } else {
            formClassNameCountry = 'ikar-address-form--country--foreign ikar-address-form--animation--slide';
            var _ikarAddressOptions = {
               countryOptions: countryOptions,
               regionOptions: regionOptions,
               foreignAddressOptions: foreignAddressOptions
            };
            form = _react2.default.createElement(_IkarAddressForeign2.default, { ikarAddressOptions: _ikarAddressOptions,
               countries: countries,
               regions: regions,
               address: address,
               getChangeHandlerByField: this.getChangeHandlerByField,
               inputClassName: inputClassName,
               selectClassName: selectClassName,
               formGroupLabelClassName: formGroupLabelClassName,
               formGroupFieldClassName: formGroupFieldClassName,
               formClassName: formClassName,
               showError: showError });
         }

         var toggleBtnOptions = getToggleBtnOptions(hideFormOptionTooltip, showFormOptionTooltip, isShownForm);
         return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
               _Form2.default,
               { className: (0, _classnames2.default)("form-horizontal css-form ikar-address-form--visability--shown", isShownForm && formClassNameCountry) },
               form
            ),
            isShowAddressView && _react2.default.createElement(
               'div',
               { className: 'text-muted ikar-address--address-view' },
               addressView,
               '\xA0',
               _react2.default.createElement(_Button2.default, { onClick: this.toggleShowForm,
                  tooltip: toggleBtnOptions.tooltip,
                  icon: toggleBtnOptions.icon })
            )
         );
      }
   }]);

   return IkarAddress;
}(_react.Component);

IkarAddress.defaultProps = {
   address: {},
   countryOptions: {},
   regionOptions: {},
   districtOptions: {},
   localityOptions: {},
   subLocalityOptions: {},
   streetOptions: {},
   houseOptions: {},
   buildingOptions: {},
   roomOptions: {},
   postIndexOptions: {},
   postBoxOptions: {},
   additionalInfoOptions: {},
   foreignAddressOptions: {},
   isShownForm: true,
   isShowAddressView: true,
   asyncSelectDelay: 800,
   hideFormOptionTooltip: "Скрыть форму",
   showFormOptionTooltip: "Показать форму",
   showError: false
};

IkarAddress.propTypes = {
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
   inputClassName: _propTypes2.default.string,
   isShownForm: _propTypes2.default.bool,
   isShowAddressView: _propTypes2.default.bool,
   countryOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      help: _propTypes2.default.node,
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
      errorText: _propTypes2.default.node
   }),
   buildingOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      className: _propTypes2.default.string,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   roomOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      className: _propTypes2.default.string,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   postIndexOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      className: _propTypes2.default.string,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   postBoxOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      className: _propTypes2.default.string,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   additionalInfoOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      className: _propTypes2.default.string,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   foreignAddressOptions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      isHidden: _propTypes2.default.bool,
      placeholder: _propTypes2.default.string,
      isRequiredField: _propTypes2.default.bool,
      help: _propTypes2.default.node,
      errorText: _propTypes2.default.node
   }),
   asyncSelectIgnoreCase: _propTypes2.default.bool,
   asyncSelectDelay: _propTypes2.default.number,
   addressPath: _propTypes2.default.string,
   russianAddressViewOptions: _propTypes2.default.shape({
      house: _propTypes2.default.string,
      building: _propTypes2.default.string,
      postBox: _propTypes2.default.string
   }),
   formGroupLabelClassName: _propTypes2.default.string,
   formGroupFieldClassName: _propTypes2.default.string,
   hideFormOptionTooltip: _propTypes2.default.string,
   showFormOptionTooltip: _propTypes2.default.string,
   showError: _propTypes2.default.bool
};

exports.default = IkarAddress;