import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import IkarAddress from '../../../base/ikar/IkarAddress/IkarAddress';
import FormGroup from '../../../../containers/FormGroup/FormGroup';
import withValidate from '../../hoc/withValidate';

// TODO: This is old way. Rewrite it!
const IkarAddressFormGroup = (props) => {
   const {
      labelText,
      require,
      help,
      additionalBlock,
      address,
      onChange,
      countries,
      loadCountries,
      findRegion,
      findDistrict,
      findLocality,
      findSubLocality,
      findStreet,
      formClassName,
      selectClassName,
      inputClassName,
      isShownForm,
      isShowAddressView,
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
      additionalInfoOptions,
      foreignAddressOptions,
      russianAddressViewOptions,
      asyncSelectIgnoreCase,
      addressPath,
      hasError,
      formGroupErrorClassName,
      formGroupErrorTextClassName,
      formGroupErrorText,
      formGroupLabelClassName,
      formGroupFieldClassName,
      componentFormGroupLabelClassName,
      componentFormGroupFieldClassName,
      showError
   } = props;

   return (
      <FormGroup
         labelText={labelText}
         hasError={hasError}
         errorClassName={formGroupErrorClassName}
         errorTextClassName={formGroupErrorTextClassName}
         errorText={formGroupErrorText}
         labelClassName={formGroupLabelClassName}
         fieldClassName={formGroupFieldClassName}
         require={require}
         help={help}
         additionalBlock={additionalBlock}>
         <IkarAddress
            address={address}
            countryOptions={countryOptions}
            regionOptions={regionOptions}
            districtOptions={districtOptions}
            localityOptions={localityOptions}
            subLocalityOptions={subLocalityOptions}
            streetOptions={streetOptions}
            houseOptions={houseOptions}
            buildingOptions={buildingOptions}
            roomOptions={roomOptions}
            postIndexOptions={postIndexOptions}
            postBoxOptions={postBoxOptions}
            additionalInfoOptions={additionalInfoOptions}
            foreignAddressOptions={foreignAddressOptions}
            onChange={onChange}
            countries={countries}
            loadCountries={loadCountries}
            findRegion={findRegion}
            findDistrict={findDistrict}
            findLocality={findLocality}
            findSubLocality={findSubLocality}
            findStreet={findStreet}
            formClassName={formClassName}
            selectClassName={selectClassName}
            inputClassName={inputClassName}
            isShownForm={isShownForm}
            isShowAddressView={isShowAddressView}
            russianAddressViewOptions={russianAddressViewOptions}
            asyncSelectIgnoreCase={asyncSelectIgnoreCase}
            addressPath={addressPath}
            formGroupLabelClassName={componentFormGroupLabelClassName}
            formGroupFieldClassName={componentFormGroupFieldClassName}
            showError={showError}
         />
      </FormGroup>
   );
};

IkarAddressFormGroup.defaultProps = {
   formGroupErrorTextClassName: 'form-group__ikar-address--error-text',
   formGroupErrorText: 'Данная форма должна быть заполнена',
   showError: false
};

IkarAddressFormGroup.propTypes = {
   labelText: PropTypes.string,
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   help: PropTypes.node,
   additionalBlock: PropTypes.node,
   formGroupErrorClassName: PropTypes.string,
   formGroupErrorText: PropTypes.string,
   formGroupLabelClassName: PropTypes.string,
   formGroupFieldClassName: PropTypes.string,
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
      additionalInfo: PropTypes.string,
      foreignAddress: PropTypes.string,
      addressView: PropTypes.string
   }),
   onChange: PropTypes.func,
   countries: PropTypes.arrayOf(
      PropTypes.shape({
         guid: PropTypes.string,
         name: PropTypes.string
      })
   ),
   loadCountries: PropTypes.func,
   findRegion: PropTypes.func,
   findDistrict: PropTypes.func,
   findLocality: PropTypes.func,
   findSubLocality: PropTypes.func,
   findStreet: PropTypes.func,
   formClassName: PropTypes.string,
   selectClassName: PropTypes.string,
   componentFormGroupLabelClassName: PropTypes.string,
   componentFormGroupFieldClassName: PropTypes.string,
   inputClassName: PropTypes.string,
   isShownForm: PropTypes.bool,
   isShowAddressView: PropTypes.bool,
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
   }),
   foreignAddressOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      help: PropTypes.node,
      errorHandler: PropTypes.func,
      errorText: PropTypes.node
   }),
   asyncSelectIgnoreCase: PropTypes.bool,
   addressPath: PropTypes.string,
   russianAddressViewOptions: PropTypes.shape({
      house: PropTypes.string,
      building: PropTypes.string,
      postBox: PropTypes.string
   }),
   showError: PropTypes.bool
};

export default withValidate(
   IkarAddressFormGroup,
   (props) => props.require && props.address && isEmpty(props.address.addressView)
);
