import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
	constructor(){
		super()
		this.state={
			user:{},
			post:{},
			comments:[]
		}
	}
componentDidMount(){
	const id=this.props.match.params.id
	console.log(this.props.match.params.id)
	axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
	.then((response)=>{
		// console.log(response.data)
		const post=response.data
		this.setState({post})
		axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
	.then((response)=>{
		const user=response.data
		this.setState({ user })
	})
	.catch((err) => {
            console.log(err)
        })
	})
	.catch((err) => {
            console.log(err)
        })
	axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
	.then((response)=>{
		const comments=response.data
		this.setState({comments})
	})
	.catch((err) => {
            console.log(err)
        })
}

 render(){
 	console.log('user show component', this.props)
 	return(
 		<div>
 		<h2>USER NAME: {this.state.user.username}</h2>
 		<h3>TITLE :{this.state.post.title}</h3>
 		<h4>BODY:</h4>
 		{this.state.post.body}
 		<hr/>
 		<h3>COMMENTS</h3>
 		<ul>
 		{
 			this.state.comments.map((user)=>{
 			return <li id={user.id}>{user.body}</li>
 		})
 		}
 		</ul>
 		<hr />
 		<p><Link to={`/user/${this.state.user.id}`}>More Post of author: {this.state.user.username} </Link></p>
 		</div>
 		)
 }
}
export default PostShow