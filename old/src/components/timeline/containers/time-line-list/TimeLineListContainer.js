import React from 'react';
import PropTypes from 'prop-types';
import TimeLineContainer from '../time-line/TimeLineContainer';
import uniqueId from 'lodash/uniqueId';

const TimeLineListContainer = ({ timeLineList, timeLineContainerClassName }) => {
   const list = timeLineList.map((timeLine) => (
      <TimeLineContainer
         key={uniqueId()}
         className={timeLineContainerClassName}
         timeline={timeLine}
      />
   ));
   return (
      <div className="row">
         <div className="col-xs-12">{list}</div>
      </div>
   );
};

TimeLineListContainer.propTypes = {
   /** css-класс для контейнера (обычно это размеры какие-нибудь) */
   timeLineContainerClassName: PropTypes.string,
   /** Список блоков из списков (разделённых флажками). Если не нужны списки списков, то {@see TimeLineContainer} */
   timeLineList: PropTypes.arrayOf(
      PropTypes.shape({
         /** Описывает флажок */
         label: PropTypes.shape({
            /** Класс для корректировки положения флажка, на всякий */
            containerClassName: PropTypes.string,
            /** Класс для цвета флажка */
            className: PropTypes.string,
            /** Надпись на флажке */
            text: PropTypes.string
         }),
         /** Список из элементов под флажком */
         items: PropTypes.arrayOf(
            PropTypes.shape({
               /** Класс для всего контейнера-элемента списка */
               className: PropTypes.string,
               /** Описание виджета */
               widgetMetaData: PropTypes.shape({
                  /** Класс на весь виджет */
                  className: PropTypes.string,
                  /** Описание заголовка виджета (полоса сверху). Можно не указывать тело, а пользовать только заголовок, если что, но без заголовка вроде нельзя */
                  header: PropTypes.shape({
                     /** Класс для заголовка */
                     className: PropTypes.string,
                     /** Область слева заголовка (Там текст обычно) */
                     title: PropTypes.shape({
                        /** Контент, сюда можно передать всё, что можно отрендерить (строка, компонент) */
                        content: PropTypes.node,
                        /** Класс для левой части заголовка */
                        className: PropTypes.string
                     }),
                     /** Область справа заголовка */
                     toolbar: PropTypes.shape({
                        /** Содержимое, сюда можно передать всё, что можно отрендерить (строка, компонент)*/
                        content: PropTypes.node,
                        /** Класс для правой области заголовка */
                        className: PropTypes.string
                     })
                  }),
                  /** Объект описания тела виджета (Снизу от заголовка большой серый прямоугольник) Компонент {@see Widget} */
                  body: PropTypes.shape({
                     /** Класс на всё тело */
                     className: PropTypes.string,
                     /** Сюда можно передавать флаг видимости-невидимости тела */
                     invisible: PropTypes.bool,
                     /** Тело также делится на верхушку, основное содержимое и низушку. Этот объект описывает верхушку */
                     toolbox: PropTypes.shape({
                        content: PropTypes.node,
                        className: PropTypes.string
                     }),
                     /** А этот низушку. Об основном содежимом читайте ниже */
                     footer: PropTypes.shape({
                        content: PropTypes.node,
                        className: PropTypes.string
                     })
                  })
               }),
               /** Это круг, тут есть два взаимоисключающих варианта: 1 - иконка, 2 - цифра, текст, другое. Если не указать ничего, то будут цифры с нумерацией элементов по списку в пределах списка под флажком, а НЕ сквозная нумерация всех списков */
               indicator: PropTypes.shape({
                  /** 1. Класс иконки и её цвета */
                  icon: PropTypes.string,
                  /** 2. Класс для кружка с цифрой */
                  className: PropTypes.string,
                  /** 2. Текст, цифра, другое */
                  text: PropTypes.node
               }),
               /** Класс для воздействия на всю область кружка (внезапно) */
               infoClassName: PropTypes.string,
               /** Область даты или слева от линии */
               date: PropTypes.shape({
                  /** Класс для воздействия на эту область */
                  className: PropTypes.string,
                  /** Строка, копонент. Я сюда передавал либо дату, либо дату в ссылке */
                  content: PropTypes.node
               }),
               /** Внезапно. Основная часть тела виджета, которая между его верхушкой и низушкой (см. выше) */
               content: PropTypes.node
            })
         )
      })
   )
};

export default TimeLineListContainer;
