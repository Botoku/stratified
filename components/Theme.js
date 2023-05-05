'use client'
import { useState, useEffect} from 'react'
import classes from '../app/styles/theme.css'
import '../app/globals.css'


function Theme() {
    const [isDark, setIsDark] = useState(false)
    const [colorTheme, setColorTheme] = useState('')

    const toggleDarkMode = () =>{
        setIsDark(!isDark)
        document.body.classList.toggle('dark')
    }
 

   
  return (
    <div className={classes.themeCont}>
        {!isDark && <p>Dark Mode</p>}
        {isDark && <p>Light Mode</p>}
        <div className={classes.themeLogoCont}>
            {isDark && <div>
                 <p onClick={toggleDarkMode}><i className="ri-sun-fill"></i></p>
            </div>}

            {!isDark && <div>
                 <p onClick={toggleDarkMode}><i className="ri-moon-fill"></i></p>
            </div>}


        </div>
    </div>
  )
}

export default Theme