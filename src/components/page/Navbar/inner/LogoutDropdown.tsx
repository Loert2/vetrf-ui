import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';

import UserShortInfo, { UserInfo } from './UserShortInfo';
import useToggle from '../../../../utils/hooks/useToggle';
import useOnClickOutside from '../../../../utils/hooks/useOnClickOutside';

export interface LogoutDropdownProps {
   user: UserInfo;
   avatarSrc?: string;
   logoutUrl?: string;
   children: ReactNode;
}

const LogoutDropdown = ({
   user,
   avatarSrc,
   logoutUrl = '/logout',
   children
}: LogoutDropdownProps) => {
   const ref = useRef<HTMLElement>();
   const [isOpenDropdown, toggleDropdown, closeDropdown] = useToggle(false);
   useOnClickOutside(ref, closeDropdown);

   return (
      <li className={classNames('light-blue', { open: isOpenDropdown })}>
         <UserShortInfo avatarSrc={avatarSrc} user={user} handleClick={toggleDropdown} />
         <ul className="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
            {children}
            <li>
               <a href={logoutUrl}>
                  <i className="ace-icon fa fa-power-off" />
                  Logout
               </a>
            </li>
         </ul>
      </li>
   );
};

export default LogoutDropdown;
