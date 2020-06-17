import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
	constructor(){
		super()
		this.state={
			users:{},
			post:[]
		}
	}
componentDidMount(){
	let id=this.props.match.params.id
	console.log(this.props.match.params.id)
	axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
	.then((response)=>{
		// console.log(response.data)
		const users=response.data
		this.setState({ users })
	})
	.catch((err) => {
            console.log(err)
        })
	axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
	.then((response)=>{
		// console.log(response.data)
		const post=response.data
		this.setState({post})
	})
	.catch((err) => {
            console.log(err)
        })
}

 render(){
 	console.log('user show component', this.props)
 	return(
 		<div>
 		<h1>USER NAME: {this.state.users.name}</h1>
 		<h3>POST WRITTEN BY USER</h3>
 		<ul>
 		{
 			this.state.post.map((name)=>{
 			return <li key={name.id}> <Link to={`/post/${name.id}`}>{name.title}</Link></li>
 			})
 		}
 		</ul>
 		</div>
 		)
 }
}
export default UserShow
