import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import { Link, MemoryRouter } from 'react-router-dom';
import { LogoProps } from './inner/Logo';
import { UserInfo } from './inner/UserShortInfo';
import { object } from '@storybook/addon-knobs';

// const avatarSrc = require('./user.jpg');

const stories = storiesOf('Navbar', module);

const logo: LogoProps = {
   icon: 'fa fa-leaf',
   text: 'Race-admin'
};
const navbarMenu = (
   <li>
      <Link to={'/user/dashboard'}>
         <i className="ace-icon fa fa-address-card" />
         Profile
      </Link>
   </li>
);

const user: UserInfo = {
   login: 'login',
   fio: 'John Doe'
};

stories.addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add(
   'Navbar',
   () => (
      <Navbar
         user={object('user', user)}
         logo={object('logo', logo)} /*avatarSrc={avatarSrc}*/
         navbarMenu={navbarMenu}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes
   
            Navbar with authorization dropdown menu
         `,
         propTables: [Navbar]
      }
   }
);

stories.add(
   'Navbar for anonymous',
   () => <Navbar logo={object('logo', logo)} /*avatarSrc={avatarSrc}*/ navbarMenu={navbarMenu} />,
   {
      info: {
         inline: true,
         text: `
            ### Notes
            
              Navbar with authorization dropdown menu
         `,
         propTables: [Navbar]
      }
   }
);
