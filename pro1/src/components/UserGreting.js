// conditional rendering

import React, { Component } from "react";

class UserGreting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // short circuit approch
    return this.state.isLoggedIn && <div>Hello Sweta</div>;

    // ternary operator
    // return this.state.isLoggedIn ? <div>Hello Sweta</div> : <div>Hello Guest</div>;

    // element variable
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Sweta</div>
    // }else{
    //     message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>

    // if-else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Sweta</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreting;
