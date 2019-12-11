import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { ButtonLink } from './ButtonLink';
import {
   SizeOption,
   ColorOption,
   SizeButtonOption,
   ColorButtonOption
} from '../../../utils/stories/options';
import { text, select, boolean } from '@storybook/addon-knobs';

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
            color={select('color', ColorButtonOption, 'success')}
            size={select('size', SizeButtonOption, 'sm')}
            disabled={boolean('disabled', false, 'Other')}
            icon={text('icon', 'bell')}
            colorIcon={select('colorIcon', ColorOption, 'white')}
            sizeIcon={select('sizeIcon', SizeOption, 100)}
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
