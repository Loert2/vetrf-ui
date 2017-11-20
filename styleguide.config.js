const path = require('path');

module.exports = {
   components: 'src/components/**/*.{js,jsx}',
   title: 'Vetrf UI Style Guide',
   sections: [
      {
         name: 'Компоненты страниц',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/page/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/page/elements/**/[A-Z]*.js'
            }
         ],
      },
      {
         name: 'Компоненты форм',
         sections: [
            {
               name: 'Простые',
               components: './src/components/form/elements/simple/**/[A-Z]*.js'
            },
            {
               name: 'Составные',
               components: './src/components/form/elements/form-group/**/[A-Z]*.js'
            },
            {
               name: 'Элементы фильтров',
               components: './src/components/form/elements/search/**/[A-Z]*.js'
            },
            {
               name: 'Действия',
               components: './src/components/form/actions/**/[A-Z]*.js'
            },
            {
               name: 'Контейнеры',
               components: './src/components/form/containers/**/[A-Z]*.js'
            }
         ],
      },
      {
         name: 'Кнопки',
         components: './src/components/buttons/**/[A-Z]*.js'
      },
      {
         name: 'Компонеты модальных окон',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/modal/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/modal/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты таблиц',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/table/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/table/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты вкладок',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/tabs/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/tabs/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты виджетов',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/widget/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/widget/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты истории',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/components/timeline/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/components/timeline/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты inline-редактирования',
         sections: [
            {
               name: 'Самодостаточные',
               components: './src/components/editable/forms/**/[A-Z]*.js'
            },
            {
               name: 'Зависимые',
               components: './src/components/editable/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Другие',
         components: './src/components/other/**/[A-Z]*.js'
      }
   ],
   //components: './components/**/*.js',

   require: [
      path.join(__dirname, './src/vendor/styles/vendor.css'),
      path.join(__dirname, './src/vendor/src/file-upload/file-upload.css'),
      path.join(__dirname, './src/vendor/src/react-datetime/react-datetime.css'),
      path.join(__dirname, './src/vendor/src/react-select/react-select.css'),
      path.join(__dirname, './src/assets/css/irena.css'),
      path.join(__dirname, './src/assets/css/font-vetis.css'),
      path.join(__dirname, './src/assets/css/address.css'),
      path.join(__dirname, './src/assets/css/toggle-text.css')
   ],

   styleguideComponents: {
      Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
   }
};