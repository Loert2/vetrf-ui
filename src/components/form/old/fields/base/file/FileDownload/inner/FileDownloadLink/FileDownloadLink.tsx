import React from 'react';
import PropTypes from 'prop-types';

// TODO: This is old way. Rewrite it!
// @Deprecated
const FileDownloadLink = ({ href, fileName }) => {
   const url: string = process.env.NODE_ENV === 'production' ? href  : `http://localhost:8080${href}`;
   return (
      <a href={url} className="file-download__link-text">
         <span className="attached-name middle">{fileName}</span>
      </a>
   );
};

FileDownloadLink.propTypes = {
   href: PropTypes.string,
   fileName: PropTypes.string
};

export default FileDownloadLink;
