import React from 'react'
import Separator from '../../common/separator';
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import './project.css'

function Projects() {
    const projectData = ProjectData;
    return (
        <div className='projects' data-aos="zoom-in">
            <label className='section-title'>
                <Separator label={'Projects'}/>
            </label>
            <div>
                {projectData.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
