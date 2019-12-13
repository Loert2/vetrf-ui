import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../../buttons/Button/Button';
import { SizeButton } from '../../../../../../utils/type/SizeButton';
import { ColorButton } from '../../../../../../utils/type/ColorButton';

// TODO: This is old way. Rewrite it!
const AddInfoRow = ({ columnsLength, href, btnClassName, addAction, text, btnSize = 'minier', btnColor = 'info' }) => (
   <tr>
      <td colSpan={columnsLength}>
         <Button
            href={href}
            className={btnClassName}
            size={btnSize as SizeButton}
            color={btnColor as ColorButton}
            onClick={addAction}
            icon="plus"
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
