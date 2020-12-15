import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriend extends React.Component {

    state = {
        credentials: {
            id: Date.now(),
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value,
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state.credentials)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render(){
        return (
            <div className='add-friend'>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Friend name'
                    value={this.state.credentials.name}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='text'
                    name='age'
                    placeholder='Friend age'
                    value={this.state.credentials.age}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='text'
                    name='email'
                    placeholder='Friend email'
                    value={this.state.credentials.email}
                    onChange={this.changeHandler}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }

}

export default AddFriend;
