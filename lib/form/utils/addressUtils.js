'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.getForeignAddressView = exports.getRussianAddressView = undefined;

var _lodash = require('lodash');

var _IkarAddressConst = require('../elements/simple/ikar-address/IkarAddressConst');

var getRussianAddressView = exports.getRussianAddressView = function getRussianAddressView(address) {
   var addressLabels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

   var isNotEmptyLabels = !(0, _lodash.isEmpty)(addressLabels);
   var addressView = [];
   if (!(0, _lodash.isEmpty)(address)) {
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.POST_INDEX_FIELD])) {
         addressView.push('' + address[_IkarAddressConst.POST_INDEX_FIELD]);
      }
      if (isNotEmptyLabels) {
         var pushFieldToAddressView = function pushFieldToAddressView(constField) {
            if ((0, _lodash.isObject)(address[constField]) && addressLabels[constField] && address[constField][addressLabels[constField]]) {
               addressView.push('' + address[constField][addressLabels[constField]]);
            }
         };
         pushFieldToAddressView(_IkarAddressConst.COUNTRY_FIELD);
         pushFieldToAddressView(_IkarAddressConst.REGION_FIELD);
         pushFieldToAddressView(_IkarAddressConst.DISTRICT_FIELD);
         pushFieldToAddressView(_IkarAddressConst.LOCALITY_FIELD);
         pushFieldToAddressView(_IkarAddressConst.SUB_LOCALITY_FIELD);
         pushFieldToAddressView(_IkarAddressConst.STREET_FIELD);
      }
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.HOUSE_FIELD])) {
         addressView.push((options.house || 'д.') + ' ' + address[_IkarAddressConst.HOUSE_FIELD]);
      }
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.BUILDING_FIELD])) {
         addressView.push((options.building || 'стр.') + ' ' + address[_IkarAddressConst.BUILDING_FIELD]);
      }
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.ROOM_FIELD])) {
         addressView.push('' + address[_IkarAddressConst.ROOM_FIELD]);
      }
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.POST_BOX_FIELD])) {
         addressView.push((options.postBox || 'а/я') + ' ' + address[_IkarAddressConst.POST_BOX_FIELD]);
      }
      if (!(0, _lodash.isEmpty)(address[_IkarAddressConst.ADDITIONAL_INFO_FIELD])) {
         addressView.push('' + address[_IkarAddressConst.ADDITIONAL_INFO_FIELD]);
      }
   }
   return addressView.join(", ");
};

var getForeignAddressView = exports.getForeignAddressView = function getForeignAddressView() {
   var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var addressLabels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   var country = address.country,
       region = address.region,
       foreignAddress = address.foreignAddress;

   var isNotEmptyMap = !(0, _lodash.isEmpty)(addressLabels);
   var addressView = [];

   foreignAddress && addressView.push('' + foreignAddress);
   if (isNotEmptyMap) {
      if (!(0, _lodash.isEmpty)(region) && addressLabels[_IkarAddressConst.REGION_FIELD] && region[addressLabels[_IkarAddressConst.REGION_FIELD]]) {
         addressView.push('' + region[addressLabels[_IkarAddressConst.REGION_FIELD]]);
      }
      if (!(0, _lodash.isEmpty)(country) && addressLabels[_IkarAddressConst.COUNTRY_FIELD] && country[addressLabels[_IkarAddressConst.COUNTRY_FIELD]]) {
         addressView.push('' + country[addressLabels[_IkarAddressConst.COUNTRY_FIELD]]);
      }
   }
   return addressView.join(", ");
};