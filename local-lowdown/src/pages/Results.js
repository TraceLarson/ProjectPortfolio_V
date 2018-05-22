import React, {Component} from 'react'
import '../style/results.css'
// import Google Maps API Wrapper from google-maps-react
import {GoogleApiWrapper} from 'google-maps-react'

// import child component
import GoogleMapContainer from '../components/GoogleMapContainer'
import ResultsHeader from '../components/ResultsHeader'
import Footer from '../components/Footer'


class Results extends Component {
  render() {
    return (
        <div>
          <ResultsHeader/>
          <div className={'results-container'}>
            <div className={'google-map'}>
              {/*MOST IMPORTANT: Here we are passing the Google Maps props down to the MapContainer component as 'google'.*/}
              <GoogleMapContainer google={this.props.google}/>
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

// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw',
  // apiKey: 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw',
})( Results )
