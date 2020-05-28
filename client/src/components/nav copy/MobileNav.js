import React, { useState } from 'react';
import {   Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" light expand="md">
        <NavbarBrand href="/">HOME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/solutions">SOLUTIONS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/techstacks">TECH / STACKS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/log">LOG ENTRIES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://maxreinmueller.github.io/">GITHUB</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MobileNav;