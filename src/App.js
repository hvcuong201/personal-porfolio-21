import React, { Fragment } from 'react'
import GoTop from './components/functions/GoTop'
import Home from './components/home'

function App() {
	return (
		<div className='app'>
			<Fragment>
				<Home />
				<GoTop />
			</Fragment>
		</div>
	)
}

export default App
