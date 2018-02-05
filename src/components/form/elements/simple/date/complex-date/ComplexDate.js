import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Select, Switch} from "../../index";
import Moment from "moment/moment";
import DateRange from "../date-range/DateRange";
import validate from "../../../../utils/validate-utils";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import setIn from "../../../../utils/setIn";
import {defaultFormat, defaultStoreFormat, formatValue} from "../../../../utils/moment-utils";

const notValidFormatText = "Введенная дата не соотвествует выбранному формату";
const defaultPlaceholder = { placeholder: "" };

const formatInputProps = { style: { height: "32px" } };

class ComplexDate extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         isInterval: false,
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
   }

   componentDidMount() {
      const { format = {}, formatField, onChange } = this.props;
      if (isEmpty(format)) {
         onChange && onChange(defaultFormat, formatField);
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
         formatField
      } = this.props;
      const { format: newFormat = {} } = nextProps;
      if (!newFormat) {
         onChange && onChange(defaultFormat, formatField);
      }
   }

   isValid() {
      const { isValidSingleDate, isValidBeginDate, isValidEndDate, isInterval } = this.state;
      return isInterval ? isValidBeginDate && isValidEndDate : isValidSingleDate;
   }

   updateDateFormat(value, field, oldFormat = {}, newFormat = {}, isValidField) {
      const { onChange } = this.props;
      let newFormatDate = Moment(value, [oldFormat.view]).format(newFormat.view);
      const isEmptyValue = isEmpty(value);
      const isValid = Moment(newFormatDate, newFormat.view, true).isValid() || isEmptyValue;
      if (!isValid || isEmptyValue) {
         newFormatDate = value;
      }
      onChange && onChange(newFormatDate, field);
      this.setState((oldState) => setIn(oldState, isValidField, isValid));
   }

   toggleForm() {
      const {
         onChange,
         singleDate,
         beginDate,
         singleDateField,
         beginDateField,
         endDateField
      } = this.props;
      const isInterval = !this.state.isInterval;
      this.setState((oldState) => {
         if (onChange) {
            if (isInterval) {
               onChange(singleDate, beginDateField);
               onChange(null, singleDateField);
            } else {
               //TODO: это временно
               onChange(beginDate, singleDateField);
               onChange(null, beginDateField);
               onChange(null, endDateField);
            }
         }
         return {
            ...oldState,
            isInterval: isInterval,
            isValidEndDate: true
         }
      }, () => this.postToggleValidate(isInterval, beginDate, singleDate));
   }

   postToggleValidate(isInterval, beginDate, singleDate) {
      const {
         storeFormat = defaultStoreFormat,
         format = defaultFormat
      } = this.props;
      if (isInterval) {
         this.validateFormat("isValidBeginDate")(formatValue(singleDate, storeFormat, format))
      } else {
         this.validateFormat("isValidSingleDate")(formatValue(beginDate, storeFormat, format))
      }
   }

   validateFormat(isValidField) {
      return (value) => {
         const { format = defaultFormat } = this.props;
         this.setState((oldState) => ({
            ...oldState,
            [isValidField]: Moment(value, format.view, true).isValid() || isEmpty(value)
         }));
      };
   }

   getChangeDateHandler(field) {
      const {
         onChange,
         storeFormat = defaultStoreFormat,
         format = defaultFormat
      } = this.props;
      return (value) => onChange && onChange(formatValue(value, format, storeFormat), field);
   }

   render() {
      const { isInterval, hasError } = this.state;
      const {
         singleDate,
         beginDate,
         endDate,
         onChange,
         singleDateField,
         beginDateField,
         endDateField,
         help,
         formatPlaceholder,
         errorText,
         format = defaultFormat,
         storeFormat = defaultStoreFormat,
         formatField,
         formatList
      } = this.props;

      let dateForm = null;
      if (isInterval) {
         dateForm = <DateRange beginChange={ this.getChangeDateHandler(beginDateField) }
                               beginDate={ formatValue(beginDate, storeFormat, format) }
                               endChange={ this.getChangeDateHandler(endDateField) }
                               endDate={ formatValue(endDate, storeFormat, format) }
                               dateFormat={ format.dateFormat }
                               validateBegin={ this.validateFormat("isValidBeginDate") }
                               validateEnd={ this.validateFormat("isValidEndDate") }
                               timeFormat={ format.timeFormat || false } />
      } else {
         dateForm = <DatePicker value={ formatValue(singleDate, storeFormat, format) }
                                dateFormat={ format.dateFormat }
                                onChange={ this.getChangeDateHandler(singleDateField) }
                                validate={ this.validateFormat("isValidSingleDate") }
                                //требует явно указать false, если не нужно время, null и undefined воспринимает как пустой шаблон
                                timeFormat={ format.timeFormat || false }
                                inputProps={ defaultPlaceholder } />;
      }

      const showError = hasError || !this.isValid();

      return (
         <div className="col-xs-12 no-padding">
            <div className="col-xs-3 no-padding-left no-margin-bottom">
               <Select options={ formatList }
                       valueKey="id"
                       labelKey="view"
                       inputProps={ formatInputProps }
                       clearable={ false }
                       onChange={ (format) => onChange && onChange(format, formatField) }
                       value={ format }
                       placeholder={ formatPlaceholder || "Формат даты..." } />
            </div>
            <div className={ classNames("col-xs-6 no-padding-right no-margin-bottom form-group", showError && "has-error") }>
               { dateForm }
               {
                  showError &&
                  <p className="help-block has-error">{ this.isValid() ? errorText : notValidFormatText }</p>
               }
            </div>
            <div className="col-xs-3 option-switch pull-right no-padding-right">
               <span className="option-switch__element option-switch__element--text">
                  Дата
               </span>&nbsp;
               <span className="option-switch__element option-switch__element--switch">
                  <Switch value={ isInterval }
                          text=""
                          onChange={ this.toggleForm } />
               </span>&nbsp;
               <span className="option-switch__element option-switch__element--text">
                  Интервал
               </span>
            </div>
            {
               help &&
               <p className="help-block col-xs-12 no-padding">{ help }</p>
            }
         </div>
      );
   }

}

ComplexDate.propTypes = {
   singleDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   beginDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   endDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   singleDateField: PropTypes.string,
   beginDateField: PropTypes.string,
   help: PropTypes.string,
   formatPlaceholder: PropTypes.string,
   format: PropTypes.object,
   storeFormat: PropTypes.object,
   formatList: PropTypes.arrayOf(PropTypes.object),
   formatField: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   endDateField: PropTypes.string
};

ComplexDate.defaultProps = {};

export default ComplexDate;