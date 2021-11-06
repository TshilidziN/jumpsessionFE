import React from 'react'
import {Link} from 'react-router-dom';

import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  float:'left'
};

function Navbar() {
    return (
        <div >
            <Link style={linkStyle} to='/' >Home</Link>
            <Link style={linkStyle} to='/login' >Login</Link>
        </div>
    )
}

export default Navbar
