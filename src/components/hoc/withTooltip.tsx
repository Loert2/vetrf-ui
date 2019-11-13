import React, { Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import uniqueId from 'lodash/uniqueId';

export interface WithTooltipProps {
   tooltip?: string;
   tooltipId?: string;
}

export const withTooltip = <P extends object>(Component: React.ComponentType<P>) => {
   const wrapped = ({ tooltip, tooltipId = uniqueId(), ...rest }: WithTooltipProps) => {
      if (!tooltip) {
         return <Component {...(rest as P)} />;
      }
      return (
         <Fragment>
            <span data-tip={tooltip} data-for={tooltipId}>
               <Component {...(rest as P)} />
            </span>
            <ReactTooltip
               id={tooltipId}
               effect="solid"
               place="top"
               className="ace-tooltip"
               globalEventOff="click"
            />
         </Fragment>
      );
   };
   wrapped.displayName = `WithTooltip(${Component.name})`;

   return wrapped;
};

export default withTooltip;
