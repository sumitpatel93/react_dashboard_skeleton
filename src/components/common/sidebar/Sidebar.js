import React, { Component, Fragment } from "react";
import './Sidebar.css'
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="subHeading">About</div>
          <div className="subHeading">Total Users</div>
          <div className="subHeading">Total Transactions</div>
          <div className="subHeading">Contact Us</div>
        </div>      
      </Fragment>
    );
  }
}

export default Sidebar;
