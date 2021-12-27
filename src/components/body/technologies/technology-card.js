import React from 'react'
import './technology-card.css'

function TechnologyCard( {tech} ) {
    return (
        <div className='technology-card'>
            <div className='technology-icon'>
                {tech.icon}
            </div>
            <label className='technology-name'>
                {tech.name}
            </label>
        </div>
    )
}

export default TechnologyCard
