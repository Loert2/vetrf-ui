import PropTypes from 'prop-types';
import React from 'react';
import AutocompleteInput from '../../simple/input/autocomplete/AutocompleteInput';

const AutocompleteInputSearch = (props) => (
   <div className="form-group">
      <label className="col-xs-5 control-label no-padding-right">
         {props.labelText}
      </label>
      <div className="col-xs-7">
         <AutocompleteInput
            name={props.name}
            id={props.id}
            maxLength={props.maxLength}
            value={props.value}
            searchField={props.searchField}
            selectField={props.selectField}
            style={props.style}
            onFocus={props.onFocus}
            disabled={props.disabled}
            onAutocomplete={props.onAutocomplete}
            resetAutocompleteList={props.resetAutocompleteList}
            onKeyPress={props.onEnter}
            onChange={(value) =>
               props.onChange &&
               props.onChange(value, props.searchField, props.selectField)
            }
            onSelect={props.onSelect}
            items={props.items}
            viewKey={props.viewKey}
            className={props.className || 'col-xs-12 col-sm-7 input-sm'}
            dpropdownClass={props.dpropdownClass}
            placeholder={props.placeholder || props.labelText}
         />
      </div>
   </div>
);

AutocompleteInputSearch.propTypes = {
   value: PropTypes.string,
   searchField: PropTypes.string,
   selectField: PropTypes.string,
   labelText: PropTypes.string,
   dpropdownClass: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   onFocus: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   onSelect: PropTypes.func,
   resetAutocompleteList: PropTypes.func,
   onAutocomplete: PropTypes.func,
   className: PropTypes.string,
   viewKey: PropTypes.string,
   items: PropTypes.array
};

export default AutocompleteInputSearch;
