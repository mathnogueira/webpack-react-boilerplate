import React from 'react';
import { render } from 'react-dom';
import { App } from './app.jsx';

render(<App/>, document.getElementById('application'));

// Hot reload

if (module.hot) {
	module.hot.accept();

	render(<App />, document.getElementById('application'));
}
