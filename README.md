## Проверить на наличие ошибок

```bash
npm run lint
```

## Запустить тесты 

```bash
npm run test
```

## Скомпилировать для экспорта 

```bash
npm run compile
```

## Подключение проекта из своей ветки

```bash
Сделать изменения
Прописать экспорты в index.js файлах
npm run compile
Push в свою ветку
в проекте в Например(galen) - в файле package.json напротив 
библиотеки git+http://git.vetrf.ru/platform/vetrf-ui.git - через # указать ветку
Результат - "vetrf-ui": "git+http://git.vetrf.ru/platform/vetrf-ui.git#select-filter"
и сделать обновление зависимостей - npm up
```