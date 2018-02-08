import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Select, Switch} from "../../index";
import Moment from "moment/moment";
import DateRange from "../date-range/DateRange";
import validate from "../../../../utils/validate-utils";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import {
   defaultFormat, defaultStoreFormat, formatValue,
   getFormattedComplexDateView
} from "../../../../utils/moment-utils";
import {setIn} from "../../../../index";

const notValidFormatText = "Введенная дата не соотвествует выбранному формату";
const defaultPlaceholder = { placeholder: "" };

const formatInputProps = { style: { height: "32px" } };

const getIsInterval = (complexDate = {}) => {
   return !!(complexDate.dateInterval && (complexDate.dateInterval.startDateTime || complexDate.dateInterval.endDateTime));
};

const singleDateTimePath = 'singleDateTime';
const startDateTimePath = 'dateInterval.startDateTime';
const endDateTimePath = 'dateInterval.endDateTime';

const isValidBeginDateField = 'isValidBeginDate';
const isValidSingleDateField = 'isValidSingleDate';
const isValidEndDateField = 'isValidEndDate';

class ComplexDate extends Component {
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
      const {
         complexDate = {},
         formatPath,
         onChange
      } = this.props;
      if (isEmpty(complexDate.format)) {
         onChange && onChange(defaultFormat, formatPath);
      }
   }

   componentWillReceiveProps(nextProps) {
      const { hasError } = this.state;
      const isValid = this.isValid();
      const nextHasError = validate(nextProps, () => !isValid || (nextProps.require && !nextProps.value), hasError, notValidFormatText);
      if (nextHasError !== this.state.hasError) {
         this.setState({
            ...this.state,
            hasError: nextHasError
         });
      }
      const {
         onChange,
         formatPath
      } = this.props;
      const { complexDate = {} } = nextProps;
      if (!complexDate.format) {
         onChange && onChange(defaultFormat, formatPath);
      }
   }

   isValid() {
      const { isValidSingleDate, isValidBeginDate, isValidEndDate, isInterval } = this.state;
      return isInterval ? isValidBeginDate && isValidEndDate : isValidSingleDate;
   }

   updateDateFormat(newFormat = {}) {
      const {
         onChange,
         complexDate = {},
         complexDatePath
      } = this.props;
      const newComplexDate = {
         ...complexDate,
         format: newFormat
      };
      newComplexDate.view = getFormattedComplexDateView(newComplexDate);
      onChange && onChange(newComplexDate, complexDatePath);
   }

   toggleForm() {
      const {
         onChange,
         complexDate = {},
         complexDatePath
      } = this.props;

      const {
         singleDateTime,
         dateInterval: { startDateTime } = {}
      } = complexDate;

      const isInterval = !this.state.isInterval;
      this.setState((oldState) => {
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
         }
      }, () => this.postToggleValidate(isInterval, startDateTime, singleDateTime));
   }

   postToggleValidate(isInterval, beginDate, singleDate) {
      const {
         storeFormat = defaultStoreFormat,
         complexDate: {
            format = defaultFormat
         }
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
      this.validateFormat(field)(formatValue(value, storeFormat, format));
   }

   validateFormat(isValidField) {
      return (value) => {
         const {
            complexDate: {
               format = defaultFormat
            }
         } = this.props;
         this.setState((oldState) => ({
            ...oldState,
            [isValidField]: Moment(value, format.view, true).isValid() || isEmpty(value)
         }));
      };
   }

   getChangeDateHandler(path) {
      const {
         onChange,
         complexDatePath
      } = this.props;
      return (value) => onChange && onChange(
         this.getNewComplexDate(value, path),
         complexDatePath
      );
   }

   getNewComplexDate(value, path) {
      const {
         storeFormat = defaultStoreFormat,
         complexDate = {}
      } = this.props;

      const newComplexDate = setIn(complexDate, path, formatValue(value, complexDate.format || defaultFormat, storeFormat));
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
            dateInterval: { startDateTime, endDateTime } = {},
            format = defaultFormat,
            singleDateTime
         }
      } = this.props;

      let dateForm = null;
      let formClass = null;
      if (isInterval) {
         dateForm = <DateRange beginChange={ this.getChangeDateHandler(startDateTimePath) }
                               beginDate={ formatValue(startDateTime, storeFormat, format) }
                               endChange={ this.getChangeDateHandler(endDateTimePath) }
                               endDate={ formatValue(endDateTime, storeFormat, format) }
                               dateFormat={ format.dateFormat }
                               validateBegin={ this.validateFormat(isValidBeginDateField) }
                               validateEnd={ this.validateFormat(isValidEndDateField) }
                               timeFormat={ format.timeFormat } />;
         formClass = 'complex-date__date--interval';
      } else {
         dateForm = <DatePicker value={ formatValue(singleDateTime, storeFormat, format) }
                                dateFormat={ format.dateFormat }
                                onChange={ this.getChangeDateHandler(singleDateTimePath) }
                                validate={ this.validateFormat(isValidSingleDateField) }
                                timeFormat={ format.timeFormat }
                                inputProps={ defaultPlaceholder } />;
         formClass = 'complex-date__date--single';
      }

      const showError = hasError || !this.isValid();

      return (
         <div className="complex-date">
            <div className={ `complex-date__format ${ isInterval && 'complex-date__format--interval' }` }>
               <Select options={ formatList }
                       valueKey="id"
                       labelKey="view"
                       inputProps={ formatInputProps }
                       clearable={ false }
                       onChange={ this.updateDateFormat }
                       value={ format }
                       placeholder={ formatPlaceholder || "Формат даты..." } />
            </div>
            <div className={ classNames(`form-group complex-date__date ${formClass}`, showError && "has-error") }>
               { dateForm }
               {
                  showError &&
                  <p className="help-block has-error">{ this.isValid() ? errorText : notValidFormatText }</p>
               }
            </div>
            <div className={ `complex-date__switch ${ isInterval && 'complex-date__switch--interval' }` }>
               <span className="option-switch__element option-switch__element--text">
                  дата
               </span>&nbsp;
               <span className="option-switch__element option-switch__element--switch">
                  <Switch value={ isInterval }
                          text=""
                          onChange={ this.toggleForm } />
               </span>&nbsp;
               <span className="option-switch__element option-switch__element--text">
                  период
               </span>
            </div>
         </div>
      );
   }

}

ComplexDate.propTypes = {
   complexDate: PropTypes.shape({
      singleDateTime: PropTypes.oneOfType([
         PropTypes.object,
         PropTypes.string
      ]),
      dateInterval: PropTypes.shape({
         startDateTime: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
         ]),
         endDateTime: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
         ])
      }),
      format: PropTypes.object
   }),
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   help: PropTypes.string,
   formatPlaceholder: PropTypes.string,
   storeFormat: PropTypes.object,
   formatList: PropTypes.arrayOf(PropTypes.object),
   formatPath: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   complexDatePath: PropTypes.string
};

ComplexDate.defaultProps = {};

export default ComplexDate;