import React from 'react'
import './contact.css'
import SocialContact from '../../common/social-contact'
import Separator from '../../common/separator'

function Contact() {
    return (
        <div className='contact' data-aos="zoom-in">
            <label className='section-title'>
                <Separator label={'Contact'}/>
            </label>
            <div className='contact-container'>
                <div className='contact-up'>
                    <p>Don't hesitate to reach out. Contact me on any of the platform</p>
                    <div className='contact-phys'>
                        <p><i class="fi fi-rr-smartphone"></i> (470) 836-0027</p>
                        <p><i class="fi fi-rr-envelope"></i> hvcuong201@gmail.com</p>
                    </div>
                    <SocialContact/>
                </div>
                <div className='download-btn'>
                    <a download href={require('../../../assets/resume.pdf')}>
                        Download Resume
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default Contact
