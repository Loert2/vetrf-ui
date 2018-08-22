import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';

const withTooltip = (Component, isBlock) => {
   const wrapped = ({ tooltip, tooltipId = uniqueId(), ...rest }) => {
      if (tooltip) {
         return (
            <Fragment>
               <div
                  className={classNames({ inline: !isBlock })}
                  data-tip={tooltip}
                  data-for={tooltipId}>
                  <Component {...rest} />
               </div>
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
