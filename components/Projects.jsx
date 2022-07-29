import React from 'react'
import project1 from '../public/assets/projects/project1.png'
import project2 from '../public/assets/projects/project2.png'
import project3 from '../public/assets/projects/project3.png'
import project4 from '../public/assets/projects/project4.png'
import project5 from '../public/assets/projects/project5.png'
import project6 from '../public/assets/projects/project6.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <section id='projects' className='w-full h-[100%]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#74777c" fillOpacity="1" d="M0,224L24,197.3C48,171,96,117,144,128C192,139,240,213,288,202.7C336,192,384,96,432,64C480,32,528,64,576,101.3C624,139,672,181,720,170.7C768,160,816,96,864,106.7C912,117,960,203,1008,250.7C1056,299,1104,309,1152,282.7C1200,256,1248,192,1296,170.7C1344,149,1392,171,1416,181.3L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      <div className='container mx-auto'> 
        <div className="relative bg-[#46494e] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:mb-10">
              <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                    <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-10 mb-10'><span className="block text-yellow-600">My Projects</span></p>
                    </h5>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectItem
                        image={project1}
                        title='Studio Victoria'
                        description='A simple website for Studio Victoria, a fictional music and film production company.'
                        techUsed={'HTML, CSS, JavaScript'}
                        linkGit={'https://github.com/fabioaraujo76/studiovictoria_mp1'}
                        linkDeployed={'https://fabioaraujo76.github.io/studiovictoria_mp1/'}
                        />
                        <ProjectItem
                            image={project2}
                            title='International Space Station'
                            description='An Interactive website about the ISS, live location, live video and Nasa Picture of the day.'
                            techUsed={'HTML, CSS, JavaScript, Leaflet, OpenStreetMap, NASA API'}
                            linkGit={'https://github.com/fabioaraujo76/spacestation_mp2'}
                            linkDeployed={'https://fabioaraujo76.github.io/spacestation_mp2/'}
                        />
                        <ProjectItem
                            image={project3}
                            title='Simple Bug Tracker'
                            description='Fullstack application for a simple project management and track bugs.'
                            techUsed={'HTML, CSS, JavaScript, Python, Flask, MongoDB, OpenWeather API'}
                            linkGit={'https://github.com/fabioaraujo76/bug_tracker_mp3'}
                            linkDeployed={'https://sbug-tracker.herokuapp.com/'}
                        />
                        <ProjectItem
                            image={project4}
                            title='Sophie Photography'
                            description='Fullstack e-Commerce application for a fictional Photo Studio.'
                            techUsed={'HTML, CSS, JavaScript, Python, Django, PosgreSQL, Stripe, AWS S3'}
                            linkGit={'https://github.com/fabioaraujo76/sophie-photography-mp4'}
                            linkDeployed={'https://sophiephotography.herokuapp.com/'}
                        />
                        <ProjectItem
                            image={project5}
                            title='Personal Finance API'
                            description='RESTful API for a personal finance application that allows CRUD operations through HTTP requests or using the  Swagger Interface.'
                            techUsed={'Python, FastAPI, PostgreSQL, SQLAlchemy, JWT, Github Actions, TDD'}
                            linkGit={'https://github.com/fabiodearaujo/PersonalFinanceApi'}
                            linkDeployed={'https://pfinanceapi.herokuapp.com/docs'}
                        />
                        <ProjectItem
                            image={project6}
                            title='Portfolio'
                            description='Personal Portfolio Website with Blog section.'
                            techUsed={'React, Next.js, TailwindCSS'}
                            linkGit={'https://github.com/fabiodearaujo/portfolio'}
                            linkDeployed={'/'}
                        />
                    </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Projects