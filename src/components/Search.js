import React from "react";
import axios from "axios";


class Search extends React.Component{
	// constructor(){
	// 	super()
	// 	tstate={
	// 		episodes:[]
	// 	}
	// }

	 
render(){
	return(
		<div>
		 <input
          type="text"
          name="name"
          placeholder="Search by name"
          style={{
            maxWidth: "600px",
            padding: "10px",
            borderSizing: "border-box"
          }}
          onChange={this.filter}
        />
		</div>
		)
}
}

export default Search