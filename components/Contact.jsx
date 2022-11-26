import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram, FaSlack, FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'next/link'
import App from 'next/app'

const Contact = () => {
  return (
    <section id='contact' className='bg-[#74777c] w-full h-[100%] relative pb-20'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#46494e" fillOpacity="1" d="M0,224L24,197.3C48,171,96,117,144,128C192,139,240,213,288,202.7C336,192,384,96,432,64C480,32,528,64,576,101.3C624,139,672,181,720,170.7C768,160,816,96,864,106.7C912,117,960,203,1008,250.7C1056,299,1104,309,1152,282.7C1200,256,1248,192,1296,170.7C1344,149,1392,171,1416,181.3L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
        <div className='container mx-auto'>
            <div className="relative bg-[#bcc0c8] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] rounded-3xl shadow-lg shadow-gray-800 border-b-2 border-r-2 border-gray-500">
                <div className="flex flex-col-reverse text-center lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between p-10 sm:p-14">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl">
                            <span className="block xl:inline pt-5">Get in touch</span>
                        </h1>
                        <p className="m-5 p-5 text-base text-justify text-gray-500 sm:mt-20 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                            I am happy to connect. Feel free to reach out to me via any of the following channels:
                        </p>
                        <div className="p-10 mt-10 flex items-center justify-evenly">
                            <FaLinkedin size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                () => {
                                    window.open('https://www.linkedin.com/in/fabioaraujo76', '_blank')
                                }
                            } />
                            <FaGithub size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                () => {
                                    window.open('https://github.com/fabiodearaujo', '_blank')
                                }
                            } />
                            <FaWhatsapp size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                () => {
                                    window.open('https://wa.me/353876644434', '_blank')
                                }
                            } />
                            <a href='mailto:fabioaraujo76@gmail.com' target='_top'><FaEnvelope size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer"/>
                            </a>
                        </div>
                    </div>
                    <div className="lg:relativelg:pt-3 sm:pl-1">
                        <Image
                            className="w-full object-cover h-full rounded-xl"
                            src="/assets/pexels-picjumbocom.jpg"
                            alt=""
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}



export default Contact