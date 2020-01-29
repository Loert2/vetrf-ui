# Обновление библиотеки компонентов Ветис.UI

## 0.4.1

1. В компонент Button добавлена возможность явно указать тип элемента для ссылки (refs #391249).
Если необходимо сдлелать кнопку-ссылку по относительному пути, но на элементе `<a/>`, то необходимо в компонент Button
передать `linkType = "a"`.

## 0.4.0

1. Переписаны компоненты:
    - Breadcrumbs (#375828)
    - PageHeader (#375856)
    - Page (#375776)
    - ScrollToTop (#375865)
    - SubHeader (#382743)
1. Удалены компоненты:
    - SimplePage (#375776)

### Миграция с 0.3.0

1. Теперь не надо явно указывать активность в крошках (Breadcrumbs). Активна всегда последняя крошка.
1. Если указан `headerClassName` в `PageHeader`, то он будет использоваться вне зависимости от того, передали `toolbar`
или нет.
1. Иконка в заголовках теперь указывается в новом формате компонента `Icon` (без приставки `fa-`).
1. Теперь `breadcrumbs` и `header` являются опциональными для компонента `Page`. А компонент `SimplePage` удалён за ненадобностью.
1. Если `header` и `toolbar` не переданы в `Page`, то не линия подчеркивания не отображается
1. У `SubHeader` теперь можно задать уровень заголовка от 2 до 6 включительно (по умолчанию 4, как и раньше).

## 0.3.0

1. Новая сборка
1. Переход на TypeScript
1. Переписаны компоненты:
    - Alert (#357763)
    - Badge (#358621)
    - LoadingSpinner (#359092)
    - HOC withTooltip (#360937)
    - Button (#360926, #360931, #360932, #381444)
1. Добавлены компоненты
    - Icon (#360920)
    - Label (#360928)

### Миграция с 0.2.0

1. Компонент ButtonLink заменён единым компонентом Button. Теперь нет разницы между этими компонентами
- выбор `Link` или `a` для основы определяется по типу пути - относительный или абсолютный.
1. Теперь вместо того, чтобы прописывать css-классы в `className` и `icon`
компонента Button, нужно писать значения в отдельные props: `color`, `size`, `iconSize`, `iconColor`.
Значения этих свойств задаются как и значения css классов, но без префиксов.
Например, для размера кнопки раньше передавался класс `btn-sm`, а теперь
в свойство `size="sm"`. Также и с `icon` - вместо `fa-bell`, просто `bell`.
Нет необходимости больше указывать явно такие классы как `btn`, `fa`, `ace-icon`.
Размер иконок у кнопок по уомлчанию == `bigger-110`.
1. Чтобы сделать иконку-кнопку, надо передать в Button `onlyIcon={true}` вместо разруливания css-классов.
1. Аналогичные изменения в Alert и Badge - отдельные свойства, общие классы не нужны, приставки для значений не нужны.