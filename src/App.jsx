import React from 'react';
import { connect } from 'react-redux';

const App = ({ name }) => <div>Hello {name}!!!</div>;

export default connect(
	function customMapStateToProps({ name }) {
		return { name };
	}
)(App);