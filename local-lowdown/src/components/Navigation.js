import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/navigation.css'

const Navigation = () => {
  return (
      <Navbar>
        <Nav>
          <NavItem eventKey={1} componentClass={Link} href={'/'} to={'/'}>
            Home
          </NavItem>
          <NavItem eventKey={1} componentClass={Link} href={'/results'} to={'/results'}>
            Results
          </NavItem>
          <NavItem eventKey={1} componentClass={Link} href={'/about'} to={'/about'}>
            About
          </NavItem>
        </Nav>
      </Navbar>
  )
}

export default Navigation
