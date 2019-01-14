import { combineReducers } from 'redux';

const name = (state = 'React app') => {
	return state;
};

export default combineReducers({
	name
});