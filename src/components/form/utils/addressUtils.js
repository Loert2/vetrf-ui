import { isObject, isEmpty } from 'lodash';
import {
   COUNTRY_FIELD,
   REGION_FIELD,
   DISTRICT_FIELD,
   LOCALITY_FIELD,
   SUB_LOCALITY_FIELD,
   STREET_FIELD,
   HOUSE_FIELD,
   BUILDING_FIELD,
   ROOM_FIELD,
   POST_INDEX_FIELD,
   POST_BOX_FIELD,
   ADDITIONAL_INFO_FIELD
} from '../elements/simple/ikar-address/IkarAddressConst';

export const getRussianAddressView = (address, addressLabels = {}, options = {}) => {
   const isNotEmptyLabels = !isEmpty(addressLabels);
   const addressView = [];
   if (!isEmpty(address)) {
      if (!isEmpty(address[ POST_INDEX_FIELD ])) {
         addressView.push(`${ address[ POST_INDEX_FIELD ] }`);
      }
      if (isNotEmptyLabels) {
         const pushFieldToAddressView = (constField) => {
            if (isObject(address[ constField ]) && addressLabels[constField] &&
               address[ constField ][ addressLabels[ constField ] ]) {
               addressView.push(`${ address[ constField ][ addressLabels[ constField ] ] }`);
            }
         };
         pushFieldToAddressView(COUNTRY_FIELD);
         pushFieldToAddressView(REGION_FIELD);
         pushFieldToAddressView(DISTRICT_FIELD);
         pushFieldToAddressView(LOCALITY_FIELD);
         pushFieldToAddressView(SUB_LOCALITY_FIELD);
         pushFieldToAddressView(STREET_FIELD);
      }
      if (!isEmpty(address[ HOUSE_FIELD ])) {
         addressView.push(`${ options.house || 'д.'} ${ address[ HOUSE_FIELD ] }`);
      }
      if (!isEmpty(address[ BUILDING_FIELD ])) {
         addressView.push(`${ options.building || 'стр.'} ${ address[ BUILDING_FIELD ] }`);
      }
      if (!isEmpty(address[ ROOM_FIELD ])) {
         addressView.push(`${ address[ ROOM_FIELD ] }`);
      }
      if (!isEmpty(address[ POST_BOX_FIELD ])) {
         addressView.push(`${ options.postBox || 'а/я'} ${ address[ POST_BOX_FIELD ] }`);
      }
      if (!isEmpty(address[ ADDITIONAL_INFO_FIELD ])) {
         addressView.push(`${ address[ ADDITIONAL_INFO_FIELD ] }`);
      }
   }
   return addressView.join(", ");
};

export const getForeignAddressView = (address = {}, addressLabels = {}) => {
   const { country, region, foreignAddress } = address;
   const isNotEmptyMap = !isEmpty(addressLabels);
   const addressView = [];

   foreignAddress && addressView.push(`${ foreignAddress }`);
   if (isNotEmptyMap) {
      if (!isEmpty(region) && addressLabels[REGION_FIELD] && region[ addressLabels[REGION_FIELD] ]) {
         addressView.push(`${ region[ addressLabels[REGION_FIELD] ] }`);
      }
      if (!isEmpty(country) && addressLabels[COUNTRY_FIELD] && country[ addressLabels[COUNTRY_FIELD] ]) {
         addressView.push(`${ country[ addressLabels[COUNTRY_FIELD] ] }`);
      }
   }
   return addressView.join(", ");
};