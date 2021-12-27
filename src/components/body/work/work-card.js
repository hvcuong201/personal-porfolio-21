import React from 'react'
import './work-card.css'

function WorkCard( {item} ) {
    return (
        <div className='work-card'>
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <label className='position'>{item.position}</label>
                <div className='work-dates'>
                    <label>{item.joinedDate}</label> - <label>{item.endedDate}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.work}</p>
                </div>
            </div>
            <img src={item.companyLogo} alt='fpt' className='work-logo'/>
        </div>
    )
}

export default WorkCard
