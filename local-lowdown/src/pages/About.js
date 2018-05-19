import React, {Component} from 'react'
import {Grid, Col, Image} from 'react-bootstrap'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class About extends Component {
  render() {
    return (
        <div>
          <Header/>
          <div>
            Welcome to the about page
          </div>
          <Footer/>
        </div>

    )
  }
}
