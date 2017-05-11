import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const Button = ({ id, className, onClick, disabled, href, tooltip, icon, text }) => {
   const toolTipId = uniqueId();
   return (
      <a id={ id }
         className={ classNames( "decoration-none" , className || "") }
         onClick={ disabled ? null : onClick } disabled={ disabled } href={ href } >
         {
            icon &&
            <i data-tip={ tooltip } data-for={ toolTipId } className={ classNames( text ? "padding-right-5" : "" ,icon) } />
         }
         { text }
         {
            tooltip &&
            <ReactTooltip id={ toolTipId } effect="solid" place="top" className="ace-tooltip" globalEventOff="click"/>
         }
      </a>
   );
};

Button.propTypes = {
   href: PropTypes.string,
   id: PropTypes.string,
   className: PropTypes.string,
   tooltip: PropTypes.string,
   icon: PropTypes.string,
   disabled: PropTypes.bool,
   text: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
   ]),
   onClick: PropTypes.func
};

export default Button;