import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/root-reducer.js';
import { App } from './app.jsx';

const store = createStore(rootReducer);

const addOne = () => {
	console.log('You incremented one');
};

store.subscribe(() => console.log(store.getState()));

export const ApplicationEntryPoint = () => (
	<Provider store={store}>
		<App message="This app is awesome!" count={5} onAdd={addOne} />
	</Provider>
);

