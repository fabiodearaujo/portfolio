import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div id='home' className='pt-20 w-full h-[100%]'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#bcc0c8] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10 rounded-3xl shadow-lg shadow-gray-800 border-b-2 border-r-2 border-gray-500">
              <main className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl">
                    <span className="block xl:inline">Fabio De Araujo</span>{' '}<p className='pt-3 pb-5'><span className="block text-yellow-600 xl:inline">Software Engineer</span></p>
                  </h1>
                  <p className="mt-3 text-base text-justify text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                    This website is dedicated to my personal projects and my professional experience. I am a software engineer with a passion for building software that is easy to use and easy to understand. I like to contribute to the open source community and as a tech entusiast I love to try new devices and I am always looking for new ways to improve my skills and learn something new.
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
    </div>
  )
}

export default Hero;