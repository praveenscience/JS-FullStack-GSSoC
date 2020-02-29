import React, { Component } from "react";
import { GetUsers } from "../services/APIServer";

export default class App extends Component {
  state = {
    Users: []
  };
  componentDidMount() {
    GetUsers().then(res => {
      this.setState({
        Users: res.data
      });
    });
  }
  render() {
    const { Users } = this.state;
    return (
      <>
        <h1>Users!</h1>
        <div>Hello, GSSoC</div>
        {Users.length > 0 && (
          <ul>
            {Users.map((user, key) => (
              <li key={key}>{user}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
