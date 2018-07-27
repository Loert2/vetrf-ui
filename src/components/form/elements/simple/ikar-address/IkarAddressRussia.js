import React from 'react';
import PropTypes from 'prop-types';

import SelectFormGroup from '../../form-group/select/SelectFormGroup';
import AsyncSelectFormGroup from '../../form-group/select/async/AsyncSelectFormGroup';
import InputFormGroup from '../../form-group/input/InputFormGroup';
import NumberFormGroup from '../../form-group/number/NumberFormGroup';
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
   ADDITIONAL_INFO_FIELD,
   THIS_FIELD_MUST_BE_FILLED
} from './IkarAddressConst';

const IkarAddressRussia = (props) => {
   const {
      getChangeHandlerByField,
      selectClassName,
      formClassName,
      formGroupLabelClassName,
      formGroupFieldClassName,
      ikarAddressOptions: {
         countryOptions,
         regionOptions,
         districtOptions,
         localityOptions,
         subLocalityOptions,
         streetOptions,
         houseOptions,
         buildingOptions,
         roomOptions,
         postIndexOptions,
         postBoxOptions,
         additionalInfoOptions
      },
      countries,
      regions,
      districts,
      address: {
         country,
         region,
         district,
         locality,
         subLocality,
         street,
         house,
         building,
         room,
         postIndex,
         postBox,
         additionalInfo
      },
      asyncSelectIgnoreCase,
      findLocality,
      findSubLocality,
      findStreet,
      showError
   } = props;

   return (
      <div className={formClassName}>
         {countryOptions &&
            !countryOptions.isHidden && (
               <SelectFormGroup
                  id="ikarAddressSelectInputCountry"
                  onChange={getChangeHandlerByField(COUNTRY_FIELD)}
                  labelText={countryOptions.label || 'Страна'}
                  require={countryOptions.isRequiredField}
                  value={country}
                  className={selectClassName}
                  valueKey={countryOptions.selectOptionValueKey || 'guid'}
                  labelKey={countryOptions.selectOptionLabelKey || 'name'}
                  options={countries}
                  placeholder={
                     countryOptions.placeholder || 'Выберите страну...'
                  }
                  help={countryOptions.help}
                  showError={showError}
                  errorText={
                     countryOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {regionOptions &&
            !regionOptions.isHidden && (
               <SelectFormGroup
                  id="ikarAddressSelectInputRegion"
                  onChange={getChangeHandlerByField(REGION_FIELD)}
                  labelText={regionOptions.label || 'Регион'}
                  require={regionOptions.isRequiredField}
                  value={region}
                  valueKey={regionOptions.selectOptionValueKey || 'guid'}
                  labelKey={regionOptions.selectOptionLabelKey || 'view'}
                  options={regions}
                  className={selectClassName}
                  placeholder={
                     regionOptions.placeholder || 'Выберите регион...'
                  }
                  help={regionOptions.help}
                  showError={showError}
                  errorText={
                     regionOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {districtOptions &&
            districtOptions.isHidden === false && (
               <SelectFormGroup
                  id="ikarAddressSelectInputDistrict"
                  onChange={getChangeHandlerByField(DISTRICT_FIELD)}
                  labelText={districtOptions.label || 'Район'}
                  require={districtOptions.isRequiredField}
                  value={district}
                  valueKey={districtOptions.selectOptionValueKey || 'guid'}
                  labelKey={districtOptions.selectOptionLabelKey || 'view'}
                  options={districts}
                  className={selectClassName}
                  placeholder={
                     districtOptions.placeholder || 'Выберите район...'
                  }
                  help={districtOptions.help}
                  showError={showError}
                  errorText={
                     districtOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {localityOptions &&
            !localityOptions.isHidden && (
               <AsyncSelectFormGroup
                  id="ikarAddressSelectInputLocality"
                  onChange={getChangeHandlerByField(LOCALITY_FIELD)}
                  labelText={localityOptions.label || 'Населенный пункт'}
                  require={localityOptions.isRequiredField}
                  value={locality}
                  valueKey={localityOptions.selectOptionValueKey || 'guid'}
                  labelKey={localityOptions.selectOptionLabelKey || 'view'}
                  loadOptions={findLocality}
                  className={selectClassName}
                  placeholder={
                     localityOptions.placeholder ||
                     'Введите населенный пункт...'
                  }
                  help={localityOptions.help}
                  ignoreCase={asyncSelectIgnoreCase}
                  showError={showError}
                  errorText={
                     localityOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {subLocalityOptions &&
            subLocalityOptions.isHidden === false && (
               <AsyncSelectFormGroup
                  id="ikarAddressSelectInputSubLocality"
                  onChange={getChangeHandlerByField(SUB_LOCALITY_FIELD)}
                  labelText={
                     subLocalityOptions.label || 'Подчиненный населенный пункт'
                  }
                  require={subLocalityOptions.isRequiredField}
                  value={subLocality}
                  valueKey={subLocalityOptions.selectOptionValueKey || 'guid'}
                  labelKey={subLocalityOptions.selectOptionLabelKey || 'view'}
                  loadOptions={findSubLocality}
                  className={selectClassName}
                  placeholder={
                     subLocalityOptions.placeholder ||
                     'Введите подчиненный населенный пункт...'
                  }
                  help={subLocalityOptions.help}
                  ignoreCase={asyncSelectIgnoreCase}
                  showError={showError}
                  errorText={
                     subLocalityOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {streetOptions &&
            !streetOptions.isHidden && (
               <AsyncSelectFormGroup
                  id="ikarAddressSelectInputStreet"
                  onChange={getChangeHandlerByField(STREET_FIELD)}
                  labelText={streetOptions.label || 'Улица'}
                  require={streetOptions.isRequiredField}
                  value={street}
                  valueKey={streetOptions.selectOptionValueKey || 'guid'}
                  labelKey={streetOptions.selectOptionLabelKey || 'view'}
                  loadOptions={findStreet}
                  className={selectClassName}
                  placeholder={streetOptions.placeholder || 'Введите улицу...'}
                  help={streetOptions.help}
                  ignoreCase={asyncSelectIgnoreCase}
                  showError={showError}
                  errorText={
                     streetOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {houseOptions &&
            !houseOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputHouse"
                  onChange={getChangeHandlerByField(HOUSE_FIELD)}
                  labelText={houseOptions.label || 'Дом'}
                  require={houseOptions.isRequiredField}
                  value={house}
                  className={houseOptions.className}
                  placeholder={
                     houseOptions.placeholder || 'Введите номер дома...'
                  }
                  help={houseOptions.help}
                  showError={showError}
                  errorText={
                     houseOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {buildingOptions &&
            !buildingOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputBuilding"
                  onChange={getChangeHandlerByField(BUILDING_FIELD)}
                  labelText={buildingOptions.label || 'Строение'}
                  require={buildingOptions.isRequiredField}
                  value={building}
                  className={buildingOptions.className}
                  placeholder={
                     buildingOptions.placeholder || 'Введите строение...'
                  }
                  help={buildingOptions.help}
                  showError={showError}
                  errorText={
                     buildingOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {roomOptions &&
            !roomOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputRoom"
                  onChange={getChangeHandlerByField(ROOM_FIELD)}
                  labelText={roomOptions.label || 'Квартира/Офис'}
                  require={roomOptions.isRequiredField}
                  value={room}
                  className={roomOptions.className}
                  placeholder={
                     roomOptions.placeholder ||
                     'Введите номер квартиры/офиса...'
                  }
                  help={roomOptions.help}
                  showError={showError}
                  errorText={roomOptions.errorText || THIS_FIELD_MUST_BE_FILLED}
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {postIndexOptions &&
            !postIndexOptions.isHidden && (
               <NumberFormGroup
                  id="ikarAddressInputPostIndex"
                  onChange={getChangeHandlerByField(POST_INDEX_FIELD)}
                  labelText={postIndexOptions.label || 'Почтовый индекс'}
                  require={postIndexOptions.isRequiredField}
                  value={postIndex}
                  maxLength={6}
                  className={postIndexOptions.className}
                  placeholder={
                     postIndexOptions.placeholder ||
                     'Введите почтовый индекс...'
                  }
                  help={postIndexOptions.help || 'Должен содержать 6 цифр'}
                  showError={showError}
                  customValidate={(value) => value && value.length < 6}
                  errorText={
                     postIndexOptions.isRequiredField &&
                     (postIndexOptions.errorText || THIS_FIELD_MUST_BE_FILLED)
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {postBoxOptions &&
            !postBoxOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputPostBox"
                  onChange={getChangeHandlerByField(POST_BOX_FIELD)}
                  labelText={postBoxOptions.label || 'Абонентский ящик'}
                  require={postBoxOptions.isRequiredField}
                  value={postBox}
                  className={postBoxOptions.className}
                  placeholder={
                     postBoxOptions.placeholder ||
                     'Введите № абонентского ящика...'
                  }
                  help={postBoxOptions.help}
                  showError={showError}
                  errorText={
                     postBoxOptions.errorText || THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {additionalInfoOptions &&
            !additionalInfoOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputAdditinalInfo"
                  onChange={getChangeHandlerByField(ADDITIONAL_INFO_FIELD)}
                  labelText={
                     additionalInfoOptions.label || 'Дополнительная информация'
                  }
                  require={additionalInfoOptions.isRequiredField}
                  value={additionalInfo}
                  className={additionalInfoOptions.className}
                  placeholder={
                     additionalInfoOptions.placeholder ||
                     'Введите дополнительную информацию...'
                  }
                  help={additionalInfoOptions.help}
                  showError={showError}
                  errorText={
                     additionalInfoOptions.errorText ||
                     THIS_FIELD_MUST_BE_FILLED
                  }
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
      </div>
   );
};

IkarAddressRussia.propTypes = {
   countries: PropTypes.arrayOf(
      PropTypes.shape({
         guid: PropTypes.string,
         name: PropTypes.string
      })
   ).isRequired,
   regions: PropTypes.array,
   districts: PropTypes.array,
   address: PropTypes.shape({
      country: PropTypes.object,
      region: PropTypes.object,
      district: PropTypes.object,
      locality: PropTypes.object,
      subLocality: PropTypes.object,
      street: PropTypes.object,
      house: PropTypes.string,
      building: PropTypes.string,
      room: PropTypes.string,
      postIndex: PropTypes.string,
      postBox: PropTypes.string,
      additionalInfo: PropTypes.string
   }),
   getChangeHandlerByField: PropTypes.func,
   findLocality: PropTypes.func,
   findSubLocality: PropTypes.func,
   findStreet: PropTypes.func,
   formClassName: PropTypes.string,
   selectClassName: PropTypes.string,
   inputClassName: PropTypes.string,
   showError: PropTypes.bool,
   ikarAddressOptions: PropTypes.shape({
      countryOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      regionOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      districtOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      localityOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      subLocalityOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      streetOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node,
         selectOptionValueKey: PropTypes.string,
         selectOptionLabelKey: PropTypes.string
      }),
      houseOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      }),
      buildingOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      }),
      roomOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      }),
      postIndexOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      }),
      postBoxOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      }),
      additionalInfoOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         className: PropTypes.string,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      })
   })
};

export default IkarAddressRussia;
