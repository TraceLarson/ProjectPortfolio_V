import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {Button} from 'react-bootstrap'
import '../style/search.css'

export default class Search extends Component {
  state = {
    city: '',
    state: '',
    location: []
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name.toString()]: e.target.value,
    })
  }

  handleSearch = () => {
    // e.preventDefault()

    this.state.location.push({
      'city': this.state.city,
      'state' : this.state.state,
    })
    this.setState({
      location: {
        'city': this.state.city,
        'state': this.state.state,
      }
    })
    this.updateLocalStorage()
    window.location.reload()
  }

  updateLocalStorage() {
    localStorage.clear()
    const storage = this.state.location
    localStorage.setItem('location', JSON.stringify(storage))
  }

  render() {

    return (
        <form className={this.props.thisClass}>
          <label htmlFor="search-bar">City Search</label>
          <fieldset>
            <input autoFocus
                   type="text"
                   name="city"
                   id="search-bar"
                   placeholder="Enter A City"
                   onChange={this.handleChange}/>
            <select id="state-bar"
                    name="state"
                    onChange={this.handleChange}>
              <option value="none">,State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </fieldset>
          <Link to={'/results'}>
          <button id="submit-button"
                  onClick={this.handleSearch}>
            <img src={'assets/search-label.png'} alt={'Search'} height={'15'} width={'40'}/>
          </button>
          </Link>
        </form>
    )
  }
}

//<Route render={({history}) => (

// history.push('/results')


// {/*<Button bsStyle={'primary'}*/}
// {/*bsSize={'small'}*/}
// {/*id="submit-button"*/}
// {/*componentClass={Link}*/}
// {/*href={'/results'}*/}
// {/*to={'/results'}*/}
// {/*onClick={this.handleSearch}>*/}
// {/*<img src={'assets/search-label.png'} alt={'Search'} height={'15'} width={'40'}/>*/}
// {/*</Button>*/}
