'use client'
import './header.css'

const Header = () => {
    const toggleMenu = () =>{
        document.body.classList.toggle('menuActive')
    }
  return (
    <header className='header_cont'>
        <div className="inner_header_cont">
            <h1>Stratified</h1>
            <div onClick={toggleMenu}>
                <div className="open">
                    <i className="ri-menu-line"></i>
                </div>
                <div className="close">
                    <i class="ri-close-fill"></i>
                </div>
                </div>
        </div>

    </header>
  )
}

export default Header