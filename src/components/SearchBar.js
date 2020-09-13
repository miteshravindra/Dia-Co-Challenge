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

export default function SearchBar({ onSubmitHandler, onChangeHandler }) {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form
            inline
            className="formContainer"
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
          >
            <FormControl
              type="text"
              className="inputSearchBar"
              placeholder="Some search term"
            />
            <Form.Control as="select" placeholder="Sort By">
              <option>Sort Articles</option>
              <option value="publishedAt">Date</option>
              <option value="relevancy">Relevancy</option>
              <option value="popularity">Popularity</option>
            </Form.Control>
            <Button
              variant="outline-success"
              className="navButton"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
