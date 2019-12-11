import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../../buttons/Button/Button';

// TODO: This is old way. Rewrite it!
const AddInfoRow = ({ columnsLength, /* TODO: href,*/ btnClassName, addAction, text }) => (
   <tr>
      <td colSpan={columnsLength}>
         <Button
            // href={href} // TODO: здесь должна быть кнопка-иконка-ссылка
            className={btnClassName || 'btn btn-minier btn-info'}
            onClick={addAction}
            icon="fa fa-plus"
            text={text || 'Добавить информацию'}
         />
      </td>
   </tr>
);

AddInfoRow.propTypes = {
   columnsLength: PropTypes.number,
   href: PropTypes.string,
   btnClassName: PropTypes.string,
   text: PropTypes.string,
   addAction: PropTypes.func
};

export default AddInfoRow;
