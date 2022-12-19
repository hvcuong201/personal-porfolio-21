import React from 'react'
import DarkMode from '../../functions/DarkMode'
import './web.css'

function Web() {
	return (
		<div className='web'>
			<div className='web-option'>
				<a href='#work'>
					<i class='fi fi-rr-briefcase option-icon'></i>
					<p>Works</p>
				</a>
			</div>
			<div className='web-option'>
				<a href='#projects'>
					<i class='fi fi-rr-browser option-icon'></i>
					<p>Projects</p>
				</a>
			</div>
			<div className='web-option'>
				<a href='#technologies'>
					<i class='fi fi-rr-keyboard option-icon'></i>
					<p>Technologies</p>
				</a>
			</div>
			<div className='web-option'>
				<a href='#contact'>
					<i class='fi fi-rr-user option-icon'></i>
					<p>Contact</p>
				</a>
			</div>
			<div className='web-option'>
				<DarkMode />
			</div>
		</div>
	)
}

export default Web
