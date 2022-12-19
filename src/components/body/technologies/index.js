import React from 'react'
import Separator from '../../common/separator'
import { TechnologiesData } from '../../data/technologies'
import './technologies.css'
import TechnologyCard from './technology-card'

function Technologies() {
	const technologiesData = TechnologiesData
	return (
		<div className='technologies' data-aos='zoom-in'>
			<label className='section-title'>
				<Separator label={'Skills'} />
			</label>
			<p>All the technologies that I've worked with</p>
			<div className='technologies-container'>
				{technologiesData.map((technology) => {
					return (
						<div className='technology-section'>
							<label className='technology-section-title'>{technology.type}</label>
							<div className='technology-list'>
								{technology.list.map((tech) => {
									return <TechnologyCard tech={tech} />
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Technologies
