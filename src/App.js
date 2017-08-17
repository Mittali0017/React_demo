import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Apps extends Component {
  render() {
    
        return (
      <div className="App">
        <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"><b>Dashboard</b></a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="ex2.html">About</a></li>
                                <li><a href="menu.html">Menu 1</a></li>
                                <li><a className="dropdown-toggle" data-toggle="dropdown" href="#">Menu 2<span className="caret"></span></a>
                                 <ul className="dropdown-menu">
                                    <li><a href="#">Sub Menu 2-1</a></li>
                                    <li><a href="#">Sub Menu 2-2</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Menu 3<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                    <a href="#">Sub Menu 3-1</a>
                                        <ul className="dropdown-menu">
                                        <li><a href="#">Item 1</a></li>
                                        <li className="dropdown-submenu">
                                        <a href="#">Item 2</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="ex2.html">Sub Item 2-1</a></li>
                                                <li><a href="#">Sub Item 2-2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Item 3</a></li>
                                        <li><a href="#">Item 4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ex5.html">Sub Menu 3-2</a></li>
                                    <li><a href="ex6.html">Sub Menu 3-3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
      </div>
    );
  }
}

export default Apps;
