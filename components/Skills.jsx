import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="h-[10px] border-b-2 shadow-2xl"></div>,
    <section className='pt-20 md:pt-32 2xl:pt-40 w-full h-screen'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#bcc0c8] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10 rounded-3xl shadow-lg shadow-gray-500 border-b-2 border-r-2">
              <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl">
                    <span className="block xl:inline">Skills</span>{' '}<p className='pt-3 pb-5'><span className="block text-yellow-600 xl:inline">Languages</span></p>
                  </h1>
                  
                  <div className='flex flex-wrap justify-center'>
                    <div className='relative m-2 bg-[#a0a1a3] px-20 py-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/HTML5', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/html5.svg"
                            alt='HTML5'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 bg-[#a0a1a3] px-20 py-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/CSS', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/css3.svg"
                            alt='CSS3'
                            layout='fill'
                        />
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Skills