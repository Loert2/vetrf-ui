import PropTypes from 'prop-types';
import React from 'react';

import Switch from '../Switch/Switch';
/**
 * Компонент универсального переключателя, для передачи текста в переключатель использовать строку с \u00A0 (неразрывный пробел)
 * между словами - количество зависит от длины слов, длина переключателя ограничена 90px
 * TODO: Это стрёмно (\u00A0) и выглядит костыльно. Подумать, как перепистаь по-человечески
 * */
// TODO: This is old way. Rewrite it!
// @Deprecated
const SwitchText = (props) => (
   <Switch
      id={props.id}
      name={props.name}
      value={props.value}
      style={props.style}
      disabled={props.disabled}
      onChange={props.onChange}
      className={props.className || 'ace ace-switch ace-switch-view btn-empty'}
      text={
         props.text || 'Карточки\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Таблица'
      }
   />
);

SwitchText.propTypes = {
   value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   name: PropTypes.string,
   id: PropTypes.string,
   text: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default SwitchText;
