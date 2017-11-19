## Запустить тесты 

```bash
npm run test
```

## Скомпилировать для экспорта 

Перед компиляцией **обязательно** запустить либо песочницу, либо сервер докуменатции
для прогона линтинга.

```bash
npm run compile
```

## Подключение проекта из своей ветки

 1. Сделать изменения в библиотеке. Предлагается вести разарботку либо в песочнице, 
 либо использовать Styleguidist.
 1. Прописать экспорты в index.js файлах (в корневом и в папке) 
 1. **Скомпилировать для экспорта**
    ```bash
    npm run compile
    ```
 1. Commit and Push в свою ветку
 1. В проекте, в котором используем библиотеку: 
    * В package.json находим:
    ```
    "vetrf-ui": "git+http://git.vetrf.ru/platform/vetrf-ui.git"
    ```  
    * В конец после .git добавить #***название ветки*** (по умолчанию бибилиотека подгружается из master)
    * Например:
    ```
    "vetrf-ui": "git+http://git.vetrf.ru/platform/vetrf-ui.git#select-filter"
    ```
 1. Обновить зависимости в проекте
    ```bash
    npm up
    ```
 1. Собрать и запустить проект


## Sandbox

Песочница для разработки компонентов представляет собой экземпляр [Create React App](https://github.com/facebookincubator/create-react-app)

## Styleguidist

При изменении конфига, либо добавления новых файлов документации, следует выполнить:

```bash
npm run styleguide-build
```

Для запуска сервера Styleguidist выполнить:

```bash
npm run styleguide-server
```