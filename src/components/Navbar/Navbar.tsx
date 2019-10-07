import React, { ReactNode } from 'react';
import Logo, { LogoProps } from './inner/Logo';
import NavbarButtons from './inner/NavbarButtons';
import AuthorizationDropdown from './inner/AuthorizationDropdown';
import { UserInfo } from './inner/UserShortInfo';

export interface NavbarProps {
   logo?: LogoProps;
   user?: UserInfo;
   /** Выпадающее меню кнопки авторизации, список компонентов <li> */
   navbarMenu: ReactNode;
   avatarSrc?: string;
   /** Возможные дополнительные кнопки или иконки, например для уведомлений*/
   navbarButtons?: ReactNode;
}

/** Шапка с кнопкой-меню авторизации и логотипом */
export const Navbar = ({ logo, user, avatarSrc, navbarMenu, navbarButtons }: NavbarProps) => (
   <div className="navbar navbar-default" id="navbar">
      <div className="navbar-container" id="navbar-container">
         {logo && <Logo {...logo} />}
         <NavbarButtons>
            {navbarButtons}
            <AuthorizationDropdown user={user} menu={navbarMenu} avatarSrc={avatarSrc} />
         </NavbarButtons>
      </div>
   </div>
);

export default Navbar;
