import React, { Component } from 'react';
import fire from '../../config/fire';
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logout() {
		fire.auth().signOut();
	}

	render() {
		return (
			<div>
				<div className='inputBox'>
					<input
						type='submit'
						onClick={this.logout}
						name=''
						value='Sign Out'></input>
				</div>
			</div>
		);
	}
}

export default Home;
