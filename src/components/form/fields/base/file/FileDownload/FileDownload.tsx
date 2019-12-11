import React from 'react';
import PropTypes from 'prop-types';

import FileDownloadLink from './inner/FileDownloadLink/FileDownloadLink';
import ConfirmActionButton from '../../../../../buttons/confirm-action/ConfirmActionButton/ConfirmActionButton';

import get from 'lodash/get';

// TODO: This is old way. Rewrite it!
const FileDownload = ({ fileModel, editable, removeAction, urlFile }) => (
   <div className="file-download-container">
      <div className="file-download-form file-download__border">
         <FileDownloadLink href={urlFile(fileModel)} fileName={get(fileModel, 'file.name')} />
         {editable && (
            <div className="file-download__btn-delete">
               <ConfirmActionButton
                  confirmBodyText={`Вы уверены, что хотите удалить файл ${get(
                     fileModel,
                     'file.name'
                  )}?`}
                  confirmHeaderText="Подтверждение удаления файла"
                  icon="fa fa-trash-o white fa-lg file-download__btn-delete_size"
                  onConfirm={() =>
                     removeAction(
                        fileModel.id,
                        fileModel && fileModel.requestEntry && fileModel.requestEntry.id
                     )
                  }
                  tooltip="Удалить файл"
               />
            </div>
         )}
      </div>
   </div>
);

FileDownload.propTypes = {
   fileModel: PropTypes.object,
   editable: PropTypes.bool,
   removeAction: PropTypes.func,
   urlFile: PropTypes.func
};

FileDownload.defaultProps = { fileModel: {} };

export default FileDownload;
