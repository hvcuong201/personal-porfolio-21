import React from 'react'
import { SocialData } from '../../data/social'
import './social-contact.css'

function SocialContact() {
    const socialData = SocialData; 
    return (
        <div className='social-contact'>
            {socialData.map((item)=>{
                return(
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <div className='social-icon-container'>
                            <img src={item.icon} alt='social-media-icon' className='social-icon'/>
                        </div>
                    </a>
                ) 
            })}
        </div>
    )
}

export default SocialContact
