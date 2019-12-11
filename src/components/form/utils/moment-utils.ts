import isEmpty from 'lodash/isEmpty';
import Moment from 'moment/moment';

// TODO: This is old way. Rewrite it!
export const formatValue = (value, oldFormat: any = {}, format: any = {}) => {
   const formattedValue = Moment(value, oldFormat.view, true).format(format.view);
   const isValid = Moment(formattedValue, format.view, true).isValid();
   if (!isValid || isEmpty(value)) {
      return value;
   }
   return formattedValue;
};

export const defaultFormat = {
   id: '1f8833ef-0893-4716-be79-69aeaff2fd28',
   dateFormat: 'DD.MM.YYYY',
   timeFormat: null,
   view: 'DD.MM.YYYY'
};

export const defaultStoreFormat = {
   id: 'b6ff39df-637f-44c2-8524-de85d4de8677',
   dateFormat: 'DD.MM.YYYY',
   timeFormat: 'HH:mm',
   view: 'DD.MM.YYYY HH:mm'
};

export const defaultDate = '...';

export const getFormattedComplexDateView = (complexDate: any = {}) => {
   const {
      dateInterval: { startDateTime, endDateTime } = {} as any,
      format = defaultFormat,
      singleDateTime
   } = complexDate;
   if (startDateTime || endDateTime) {
      return `${formatValue(startDateTime, defaultStoreFormat, format) ||
         defaultDate}-${formatValue(endDateTime, defaultStoreFormat, format) || defaultDate}`;
   } else if (singleDateTime) {
      return formatValue(singleDateTime, defaultStoreFormat, format);
   }
   return '';
};
