import React from 'react';
import { render } from 'react-dom';

import { ApplicationEntryPoint } from './entry-point.jsx';

render(<ApplicationEntryPoint />, document.getElementById('application'));

// Hot reload

if (module.hot) {
	module.hot.accept();

	render(<ApplicationEntryPoint />, document.getElementById('application'));
}
