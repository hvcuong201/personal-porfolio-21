import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setOpen }) {
	return (
		<div className='mobile' data-aos='zoom-in-left'>
			<div className='close-icon' onClick={() => setOpen(!isOpen)}></div>
			<div className='mobile-options'>
				<div className='mobile-option'>
					<a href='#work' onClick={() => setOpen(!isOpen)}>
						<i class='fi fi-rr-briefcase option-icon'></i>Works
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#projects' onClick={() => setOpen(!isOpen)}>
						<i class='fi fi-rr-browser option-icon'></i>Projects
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#technologies' onClick={() => setOpen(!isOpen)}>
						<i class='fi fi-rr-keyboard option-icon'></i>Technologies
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#contact' onClick={() => setOpen(!isOpen)}>
						<i class='fi fi-rr-user option-icon'></i>Contact
					</a>
				</div>
			</div>
		</div>
	)
}

export default Mobile
