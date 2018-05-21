import React from 'react'
import { Grid, Col, Image } from 'react-bootstrap'
import '../style/footer.css'

import Navigation from '../components/Navigation'

const Footer = () => {
  return (
      <div className={'footer-container'}>
        <Grid>
          <Col xs={12} sm={8} smOffset={2} >
            <Image src={'assets/logo-large.png'} className={'footer-logo'}/>
            <Navigation/>
          </Col>
        </Grid>
      </div>
  )
}

export default Footer
