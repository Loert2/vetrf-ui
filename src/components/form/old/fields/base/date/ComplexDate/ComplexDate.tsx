import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../DatePicker/DatePicker';
import Select from '../../select/Select/Select';
import Switch from '../../switch/Switch/Switch';
import Moment from 'moment/moment';
import DateRange from '../DateRange/DateRange';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import {
   defaultFormat,
   defaultStoreFormat,
   formatValue,
   getFormattedComplexDateView
} from '../../../../utils/moment-utils';
import setIn from '../../../../../../../utils/function/setIn';

// TODO: This is old way. Rewrite it!
// @Deprecated

const notValidFormatText = 'Введенная дата не соотвествует выбранному формату';
const defaultPlaceholder = { placeholder: '' };

const formatInputProps = { style: { height: '32px' } };

const getIsInterval = (complexDate: any = {}) => {
   return !!(
      complexDate.dateInterval &&
      (complexDate.dateInterval.startDateTime || complexDate.dateInterval.endDateTime)
   );
};

const singleDateTimePath = 'singleDateTime';
const startDateTimePath = 'dateInterval.startDateTime';
const endDateTimePath = 'dateInterval.endDateTime';

const isValidBeginDateField = 'isValidBeginDate';
const isValidSingleDateField = 'isValidSingleDate';
const isValidEndDateField = 'isValidEndDate';

// TODO: This is old way. Rewrite it!
class ComplexDate extends Component<any> {
   state = {
      isInterval: null,
      isValidSingleDate: true,
      isValidBeginDate: true,
      isValidEndDate: true,
      hasError: false
   };

   constructor(props, context) {
      super(props, context);

      this.state = {
         isInterval: getIsInterval(props.complexDate),
         isValidSingleDate: true,
         isValidBeginDate: true,
         isValidEndDate: true,
         hasError: false
      };

      this.toggleForm = this.toggleForm.bind(this);
      this.validateFormat = this.validateFormat.bind(this);
      this.updateDateFormat = this.updateDateFormat.bind(this);
      this.isValid = this.isValid.bind(this);
      this.getChangeDateHandler = this.getChangeDateHandler.bind(this);
      this.postToggleValidate = this.postToggleValidate.bind(this);
      this.getNewComplexDate = this.getNewComplexDate.bind(this);
   }

   componentDidMount() {
      const { complexDate = {}, formatPath, onChange } = this.props;
      if (isEmpty(complexDate.format)) {
         onChange && onChange(defaultFormat, formatPath);
      }
   }

   componentWillReceiveProps(nextProps) {
      const { onChange, formatPath } = this.props;

      const { complexDate = {} } = nextProps;

      if (!complexDate.format) {
         onChange && onChange(defaultFormat, formatPath);
      }
   }

   isValid() {
      const { isValidSingleDate, isValidBeginDate, isValidEndDate, isInterval }: any = this.state;
      return isInterval ? isValidBeginDate && isValidEndDate : isValidSingleDate;
   }

   updateDateFormat(newFormat = {}) {
      const { onChange, complexDate = {}, complexDatePath } = this.props;
      const newComplexDate = {
         ...complexDate,
         format: newFormat
      };
      newComplexDate.view = getFormattedComplexDateView(newComplexDate);
      onChange && onChange(newComplexDate, complexDatePath);
   }

   toggleForm() {
      const { onChange, complexDate = {}, complexDatePath } = this.props;

      const { singleDateTime, dateInterval: { startDateTime } = {} as any }: any = complexDate;

      const isInterval = !this.state.isInterval;
      const beforeToggleIsValid = this.isValid();
      this.setState(
         (oldState) => {
            if (onChange) {
               let newComplexDate;
               if (isInterval) {
                  newComplexDate = {
                     ...complexDate,
                     dateInterval: {
                        startDateTime: singleDateTime
                     },
                     singleDateTime: null
                  };
               } else {
                  newComplexDate = {
                     ...complexDate,
                     singleDateTime: startDateTime,
                     dateInterval: {}
                  };
               }
               newComplexDate.view = getFormattedComplexDateView(newComplexDate);
               onChange(newComplexDate, complexDatePath);
            }
            return {
               ...oldState,
               isInterval: isInterval,
               isValidEndDate: true
            };
         },
         () =>
            this.postToggleValidate(isInterval, startDateTime, singleDateTime, beforeToggleIsValid)
      );
   }

   postToggleValidate(isInterval, beginDate, singleDate, beforeToggleIsValid) {
      const {
         storeFormat = defaultStoreFormat,
         complexDate: { format = defaultFormat }
      } = this.props;

      let field;
      let value;
      if (isInterval) {
         field = isValidBeginDateField;
         value = singleDate;
      } else {
         field = isValidSingleDateField;
         value = beginDate;
      }
      this.validateFormat(field, beforeToggleIsValid)(formatValue(value, storeFormat, format));
   }

