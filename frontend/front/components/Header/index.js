import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
      <Navbar color='light' expand='md' light>
        <NavbarBrand href='/'>
          <img width={130} src='LogoPLM.png' />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Nav classNameName='me-auto' navbar>
          <NavItem>
            <NavLink href='/'>Catalogo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink target='_blank' href='about:blank'>
              Whatsapp
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header
