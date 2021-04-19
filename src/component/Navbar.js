// import React, { Component } from "react";
// import {
// MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
// } from "mdbreact";
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import 'mdbreact/dist/css/mdb.css';
// import logo from '../image/logo.png'
// import './navbar.css'

// class NavbarPage extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//     <Router>
//       <MDBNavbar className='navbar-main' color="black" dark expand="md">
//         <MDBNavbarBrand>
//           <img src={logo} className="navlogo"/>
//           <strong className="white-text">Mr.Mechanic</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>

//             <MDBNavItem active>
//               <MDBNavLink  to="/">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/feature" >Features</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/login">Login</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/servicies">Services</MDBNavLink>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBFormInline waves>
//                 <div className="md-form my-0">
//                   <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
//                 </div>
//               </MDBFormInline>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     </Router>
//     );
//   }
// }

// export default NavbarPage;

// import React,{Component} from 'react'
// import './navbar.css'
//  //import logo from '../image/logo.png'

// class Navigation  extends Component{
//   render(){
//     return(
// <nav className="nav">
//     <div className="container">
//         <div className="logo">
//             <a href="#">Mr.Mechanic</a>
//         </div>
//         <div className="main_list" id="mainListDiv">
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/feature">Feature</a></li>
//                 <li><a href="/login">Login</a></li>
//                 <li><a href="/info">Info</a></li>
//                 <li><a href="#">Dcontact</a></li>
//             </ul>
//         </div>
//         <div className="media_button">
//             <button  className="main_media_button" id="mediaButton">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </button>
//         </div>
//     </div>
// </nav>

//     );
//   }
// }
// export default Navigation;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import pic from '../image/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={pic} className='pic'/>  Mr.Mechanic
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes color="white" /> : <FaBars color="white" />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/image"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Image
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/join"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Join
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                    Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  team
                </Link>
              </li>
              <li className="nav-item">
                <div className='button-main'>
                <Link to="/login" className="button" onClick={closeMobileMenu}>
                 <h5 className='button-text'>Login/Signup</h5>
                </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
