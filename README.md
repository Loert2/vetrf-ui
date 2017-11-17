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

 1. Сделать изменения в библиотеки 
 2. Прописать экспорты в index.js файлах (в коренном файле и файле в папке) 
 3. **Скомпилировать для экспорта**
    ```bash
    npm run compile
    ```
 4. Commit and Push в свою ветку
 5. В проекте в котором хотим использовать библиотеку: 
    * Например(galen) - в файле package.json напротив используемой библиотеки находим
    ```
    : "git+http://git.vetrf.ru/platform/vetrf-ui.git"
    ```  
    * В конец после .git добавить #***название ветки***
    * Результат будет похожий - 
    ```
    "vetrf-ui": "git+http://git.vetrf.ru/platform/vetrf-ui.git#select-filter"
    ```
 6. Cделать обновление зависимостей в проекте, из места где вызываете npm start
     ```bash
      npm up
      ```
 7. После запускать проект


## Sandbox

Песочница для разработки компонентов представляет собой экземпляр [Create React App](https://github.com/facebookincubator/create-react-app)