import Image from 'next/image'
import React from 'react'
import LogoImage from '../public/anjolas-blog-high-resolution-logo-white-on-black-background.png'
import classes from './Logo.module.css'

const Logo = (props) => {
    const {renderDefault, title} = props

  return (
    <div className={classes.logoCont}>
        <Image src={LogoImage} width={50} height={50} alt="Logo"/>

        {<>{renderDefault(props)}</> }
        </div>
  )
}

export default Logo