export type Color =
   | 'dark'
   | 'white'
   | 'red'
   | 'red2'
   | 'light-red'
   | 'blue'
   | 'light-blue'
   | 'green'
   | 'light-green'
   | 'orange'
   | 'orange2'
   | 'light-orange'
   | 'purple'
   | 'pink'
   | 'pink2'
   | 'brown'
   | 'grey'
   | 'light-grey';

export interface ColorProps {
   /** Допустимые типы передаваемых параметров: dark, white, red, red2, light-red, blue, light-blue, green, light-green,
      orange, orange2, light-orange, purple, pink, pink2, brown, grey, light-grey */
   color?: Color;
}
