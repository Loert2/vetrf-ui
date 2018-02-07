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
      this.getNewComplexDate = this.getNewComplexDate.bind(this);
   }

   componentDidMount() {
      const { format = {}, formatPath, onChange } = this.props;
      if (isEmpty(format)) {
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
      const { format: newFormat = {} } = nextProps;
      if (!newFormat) {
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
         formatField,
         singleDateField,
         beginDateField,
         endDateField,
         complexDate = {},
         complexDatePath
      } = this.props;
      const newComplexDate = {
         ...complexDate,
         [formatField]: newFormat
      };
      newComplexDate.view = getFormattedComplexDateView(newComplexDate, beginDateField, endDateField, singleDateField);
      onChange && onChange(newComplexDate, complexDatePath);
   }

   toggleForm() {
      const {
         onChange,
         singleDate,
         beginDate,
         singleDateField,
         beginDateField,
         endDateField,
         complexDate = {},
         complexDatePath
      } = this.props;

      const isInterval = !this.state.isInterval;
      this.setState((oldState) => {
         if (onChange) {
            let newComplexDate;
            if (isInterval) {
               newComplexDate = {
                  ...complexDate,
                  [beginDateField]: singleDate,
                  [singleDateField]: null
               };
            } else {
               newComplexDate = {
                  ...complexDate,
                  [singleDateField]: beginDate,
                  [beginDateField]: null,
                  [endDateField]: null
               };
            }
            newComplexDate.view = getFormattedComplexDateView(newComplexDate, beginDateField, endDateField, singleDateField);
            onChange(
               newComplexDate,
               complexDatePath
            );
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
         complexDatePath
      } = this.props;
      return (value) => onChange && onChange(
         this.getNewComplexDate(value, field),
         complexDatePath
      );
   }

   getNewComplexDate(value, field) {
      const {
         storeFormat = defaultStoreFormat,
         format = defaultFormat,
         complexDate = {},
         singleDateField,
         beginDateField,
         endDateField,
      } = this.props;

      const newComplexDate = {
         ...complexDate,
         [field]: formatValue(value, format, storeFormat)
      };
      newComplexDate.view = getFormattedComplexDateView(newComplexDate, beginDateField, endDateField, singleDateField);

      return newComplexDate;
   }

   render() {
      const { isInterval, hasError } = this.state;
      const {
         singleDate,
         beginDate,
         endDate,
         singleDateField,
         beginDateField,
         endDateField,
         help,
         formatPlaceholder,
         errorText,
         format = defaultFormat,
         storeFormat = defaultStoreFormat,
         formatList
      } = this.props;

      let dateForm = null;
      let formClass = null;
      if (isInterval) {
         dateForm = <DateRange beginChange={ this.getChangeDateHandler(beginDateField) }
                               beginDate={ formatValue(beginDate, storeFormat, format) }
                               endChange={ this.getChangeDateHandler(endDateField) }
                               endDate={ formatValue(endDate, storeFormat, format) }
                               dateFormat={ format.dateFormat }
                               validateBegin={ this.validateFormat("isValidBeginDate") }
                               validateEnd={ this.validateFormat("isValidEndDate") }
                               timeFormat={ format.timeFormat } />;
         formClass = 'complex-date__date--interval';
      } else {
         dateForm = <DatePicker value={ formatValue(singleDate, storeFormat, format) }
                                dateFormat={ format.dateFormat }
                                onChange={ this.getChangeDateHandler(singleDateField) }
                                validate={ this.validateFormat("isValidSingleDate") }
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
      format: PropTypes.object
   }),
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
   singleDatePath: PropTypes.string,
   beginDatePath: PropTypes.string,
   help: PropTypes.string,
   formatPlaceholder: PropTypes.string,
   format: PropTypes.object,
   storeFormat: PropTypes.object,
   formatList: PropTypes.arrayOf(PropTypes.object),
   formatPath: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   endDatePath: PropTypes.string,
   complexDatePath: PropTypes.string,
   singleDateField: PropTypes.string,
   beginDateField: PropTypes.string,
   endDateField: PropTypes.string,
   formatField: PropTypes.string
};

ComplexDate.defaultProps = {};

export default ComplexDate;