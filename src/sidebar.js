import React, { Component } from 'react';
import logo from './logo.svg';
import './sidebar.css';


class Side extends Component {
  render() {
    return (
      <nav id="menu" className="left">
  <ul>
    <li><a href="#" className="active"><i className="fa fa-home"></i>Home</a></li>
    <li><a href="#"><i className="fa fa-info-circle"></i>About</a></li>
    <li> <a href="#"><i className="fa fa-laptop"></i>Services <i className="fa fa-caret-down"></i></a>
      <ul>
        <li><a href="#">Service</a></li>
         <li> <a href="#"><i className="fa fa-laptop"></i>subServices <i className="fa fa-caret-down"></i></a>
      <ul>
        <li><a href="#">sub1Service</a></li>
        <li><a href="#">sub2Service</a></li>
        <li><a href="#">sub3Service</a></li>
      </ul>
    </li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Service</a></li>
      </ul>
    </li>
    <li><a href="menu.html"><i className="fa fa-phone"></i>Contact</a></li>
  </ul>

  </nav>

    );
  }
}

export default Side;
