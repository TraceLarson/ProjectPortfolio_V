import React, {Component} from 'react'
import {Utils} from '../utils/utils'
import '../style/radar.css'

export default class Radar extends Component{
  state = {
    radarUrl: '',
    location: []
  }

  componentDidMount(){
    let weather = {}
    if (localStorage.getItem('location')) {
      const localData = JSON.parse(localStorage.getItem('location'))
      this.setState({location: localData[0]}, () => {
        weather = Utils.weatherUnderground(this.state.location.city, this.state.location.state)
        this.setState({
          radarUrl: weather.radar
        })
      })
    }
  }

  render(){
    return(
        <div className={'radar-image-container'}>
          <img src={this.state.radarUrl} alt={'radar'}/>
        </div>
    )
  }
}
