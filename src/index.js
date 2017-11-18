import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './vendor/styles/vendor.css';
import './vendor/src/react-datetime/react-datetime.css';
import './vendor/src/react-select/react-select.css';
import './vendor/src/file-upload/file-upload.css';
import './assets/css/address.css';
import './assets/css/font-vetis.css';
import './assets/css/irena.css';
import './assets/css/toggle-text.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
