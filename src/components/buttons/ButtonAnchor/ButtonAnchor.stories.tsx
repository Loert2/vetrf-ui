import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonAnchor } from './ButtonAnchor';
import { ColorButton as ColorButtonAnchor } from '../../../utils/type/ColorButton';
import { SizeButton as SizeButtonAnchor } from '../../../utils/type/SizeButton';
import { Size as SizeIcon } from '../../../utils/type/Size';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { text, select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

const stories = storiesOf('ButtonAnchor', module);

stories.add(
   'ButtonAnchor',
   () => (
      <ButtonAnchor
         href="https://about.gitlab.com/"
         text={text('text', 'Ссылка на внешний сайт')}
         color={select(
            'color',
            [
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
            ] as SelectTypeOptionsProp<ColorButtonAnchor>,
            'pink'
         )}
         size={select(
            'size',
            ['minier', 'xs', 'sm', 'lg', undefined] as SelectTypeOptionsProp<SizeButtonAnchor>,
            'sm'
         )}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'link')}
         colorIcon={select(
            'colorIcon',
            [
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
            ] as SelectTypeOptionsProp<ColorIcon>,
            'white'
         )}
         sizeIcon={select(
            'sizeIcon',
            [
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
            ] as SelectTypeOptionsProp<SizeIcon>,
            100
         )}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка-ссылка с иконкой (опционально). Только для использования в качестве стилизированной ссылки на внешний ресурс.
            Для кнопки-ссылки на внутренний ресурс (в приложение) воспользуйтесь компонентом ButtonLink, вместо данного.
            Для обычных кнопок используйте Button
         `,
         propTables: [ButtonAnchor]
      }
   }
);
