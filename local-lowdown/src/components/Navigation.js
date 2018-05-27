import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/navigation.css'

const Navigation = () => {
  return (
      <Navbar >
        <Nav style={{ textAlign: 'center'}}>
          <NavItem eventKey={1} componentClass={Link} href={'/'} to={'/'} className={'nav-item'} >
            Home
          </NavItem>
          <NavItem eventKey={1} componentClass={Link} href={'/results'} to={'/results'} className={'nav-item'} >
            Results
          </NavItem>
          <NavItem eventKey={1} componentClass={Link} href={'/about'} to={'/about'} className={'nav-item'} >
            About
          </NavItem>
        </Nav>
      </Navbar>
  )
}

export default Navigation
