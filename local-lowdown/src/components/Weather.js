import React, {Component} from 'react'
// import{Image} from 'react-bootstrap'
import {Utils} from '../utils/utils'
import '../style/weather.css'

export default class Weather extends Component {
  state = {
    iconUrl: '',
    location: [],
    weatherObject: {},

  }

  componentDidMount() {
    let weather = {}
    if (localStorage.getItem('location')) {
      const localData = JSON.parse(localStorage.getItem('location'))
      this.setState({location: localData[0]}, () => {
        weather = Utils.weatherUnderground(this.state.location.city, this.state.location.state)
        fetch(weather.conditions, {method: 'GET', timeout: 3000}).then(response => {
          if(response.ok)
            return response.json()
          else
            throw new Error('Bad response from WeatherUnderground'+ response)
        }).then(dataJson => {
          return {
             weatherString : dataJson.current_observation.weather,
             weatherIconUrl : dataJson.current_observation.icon_url,
             temperatureString : dataJson.current_observation.temperature_string.substring(0, dataJson.current_observation.temperature_string.length - 9),
             windInfo : dataJson.current_observation.wind_string,
          }
        }).then(data => {
          this.setState({
            weatherObject: data
          })
        })
      })
    }
  }

  render() {
    return (
        <div className={'weather-info'}>
          <div className={'weather-icon'}><img src={this.state.weatherObject.weatherIconUrl} alt={'icon'}/></div>
          <div className={'weather-temp'}><h1>{this.state.weatherObject.temperatureString}</h1></div>
          <div className={'weather-strings'}>
            <ul>
              <h2>Currently: </h2>
              <li>Conditions: {this.state.weatherObject.weatherString}</li>
              <li>Wind: {this.state.weatherObject.windInfo}</li>
            </ul>
          </div>
        </div>
    )
  }
}
