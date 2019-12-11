Компонент дерева. Взят с https://github.com/jakezatecky/react-checkbox-tree (v1.4.1).

Теперь визуальное отображение древа соответствует информации в массиве checked.

Добавлены возможности выбора режима работы cascade:
default (по-умолчанию) или любое другое значение - при изменении состояния элемента изменяется состояние у его родителей и потомков (если таковые имеются);
halfCascade - при check - поведение по умолчанию, при uncheck меняем статус родителя, но не трогаем потомков;
noCascade - при изменении состояния элемента состояние других элементов не затрагиватеся;

Реализована возможность добавить информацию(node) для узлов у которых есть как минимум один потомок со статусом check через halfCheckLabelInfo.

Теперь иконки можно задавать строковым классом или любым элементом(node) на выбор (см. пример).

```js
const nodes = [
   {
      value: 'Администрирование',
      label: 'Администрирование'
   },
   {
      value: 'Гален',
      label: 'Гален',
      showCheckbox: false,
      children: [
         {
            value: 'Гален.Просмотр',
            label: 'Гален.Просмотр',
            showCheckbox: false,
            children: [
               {
                  value: 'Гален.Просмотр.Отчеты и заявки',
                  label: 'Гален.Просмотр.Отчеты и заявки'
               },
               {
                  value: 'Гален.ЛП и отчеты',
                  label: 'Гален.ЛП и отчеты',
                  disabled: true
               }
            ]
         },
         {
            value: 'Гален.Редактирование',
            label: 'Гален.Редактирование'
         }
      ]
   },
   {
      value: 'Ирена',
      label: 'Ирена',
      showCheckbox: false,
      children: [
         {
            value: 'Ирена.Просмотр',
            label: 'Ирена.Просмотр',
            children: [
               {
                  value: 'Ирена.Печать',
                  label: 'Ирена.Печать'
               },
               {
                  value: 'Ирена.Редактирование',
                  label: 'Ирена.Редактирование'
               }
            ]
         },
         {
            value: 'Ирена.Движение заявки.Статусы ВГНКИ',
            label: 'Ирена.Движение заявки.Статусы ВГНКИ'
         }
      ]
   },
   {
      value: 'Справочники',
      label: 'Справочники',
      showCheckbox: false
   }
];

initialState = {
   checkedList: ['Ирена.Печать'],
   expandedList: []
};

onCheck = (checkedList) => {
   setState({ checkedList });
};
onExpand = (expandedList) => {
   setState({ expandedList });
};

<CheckboxTree
   nodes={nodes}
   checkedList={state.checkedList}
   expandedList={state.expandedList}
   onCheck={this.onCheck}
   onExpand={this.onExpand}
   showExpandAll={true}
   cascade="halfCascade"
   halfCheckLabelInfo="+"
   showExpandAll={true}
   icons={{
      check: 'fa-check-square-o',
      uncheck: 'fa-square-o'
   }}
   customIcons={{
      halfCheck: <i className="fa fa-check-square-o rct-icon-half-check" />,
      expandAll: <i className="fa fa-plus-o" />,
      collapseAll: <i className="fa fa-minus-square-o" />,
      parentClose: <i className="fa fa-folder" />,
      parentOpen: <i className="fa fa-folder-open" />,
      leaf: <i className="fa fa-file-o" />
   }}
/>;
```
