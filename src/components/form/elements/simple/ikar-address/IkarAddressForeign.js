import React from 'react';
import PropTypes from 'prop-types';

import SelectFormGroup from '../../form-group/select/SelectFormGroup';
import InputFormGroup from '../../form-group/input/InputFormGroup';
import {
   COUNTRY_FIELD,
   REGION_FIELD,
   FOREIGN_ADDRESS_FIELD,
   THIS_FIELD_MUST_BE_FILLED
} from './IkarAddressConst';

const IkarAddressForeign = (props) => {
   const {
      getChangeHandlerByField,
      formClassName,
      selectClassName,
      inputClassName,
      formGroupLabelClassName,
      formGroupFieldClassName,
      ikarAddressOptions: { countryOptions, regionOptions, foreignAddressOptions },
      countries,
      regions,
      address: { country, region, foreignAddress },
      showError
   } = props;

   return (
      <div className={formClassName}>
         {countryOptions &&
            !countryOptions.isHidden && (
               <SelectFormGroup
                  id="ikarAddressSelectCountry"
                  onChange={getChangeHandlerByField(COUNTRY_FIELD)}
                  labelText={countryOptions.label || 'Страна'}
                  require={countryOptions.isRequiredField}
                  value={country}
                  valueKey={countryOptions.selectOptionValueKey || 'guid'}
                  labelKey={countryOptions.selectOptionLabelKey || 'name'}
                  options={countries}
                  className={selectClassName}
                  placeholder={countryOptions.placeholder || 'Выберите страну...'}
                  help={countryOptions.help}
                  showError={showError}
                  errorText={countryOptions.errorText || THIS_FIELD_MUST_BE_FILLED}
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {regionOptions &&
            !regionOptions.isHidden && (
               <SelectFormGroup
                  id="ikarAddressSelectRegion"
                  onChange={getChangeHandlerByField(REGION_FIELD)}
                  labelText={regionOptions.label || 'Регион'}
                  require={regionOptions.isRequiredField}
                  value={region}
                  valueKey={regionOptions.selectOptionValueKey || 'guid'}
                  labelKey={regionOptions.selectOptionLabelKey || 'view'}
                  options={regions}
                  className={selectClassName}
                  placeholder={regionOptions.placeholder || 'Выберите регион...'}
                  help={regionOptions.help}
                  showError={showError}
                  errorText={regionOptions.errorText || THIS_FIELD_MUST_BE_FILLED}
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
         {foreignAddressOptions &&
            !foreignAddressOptions.isHidden && (
               <InputFormGroup
                  id="ikarAddressInputForeignAddress"
                  onChange={getChangeHandlerByField(FOREIGN_ADDRESS_FIELD)}
                  labelText={foreignAddressOptions.label || 'Адрес'}
                  require={foreignAddressOptions.isRequiredField}
                  value={foreignAddress}
                  className={inputClassName}
                  placeholder={foreignAddressOptions.placeholder || 'Введите адрес...'}
                  help={foreignAddressOptions.help}
                  showError={showError}
                  errorText={foreignAddressOptions.errorText || THIS_FIELD_MUST_BE_FILLED}
                  labelClassName={formGroupLabelClassName}
                  fieldClassName={formGroupFieldClassName}
               />
            )}
      </div>
   );
};

IkarAddressForeign.propTypes = {
   countries: PropTypes.arrayOf(
      PropTypes.shape({
         guid: PropTypes.string,
         name: PropTypes.string
      })
   ).isRequired,
   regions: PropTypes.array,
   address: PropTypes.shape({
      country: PropTypes.object,
      region: PropTypes.object,
      foreignAddress: PropTypes.string
   }),
   getChangeHandlerByField: PropTypes.func,
   formClassName: PropTypes.string,
   selectClassName: PropTypes.string,
   inputClassName: PropTypes.string,
   formGroupLabelClassName: PropTypes.string,
   formGroupFieldClassName: PropTypes.string,
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
      foreignAddressOptions: PropTypes.shape({
         label: PropTypes.string,
         isHidden: PropTypes.bool,
         placeholder: PropTypes.string,
         isRequiredField: PropTypes.bool,
         help: PropTypes.node,
         errorHandler: PropTypes.func,
         errorText: PropTypes.node
      })
   })
};

export default IkarAddressForeign;
