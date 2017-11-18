Заголовок страницы, у которого есть маленький подзаголовок, дополнительная информация (может быть любой компонент), 
тулбар (может быть любой компонент).

```js
<PageHeader header="Заголовок"
            additionalInfo={ 
               <small>Дополнительный компонент</small> 
            }
            toolbar={ 
               <Button className="btn btn-primary btn-minier pull-right" 
                       text="Кнопка тулбара" />
            }
            subHeader="Подзаголовок"/>
```