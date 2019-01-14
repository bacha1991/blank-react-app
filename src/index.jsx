import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
