import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor() {
    super()
    this.state = {
        post: []
    }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            //console.log(response)
        const post= response.data
        this.setState({
            post
            })
        })

        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
          <div>
              <h1>TOTAL POSTS- {this.state.post.length}</h1>
               <ul>
                {
                    this.state.post.map(function(post){
                        return <li key= {post.id}> <Link to={`/post/${post.id}`}>{post.title} </Link> </li>
                    })
                }

               </ul>
          </div>
        )
    }
}

export default UserList