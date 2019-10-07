import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/vendor/styles/vendor.css';
import '../src/vendor/styles/react-datetime.css';
import '../src/vendor/styles/react-select.css';
import '../src/assets/css/address.css';
import '../src/assets/css/file-upload.css';
import '../src/assets/css/file-download.css';
import '../src/assets/css/font-vetis.css';
import '../src/assets/css/irena.css';
import '../src/assets/css/toggle-text.css';
import '../src/assets/css/react-checkbox-tree.css';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
   req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(withKnobs);
addDecorator(withInfo);
