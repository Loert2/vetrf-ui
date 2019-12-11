import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../buttons/Button/Button';
import ConfirmActionButton from '../../../../buttons/confirm-action/ConfirmActionButton/ConfirmActionButton';

// TODO: This is old way. Rewrite it!
const TableActionButtons = ({ viewBtn, editBtn, deleteBtn, item }) => (
   <div className="inline actions">
      {viewBtn && (
         <Button
            // tooltip={viewBtn.tooltip || 'Просмотр'} // TODO: здесь должна быть кнопка-иконка-ссылка!
            // href={viewBtn.href}
            onClick={() => viewBtn.action && viewBtn.action(item)}
            icon={viewBtn.icon || 'fa fa-bars bigger-130'}
            className={viewBtn.className || 'green'}
         />
      )}
      {editBtn && (
         <Button
            // tooltip={editBtn.tooltip || 'Редактировать'} // TODO: здесь должна быть кнопка-иконка-ссылка!
            // href={editBtn.href}
            onClick={() => editBtn.action && editBtn.action(item)}
            icon={editBtn.icon || 'fa fa-pencil bigger-130'}
            className={editBtn.className || 'blue'}
         />
      )}
      {deleteBtn && (
         <ConfirmActionButton
            tooltip={deleteBtn.tooltip || 'Удалить'}
            onConfirm={() => deleteBtn.action && deleteBtn.action(item)}
            icon={deleteBtn.icon || 'fa fa-trash-o bigger-130'}
            header={deleteBtn.confirmHeaderText}
            bodyText={deleteBtn.confirmBodyText}
            confirmClass={deleteBtn.confirmBtnClass}
            confirmText={deleteBtn.confirmBtnText}
            className={deleteBtn.className || 'red'}
         />
      )}
   </div>
);

TableActionButtons.propTypes = {
   viewBtn: PropTypes.shape({
      tooltip: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      className: PropTypes.string,
      action: PropTypes.func
   }),
   editBtn: PropTypes.shape({
      tooltip: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      className: PropTypes.string,
      action: PropTypes.func
   }),
   deleteBtn: PropTypes.shape({
      tooltip: PropTypes.string,
      confirmHeaderText: PropTypes.string,
      confirmBodyText: PropTypes.string,
      confirmBtnClass: PropTypes.string,
      confirmBtnText: PropTypes.string,
      icon: PropTypes.string,
      className: PropTypes.string,
      action: PropTypes.func
   }),
   item: PropTypes.any
};

export default TableActionButtons;