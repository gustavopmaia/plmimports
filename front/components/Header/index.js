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
                  Catalogo
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/catalogo/masculinas">Masculinas</DropdownItem>
                  <DropdownItem href="/catalogo/infantis">Infantis</DropdownItem>
                  <DropdownItem href="/catalogo/femininas">Femininas</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
