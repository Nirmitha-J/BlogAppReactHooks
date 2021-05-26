import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink,
    useParams
  } from "react-router-dom";

const Common = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" black="true"  expand="lg">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink  to="/home/" style={{marginLeft: 10}}>HOME</NavLink>
            </NavItem>
          <NavItem>
              <NavLink  to="/about/" style={{marginLeft: 10}}>ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  to="/posts/" style={{marginLeft: 10}}>POSTS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Common;
