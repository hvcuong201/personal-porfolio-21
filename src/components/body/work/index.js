import React from 'react'
import Separator from '../../common/separator'
import { WorkData } from '../../data/work'
import WorkCard from './work-card';
import './work.css'

function Work() {
    const workData = WorkData;
    return (
        <div className='work' data-aos="zoom-in">
            <label className='section-title'>
                <Separator label={'Experience'}/>
            </label>
            <div className='work-list'>
                {workData.map((item)=>{
                    return (<WorkCard item={item}/>)
                })}
            </div>

        </div>
    )
}

export default Work
