import React from 'react';
import { storiesOf } from '@storybook/react';
import withTooltip from './withTooltip';
import { text } from '@storybook/addon-knobs';
import Icon from '../../other/Icon/Icon';

interface PropDefinition {
   property: string;
   propType: { name: string };
   required: string;
   description: string;
   defaultValue: string;
}

const TableInfo = [
   {
      property: 'tooltip',
      propType: { name: 'string' },
      required: '-',
      defaultValue: '-',
      description:
         'Подсказка. Если не передавать этот параметр, то вернется переданный компонент без изменений'
   },
   {
      property: 'tooltipId',
      propType: { name: 'string' },
      required: '-',
      defaultValue: '-',
      description: 'Сгенерированный индентификатор, его не нужно передавать'
   }
];

const Table = () => {
   const props = TableInfo.map(
      ({ property, propType, required, description, defaultValue }: PropDefinition) => {
         return (
            <tr key={property}>
               <td className="info-table-monospace">{property}</td>
               <td className="info-table-monospace">{propType.name}</td>
               <td>{required}</td>
               <td>{defaultValue}</td>
               <td>{description}</td>
            </tr>
         );
      }
   );

   return (
      <table className="info-table">
         <thead>
            <tr>
               <th>property</th>
               <th>propType</th>
               <th>required</th>
               <th>default</th>
               <th>description</th>
            </tr>
         </thead>
         <tbody>{props}</tbody>
      </table>
   );
};

const stories = storiesOf('withTooltip', module);
const WithTooltip = withTooltip(Icon);

stories.add(
   'withTooltip',
   () => (
      <WithTooltip
         tooltip={text('tooltip', 'Подсказка')}
         icon="question-circle"
         size={150}
         color="green"
      />
   ),
   {
      info: {
         inline: true,
         text: `
            ### Notes

            HOC withToolTip - компонент-обёртка.

            Всплывающее сообщение-подсказка при наведении на компонент. Пример вызова компонента-обертки:
            ~~~js
            const WithTooltip = withTooltip(Icon);
            ~~~
            При щелчке подсказка убирается.
         `,
         TableComponent: Table
      }
   }
);
