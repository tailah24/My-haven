import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../My haven Logo.svg';

const Nav = styled.nav`
    height: 60px;
    background: red;
`

const Navbar = () => {
    return (
        <Nav>
            <Logo alt='logo' height='150px' />
        </Nav>
    )
}

export default Navbar
