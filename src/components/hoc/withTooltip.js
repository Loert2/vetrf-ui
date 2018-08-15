import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import uniqueId from 'lodash/uniqueId';

const withTooltip = (Component) => {
   const wrapped = ({ tooltip, tooltipId = uniqueId(), ...rest }) => {
      if (tooltip) {
         return (
            <Fragment>
               <Component data-tip={tooltip} data-for={tooltipId} {...rest} />
               <ReactTooltip
                  id={tooltipId}
                  effect="solid"
                  place="top"
                  className="ace-tooltip"
                  globalEventOff="click"
               />
            </Fragment>
         );
      }

      return <Component {...rest} />;
   };

   wrapped.propTypes = {
      tooltip: PropTypes.string,
      tooltipId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
   };

   return wrapped;
};

export default withTooltip;
