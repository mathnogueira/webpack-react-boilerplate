import React from 'react';
import { AppContainer } from 'react-hot-loader';
import PropTypes from 'prop-types';

export class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppContainer>
				<div>
					<p>{this.props.message}</p>
					<p>Counter: {this.props.count}</p>
					<button onClick={this.props.onAdd}>Add one!</button>
				</div>
			</AppContainer>
		);
	}
}

App.propTypes = {
	message: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired
};
