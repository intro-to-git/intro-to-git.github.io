import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';

require('prismjs/components/prism-markup-templating.min');
require('prismjs/components/prism-bash');

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
