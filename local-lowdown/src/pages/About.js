import React, {Component} from 'react'
import '../style/about.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class About extends Component {
  render() {
    return (
        <div>
          <div style={{
            backgroundImage: 'url("assets/about-bg.jpeg")',
          }} className={'about-container'}>
            <Header/>
            <div className={'mission-statement'}>
              <div>
                <h1>Local Lowdown</h1>
                <p>Local Lowdown is a portfolio project that is used to display the physical
                  characteristics
                  of any location you choose. You will be returned a GoogleMap of the are, the
                  current
                  weather
                  conditions, and the best representations of the location using images returned
                  from
                  the
                  unsplash API.
                </p>
                <p>Developed by Trace Larson <a href={'http://larson.media/'}>Larson.Media</a></p>
              </div>
            </div>
            <div className={'dev-tools'}>
              <div>
                <ul>
                  <h2>Developed Using</h2>
                  <li><a href={'http://www.unsplash.com/'} target={'_blank'}>Unsplash.com API</a>
                  </li>
                  <li><a href={'https://cloud.google.com/maps-platform/'} target={'_blank'}>GoogleMaps
                    API</a></li>
                  <li><a href={'https://www.wunderground.com/'} target={'_blank'}>WeatherUnderground
                    API</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Footer/>

        </div>

    )
  }
}
