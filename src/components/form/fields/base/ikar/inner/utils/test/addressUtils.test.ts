import { getForeignAddressView, getRussianAddressView } from '../addressUtils';
import {
   COUNTRY_RUSSIA_GUID,
   COUNTRY_FIELD,
   REGION_FIELD,
   DISTRICT_FIELD,
   LOCALITY_FIELD,
   SUB_LOCALITY_FIELD,
   STREET_FIELD
} from '../../ikarAddressConst';

const getAddressViewLabels = () => ({
   [COUNTRY_FIELD]: 'name',
   [REGION_FIELD]: 'view',
   [DISTRICT_FIELD]: 'view',
   [LOCALITY_FIELD]: 'view',
   [SUB_LOCALITY_FIELD]: 'view',
   [STREET_FIELD]: 'view'
});

const stateRusAddress = {
   country: { guid: COUNTRY_RUSSIA_GUID, name: 'Российская Федерация' },
   region: { guid: '111-2', view: 'Москва', hasStreets: true },
   district: null,
   locality: { guid: '111-2-2-1', view: 'Центральный округ' },
   subLocality: null,
   street: { guid: '1-ar-1', view: 'ул. Арбат' },
   house: '35a',
   building: null,
   room: '23',
   postIndex: '600450',
   postBox: '45/1',
   additionalInfo: null
};

const stateForeignAddress = {
   country: { guid: '222', name: 'США' },
   region: { guid: '222-2', view: 'Калифорния' },
   district: null,
   locality: { guid: '111-2-2-1', view: 'Центральный округ' },
   subLocality: null,
   street: { guid: '1-ar-1', view: 'ул. Арбат' },
   foreignAddress: '23, 35a, 3-улица, Сан-Франциско, 320450'
};

test('get russian addressView from address should contains string', () => {
   const newRusAdr = {
      ...stateRusAddress,
      additionalInfo: '3я направо'
   };
   expect(getRussianAddressView(newRusAdr, getAddressViewLabels())).toEqual(
      '600450, Российская Федерация, Москва, Центральный округ, ул. Арбат, д. 35a, 23, а/я 45/1, 3я направо'
   );
});

test('get russian addressView from address should contains string without prop lalalalal', () => {
   const address = {
      country: { guid: COUNTRY_RUSSIA_GUID, name: 'Российская Федерация' },
      region: { guid: '111-2', view: 'Москва' },
      lalalalal: { name: 'lalalalal' }
   };
   expect(getRussianAddressView(address, getAddressViewLabels())).toEqual(
      'Российская Федерация, Москва'
   );
});

test('get russian addressView from undefined address should contains empty string', () => {
   expect(getRussianAddressView(undefined, getAddressViewLabels())).toEqual('');
});

test('get foreign addressView from address should contains string', () => {
   expect(getForeignAddressView(stateForeignAddress, getAddressViewLabels())).toEqual(
      '23, 35a, 3-улица, Сан-Франциско, 320450, Калифорния, США'
   );
});

test('get foreign addressView from address should contains string without prop eeeeeeeeeee', () => {
   const address = {
      country: { guid: '222', name: 'США' },
      region: { guid: '222-2', view: 'Калифорния' },
      eeeeeeeeeee: { guid: 'aeeee', name: 'eeeeeeeeeee' }
   };
   expect(getForeignAddressView(address, getAddressViewLabels())).toEqual('Калифорния, США');
});

test('get foreign addressView from undefined address should contains empty string', () => {
   expect(getForeignAddressView(undefined, getAddressViewLabels())).toEqual('');
});
