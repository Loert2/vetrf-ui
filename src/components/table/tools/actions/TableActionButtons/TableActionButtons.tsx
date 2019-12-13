import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../buttons/Button/Button';
import ConfirmActionButton from '../../../../buttons/confirm-action/ConfirmActionButton/ConfirmActionButton';

const DEFAULT_ICON_SIZE = 130;
// TODO: This is old way. Rewrite it!
const TableActionButtons = ({ viewBtn, editBtn, deleteBtn, item }) => (
   <div className="inline actions">
      {viewBtn && (
         <Button
            tooltip={viewBtn.tooltip || 'Просмотр'}
            href={viewBtn.href}
            onClick={() => viewBtn.action && viewBtn.action(item)}
            icon={viewBtn.icon || 'bars'}
            iconSize={viewBtn.iconSize || DEFAULT_ICON_SIZE}
            iconColor={viewBtn.iconColor || 'green'}
            className={viewBtn.className}
            onlyIcon={true}
         />
      )}
      {editBtn && (
         <Button
            tooltip={editBtn.tooltip || 'Редактировать'}
            href={editBtn.href}
            onClick={() => editBtn.action && editBtn.action(item)}
            icon={editBtn.icon || 'pencil'}
            iconSize={editBtn.iconSize || DEFAULT_ICON_SIZE}
            iconColor={editBtn.iconColor || 'blue'}
            className={editBtn.className}
            onlyIcon={true}
         />
      )}
      {deleteBtn && (
         <ConfirmActionButton
            tooltip={deleteBtn.tooltip || 'Удалить'}
            onConfirm={() => deleteBtn.action && deleteBtn.action(item)}
            icon={deleteBtn.icon || 'trash-o'}
            iconSize={deleteBtn.iconSize || DEFAULT_ICON_SIZE}
            iconColor={deleteBtn.iconColor || 'red'}
            header={deleteBtn.confirmHeaderText}
            bodyText={deleteBtn.confirmBodyText}
            confirmClass={deleteBtn.confirmBtnClass}
            confirmText={deleteBtn.confirmBtnText}
            className={deleteBtn.className}
            isOnlyIconButton={true}
         />
      )}
   </div>
);

TableActionButtons.propTypes = {
   viewBtn: PropTypes.shape({
      tooltip: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      iconSize: PropTypes.number,
      iconColor: PropTypes.string,
      className: PropTypes.string,
      action: PropTypes.func
   }),
   editBtn: PropTypes.shape({
      tooltip: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      iconSize: PropTypes.number,
      iconColor: PropTypes.string,
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
      iconSize: PropTypes.number,
      iconColor: PropTypes.string,
      className: PropTypes.string,
      action: PropTypes.func
   }),
   item: PropTypes.any
};

export default TableActionButtons;
