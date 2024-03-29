import React from 'react'
import './project-card.css'

function ProjectCard({ project }) {
	return (
		<div className='project-card'>
			<label className='project-title'>{project.title}</label>
			<div className='project-links'>
				{project.demo && (
					<a className='project-link' href={project.demo} target='_blank' rel='noreferrer'>
						<div className='link-button'>
							<i class='fi fi-rr-globe'></i>Demo
						</div>
					</a>
				)}
				{project.github && (
					<a className='project-link' href={project.github} target='_blank' rel='noreferrer'>
						<div className='link-button'>
							<i class='devicon-github-original colored'></i>Github
						</div>
					</a>
				)}
				{project.inprogress && (
					<a className='project-link' href={project.inprogress} target='_blank' rel='noreferrer'>
						<div className='link-button'>
							<i class='fi fi-rr-document'></i>In Progress
						</div>
					</a>
				)}
			</div>
			<div className='project-body-container'>
				<div className='project-info'>
					<label className='project-title-smaller'>💡 Idea:</label>
					<div className='project-about'>
						<p>{project.idea}</p>
					</div>
					<label className='project-title-smaller'>💻 About:</label>
					<div className='project-about'>
						<p>{project.about}</p>
					</div>
					{project.award && (
						<div>
							<label className='project-title-smaller'>🏆 Award:</label>
							<div className='project-about'>
								<a href={project.award.link} target='_blank' rel='noreferrer'>
									<div className='project-about'>
										<p>{project.award.title}</p>
									</div>
								</a>
							</div>
						</div>
					)}
					<div className='project-tags'>
						{project.tags.map((tag) => {
							return <label className='tag'>{tag}</label>
						})}
					</div>
				</div>
				<div className='project-photo-container'>
					<div className='container-browser-bar'>
						<div className='container-browser-bar-circle'></div>
						<div className='container-browser-bar-circle'></div>
						<div className='container-browser-bar-circle'></div>
					</div>
					<img src={project.image} alt='project' className='project-photo' />
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
