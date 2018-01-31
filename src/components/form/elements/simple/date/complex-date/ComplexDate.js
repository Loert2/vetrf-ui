import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Select, Switch} from "../../index";
import Moment from "moment/moment";
import DateRange from "../date-range/DateRange";
import validate from "../../../../utils/validate-utils";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import setIn from "../../../../utils/setIn";

const formatList = [
   { id: "DD.MM.YYYY", view: "DD.MM.YYYY", hasTime: false },
   { id: "DD-MM-YYYY", view: "DD-MM-YYYY", hasTime: false },
   { id: "DD/MM/YYYY", view: "DD/MM/YYYY", hasTime: false },
   { id: "MM/YYYY", view: "MM/YYYY", hasTime: false },
   { id: "MM.YYYY", view: "MM.YYYY", hasTime: false },
   { id: "YYYY", view: "YYYY", hasTime: false },
   { id: "DD.MM.YYYY HH:mm", view: "DD.MM.YYYY HH:mm", hasTime: true },
   { id: "DD/MM/YYYY HH:mm", view: "DD/MM/YYYY HH:mm", hasTime: true }
];

const defaultFormat = "DD.MM.YYYY";
const defaultHelpText = "Выберите формат для даты и времени";
const notValidFormatText = "Введенная дата не соотвествует выбранному формату";

const getFormatObj = (format) => ({ id: format, view: format });

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
   }

   componentDidMount() {
      const { format, formatField, onChange } = this.props;
      if (!format) {
         onChange && onChange(defaultFormat, formatField);
      }
   }

   componentWillReceiveProps(nextProps) {
      const { hasError, isInterval } = this.state;
      const isValid = this.isValid();
      const nextHasError = validate(nextProps, () => !isValid || (nextProps.require && !nextProps.value), hasError, notValidFormatText);
      if (nextHasError !== this.state.hasError) {
         this.setState({
            ...this.state,
            hasError: nextHasError
         });
      }
      const {
         singleDate,
         beginDate,
         endDate,
         onChange,
         singleDateField,
         beginDateField,
         endDateField,
         format,
         formatField
      } = this.props;
      const { format: newFormat } = nextProps;
      const oldFormat = format || defaultFormat;
      if (newFormat && format !== newFormat) {
         if (isInterval) {
            this.updateDateFormat(beginDate, beginDateField, oldFormat, newFormat, "isValidBeginDate");
            this.updateDateFormat(endDate, endDateField, oldFormat, newFormat, "isValidEndDate");
         } else {
            this.updateDateFormat(singleDate, singleDateField, oldFormat, newFormat, "isValidSingleDate");
         }
      }
      if (!newFormat) {
         onChange && onChange(defaultFormat, formatField);
      }
   }

   isValid() {
      const { isValidSingleDate, isValidBeginDate, isValidEndDate, isInterval } = this.state;
      return isInterval ? isValidBeginDate && isValidEndDate : isValidSingleDate;
   }

   updateDateFormat(value, field, oldFormat, newFormat, isValidField) {
      const { onChange } = this.props;
      let newFormatDate = Moment(value, [oldFormat]).format(newFormat);
      const isValid = Moment(newFormatDate, newFormat, true).isValid();
      if (!isValid) {
         newFormatDate = value;
      }
      onChange && onChange(newFormatDate, field);
      this.setState((oldState) => setIn(oldState, isValidField, isValid));
   }

   toggleForm() {
      this.setState({
         ...this.state,
         isInterval: !this.state.isInterval
      });
   }

   validateFormat(isValidField) {
      return (value) => {
         const { format } = this.props;
         this.setState({
            ...this.state,
            [isValidField]: Moment(value, format, true).isValid() || isEmpty(value)
         });
      };
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
         format,
         formatField
      } = this.props;

      let dateForm = null;
      if (isInterval) {
         dateForm = <DateRange beginChange={ (value) => onChange && onChange(value, beginDateField) }
                               beginDate={ beginDate }
                               endChange={ (value) => onChange && onChange(value, endDateField) }
                               endDate={ endDate }
                               dateFormat={ format }
                               validateBegin={ this.validateFormat("isValidBeginDate") }
                               validateEnd={ this.validateFormat("isValidEndDate") }
                               timeFormat={ format.hasTime } />
      } else {
         dateForm = <DatePicker value={ singleDate }
                                dateFormat={ format }
                                onChange={ (value) => onChange && onChange(value, singleDateField) }
                                validate={ this.validateFormat("isValidSingleDate") }
                                timeFormat={ format.hasTime } />;
      }

      const showError = hasError || !this.isValid();

      return (
         <div className="col-xs-12">
            <div className="col-xs-3 no-padding-left no-margin-bottom">
               <Select options={ formatList }
                       valueKey="id"
                       labelKey="view"
                       inputProps={ formatInputProps }
                       clearable={ false }
                       onChange={ (format) => onChange && onChange(format.view, formatField) }
                       value={ getFormatObj(format) }
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
            <p className="help-block col-xs-12 no-padding">{ help || defaultHelpText }</p>
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
   format: PropTypes.string,
   formatField: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   endDateField: PropTypes.string
};

ComplexDate.defaultProps = {};

export default ComplexDate;