import React from 'react'
import { Image } from 'react-bootstrap'
import '../style/header.css'

import Search from '../components/Search'

const ResultsHeader = () => {
  return (
      <div className={'header'}>
        <Image src={'assets/logo-large.png'} className={'header-logo'}/>
      </div>
  )
}

export default ResultsHeader
