import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function ViewUser() {
    const {id} = useParams()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async e => {
        const res = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data)
    }

    return (
        <div className="py-5 container">
            <h1>View User</h1>
            <Link className="btn btn-primary btn-sm" to="/">Go to Back</Link>
            <ul class="list-group mt-4">
                <li class="list-group-item"><b>Name</b>: {user.name}</li>
                <li class="list-group-item"><b>Username</b>: {user.username}</li>
                <li class="list-group-item"><b>Email</b>: {user.email}</li>
                <li class="list-group-item"><b>Phone</b>: {user.phone}</li>
                <li class="list-group-item"><b>Website</b>: {user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser
