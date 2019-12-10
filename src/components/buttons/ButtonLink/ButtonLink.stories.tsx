import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { ButtonLink, ButtonLinkColor, ButtonLinkSize } from './ButtonLink';
import { Size as SizeIcon } from '../../../utils/type/Size';
import { Color as ColorIcon } from '../../../utils/type/Color';
import { text, select, boolean } from '@storybook/addon-knobs';
import { SelectTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

const stories = storiesOf('ButtonLink', module);

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <h2>Начальная страница</h2>
   },
   {
      path: '/example',
      exact: true,
      main: () => <h2 className="text-success">Страница с ссылкой</h2>
   }
];

stories.addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add(
   'ButtonLink',
   () => (
      <div>
         <ButtonLink
            href="/example"
            text={text('text', 'Ссылка на другую страницу')}
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
               ] as SelectTypeOptionsProp<ButtonLinkColor>,
               'success'
            )}
            size={select(
               'size',
               ['minier', 'xs', 'sm', 'lg', 'xlg', undefined] as SelectTypeOptionsProp<
                  ButtonLinkSize
               >,
               'xlg'
            )}
            disabled={boolean('disabled', false, 'Other')}
            icon={text('icon', 'bell')}
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
         <Switch>
            {routes.map((route, index) => (
               <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
         </Switch>
      </div>
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

             Кнопка-ссылка с иконкой (опционально). Ссылка внутренняя (в пределах приложения). Использует Link из react-router.

             Для повторной демонстрации работы перезапустите страницу. Для примера реализации из Story Source брать только ButtonLink, остальная часть для наглядной демонстрации.
         `,
         propTables: [ButtonLink]
      }
   }
);
