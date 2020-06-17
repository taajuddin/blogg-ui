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
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.setLoggedIn(false)
    }

    componentDidMount() {
        //const userId=localStorage.getItem("storedId")
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then((response) => {
            //console.log(response)
        const user= response.data
        this.setState({
            user
            })
        console.log(this.state.user)
        })

        .catch((err) => {
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`)
    .then((response)=>{
        // console.log(response.data)
        const post=response.data
        this.setState({post})
    })
    .catch((err) => {
            console.log(err)
        })
    }

    render() {
        
        return (
          <div >
          <div style={{backgroundColor:"LightGrey",textAlign:"Right" ,height:"50px"}}> 
          <button onClick={this.handleSubmit}  >Logout</button>
          </div><br/><br/>
          <div style={{backgroundColor:"LightGrey"}}>
             { Object.keys(this.state.user).length !=0 && (
              <div key={this.state.user.id}>
               <h1> Name-{this.state.user.name} </h1>
                <h3>Email-{this.state.user.email} </h3>
                <h3>Phone -{this.state.user.phone}</h3>
                
                <h1 style={{textAlign:"right",marginBottom:"0px"}}>Company Name<br/>
                {this.state.user.company.name}</h1>
              </div>
             )     
         }
         </div> <br/><br/>
            
              <div style={{backgroundColor:"white"}}>
              <div><h1 style={{textAlign:"center"}}>POSTS</h1>
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

          </div>
       )
    }
}

export default Dashboard