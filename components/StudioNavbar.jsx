import Link from 'next/link'
import React from 'react'
import classes from './StudioNavbar.module.css'

const StudioNavbar = (props) => {
  return (
    <div>
        <div>
            <Link href="/" className={classes.backCont}>
                <>
                <i className="ri-arrow-go-back-line"></i>
                Go To Website
                </>
            </Link>
            <p>Random advice</p>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar