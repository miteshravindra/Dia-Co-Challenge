import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="formContainer">
            <FormControl
              type="text"
              className="inputSearchBar"
              placeholder="Some search term"
            />
            <Nav className="navDropdown">
              <NavDropdown
                title="Sort Articles"
                id="basic-nav-dropdown"
                className="navDropdownContent"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-success" className="navButton">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
