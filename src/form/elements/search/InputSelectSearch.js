import PropTypes from 'prop-types';
import React from 'react';
import Input from '../simple/input/Input';
import Select from '../simple/select/Select';
import AutocompleteInput from '../simple/input/AutocompleteInput';

const InputSelectSearch = ({ autocomplete, labelText, input, select }) => (
   <div className="form-group">
      <label className="col-sm-5 control-label no-padding-right">{ labelText }</label>
      <div className="col-sm-7">
         <span className="col-xs-12 col-sm-7 no-padding">
            {
               autocomplete ?
                  <span className="col-xs-8 no-padding">
                     <AutocompleteInput name={ input.name }
                                        id={ input.id }
                                        value={ input.value }
                                        items={ input.autocompleteItems }
                                        onSelect={ input.onSelectItem }
                                        onChange={ (value) => input.onChange && input.onChange(value, input.field) }
                                        maxLength={ input.maxLength }
                                        style={ input.styleInput }
                                        onAutocomplete={ input.onAutocomplete }
                                        resetAutocompleteList={ input.resetAutocompleteList }
                                        onFocus={ input.onFocus }
                                        disabled={ input.disabled }
                                        onKeyPress={ input.onEnter }
                                        className={ input.className || "input-sm col-xs-12" }
                                        placeholder={ input.placeholder || labelText }
                     />
                  </span>
                  :
                  <Input type="text"
                         maxLength={ input.maxLength }
                         name={ input.name }
                         value={ input.value }
                         style={ input.styleInput }
                         autoFocus={ input.autoFocus }
                         onFocus={ input.onFocus }
                         disabled={ input.disabled }
                         onKeyPress={ input.onEnter }
                         onChange={ (value) => input.onChange && input.onChange(value, input.field) }
                         className={ input.className || "input-sm col-xs-8" }
                         placeholder={ input.placeholder || labelText } />
            }
            <Select value={ select.value }
                    id={ select.id }
                    style={ select.style || { height: "28px" } }
                    inputProps={ { style: select.styleInput || { height: "28px" } } }
                    valueKey={ select.valueKey || "id" }
                    labelKey={ select.labelKey || "name" }
                    options={ select.options }
                    onChange={ (value) => select.onChange && select.onChange(value, select.field) }
                    className={ select.className || "col-xs-4 no-padding" }
                    placeholder={ select.placeholder || "" }/>
         </span>
      </div>
   </div>
);

InputSelectSearch.propTypes = {
   autocomplete: PropTypes.bool,
   labelText: PropTypes.string,
   input: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      field: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.number,
      className: PropTypes.string,
      style: PropTypes.object,
      autoFocus: PropTypes.bool,
      onFocus: PropTypes.func,
      onEnter: PropTypes.func,
      disabled: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ]),
      onChange: PropTypes.func,
      onSelectItem: PropTypes.func,
      onAutocomplete: PropTypes.func,
      resetAutocompleteList: PropTypes.func,
      autocompleteItems: PropTypes.array,
   }),
   select: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.object,
      field: PropTypes.string,
      style: PropTypes.object,
      styleInput: PropTypes.object,
      valueKey: PropTypes.string,
      labelKey: PropTypes.string,
      className: PropTypes.string,
      placeholder: PropTypes.string,
      options: PropTypes.array,
      onChange: PropTypes.func
   })
};

InputSelectSearch.defaultProps = { input: {}, select: {} };

export default InputSelectSearch;

