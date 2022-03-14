import React from 'react'
import  './navbar.css'

export const Navbar=()=>{
    return (
        <>
        <div className='navbar'>
            <img className='klarnaimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivq9QFZngZhkfHmubr7jBXXJqLY-D1qiIMSkFZNp39xWF38TO644L5dtxpQBDQ9PNLg&usqp=CAU'></img>
            <div className='navbar-components'>Shop</div>
            <div className='navbar-components'>How it works</div>
            <div className='navbar-components'>Pay in 4</div>
            <div className='navbar-components'>The shopping app</div>
            <div className='navbar-components'>Help</div>
            <button className='gettheapp'>Get the app</button>
            <button className='login'>Log in</button>
          
        </div>
       
        
        </>
    )
}

