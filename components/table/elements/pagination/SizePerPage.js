import PropTypes from 'prop-types';
import React from 'react';

import SimpleSelect from 'components/form/elements/simple/select/SimpleSelect';
import Const from 'components/table/elements/constants';

const SizePerPage = ({ sizePerPage, options, onChange }) =>  (
   <SimpleSelect className='clear-both dropdown-width'
                 notClearableOptions
                 onChange={ (value) => onChange && onChange(value) }
                 value={ { id: sizePerPage || Const.SIZE_PER_PAGE, name: sizePerPage || Const.SIZE_PER_PAGE } }
                 options={ options || Const.SIZE_PER_PAGE_LIST } />
);

SizePerPage.propTypes = {
   sizePerPage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
   ]),
   options: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
         ]),
         name: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
         ])
      })
   ),
   onChange: PropTypes.func
};

export default SizePerPage;