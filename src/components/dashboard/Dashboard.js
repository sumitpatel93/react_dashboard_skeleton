import React, { Component, Fragment } from "react";
import Sidebar from "../common/sidebar/Sidebar";
import Navbar from "../common/navbar/Navbar";
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
           <Sidebar /> 
        <div className="content">
          <p>Dashboard</p>
        </div>
       
      </Fragment>
    );
  }
}

export default Dashboard;
