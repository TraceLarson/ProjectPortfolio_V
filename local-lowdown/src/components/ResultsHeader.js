import React from 'react'
import { Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/results-header.css'

import Search from '../components/Search'


const ResultsHeader = () => {
  return (
      <div className={'results-header'}>
        <Link to={'/'}>
        <Image src={'assets/logo-large.png'}
               className={'header-logo'}/>
        </Link>
        <Search thisClass={'search-header'} />
      </div>
  )
}

export default ResultsHeader
