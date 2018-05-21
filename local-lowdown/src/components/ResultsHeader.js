import React from 'react'
import { Image } from 'react-bootstrap'
import '../style/results-header.css'

import Search from '../components/Search'


const ResultsHeader = () => {
  return (
      <div className={'results-header'}>
        <Image src={'assets/logo-large.png'} className={'header-logo'}/>
        <Search thisClass={'search-header'} />
      </div>
  )
}

export default ResultsHeader
