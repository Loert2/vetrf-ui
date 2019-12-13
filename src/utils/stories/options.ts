import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { SizeButton } from '../type/SizeButton';
import { ColorButton } from '../type/ColorButton';
import { Size } from '../type/Size';
import { Color } from '../type/Color';

export const SizeOption = [
   20,
   30,
   40,
   50,
   60,
   70,
   75,
   80,
   90,
   100,
   110,
   115,
   120,
   125,
   130,
   140,
   150,
   160,
   170,
   175,
   180,
   190,
   200,
   210,
   220,
   225,
   230,
   240,
   250,
   260,
   270,
   275,
   280,
   290,
   300,
   undefined
] as SelectTypeOptionsProp<Size>;

export const ColorOption = [
   'dark',
   'white',
   'red',
   'red2',
   'light-red',
   'blue',
   'light-blue',
   'green',
   'light-green',
   'orange',
   'orange2',
   'light-orange',
   'purple',
   'pink',
   'pink2',
   'brown',
   'grey',
   'light-grey',
   undefined
] as SelectTypeOptionsProp<Color>;

export const SizeButtonOption = ['minier', 'xs', 'sm', 'lg', undefined] as SelectTypeOptionsProp<
   SizeButton
>;

export const ColorButtonOption = [
   'info',
   'primary',
   'warning',
   'default',
   'success',
   'danger',
   'purple',
   'pink',
   'inverse',
   'grey',
   'light',
   'yellow',
   undefined
] as SelectTypeOptionsProp<ColorButton>;
