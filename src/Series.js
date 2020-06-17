import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      episodes: [],
      next: "",
      prev: ""
    };
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

  style = {
    background: "rgb(108, 111, 197)",
    margin: "5px",
    padding: "10px"
  };

  render() {
    return (
      <div style={{ boxSizing: "border-box", margin: "auto" }}>
        <input
          type="text"
          name="name"
          value={this.state.id}
          placeholder="Search by name"
          style={{
            maxWidth: "600px",
            padding: "10px",
            borderSizing: "border-box"
          }}
          onChange={this.filter}
        />
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
        {this.state.next && (
          <button
            onClick={this.next}
            style={{
              padding: "10px 30px",
              color: "#fff",
              background: "#000",
              border: "1px #000 soild",
              borderRadius: "5px"
            }}
          >
            Next
          </button>
        )}
        {this.state.prev && (
          <button
            onClick={this.prev}
            style={{
              padding: "10px 30px",
              color: "#fff",
              background: "#000",
              border: "1px #000 soild",
              borderRadius: "5px"
            }}
          >
            Previous
          </button>
        )}
      </div>
    );
  }
}

export default Home;

