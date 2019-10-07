import React from 'react';
import { Children } from '../../../typings';

const NavbarButtons = ({ children }: Children) => (
   <div className="navbar-buttons navbar-header pull-right" role="navigation">
      <ul className="nav ace-nav">{children}</ul>
   </div>
);

export default NavbarButtons;
