import PropTypes from 'prop-types';
import React from 'react';
import Button from 'components/buttons/Button';

const AddInfoRow = ({ columnsLength, href, btnClassName, addAction, text }) => (
   <tr>
      <td colSpan={ columnsLength }>
         <Button href={ href }
                 className={ btnClassName || "btn btn-minier btn-info" }
                 onClick={ addAction }
                 icon="fa fa-plus"
                 text={ text || "Добавить информацию" } />
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