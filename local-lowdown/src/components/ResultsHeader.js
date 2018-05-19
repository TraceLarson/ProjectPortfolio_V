import React from 'react'
import { Image } from 'react-bootstrap'

import Search from '../components/Search'
import '../style/results-header.css'

const ResultsHeader = () => {
  return (
      <div className={'header'}>
        <Image src={'assets/logo-large.png'} className={'header-logo'}/>
        <Search />
      </div>
  )
}

export default ResultsHeader
