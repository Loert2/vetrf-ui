import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import isObject from 'lodash/isObject';

import Input from '../Input/Input';
import Button from '../../../../../../buttons/Button/Button';
import classNames from 'classnames';

// TODO: This is old way. Rewrite it!
// @Deprecated
class AutocompleteInput extends PureComponent<any> {
   state = {
      helpVisible: false
   };

   requestAutocompleteList;

   constructor(props, context) {
      super(props, context);

      this.showHelp = this.showHelp.bind(this);
      this.hideHelp = this.hideHelp.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.requestAutocompleteList = debounce(props.onAutocomplete, 500);
   }

   handleClickOutside(e) {
      if (!ReactDOM.findDOMNode(this).contains(e.target)) {
         this.hideHelp();
      }
   }

   componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, false);
   }

   componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, false);
   }

   showHelp() {
      if (!this.state.helpVisible) {
         this.setState({ helpVisible: true });
      }
   }

   hideHelp() {
      this.setState({ helpVisible: false });
   }

   changeHandler(value) {
      const { onChange, name, searchField, items, resetAutocompleteList } = this.props;
      onChange && onChange(value);
      if (name || searchField) {
         if (value && value.length > 2) {
            this.requestAutocompleteList(name ? { [name]: value } : value, name || searchField);
         } else if (!isEmpty(items)) {
            resetAutocompleteList && resetAutocompleteList();
         }
      }
   }

   render() {
      const {
         name,
         id,
         maxLength,
         value,
         style,
         onFocus,
         disabled,
         className,
         placeholder,
         onSelect,
         viewKey,
         items,
         searchLabel,
         button,
         searchField,
         selectField,
         dpropdownClass
      } = this.props;
      const spliceItems = !isEmpty(items) && items.length > 10 ? items.slice(0, 10) : items || [];
      const field = name || selectField || searchField;
      const dpropdownClassName = dpropdownClass || 'autocomplete-dropdown-content';
      const itemList = spliceItems.map(item => (
         <li
            key={uniqueId()}
            onClick={() => {
               this.hideHelp();
               onSelect && onSelect(item, field);
            }}>
            {isObject(item) ? item[viewKey || 'name'] : item}
         </li>
      ));
      const label = searchLabel && (
         <span className="input-group-addon">
            <i className="fa fa-search" />
         </span>
      );
      const btn = !isEmpty(button) && (
         <span className="input-group-btn">
            <Button
               id={button.id}
               disabled={button.disabled}
               className={button.className}
               text={button.text}
               tooltip={button.tooltip}
               color={button.color}
               size={button.size}
               icon={button.icon}
               iconSize={button.iconSize}
               iconColor={button.iconColor}
               onClick={button.handleClick}
               href={button.href}
            />
         </span>
      );
      return (
         <div className="autocomplete-dropdown col-xs-12 no-padding">
            <span className={classNames({ 'input-group': label || btn })}>
               {label}
               <Input
                  type="text"
                  id={id}
                  name={name}
                  maxLength={maxLength}
                  value={value}
                  style={style}
                  onFocus={onFocus}
                  disabled={disabled}
                  onClick={this.showHelp}
                  className={className}
                  placeholder={placeholder}
                  onChange={this.changeHandler}
               />
               {btn}
            </span>
            <ul
               className={dpropdownClassName}
               style={
                  !isEmpty(items) && this.state.helpVisible && value
                     ? { display: 'block' }
                     : { display: 'none' }
               }>
               {itemList}
            </ul>
         </div>
      );
   }
}

(AutocompleteInput as any).propTypes = {
   value: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   searchField: PropTypes.string,
   selectField: PropTypes.string,
   dpropdownClass: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   onFocus: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   onSelect: PropTypes.func,
   resetAutocompleteList: PropTypes.func,
   onAutocomplete: PropTypes.func.isRequired,
   className: PropTypes.string,
   viewKey: PropTypes.string,
   searchLabel: PropTypes.bool,
   items: PropTypes.array,
   button: PropTypes.shape({
      id: PropTypes.string,
      disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      className: PropTypes.string,
      text: PropTypes.string,
      tooltip: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      icon: PropTypes.string,
      iconColor: PropTypes.string,
      iconSize: PropTypes.number,
      href: PropTypes.string,
      handleClick: PropTypes.func
   })
};

(AutocompleteInput as any).defaultProps = {
   maxLength: 255,
   value: '',
   items: [],
   button: {}
};

export default AutocompleteInput;
