import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'


function EditUser() {
    const history = useHistory()
    const {id} = useParams()
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
        await axios.put(`http://localhost:3003/users/${id}`, user)
        history.push('/')
    }

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async e => {
        const result =  await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container add-user">
            <h2>Edit User</h2>
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
            <button type="submit" class="mt-3 btn btn-primary">Edit User</button>
            </form>
        </div>
    )
}

export default EditUser
