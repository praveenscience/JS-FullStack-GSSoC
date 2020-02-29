import React, { Component } from "react";

export default class App extends Component {
  state = {
    Users: []
  };
  render() {
    const { Users } = this.state;
    return (
      <>
        <h1>Users!</h1>
        <div>Hello, GSSoC</div>
        {Users.length > 0 && <ul></ul>}
      </>
    );
  }
}
