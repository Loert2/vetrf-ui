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
import './assets/css/toggle-text.css';
import './assets/css/irena.css';
import './assets/css/react-checkbox-tree.css';
import './components/form/elements/simple/date/complex-date/option-switch.css';
import './components/form/elements/simple/date/complex-date/complex-date.css';
import './components/form/elements/simple/date/complex-date/list/complex-date-list.css';
import './components/form/elements/simple/date/date-range/date-range.css';
import './components/form/elements/form-group/container/form-group/form-group.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
