import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'
import { Sling as Hamburger } from 'hamburger-react'

function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='header'>
            <div className='logo'>
                <span class="full-text-logo">Cuong Hoang</span>
                <span class="short-text-logo">CH</span>
            </div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web/>
                </div>
                <div className='mobile-menu'>
                    <Hamburger hideOutline={false} rounded distance="sm" size={48} toggled={isOpen} toggle={setOpen}/>
                    {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
