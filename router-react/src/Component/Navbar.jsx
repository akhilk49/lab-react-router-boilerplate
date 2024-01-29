import React from 'react'
import {Link} from "react-router-dom"
import "./style/styles.css"

export default function Nav() {
  return (
    <div className='navbar'>
        <Link id='kalvium' className='link-style' to='/'>Kalvium ❤️ </Link>
        <div id='links'>
            <Link className='link' to='/'>Squad</Link>
            <Link className='link' to='/Contacts'>Contacts</Link>
            <Link className='link' to='/About'>About</Link>
        </div>

    </div>
  )
}