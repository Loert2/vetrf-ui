```js
const timeLineList = [
   {
      items: [
         {
            content: (
               <div>
                  <i className="fa fa-fort-awesome blue" /> Тут могла быть ваша реклама
               </div>
            ),
            date: {
               className: 'history-item',
               content: <a>ссылка</a>
            },
            indicator: {
               icon: 'timeline-indicator ace-icon fa fa-linux btn btn-purple no-hover'
            },
            widgetMetaData: {
               className: 'transparent history-item',
               header: {
                  title: {
                     content: (
                        <span>
                           Громкий заголовок <i className="fa fa-hand-spock-o bigger-120 orange" />
                        </span>
                     )
                  },
                  toolbar: {
                     content: (
                        <span>
                           <i className="fa fa-empire black" /> <i className="fa fa-rebel red" />
                        </span>
                     )
                  },
                  body: {
                     toolbox: {
                        content: 'Верхушка'
                     },
                     footer: {
                        content: 'Низушка'
                     }
                  }
               }
            }
         },
         {
            content: 'Контент',
            date: {
               className: 'history-item',
               content: '12.12.12'
            },
            widgetMetaData: {
               className: 'transparent history-item',
               header: {
                  title: {
                     content: 'Простота'
                  }
               }
            }
         }
      ],
      label: {
         containerClassName: 'history'
      }
   },
   {
      items: [
         {
            date: {
               className: 'history-item',
               content: '13.13.13'
            },
            indicator: {
               icon: 'timeline-indicator ace-icon fa fa-github-alt btn btn-primary no-hover'
            },
            widgetMetaData: {
               className: 'transparent history-item',
               header: {
                  title: {
                     content: (
                        <span>
                           Только заголовок <i className="fa fa-github blue bigger-120" />
                        </span>
                     )
                  }
               },
               body: {
                  invisible: true
               }
            }
         },
         {
            date: {
               className: 'history-item',
               content: '14.14.14'
            },
            indicator: {
               icon: 'timeline-indicator ace-icon fa fa-angellist btn btn-danger no-hover'
            },
            widgetMetaData: {
               className: 'transparent history-item'
            },
            content: 'Только Контент'
         }
      ],
      label: {
         containerClassName: 'history',
         className: 'label-primary',
         text: 'React rocks!'
      }
   }
];

<TimeLineListContainer timeLineList={timeLineList} timeLineContainerClassName="history" />;
```
