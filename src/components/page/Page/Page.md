Компонент-контейнер страницы. Включает в себя заголовок страницы, хлебные крошки, title страницы. 

```js
<Page breadcrumbs={
         [{
            link: "/",
            text: "Главная"
         }, {
            active: true,
            text: "Активная"
         }]
      } 
      header="Заголовок"
      toolbar={
         <Button className="btn btn-primary btn-minier pull-right" 
                 text="Кнопка" />
      }
      subHeader="Подзаголовок"
>
Тут может быть ваш контент.
</Page>
```