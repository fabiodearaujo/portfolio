import React from 'react'
import Image from 'next/image'
import project1 from '../public/assets/projects/project1.png'

const Projects = () => {
  return (
    <section className='w-full h-[100%]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#74777c" fillOpacity="1" d="M0,224L24,197.3C48,171,96,117,144,128C192,139,240,213,288,202.7C336,192,384,96,432,64C480,32,528,64,576,101.3C624,139,672,181,720,170.7C768,160,816,96,864,106.7C912,117,960,203,1008,250.7C1056,299,1104,309,1152,282.7C1200,256,1248,192,1296,170.7C1344,149,1392,171,1416,181.3L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      <div className='container mx-auto'> 
        <div className="relative bg-[#46494e] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10">
              <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-5 md:mt-8 p-3">My Projects</span></p>
                  </h5>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className='relative  bg-[#76797e] flex items-center justify-center h-auto w-full shadow-lg shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2c2c2d] to-[#1a1f2a]'>
                            <Image
                                className="rounded-xl group-hover:opacity-10"
                                src={project1}
                                alt="Studio Victoria"
                            />
                            <div className="hidden group-hover:absolute inset-0 group-hover:flex group-hover:flex-col items-center justify-center">
                                <h3 className='text-bold text-2xl text-center'>Studio Victoria</h3>
                                <p className='text-sm mt-3 px-10'>A website for the Studio Victoria, a fictional music and film production company.</p>

                            </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Projects