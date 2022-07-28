import React from 'react'
import Image from 'next/image'
import project1 from '../public/assets/projects/project1.png'

const Projects = () => {
  return (
    <div className=" inline-block h-[10px] border-b-2 shadow-2xl"></div>,
    <section className='pt-20 md:pt-32 2xl:pt-40 w-full h-[100%]'>
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