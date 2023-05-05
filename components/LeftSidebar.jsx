'use client'
import classes from './leftSidebar.module.css'
import Image from 'next/image'
import LogoImageWhite from '../public/logo-black.png'
import LogoImageblack from '../public/logo-white.png'
import Theme from './Theme'
import Link from 'next/link'
import TextWavy from './TextWavy'

const LeftSidebar = () => {
  const closeSideBar = () =>{
    document.body.classList.remove('menuActive')
  }
  return (
    <div className='left_sidebar'>
           <div className={classes.logoCont}>
            <div className="darkLogo sidebarLogo">
              <Image src={LogoImageblack} width={50} height={50} alt="Logo"/>
            </div>

            <div className="lightLogo sidebarLogo">
              <Image src={LogoImageWhite} width={50} height={50} alt="Logo"/>
            </div>
            </div>
            <div className={classes.nameCont}>
              <TextWavy />
              <h3 className={classes.cocoName}>By Cocoa Vanilla</h3>
            <p>Theres layers to this...</p>
            </div>

              <div className="sidebar_home_button" onClick={closeSideBar}>
                <Link href='/'><i class="ri-home-4-line"></i>Home</Link>
              </div>

            
            <div>
            {/* <Theme /> */}
        </div>
    </div>
  )
}

export default LeftSidebar