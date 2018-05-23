import React, {Component} from 'react'
import '../style/results.css'
// import Google Maps API Wrapper from google-maps-react
import {GoogleApiWrapper} from 'google-maps-react'

// import child component
import GoogleMapContainer from '../components/GoogleMapContainer'
import Weather from '../components/Weather'
import Radar from '../components/Radar'
import ResultsHeader from '../components/ResultsHeader'
import Footer from '../components/Footer'


class Results extends Component {
  render() {
    return (
        <div>
          <ResultsHeader/>
          <div className={'google-map'}>
            {/*Here we are passing the Google Maps props down to the MapContainer component as 'google'.*/}
            <GoogleMapContainer google={this.props.google}/>
          </div>
          <div className={'results-container'}>
            <div className={'weather-info'}>
              <Weather />
              <div className={'radar-gif'}>
                <Radar />
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

// Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw',
  // apiKey: 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw',
})( Results )
