import axios from 'axios'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function AddUser() {
    const history = useHistory()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })
    const {name, username, email, phone, website} = user

    const inputChange = (event) => {
        const {name, value} = event.target 
        setUser({...user, [name] : value})
    }

    const submitUserData = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3003/users', user)
        history.push('/')
    }

    return (
        <div className="container add-user">
            <h2>Add User</h2>
            <form onSubmit={submitUserData}>
            <div class="form-group ">
                <input type="text" name='name' value={name} onChange={inputChange}  class="form-control" placeholder="Enter Name" />
            </div>
            <div class="form-group mt-3">
                <input type="text" name="username" value={username} onChange={inputChange} class="form-control" placeholder="Enter Username" />
            </div>
            <div class="form-group mt-3">
                <input type="email" name="email" value={email} onChange={inputChange} class="form-control" placeholder="Enter Email ID" />
            </div>
            <div class="form-group mt-3">
                <input type="text" name="phone" value={phone} onChange={inputChange} class="form-control" placeholder="Phone Number" />
            </div>
            <div class="form-group mt-3">
                <input type="text" name="website" value={website} onChange={inputChange} class="form-control" placeholder="Enter Website" />
            </div>
            <button type="submit" class="mt-3 btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default AddUser
