import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    
    state = {
        credentials: {
            username: '',
            password: '',
        }, 
        error: '',
    }

    changeHandler = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
            error: '',
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth() 
            .post('/api/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/FriendsList')
            })
            .catch(err => {
                this.setState({
                    error: err.response.data.error,            
                })
            })
    }

    render() {
        return (
            <div className='login-form'>
                <form onSubmit={this.submitHandler}>
                    <input
                    className='login-input'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.credentials.username}
                    onChange={this.changeHandler}
                    />
                    <input
                    className='login-input'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.credentials.password}
                    onChange={this.changeHandler}
                    />
                <button>Log In</button>
                <h6>{this.state.error ? this.state.error : null}</h6>
                </form>
            </div>
        );
    }
}

export default Login;