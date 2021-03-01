import React, { Component } from "react";



const navBar = (props) => {
  return (  <h2>Navbar {props.totalCounters}</h2> );
}
 

/* class Navbar extends Component {
  render() {
    return <h2>Navbar {this.props.totalCounters}</h2>;
  }
} */

export default navBar;
