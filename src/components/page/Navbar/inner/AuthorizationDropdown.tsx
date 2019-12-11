import React, { ReactNode } from 'react';

import LoginDropdown from './LoginDropdown';
import LogoutDropdown from './LogoutDropdown';
import { UserInfo } from './UserShortInfo';

export interface AuthorizationDropdownProps {
   user?: UserInfo;
   avatarSrc?: string;
   menu: ReactNode;
}

const AuthorizationDropdown = ({ user = {}, avatarSrc, menu }: AuthorizationDropdownProps) => {
   if (user.login) {
      return (
         <LogoutDropdown user={user} avatarSrc={avatarSrc}>
            {menu}
         </LogoutDropdown>
      );
   }

   return <LoginDropdown />;
};

export default AuthorizationDropdown;
