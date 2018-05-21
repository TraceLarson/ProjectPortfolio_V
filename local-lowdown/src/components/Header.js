import React from 'react'
import { Image } from 'react-bootstrap'
import '../style/header.css'


const Header = () => {
  return (
      <div className={'header'}>
        <Image src={'assets/logo-large.png'} className={'header-logo'} responsive />
      </div>
  )
}

export default Header
