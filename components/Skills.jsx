import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="h-[10px] border-b-2 shadow-2xl"></div>,
    <section className='pt-20 md:pt-32 2xl:pt-20 w-full h-screen'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#46494e] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10">
              <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                <div className="sm:text-center lg:text-left">
                  <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-5 md:mt-8 p-3">Languages</span></p>
                  </h5>
                  
                  <div className='flex flex-wrap justify-center max-w-xl'>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
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
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/CSS', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/css3.svg"
                            alt='CSS'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/JavaScript', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/JavaScript.svg"
                            alt='JavaScript'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Python_(programming_language)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/Python.svg"
                            alt='Python'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Java_(programming_language)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/java.svg"
                            alt='Java'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/PHP', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/php.svg"
                            alt='PHP'
                            layout='fill'
                        />
                    </div>
                  </div>
                  <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-8 md:mt-10 p-3">Frameworks & Libraries</span></p>
                  </h5>
                  
                  <div className='flex flex-wrap justify-center max-w-xl'>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Flask_(web_framework)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/flask.svg"
                            alt='Flask'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Django_(web_framework)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/django.svg"
                            alt='Django'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Flutter_(software)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/flutter.svg"
                            alt='Flutter'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/React_(JavaScript_library)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/reactjs.svg"
                            alt='React JS'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Next.js', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/NextJS.svg"
                            alt='Next.JS'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://tailwindui.com/', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/tailwind.svg"
                            alt='Tailwind CSS'
                            layout='fill'
                        />
                    </div>
                  </div>
                  <h5 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl">
                    <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-8 md:mt-10 p-3">Other Tools</span></p>
                  </h5>
                  
                  <div className='flex flex-wrap justify-center max-w-xl'>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Docker_(software)', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/docker.svg"
                            alt='Docker'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Amazon_Web_Services', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/aws.svg"
                            alt='AWS'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Microsoft_Azure', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/azure.svg"
                            alt='Microsoft Azure'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/PostgreSQL', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/postgresql.svg"
                            alt='PostgreSQL'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Next.https://en.wikipedia.org/wiki/MongoDB', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/mongodb.svg"
                            alt='MongoDB'
                            layout='fill'
                        />
                    </div>
                    <div className='relative m-2 px-20 py-7 rounded-xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
                        () => {
                          window.open('https://en.wikipedia.org/wiki/Git', '_blank')
                        }
                    }>
                        <Image
                            className="rounded-2xl"
                            src="/assets/git.svg"
                            alt='GIT'
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