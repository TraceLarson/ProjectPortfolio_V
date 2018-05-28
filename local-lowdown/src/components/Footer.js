import React from 'react'
import { Grid, Col, Image } from 'react-bootstrap'
import '../style/footer.css'

import Navigation from '../components/Navigation'

const Footer = () => {
  return (
      <div className={'footer-container'}>
        <Grid>
          <Col xs={12} sm={12}  smOffset={2} >
            <Image src={'assets/logo-large.png'} className={'footer-logo'}/>
            <Navigation/>
              <p className={'copyright'}>&copy; larson.media 2018</p>
          </Col>
        </Grid>
      </div>
  )
}

export default Footer
