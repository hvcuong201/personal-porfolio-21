import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#projects'>
                    <i class="fi fi-rr-browser option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#technologies'>
                    <i class="fi fi-rr-keyboard option-icon"></i>Technologies
                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                    <i class="fi fi-rr-briefcase option-icon"></i>Works
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                    <i class="fi fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
