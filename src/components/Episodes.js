import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import EpisodeItem from "./EpisodeItem"

class Episodes extends React.Component{
	
  

  render(){
  	return (
      <div>
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
      <div>
      <EpisodeItem />
      </div>
      </div>
  		)
  }
}
export default Episodes