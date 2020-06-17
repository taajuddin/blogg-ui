import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

class EpisodeItem extends React.Component{
	constructor(){
		super()
		this.state={
			episodes:[]
		}
	}


  style = {
    background: "rgb(108, 111, 197)",
    margin: "5px",
    padding: "10px"
  };

  render(){
  	return (
  		<div>
  		 <h2>Episode Details</h2>
        <Row xs="1" sm="2" md="4">
          {this.state.episodes.map(episode => {
            return (
              <Col style={this.style}>
                <h2 style={{ padding: "0px", margin: "0" }}>
                  {episode.episode} {" - "} {episode.name}{" "}
                </h2>
                <small>Realase Date {episode.air_date} </small>
              </Col>
            );
          })}
        </Row>
  		</div>
  		)
  }
}
export default EpisodeItem