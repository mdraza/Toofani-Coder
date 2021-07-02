import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
    const [users, setUsers] = useState([])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data.reverse())
    }
    
    useEffect(() => {
        loadUser()
    }, [])    

    const deleteUser = async id  =>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUser()
    }

    return (
        <div className="container pt-4">
            <h1 className='text-warning'>Home</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/user/${user.id}`}>View</Link>&nbsp;&nbsp;
                                    <Link className="btn btn-warning" to={`/user/edit/${user.id}`}>Edit</Link>&nbsp;&nbsp;
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </table>
        </div>
    )
}

export default Home