   validateFormat(isValidField, beforeToggleIsValid?) {
      return (value) => {
         const {
            complexDate: { format = defaultFormat },
            handleChangeValidity
         } = this.props;
         const oldValid = beforeToggleIsValid !== undefined ? beforeToggleIsValid : this.isValid();

         this.setState(
            (oldState) => ({
               ...oldState,
               [isValidField]: Moment(value, format.view, true).isValid() || isEmpty(value)
            }),
            () => {
               const newValid = this.isValid();
               if (oldValid !== newValid && handleChangeValidity) {
                  handleChangeValidity(newValid);
               }
            }
         );
      };
   }

   getChangeDateHandler(path) {
      const { onChange, complexDatePath } = this.props;
      return (value) => onChange && onChange(this.getNewComplexDate(value, path), complexDatePath);
   }

   getNewComplexDate(value, path) {
      const { storeFormat = defaultStoreFormat, complexDate = {} } = this.props;

      const newComplexDate = setIn(
         complexDate,
         path,
         formatValue(value, complexDate.format || defaultFormat, storeFormat)
      );
      newComplexDate.view = getFormattedComplexDateView(newComplexDate);

      return newComplexDate;
   }

   render() {
      const { isInterval, hasError } = this.state;
      const {
         formatPlaceholder,
         errorText,
         storeFormat = defaultStoreFormat,
         formatList,
         complexDate: {
            dateInterval: { startDateTime, endDateTime } = {} as any,
            format = defaultFormat,
            singleDateTime
         }
      } = this.props;

      let dateForm = null;
      let formClass = null;
      if (isInterval) {
         dateForm = (
            <DateRange
               beginChange={this.getChangeDateHandler(startDateTimePath)}
               beginDate={formatValue(startDateTime, storeFormat, format)}
               endChange={this.getChangeDateHandler(endDateTimePath)}
               endDate={formatValue(endDateTime, storeFormat, format)}
               dateFormat={format.dateFormat}
               validateBegin={this.validateFormat(isValidBeginDateField)}
               validateEnd={this.validateFormat(isValidEndDateField)}
               timeFormat={format.timeFormat}
            />
         );
         formClass = 'complex-date__date--interval';
      } else {
         dateForm = (
            <DatePicker
               value={formatValue(singleDateTime, storeFormat, format)}
               dateFormat={format.dateFormat}
               onChange={this.getChangeDateHandler(singleDateTimePath)}
               validate={this.validateFormat(isValidSingleDateField)}
               timeFormat={format.timeFormat}
               inputProps={defaultPlaceholder}
            />
         );
         formClass = 'complex-date__date--single';
      }

      const showError = hasError || !this.isValid();

      return (
         <div className="complex-date">
            <div
               className={`complex-date__format ${isInterval && 'complex-date__format--interval'}`}>
               <Select
                  options={formatList}
                  valueKey="id"
                  labelKey="view"
                  inputProps={formatInputProps}
                  clearable={false}
                  onChange={this.updateDateFormat}
                  value={format}
                  placeholder={formatPlaceholder || 'Формат даты...'}
               />
            </div>
            <div
               className={classNames(
                  `form-group complex-date__date ${formClass}`,
                  showError && 'has-error'
               )}>
               {dateForm}
            </div>
            <div
               className={`complex-date__switch ${isInterval && 'complex-date__switch--interval'}`}>
               <span className="option-switch__element option-switch__element--text">дата</span>&nbsp;
               <span className="option-switch__element option-switch__element--switch">
                  <Switch value={isInterval} text="" onChange={this.toggleForm} />
               </span>&nbsp;
               <span className="option-switch__element option-switch__element--text">период</span>
            </div>
            {showError && (
               <p className="help-block has-error complex-date__error-block">
                  {this.isValid() ? errorText : notValidFormatText}
               </p>
            )}
         </div>
      );
   }
}

(ComplexDate as any).propTypes = {
   complexDate: PropTypes.shape({
      singleDateTime: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      dateInterval: PropTypes.shape({
         startDateTime: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
         endDateTime: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      }),
      format: PropTypes.object
   }),
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   help: PropTypes.string,
   formatPlaceholder: PropTypes.string,
   storeFormat: PropTypes.object,
   formatList: PropTypes.arrayOf(PropTypes.object),
   formatPath: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   handleChangeValidity: PropTypes.func,
   complexDatePath: PropTypes.string
};

(ComplexDate as any).defaultProps = {};

export default ComplexDate;
