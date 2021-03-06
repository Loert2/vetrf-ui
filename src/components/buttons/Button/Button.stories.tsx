import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import {
   SizeOption,
   ColorOption,
   SizeButtonOption,
   ColorButtonOption
} from '../../../utils/stories/options';
import { text, select, boolean } from '@storybook/addon-knobs';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

const stories = storiesOf('Button', module);
stories.addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add(
   'regular',
   () => (
      <Button
         text={text('text', 'Нажми на меня')}
         color={select('color', ColorButtonOption, 'success')}
         size={select('size', SizeButtonOption, 'sm')}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'bell')}
         iconColor={select('colorIcon', ColorOption, 'white')}
         iconSize={select('sizeIcon', SizeOption, 100)}
         onClick={() => console.log('click')}
         onlyIcon={boolean('onlyIcon', false)}
         tooltip={text('tooltip', 'Нажми на меня')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Универсальная кнопка с иконкой (опционально). Если не указан \`href\`, то основа - button.
            Все свойства опциональные. Для ознакомления с возможностями посмотрите остальные stories Button

            Примечание:
            1. Для демонстрации работы нажатия кнопки результат отображается в консоли браузера.

            ### Story Source
            ***

            ~~~jsx
            <Button
               text="Нажми на меня"
               color="success"
               size="sm"
               disabled={false}
               icon="bell"
               iconColor="white"
               iconSize={100}
               onClick={() => console.log('click')}
               onlyIcon={false}
               tooltip="Нажми на меня"
            />
            ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);

stories.add(
   'with outside link',
   () => (
      <Button
         href="https://about.gitlab.com/"
         text={text('text', 'Ссылка на внешний сайт')}
         color={select('color', ColorButtonOption, 'pink')}
         size={select('size', SizeButtonOption, 'sm')}
         disabled={boolean('disabled', false, 'Other')}
         icon={text('icon', 'link')}
         iconColor={select('colorIcon', ColorOption, 'white')}
         iconSize={select('sizeIcon', SizeOption, 100)}
         onlyIcon={boolean('onlyIcon', false)}
         tooltip={text('tooltip', 'Нажми на меня')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка-ссылка. Вариант для использования в качестве стилизированной ссылки на внешний ресурс.
            В этом случае в href указывается абсолютный url, тогда будет основана на элементе \`a\`.

            ### Story Source
            ***

            ~~~jsx
            <Button
               href="https://about.gitlab.com/"
               text="Ссылка на внешний сайт"
               color="pink"
               size="sm"
               disabled={false)}
               icon="link"
               iconColor="white"
               iconSize={100}
               onlyIcon={false}
               tooltip="Нажми на меня"
            />
            ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <h2>Начальная страница</h2>
   },
   {
      path: 'with inside link',
      exact: true,
      main: () => <h2 className="text-success">Страница с ссылкой</h2>
   }
];

stories.add(
   'with inside link',
   () => (
      <div>
         <Button
            href="/example"
            text={text('text', 'Ссылка на другую страницу')}
            color={select('color', ColorButtonOption, 'success')}
            size={select('size', SizeButtonOption, 'sm')}
            disabled={boolean('disabled', false, 'Other')}
            icon={text('icon', 'bell')}
            iconColor={select('colorIcon', ColorOption, 'white')}
            iconSize={select('sizeIcon', SizeOption, 100)}
            onlyIcon={boolean('onlyIcon', false)}
            tooltip={text('tooltip', 'Нажми на меня')}
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

             Кнопка-ссылка. Вариант с относительной ссылкой (в пределах приложения).
             В таком случае использует Link из react-router, если не указано явно \`linkType = "a"\`

             Для повторной демонстрации работы перезапустите страницу.

             ### Story Source
             ***

             ~~~jsx
             <Button
                href="/example"
                text="Ссылка на другую страницу"
                color="success"
                size="sm"
                disabled={false}
                icon="bell"
                iconColor="white"
                iconSize={100}
                onlyIcon={false}
                tooltip="Нажми на меня"
             />
             ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);

stories.add(
   'with only icon',
   () => (
      <Button
         disabled={boolean('disabled', false)}
         icon={text('icon', 'bell')}
         iconColor={select('colorIcon', ColorOption, 'green')}
         iconSize={select('sizeIcon', SizeOption, 150)}
         onClick={() => console.log('click on icon')}
         onlyIcon={true}
         tooltip={text('tooltip', 'Нажми на меня')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Вариант кнопки в виде одной только иконки. Для этого надо задать onlyIcon как true.
            Если не указан \`href\`, то основа - button.
            Свойства text, color и size будут игнорироваться с выводом предупреждения в консоль.

            Примечание:
            1. Для демонстрации работы нажатия кнопки результат отображается в консоли браузера.

            ### Story Source
            ***

            ~~~jsx
            <Button
               disabled={false}
               icon="bell"
               iconColor="green"
               iconSize={150}
               onClick={() => console.log('click on icon')}
               onlyIcon={true}
               tooltip="Нажми на меня"
            />
            ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);

stories.add(
   'with only icon and outside link',
   () => (
      <Button
         href="https://about.gitlab.com/"
         disabled={boolean('disabled', false)}
         icon={text('icon', 'link')}
         iconColor={select('colorIcon', ColorOption, 'red')}
         iconSize={select('sizeIcon', SizeOption, 150)}
         onlyIcon={true}
         tooltip={text('tooltip', 'Нажми на меня')}
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            Кнопка-ссылка в виде одной лишь иконки. Для этого надо задать onlyIcon как true.
            Вариант для использования в качестве стилизированной ссылки на внешний ресурс.
            В этом случае в href указывается абсолютный url, тогда будет основана на элементе \`a\`.
            Свойства text, color и size будут игнорироваться с выводом предупреждения в консоль.

            ### Story Source
            ***

            ~~~jsx
            <Button
               href="https://about.gitlab.com/"
               disabled={false}
               icon="link"
               iconColor="red"
               iconSize={150}
               onlyIcon={true}
               tooltip="Нажми на меня"
            />
            ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);

stories.add(
   'with only icon and inside link',
   () => (
      <div>
         <Button
            href="/example"
            disabled={boolean('disabled', false)}
            icon={text('icon', 'bell')}
            iconColor={select('colorIcon', ColorOption, 'purple')}
            iconSize={select('sizeIcon', SizeOption, 150)}
            onlyIcon={true}
            tooltip={text('tooltip', 'Нажми на меня')}
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

             Кнопка-ссылка в виде одной лишь иконки. Для этого надо задать onlyIcon как true.
             Вариант с относительной ссылкой (в пределах приложения).
             В таком случае использует Link из react-router, если не указано явно \`linkType = "a"\`
             Свойства text, color и size будут игнорироваться с выводом предупреждения в консоль.

             Для повторной демонстрации работы перезапустите страницу.

             ### Story Source
             ***

             ~~~jsx
             <Button
                href="/example"
                disabled={false}
                icon="bell"
                iconColor="purple"
                iconSize={150}
                onlyIcon={true}
                tooltip="Нажми на меня"
             />
             ~~~
         `,
         propTables: [Button],
         source: false
      }
   }
);
