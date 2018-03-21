import React, { Component } from 'react';
import logo from '../images/sameer.png';
import art from '../images/art.png';


class Navigation extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between navbar-inner navbar-inner2">
            <a className="navbar-brand">
                <img src={logo} alt="sameer dewan"/>
            </a>
            <div>
                <div id="mySidenav" className="sidenav navbar-inner">
                    <a href="javascript:void(0)" className="closebtn" onClick={()=> this.closeNav()}>&times;</a>
                    <a onClick={()=>this.closeNav()} href="#">About</a>
                    <a onClick={()=>this.closeNav()} href="#">Portfolio</a>
                    <a href="#">Contact</a>
                    <a href="#">CV</a>
                    <div className="art-container">
                        <div id="clouds">
                            <div className="cloud x1"></div>
                            <div className="cloud x2"></div>
                            <div className="cloud x3"></div>
                            <div className="cloud x4"></div>
                            <div className="cloud x5"></div>
                        </div>
                        <img className="img-fluid" src={art} />
                    </div>

                </div>
                <span className="navigation" onClick={() => this.openNav()}>&#9776;</span>
            </div>
        </nav>
    );
  }
}

export default Navigation;
