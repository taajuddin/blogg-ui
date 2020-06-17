import React from  'react'
import validator from 'validator'
import axios from 'axios'

class Login extends React.Component{
	constructor(){
		super()
		this.state={
			email:'',
			errorMsg:''
		}
	}
	handleEmailChange=(e)=>{
		const email=e.target.value
		this.setState({email})
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		if(validator.isEmail(this.state.email)){
			axios.get('https:jsonplaceholder.typicode.com/users')
			.then((response)=>{
				console.log(response)
				const check=response.data.find(ele=>ele.email===this.state.email)
				if(check){
					const userId=check.id
					localStorage.setItem('login','true')
					localStorage.setItem('id',userId)
					this.props.history.push('/dashboard')
				}

			})
		}
		else{
					const errorMsg='email not found'
					this.setState({errorMsg})
				}
	}
	render(){
		return(
			<div>
			<div>
			<h1>LOGIN</h1>
			<form onSubmit={this.handleSubmit}>
			<input 
			type="text"
			value={this.state.email}
			onChange={this.handleEmailChange}
			placeholder="enter email"
			/>
			</form>
			<p>{this.state.errorMsg}</p>
			</div>

			</div>
			)
	}
}
export default Login