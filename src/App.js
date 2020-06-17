// import React from 'react';
// import {BrowserRouter, Link, Route} from 'react-router-dom'
// //import axios from 'axios'
// import Home from './Home'
// import UserList from './UserList'
// import UserShow from './UserShow'
// import PostList from './PostList'
// import PostShow from './PostShow'

// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//     <Link to="/">Home</Link>|
//     <Link to="/users">Users</Link>|
//     <Link to="/post">Post</Link>

//     <Route path="/" component={Home} exact={true} />
//     <Route path="/users" component={UserList} exact ={true}/>
//     <Route path="/user/:id" component={UserShow} />
//     <Route path="/post" component={PostList}exact={true} />
//     <Route path="/post/:id" component={PostShow} />
     
//     </div>
//     </BrowserRouter>
//     )
    
// }

// export default App;


// import React from 'react'
// import {BrowserRouter,Route} from 'react-router-dom'
// import Login from './Login'
// import Dashboard from './Dashboard'
// //import './App.css';


// class App extends React.Component{
// 	state={
// 		loggedIn:false,
// 		userId: 0
// 	}
// 	setLoggedIn = (loggedIn) => {
// 		this.setState({loggedIn})
// 	}
// 	setUserId=(userId)=>{
// 		this.setState({userId})
// 	}
// 	render(){
// 		return(
// 			<div>
// 			<BrowserRouter>
// 			{this.state.loggedIn && <Route path="/" render={(props)=> <Dashboard {...props} setLoggedIn={this.setLoggedIn} userId={this.state.userId}/>}/>}
// 			{!this.state.loggedIn && <Route path="/" render={(props)=> <Login {...props} setLoggedIn={this.setLoggedIn} setUserId={this.setUserId}/>}  />}
			
			
// 			</BrowserRouter>
// 			</div>
// 			)
// 	}
// }

// export default App

//  import React from 'react'
// import {BrowserRouter,Route} from 'react-router-dom'
// import Login from './Login'
// import Dashboard from './Dashboard'
// function App() {
//   return (
//     <BrowserRouter>
//     <div>
    

//     <Route path="/" component={Login}/>
//     //<Route path="/" component={Dashboard}/>
    
//     </div>
//     </BrowserRouter>
  //render(){
//     )
    
// }

// export default App;

import React from "react";
import axios from 'axios'
import Search from "./components/Search"
import Episodes from "./components/Episodes"

class App extends React.Component{
	state={
		 episodes: [],
      next: "",
      prev: ""
	}
	filter = e => {
    const query = e.target.value;
     axios.get(`https:rickandmortyapi.com/api/episode?name=${query}`)
     .then((res)=>{
      this.setState({
      query,
     
        episodes:res.data.results

    });
     })
    
  };

	componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/episode/`).then(res => {
      const episodes = res.data.results;
      console.log(res.data);
      this.setState({
        next: res.data.info.next,
        prev: res.data.info.prev,
        episodes
      });
    });
  }
  next = () => {
    axios.get(this.state.next).then(res => {
      const episodes = res.data.results;
      console.log(res.data);
      this.setState({
        next: res.data.info.next,
        prev: res.data.info.prev,
        episodes
      });
    });
  };

  prev = () => {
    axios.get(this.state.prev).then(res => {
      const episodes = res.data.results;
      console.log(res.data);
      this.setState({
        next: res.data.info.next,
        prev: res.data.info.prev,
        episodes
      });
    });
  };
	
render(){
		return (
    <div className="App">
     < Search  filter={this.filter} />
     <Episodes componentDidMount={this.componentDidMount} prev={this.prev} next={this.next} filter={this.filter} episodes={this.state.episodes} prev={this.state.prev} next={this.state.next}/>
    </div>
  );
	}
  
}
 export default App