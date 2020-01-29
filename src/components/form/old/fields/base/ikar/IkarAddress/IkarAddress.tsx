import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import debounce from 'lodash/debounce';

import IkarAddressRussia from '../IkarAddressRussia/IkarAddressRussia';
import IkarAddressForeign from '../IkarAddressForeign/IkarAddressForeign';
import Button from '../../../../../../buttons/Button/Button';
import Form from '../../../../containers/Form/Form';
import { getRussianAddressView, getForeignAddressView } from '../inner/utils/addressUtils';
import {
   COUNTRY_RUSSIA_GUID,
   COUNTRY_FIELD,
   REGION_FIELD,
   DISTRICT_FIELD,
   LOCALITY_FIELD,
   SUB_LOCALITY_FIELD,
   STREET_FIELD
} from '../inner/ikarAddressConst';
import { Color } from '../../../../../../../utils/type/Color';

const getAddressViewLabels = (props) => {
   const {
      countryOptions,
      regionOptions,
      districtOptions,
      localityOptions,
      subLocalityOptions,
      streetOptions
   } = props;

   return {
      [COUNTRY_FIELD]: (countryOptions && countryOptions.selectOptionLabelKey) || 'name',
      [REGION_FIELD]: (regionOptions && regionOptions.selectOptionLabelKey) || 'view',
      [DISTRICT_FIELD]: (districtOptions && districtOptions.selectOptionLabelKey) || 'view',
      [LOCALITY_FIELD]: (localityOptions && localityOptions.selectOptionLabelKey) || 'view',
      [SUB_LOCALITY_FIELD]:
         (subLocalityOptions && subLocalityOptions.selectOptionLabelKey) || 'view',
      [STREET_FIELD]: (streetOptions && streetOptions.selectOptionLabelKey) || 'view'
   };
};

const notEmpty = (addressElement, pattern, func) =>
   pattern && pattern.length > 1 && !isEmpty(addressElement) && isFunction(func);

const isRussia = (country) => isEmpty(country) || country.guid === COUNTRY_RUSSIA_GUID;

const getToggleBtnOptions = (
   hideFormTooltip = 'Скрыть форму',
   showFormTooltip = 'Показать форму',
   isShownForm
) => {
   if (isShownForm) {
      return {
         tooltip: hideFormTooltip,
         icon: 'slash',
         iconColor: 'blue' as Color
      };
   } else {
      return {
         tooltip: showFormTooltip,
         icon: 'pencil',
         iconColor: 'blue' as Color
      };
   }
};

const emptySelectOptions = { options: [] };

// TODO: This is old way. Rewrite it!
// @Deprecated
class IkarAddress extends Component<any> {
   state = {
      isShownForm: false
   };

   getLocality;
   getSubLocality;
   getStreet;
   addressViewLabels;

   constructor(props, context) {
      super(props, context);
      const {
         findLocality,
         findSubLocality,
         findStreet,
         asyncSelectDelay,
         isShownForm
      } = this.props;

      this.state = {
         isShownForm: isShownForm
      };

      if (isFunction(findLocality)) {
         this.getLocality = debounce(findLocality, asyncSelectDelay);
      }
      if (isFunction(findSubLocality)) {
         this.getSubLocality = debounce(findSubLocality, asyncSelectDelay);
      }
      if (isFunction(findStreet)) {
         this.getStreet = debounce(findStreet, asyncSelectDelay);
      }

      this.getChangeHandlerByField = this.getChangeHandlerByField.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.loadRegionsAndDistricts = this.loadRegionsAndDistricts.bind(this);
      this.getAddressView = this.getAddressView.bind(this);
      this.findLocality = this.findLocality.bind(this);
      this.findSubLocality = this.findSubLocality.bind(this);
      this.findStreet = this.findStreet.bind(this);
      this.toggleShowForm = this.toggleShowForm.bind(this);
      this.formAndChangeAddress = this.formAndChangeAddress.bind(this);
      this.setStateFromRequestResult = this.setStateFromRequestResult.bind(this);

      this.addressViewLabels = getAddressViewLabels(this.props);
   }

   componentWillReceiveProps(nextProps) {
      if (isEmpty(this.props.address) && !isEmpty(nextProps.address)) {
         this.loadRegionsAndDistricts(nextProps);
      }
   }

   componentDidMount() {
      const { address, loadCountries, countries: countryList } = this.props;
      if (!isEmpty(address)) {
         this.loadRegionsAndDistricts(this.props);
         if (isEmpty(address.addressView)) {
            this.handleChange({
               ...address,
               addressView: this.getAddressView(address)
            });
         }
      }
      isEmpty(countryList) && loadCountries && loadCountries();
   }

