import React from 'react'
import axios from 'axios'
import './Login.css';
//import validator from 'validator'
//import { Redirect } from 'react-router-dom'

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            email: '',
            //user: {},
            err_msg: '',
            format: ''

        }
    }
  

    handleChange=(e)=> 
    {
        this.setState({[e.target.name]:e.target.value})
    }

    checkEmail = (e) => {
        e.preventDefault()
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
             console.log(response.data)
            const user = response.data.find(ele => ele.email === this.state.email)
           if(user){
               //localStorage.setItem('storedId', user.id)
               this.setState({  user })
               this.props.setUserId(user.id)
               this.props.setLoggedIn(true)
           }
           else if(!this.state.email.includes('@')){
                this.setState({ format: 'invalid format' })
           }
           else{
             this.setState({err_msg:"enter the valid email"}) 
           }
          
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                
                <div className="div1">
               
                    <form onSubmit={this.checkEmail} style={{textAlign:"center"}}>
                     <h1 style={{textAlign:"center",margin:"100px"}}>Login</h1>
    
                    <input 
                    type="text"
                    placeholder="enter email"
                    id="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <p style={{color:"red"}}> {this.state.err_msg} </p>
                    <p style={{color:"red"}}> {this.state.format} </p>
                    </form>
                    
                </div>
            </div>
        )

    }
}
export default Login