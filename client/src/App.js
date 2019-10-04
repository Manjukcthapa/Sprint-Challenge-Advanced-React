import React from "react";
import axios from "axios";
import PlayerList from "./component/PlayerList";
import Navbar from "./component/Navbar/Navbar"
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("res data", res.data);
        const players = res.data;
        this.setState({ players: players });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
       <Navbar/>
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
