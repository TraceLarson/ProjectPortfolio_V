import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Geocode from 'react-geocode'

export default class GoogleMapContainer extends Component {

  state = {
    city: '',
    state: '',
    lat: '',
    lng: '',
    location: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      // console.log('prevProps changed')
      this.loadMap()
    }
    if (prevState !== this.state) {
      // console.log('prevState changed')
      this.loadMap()
    }
  }

  componentDidMount() {
    if(localStorage.getItem('location')){
      const localData = JSON.parse(localStorage.getItem('location'))
      this.setState({location: localData[0]}, () => {
        Geocode.setApiKey('AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw')
        Geocode.enableDebug()
        Geocode.fromAddress(`${this.state.location.city}, ${this.state.location.state}`).then(
            response => {
              const {lat, lng} = response.results[0].geometry.location
              // console.log(lat, lng)
              this.setState({
                lat: lat,
                lng: lng,
              })
              // console.log(this.state.lat)
              // console.log(this.state.lng)
            },
            error => {
              console.error(error) //on error set lat and lng to fullsail :P
              this.setState({
                lat: 28.5966,
                lng: 81.3013,
              })
            },
        )
        this.loadMap()
      })
    }
  }


  loadMap() {
    if (this.props && this.props.google) { //Checks to make sure props have been passed
      // console.log('google is available')
      const {google} = this.props // sets props equal to google
      const maps = google.maps // sets maps to google maps props

      const mapRef = this.refs.map // looks for HTML div ref 'map' Returned in render below
      const node = ReactDOM.findDOMNode(mapRef) // finds the 'map' div in the ReactDOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: this.state.lat, lng: this.state.lng}, // sets center of google map to geocoded lat and lng
        zoom: 11, // sets zoom. lower numbers are zoomed further out
        mapTypeId: 'roadmap', // optional main map layer, Terrain, satellite, hybrid, or roadmap, if unspecified defaults to roadmap
      })

      this.map = new maps.Map(node, mapConfig) // creates new Google map on specified node (ref='map') with specified config

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google Map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100%',
      height: '100%',
    }
    return (
        <div ref={'map'} style={style}>
          Loading Map......
        </div>
    )
  }

}

