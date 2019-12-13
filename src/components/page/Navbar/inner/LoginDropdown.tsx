import React from 'react';

export interface LoginDropdownProps {
   loginHref?: string;
}

const LoginDropdown = ({ loginHref = '/login.html' }: LoginDropdownProps) => (
   <li className="light-blue">
      <a id="btn_sign_in" href={loginHref}>
         Log in
      </a>
   </li>
);

export default LoginDropdown;
