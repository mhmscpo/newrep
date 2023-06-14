import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="light" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/thumbnail">
              <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme">
              <Nav.Link href="/meme">New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/1">
              <Nav.Link href="/meme/1">Edit id:1</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

NavBar.propTypes = {
}

export default NavBar
