import React from 'react'
import { Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/header.css'


const Header = () => {
  return (
      <div className={'header'}>
        <Link to={'/'}>
          <Image src={'assets/logo-large.png'}
                 className={'header-logo'}/>
        </Link>
      </div>
  )
}

export default Header
