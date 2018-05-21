import React, {Component} from 'react'

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
