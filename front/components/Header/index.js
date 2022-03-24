import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'next/image';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>
            <Image src='/LogoPLM.png' width={130} height={65} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Masculinas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/catalogo/masculinas/internacionais">Internacionais</DropdownItem>
                  <DropdownItem href="/catalogo/masculinas/nacionais">Nacionais</DropdownItem>
                  <DropdownItem href="/catalogo/masculinas/nba">NBA</DropdownItem>
                  <DropdownItem href="/catalogo/masculinas/corta-vento">Corta vento</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href='/catalogo/femininas'
                >
                  Femininas
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href='/catalogo/infantis'
                >
                  Infantis
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink
                  target='_blank'
                  href='https://api.whatsapp.com/send/?phone=5511981476124&text&app_absent=0'
                >
                  Whatsapp
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
