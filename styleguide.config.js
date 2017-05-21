const path = require('path');



module.exports = {
   components: 'src/**/[A-Z]*.js',
   title: 'Vetrf UI Style Guide',
   sections: [
      {
         name: 'Компоненты страниц',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/page/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/page/elements/**/[A-Z]*.js'
            }
         ],
      },
      {
         name: 'Компоненты форм',
         sections: [
            {
               name: 'Простые',
               components: './src/form/elements/simple/**/[A-Z]*.js'
            },
            {
               name: 'Составные',
               components: './src/form/elements/form-group/**/[A-Z]*.js'
            },
            {
               name: 'Элементы фильтров',
               components: './src/form/elements/search/**/[A-Z]*.js'
            },
            {
               name: 'Действия',
               components: './src/form/actions/**/[A-Z]*.js'
            },
            {
               name: 'Контейнеры',
               components: './src/form/actions/**/[A-Z]*.js'
            }
         ],
      },
      {
         name: 'Кнопки',
         components: './src/buttons/**/[A-Z]*.js'
      },
      {
         name: 'Компонеты модальных окон',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/modal/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/modal/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты таблиц',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/table/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/table/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты вкладок',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/tabs/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/tabs/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты виджетов',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/widget/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/widget/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты истории',
         sections: [
            {
               name: 'Контейнеры',
               components: './src/timeline/containers/**/[A-Z]*.js'
            },
            {
               name: 'Элементы',
               components: './src/timeline/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Компонеты inline-редактирования',
         sections: [
            {
               name: 'Самодостаточные',
               components: './src/editable/forms/**/[A-Z]*.js'
            },
            {
               name: 'Зависимые',
               components: './src/editable/elements/**/[A-Z]*.js'
            }
         ]
      },
      {
         name: 'Другие',
         components: './src/other/**/[A-Z]*.js'
      }
   ],
   //components: './components/**/*.js',

   webpackConfig: {
      module: {
         loaders: [
            // Babel loader, will use your project’s .babelrc
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader'
            },
            // Other loaders that are needed for your components
            {
               test: /\.css$/,
               loader: 'style-loader!css-loader?modules'
            }
         ]
      }
   }
};