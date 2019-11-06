import { Size } from '../type/Size';

export function getSizeClassName(size: Size) {
   if (size === 100) {
      return '';
   }
   if (size > 100) {
      return `bigger-${size}`;
   }
   return `smaller-${size}`;
}
