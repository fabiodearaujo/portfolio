import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className='pt-40 w-full h-screen'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#bcc0c8] w-2/3 2xl:ml-[20%] md:m-10 rounded-3xl shadow-sm shadow-gray-300 border-b-2 border-r-2">
              <main className="flex flex-row justify-between p-20">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Hello, I&#39;m Fabio</span>{' '}<br></br>
                    <span className="block text-yellow-600 xl:inline">Software Engineer</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  </div>
                </div>
                <div className="lg:relativelg:pt-3">
                      <Image
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/assets/profileBW.png"
                        alt=""
                        height={400}
                        width={400}
                      />
                    </div>
              </main>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fillopacity="1" d="M0,96L80,128C160,160,320,224,480,218.7C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero;