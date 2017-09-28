import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.add = this.add.bind(this);
		this.state = { count: 0 };
	}

	add() {
		let counter = this.state.count + 1;
		this.setState({count: counter});
	}

	render() {
		return (
			<AppContainer>
				<div>
					<p>This is aweesome! Your pressed it {this.state.count} times!</p>
					<button onClick={this.add}>Add one!</button>
				</div>
			</AppContainer>
		);
	}
}

render(<App/>, document.getElementById('application'));