   loadRegionsAndDistricts(props) {
      const {
         findRegion,
         findDistrict,
         address: { country, region }
      } = props;
      let regionsRequest = null,
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

   setStateFromRequestResult(request, state, field) {
      if (request instanceof Promise) {
         request.then((result) =>
            this.setState({
               ...state,
               [field]: result
            })
         );
      } else {
         this.setState({
            ...state,
            [field]: request
         });
      }
   }

   getAddressView(address) {
      const { russianAddressViewOptions } = this.props;
      if (isRussia(address.country)) {
         return getRussianAddressView(address, this.addressViewLabels, russianAddressViewOptions);
      }
      return getForeignAddressView(address, this.addressViewLabels);
   }

   getChangeHandlerByField(field) {
      const { regions }: any = this.state;
      switch (field) {
         case COUNTRY_FIELD:
            return (country) => {
               const newState = {
                  ...this.state,
                  regions: [],
                  districts: []
               };

               let address = {
                  ...this.props.address,
                  country: null,
                  region: null,
                  district: null,
                  locality: null,
                  subLocality: null,
                  street: null,
                  foreignAddress: null
               };

               if (!isEmpty(country)) {
                  const { findRegion } = this.props;
                  const regionsRequest = findRegion && findRegion(country);
                  this.setStateFromRequestResult(regionsRequest, newState, 'regions');
                  address = {
                     ...address,
                     country: country
                  };
               } else {
                  this.setState(newState);
               }

               this.handleChange(address);
            };

         case REGION_FIELD:
            return (region) => {
               const newState = {
                  ...this.state,
                  regions: regions,
                  districts: []
               };
               let address = {
                  ...this.props.address,
                  region: null,
                  district: null,
                  locality: null,
                  subLocality: null,
                  street: null
               };
               if (!isEmpty(region)) {
                  const { findDistrict } = this.props;
                  if (findDistrict && isRussia(address.country)) {
                     const districtsRequest = findDistrict(region);
                     this.setStateFromRequestResult(districtsRequest, newState, 'districts');
                  }
                  address = {
                     ...address,
                     region: region
                  };
               } else {
                  this.setState(newState);
               }
               this.handleChange(address);
            };

         case DISTRICT_FIELD:
            return (district) => {
               const address = {
                  ...this.props.address,
                  district: null,
                  locality: null,
                  subLocality: null,
                  street: null
               };
               this.formAndChangeAddress(address, district, DISTRICT_FIELD);
            };

         case LOCALITY_FIELD:
            return (locality) => {
               const address = {
                  ...this.props.address,
                  locality: null,
                  subLocality: null,
                  street: null
               };
               this.formAndChangeAddress(address, locality, LOCALITY_FIELD);
            };

         case SUB_LOCALITY_FIELD:
            return (subLocality) => {
               const address = {
                  ...this.props.address,
                  subLocality: null,
                  street: null
               };
               this.formAndChangeAddress(address, subLocality, SUB_LOCALITY_FIELD);
            };

         case STREET_FIELD:
            return (street) => {
               const address = {
                  ...this.props.address,
                  street: street
               };
               this.handleChange(address);
            };

         default:
            return (value) => {
               this.handleChange({
                  ...this.props.address,
                  [field]: value
               });
            };
      }
   }

   formAndChangeAddress(address, value, field) {
      if (!isEmpty(value)) {
         address = {
            ...address,
            [field]: value
         };
      }
      this.handleChange(address);
   }

   handleChange(newAddress) {
      const { onChange, addressPath } = this.props;
      const { country } = newAddress;
      if (country && country.guid !== COUNTRY_RUSSIA_GUID) {
         newAddress = {
            country: newAddress.country,
            region: newAddress.region,
            foreignAddress: newAddress.foreignAddress
         };
      }
      const address = {
         ...newAddress,
         addressView: this.getAddressView(newAddress)
      };
      onChange && onChange(address, addressPath);
   }

   findLocality(pattern, callback) {
      const {
         findLocality,
         address: { region, district }
      } = this.props;
      const parent = !isEmpty(district) ? district : region;

      if (notEmpty(parent, pattern, findLocality)) {
         return this.getLocality(parent, pattern, callback);
      } else {
         callback(null, emptySelectOptions);
      }
   }

   findSubLocality(pattern, callback) {
      const {
         findSubLocality,
         address: { locality }
      } = this.props;
      if (notEmpty(locality, pattern, findSubLocality)) {
         return this.getSubLocality(locality, pattern, callback);
      } else {
         callback(null, emptySelectOptions);
      }
   }

   findStreet(pattern, callback) {
      const {
         findStreet,
         address: { region, locality, subLocality }
      } = this.props;

      let parent = {};
      if (!isEmpty(subLocality)) {
         parent = subLocality;
      } else if (!isEmpty(locality)) {
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

   toggleShowForm() {
      this.setState((prevState: any) => ({
         ...prevState,
         isShownForm: !prevState.isShownForm
      }));
   }

   render() {
      const {
         inputClassName,
         selectClassName,
         formClassName,
         formGroupLabelClassName,
         formGroupFieldClassName,
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
         address,
         countries,
         asyncSelectIgnoreCase,
         hideFormOptionTooltip,
         showFormOptionTooltip,
         showError
      } = this.props;

      const { country, addressView } = address;
      const { isShownForm, regions, districts }: any = this.state;

      let form = null;
      let formClassNameCountry = null;
      if (isRussia(country)) {
         formClassNameCountry =
            'ikar-address-form--county--russia ikar-address-form--animation--slide';
         const ikarAddressOptions = {
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
         };
         form = (
            <IkarAddressRussia
               ikarAddressOptions={ikarAddressOptions}
               countries={countries}
               regions={regions}
               districts={districts}
               address={address}
               getChangeHandlerByField={this.getChangeHandlerByField}
               findLocality={this.findLocality}
               findSubLocality={this.findSubLocality}
               findStreet={this.findStreet}
               inputClassName={inputClassName}
               selectClassName={selectClassName}
               formClassName={formClassName}
               formGroupLabelClassName={formGroupLabelClassName}
               formGroupFieldClassName={formGroupFieldClassName}
               asyncSelectIgnoreCase={asyncSelectIgnoreCase}
               showError={showError}
            />
         );
      } else {
         formClassNameCountry =
            'ikar-address-form--country--foreign ikar-address-form--animation--slide';
         const ikarAddressOptions = {
            countryOptions,
            regionOptions,
            foreignAddressOptions
         };
         form = (
            <IkarAddressForeign
               ikarAddressOptions={ikarAddressOptions}
               countries={countries}
               regions={regions}
               address={address}
               getChangeHandlerByField={this.getChangeHandlerByField}
               inputClassName={inputClassName}
               selectClassName={selectClassName}
               formGroupLabelClassName={formGroupLabelClassName}
               formGroupFieldClassName={formGroupFieldClassName}
               formClassName={formClassName}
               showError={showError}
            />
         );
      }

      const toggleBtnOptions = getToggleBtnOptions(
         hideFormOptionTooltip,
         showFormOptionTooltip,
         isShownForm
      );
      return (
         <div>
            <Form
               className={classNames(
                  'form-horizontal css-form ikar-address-form--visability--shown',
                  isShownForm && formClassNameCountry
               )}>
               {form}
            </Form>
            {isShowAddressView && (
               <div className="text-muted ikar-address--address-view">
                  {addressView}&nbsp;
                  <Button
                     onClick={this.toggleShowForm}
                     tooltip={toggleBtnOptions.tooltip}
                     onlyIcon={true}
                     icon={toggleBtnOptions.icon}
                     iconColor={toggleBtnOptions.iconColor}
                  />
               </div>
            )}
         </div>
      );
   }
}

(IkarAddress as any).defaultProps = {
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
   hideFormOptionTooltip: 'Скрыть форму',
   showFormOptionTooltip: 'Показать форму',
   showError: false
};

(IkarAddress as any).propTypes = {
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
   inputClassName: PropTypes.string,
   isShownForm: PropTypes.bool,
   isShowAddressView: PropTypes.bool,
   countryOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      help: PropTypes.node,
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
      errorText: PropTypes.node
   }),
   buildingOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      className: PropTypes.string,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   roomOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      className: PropTypes.string,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   postIndexOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      className: PropTypes.string,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   postBoxOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      className: PropTypes.string,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   additionalInfoOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      className: PropTypes.string,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   foreignAddressOptions: PropTypes.shape({
      label: PropTypes.string,
      isHidden: PropTypes.bool,
      placeholder: PropTypes.string,
      isRequiredField: PropTypes.bool,
      help: PropTypes.node,
      errorText: PropTypes.node
   }),
   asyncSelectIgnoreCase: PropTypes.bool,
   asyncSelectDelay: PropTypes.number,
   addressPath: PropTypes.string,
   russianAddressViewOptions: PropTypes.shape({
      house: PropTypes.string,
      building: PropTypes.string,
      postBox: PropTypes.string
   }),
   formGroupLabelClassName: PropTypes.string,
   formGroupFieldClassName: PropTypes.string,
   hideFormOptionTooltip: PropTypes.string,
   showFormOptionTooltip: PropTypes.string,
   showError: PropTypes.bool
};

export default IkarAddress;
