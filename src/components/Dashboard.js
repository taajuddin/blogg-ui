import React from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor() {
    super()
    this.state = {
        user: {},
        post:[]
    }
    }
    componentDidMount(){
    	const userId=localStorage.getItem('id')
    	axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    	.then((response)=>{
    		const user=response.data
    		console.log(user)
    		this.setState({user})
    	})
    	axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    	.then((response)=>{
    		console.log(response)
    		const post=response.data
    		this.setStatae({post})
    	})
    }
    handleLogout=()=>{
    	localStorage.clear()
    	this.props.history.push('/login')
    }
    render(){
    	const status=localStorage.getItem('login')
    	console.log(status)
    	console.log(Object.keys(this.state.user))
    	return (
    		<div>
    		{status && <div><button onClick={this.handleLogout}>Logout</button></div>}
    		<div>
    		<div>
    		{
    			Object.keys(this.state.user).length !=0 && (
    				<div>
    				<p>{this.state.user.name}</p>
    				<p>{this.state.user.email}</p>
    				<p>{this.state.user.phone}</p>
    				<p>{this.state.user.company.name}</p>
    				</div>
    				)
    		}
    		
    		</div>
               {
                this.state.post.map((post)=>{
                    return (
                        <div key={post.id} style={{backgroundColor:"LightGrey"}}>
                        <h4>POST-Title</h4>
                        <p>{post.title}</p>
                        </div>)
                })  
         }
         </div>
    		
    		</div>
    		)
    }
}
export default Dashboard