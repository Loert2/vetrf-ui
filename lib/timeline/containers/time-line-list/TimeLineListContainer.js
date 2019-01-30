'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeLineContainer = require('../time-line/TimeLineContainer');

var _TimeLineContainer2 = _interopRequireDefault(_TimeLineContainer);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineListContainer = function TimeLineListContainer(_ref) {
   var timeLineList = _ref.timeLineList,
       timeLineContainerClassName = _ref.timeLineContainerClassName;

   var list = timeLineList.map(function (timeLine) {
      return _react2.default.createElement(_TimeLineContainer2.default, {
         key: (0, _uniqueId2.default)(),
         className: timeLineContainerClassName,
         timeline: timeLine
      });
   });
   return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
         'div',
         { className: 'col-xs-12' },
         list
      )
   );
};

TimeLineListContainer.propTypes = {
   /** css-класс для контейнера (обычно это размеры какие-нибудь) */
   timeLineContainerClassName: _propTypes2.default.string,
   /** Список блоков из списков (разделённых флажками). Если не нужны списки списков, то {@see TimeLineContainer} */
   timeLineList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      /** Описывает флажок */
      label: _propTypes2.default.shape({
         /** Класс для корректировки положения флажка, на всякий */
         containerClassName: _propTypes2.default.string,
         /** Класс для цвета флажка */
         className: _propTypes2.default.string,
         /** Надпись на флажке */
         text: _propTypes2.default.string
      }),
      /** Список из элементов под флажком */
      items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
         /** Класс для всего контейнера-элемента списка */
         className: _propTypes2.default.string,
         /** Описание виджета */
         widgetMetaData: _propTypes2.default.shape({
            /** Класс на весь виджет */
            className: _propTypes2.default.string,
            /** Описание заголовка виджета (полоса сверху). Можно не указывать тело, а пользовать только заголовок, если что, но без заголовка вроде нельзя */
            header: _propTypes2.default.shape({
               /** Класс для заголовка */
               className: _propTypes2.default.string,
               /** Область слева заголовка (Там текст обычно) */
               title: _propTypes2.default.shape({
                  /** Контент, сюда можно передать всё, что можно отрендерить (строка, компонент) */
                  content: _propTypes2.default.node,
                  /** Класс для левой части заголовка */
                  className: _propTypes2.default.string
               }),
               /** Область справа заголовка */
               toolbar: _propTypes2.default.shape({
                  /** Содержимое, сюда можно передать всё, что можно отрендерить (строка, компонент)*/
                  content: _propTypes2.default.node,
                  /** Класс для правой области заголовка */
                  className: _propTypes2.default.string
               })
            }),
            /** Объект описания тела виджета (Снизу от заголовка большой серый прямоугольник) Компонент {@see Widget} */
            body: _propTypes2.default.shape({
               /** Класс на всё тело */
               className: _propTypes2.default.string,
               /** Сюда можно передавать флаг видимости-невидимости тела */
               invisible: _propTypes2.default.bool,
               /** Тело также делится на верхушку, основное содержимое и низушку. Этот объект описывает верхушку */
               toolbox: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               }),
               /** А этот низушку. Об основном содежимом читайте ниже */
               footer: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               })
            })
         }),
         /** Это круг, тут есть два взаимоисключающих варианта: 1 - иконка, 2 - цифра, текст, другое. Если не указать ничего, то будут цифры с нумерацией элементов по списку в пределах списка под флажком, а НЕ сквозная нумерация всех списков */
         indicator: _propTypes2.default.shape({
            /** 1. Класс иконки и её цвета */
            icon: _propTypes2.default.string,
            /** 2. Класс для кружка с цифрой */
            className: _propTypes2.default.string,
            /** 2. Текст, цифра, другое */
            text: _propTypes2.default.node
         }),
         /** Класс для воздействия на всю область кружка (внезапно) */
         infoClassName: _propTypes2.default.string,
         /** Область даты или слева от линии */
         date: _propTypes2.default.shape({
            /** Класс для воздействия на эту область */
            className: _propTypes2.default.string,
            /** Строка, копонент. Я сюда передавал либо дату, либо дату в ссылке */
            content: _propTypes2.default.node
         }),
         /** Внезапно. Основная часть тела виджета, которая между его верхушкой и низушкой (см. выше) */
         content: _propTypes2.default.node
      }))
   }))
};

exports.default = TimeLineListContainer;