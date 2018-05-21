import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'

export default class Home extends Component {
  render() {
    return (
        <div>
          <Header />
          <Search thisClass={'search-home'}/>
          <Footer />
        </div>
    )
  }
}
