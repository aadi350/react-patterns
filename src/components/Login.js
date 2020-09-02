import React, { Component } from 'react';
import './Login.scss';
import fire from '../config/fire';

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			email: '',
			password: '',
		};
	}

	login(e) {
		//prevent page reload
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(user => {
				console.log(user);
			})
			.catch(err => {
				console.error(err);
			});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div className='body'>
				<div className='form'>
					<h2>Login</h2>
					<div className='input'>
						<div className='inputBox'>
							<label>Username</label>
							<input
								type='text'
								id='email'
								onChange={this.handleChange}
								value={this.state.email}
								name='email'
								placeholder='example@email.com'></input>
						</div>
						<div className='inputBox'>
							<label>Password</label>
							<input
								type='password'
								id='password'
								onChange={this.handleChange}
								value={this.state.password}
								name='password'
								placeholder='********'></input>
						</div>
						<div className='inputBox'>
							<input
								type='submit'
								onClick={this.login}
								name=''
								value='Sign In'></input>
						</div>
						{/* <p className='forget'>Forgot Password ?Click Here</p> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
