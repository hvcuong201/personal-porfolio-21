import React, { useEffect, useState } from 'react'
import './GoTop.css'

const GoTop = () => {
	// declare a state for when to show or hide the button
	const [showGoTop, setShowGoTop] = useState('goTopHidden')

	const handleVisibleButton = () => {
		setShowGoTop(window.pageYOffset > 50)
	}

	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
	}

	// Scroll Listener
	useEffect(() => {
		window.addEventListener('scroll', handleVisibleButton)
	}, [])

	return (
		<>
			<div className={showGoTop ? '' : 'goTopHidden'} onClick={handleScrollUp}>
				<button className='goTop'>
					<i class='fi fi-rr-angle-small-up'></i>
				</button>
			</div>
		</>
	)
}

export default GoTop
