import React, {Component} from 'react'
import '../style/results.css'

import ResultsHeader from '../components/ResultsHeader'
import Footer from '../components/Footer'

export default class Home extends Component {
  render() {
    return (
        <div>
          <ResultsHeader/>
          <div className={'results-container'}>
            <div className={'google-map'}>
              google map will go here
            </div>
            <div className={'weather-info'}>
              weather info will go here
              <div className={'radar-gif'}>
                weather radar gif will go here
              </div>
            </div>

            <div className={'unsplash-images'}>
              unsplash images will go here
            </div>

          </div>
          <Footer/>
        </div>
    )
  }
}
