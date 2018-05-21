import React, {Component} from 'react'

import ResultsHeader from '../components/ResultsHeader'
import Footer from '../components/Footer'

export default class Home extends Component {
  render() {
    return (
        <div>
          <ResultsHeader/>
          <div>
            Content will go here
          </div>
          <Footer/>
        </div>
    )
  }
}
