import React, { Fragment } from 'react';
import {Navbar} from "react-bootstrap";
import "../css/header.css";

function Header() {
  return (
    <Fragment>
        <Navbar expand="lg" className='header fixed-top'>
            <div className='container'>
                <Navbar.Brand href="/">
                    <div className="logo">
                        <img src="Assets/images/beta1.jpeg" alt="logo" />
                    </div>
                </Navbar.Brand>
            </div>
        </Navbar>
    </Fragment>
  )
}

export default Header