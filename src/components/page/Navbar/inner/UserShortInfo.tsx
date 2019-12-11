import React from 'react';

export interface UserShortInfoProps {
   user: UserInfo;
   avatarSrc?: string;
   handleClick: () => void;
}

export interface UserInfo {
   fio?: string;
   login?: string;
   institution?: Institution;
}

interface Institution {
   shortName?: string;
}

// TODO: a11y change from a to button and change css for support this change
const UserShortInfo = ({ user, avatarSrc, handleClick }: UserShortInfoProps) => (
   <a onClick={handleClick} className="dropdown-toggle">
      <img className="nav-user-photo" src={avatarSrc} alt="" />
      <span className="user-info">
         {user.fio && <small> {user.fio} </small>}
         {user.login && !user.fio && <small> {user.login} </small>}
         {user.institution && user.institution.shortName && (
            <small>{user.institution.shortName}</small>
         )}
      </span>
      <i className="ace-icon fa fa-caret-down" />
   </a>
);

export default UserShortInfo;
