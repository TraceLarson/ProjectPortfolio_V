import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import {Utils} from '../utils/utils'

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
        <div className={'radar-image'}>
          <Image src={this.state.radarUrl}
                 responsive
                 rounded
                 bsStyle={{
                   width: '100%',
                   margin: '0',
                   padding: '0'
                 }}/>
        </div>
    )
  }
}
