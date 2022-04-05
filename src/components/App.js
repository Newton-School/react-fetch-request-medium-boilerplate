import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: 1,
      userData: {},
    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currUser !== this.state.currUser) {

    }
  }

  render() {
    return (
      <>
        <h3>
          Info of User number:{" "}
          <span id="currUserCount">{this.state.currUser}</span>
        </h3>
        {this.state.userData.name != undefined ? (
          <>
            <h4 id="name">Name: {this.state.userData.name}</h4>
            <h4 id="username">Username: {this.state.userData.username}</h4>
            <h4 id="email">Email ID: {this.state.userData.email}</h4>
            <h4 id="address">
              Address: {this.state.userData.address.street},{" "}
              {this.state.userData.address.suite},{" "}
              {this.state.userData.address.city}
            </h4>
            <button
              id="nextUser"
              onClick={() =>
                this.setState({ currUser: this.state.currUser + 1 })
              }
            >
              Next User
            </button>
          </>
        ) : (
          <h4 id="loading">Loading...</h4>
        )}
      </>
    );
  }
}
export default App;
