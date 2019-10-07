const FLOAT_REGEXP_1 = /^\$?\d+.(\d{3})*(,\d*)$/; //Numbers like: 1.123,56
const FLOAT_REGEXP_2 = /^\$?\d+,(\d{3})*(\.\d*)$/; //Numbers like: 1,123.56
const FLOAT_REGEXP_3 = /^\$?\d+(\.\d*)?$/; //Numbers like: 1123.56
const FLOAT_REGEXP_4 = /^\$?\d+(,\d*)?$/; //Numbers like: 1123,56

const NUMBER_REGEXP = /[^0-9]/g;

export const onlyFloatFilter = (value, oldValid = '') => {
   if (!value) {
      return '';
   }
   if (FLOAT_REGEXP_1.test(value)) {
      return value.replace('.', '').replace(',', '.');
   } else if (FLOAT_REGEXP_2.test(value)) {
      return value.replace(',', '');
   } else if (FLOAT_REGEXP_3.test(value)) {
      return value;
   } else if (FLOAT_REGEXP_4.test(value)) {
      return value.replace(',', '.');
   }
   return oldValid;
};

export const onlyNumbersFilter = (value, oldValid = '') => {
   if (!value) {
      return '';
   }
   return value ? value.replace(NUMBER_REGEXP, '') : oldValid;
};
