/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
import { ReactNode } from 'react';

declare module '*.css' {
   const content: { [className: string]: string };
   export default content;
}

interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
   const svgUrl: string;
   const svgComponent: SvgrComponent;
   export default svgUrl;
   export { svgComponent as ReactComponent };
}

interface Children {
   children: ReactNode;
}

declare module '*.jpg' {
   const fileName: string;
   export = fileName;
}

declare module '*.png' {
   const content: string;
   export default content;
}
