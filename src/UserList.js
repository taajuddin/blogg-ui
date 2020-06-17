import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor() {
    super()
    this.state = {
        users: []
    }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            //console.log(response)
        const users= response.data
        this.setState({
            users
            })
        })

        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
          <div>
              <h1>USERS LIST- {this.state.users.length}</h1>
               <ul>
                {
                    this.state.users.map(function(user){
                        return <li key= {user.id}> <Link to={`/user/${user.id}`}>{user.name} </Link> </li>
                    })
                }

               </ul>
          </div>
        )
    }
}

export default UserList