import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

NavBar.propTypes = {
}

export default NavBar
