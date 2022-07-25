import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className='pt-40 w-full h-screen'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#bcc0c8] 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10 rounded-3xl shadow-lg shadow-gray-500 border-b-2 border-r-2">
              <main className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-20 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 xl:text-5xl lg:text-5xl">
                    <span className="block xl:inline">Fabio De Araujo</span>{' '}<p className='pt-3 pb-5'><span className="block text-yellow-600 xl:inline">Software Engineer</span></p>
                  </h1>
                  <p className="mt-3 text-base text-justify text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                    This website is dedicated to my personal projects and my professional experience. I am a software engineer with a passion for building software that is easy to use and easy to understand. I am also a fan of the open source community and I am always looking for new ways to improve my skills and knowledge.
                  </p>
                </div>
                <div className="lg:relativelg:pt-3 sm:pl-1">
                      <Image
                        className="w-full object-cover h-full"
                        src="/assets/profileBW.png"
                        alt=""
                        height={400}
                        width={400}
                      />
                    </div>
              </main>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7b8084" fillopacity="1" d="M0,96L80,128C160,160,320,224,480,218.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero;