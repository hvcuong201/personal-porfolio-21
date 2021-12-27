import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info' data-aos="fade-right">
                    Hello there 🔥 I am 
                    <br></br> <span className='info-name'>Cuong Hoang,</span><br></br>
                    a CS major who likes 
                    <div class="scroller">
                        <div>
                            Splashing Threes 🏀<br/>
                            Playing Pool 🎱<br/>
                            Your Mum 💋<br/>
                            Building Things ⌨️
                        </div>
                    </div>
                </div>
                <div className='about-photo' data-aos="fade-left">
                    <img src={require('../../../assets/about-img.png')} alt='about' className='about-img'></img>
                </div>
            </div>
            <div className='about-bottom' data-aos="zoom-in-up">
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
