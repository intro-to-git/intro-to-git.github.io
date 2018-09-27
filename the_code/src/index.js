import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';

require('prismjs/components/prism-markup-templating.min');

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
