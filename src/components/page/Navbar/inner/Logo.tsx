import React, { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type LogoProps = IconLogo | ImageLogo | Title;

interface Title {
   text?: string;
}

type ImageLogo = { image?: Image } & Title;
type IconLogo = { icon?: string } & Title;

interface Image {
   className?: string;
   style?: CSSProperties;
   source: string;
}

const Logo = (props: LogoProps) => {
   let logo: ReactNode = null;
   if ('image' in props && props.image) {
      const { image } = props;
      logo = <img className={image.className} style={image.style} src={image.source} alt="" />;
   } else if ('icon' in props) {
      logo = <i className={props.icon} />;
   }

   return (
      <div className="navbar-header pull-left">
         <Link to={'/'} className="navbar-brand">
            <small>
               {logo}
               &nbsp; {props.text}
            </small>
         </Link>
      </div>
   );
};

export default Logo;
