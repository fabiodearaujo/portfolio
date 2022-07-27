import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="h-[10px] border-b-2 shadow-2xl"></div>,
    <section className='pt-20 md:pt-32 2xl:pt-40 w-full h-screen'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#46494e] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10">
              <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-5 md:mt-8 p-3">My Projects</span></p>
                  </h5>
                  <div className='relative flex flex-wrap justify-center'>
                    
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Projects