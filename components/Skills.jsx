import React from 'react'
import SkillItem from './SkillItem'

const Skills = () => {
  return (

    <section className='bg-[#74777c] w-full h-[100%]'>
        <svg id='skills' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#46494e" fillOpacity="1" d="M0,224L24,197.3C48,171,96,117,144,128C192,139,240,213,288,202.7C336,192,384,96,432,64C480,32,528,64,576,101.3C624,139,672,181,720,170.7C768,160,816,96,864,106.7C912,117,960,203,1008,250.7C1056,299,1104,309,1152,282.7C1200,256,1248,192,1296,170.7C1344,149,1392,171,1416,181.3L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      <div className='container mx-auto'> 
        <div className="relative bg-[#74777c]">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight font-bold text-white md:text-5xl">
                        <p className='pt-3 pb-5 m-10'><span className="block text-black mt-5 md:mt-8 pb-3">Languages</span></p>
                    </h2>
                    <div className='flex align-center justify-center'>
                        <div className='flex flex-wrap items-center justify-center max-w-xl'>
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/HTML5'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#e34f26]'}
                                backgroundImage='/assets/badges/html5.svg'
                                title='HTML5'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/CSS'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#1572b6]'}
                                backgroundImage='/assets/badges/css3.svg'
                                title='CSS3'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/JavaScript'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#323330]'}
                                backgroundImage='/assets/badges/javascript.svg'
                                title='JavaScript'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Python_(programming_language)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#004d7a]'}
                                backgroundImage='/assets/badges/python.svg'
                                title='Python'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Java_(programming_language)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#5082a2]'}
                                backgroundImage='/assets/badges/java.svg'
                                title='Java'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/PHP'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#563d7c]'}
                                backgroundImage='/assets/badges/php.svg'
                                title='PHP'
                            />
                        </div>
                    </div>
                    <h2 className="text-4xl tracking-tight font-bold text-white md:text-5xl">
                        <p className='pt-3 pb-5 m-10'><span className="block text-black mt-5 md:mt-8 pb-3">Frameworks & Libraries</span></p>
                    </h2>
                    <div className='flex align-center justify-center'>
                        <div className='flex flex-wrap items-center justify-center max-w-xl'>
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Flask_(web_framework)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#000000]'}
                                backgroundImage='/assets/badges/flask.svg'
                                title='Flask'
                            />                       
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Django_(web_framework)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#092e20]'}
                                backgroundImage='/assets/badges/django.svg'
                                title='Django'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Flutter_(software)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#02569b]'}
                                backgroundImage='/assets/badges/flutter.svg'
                                title='Flutter'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/React_(JavaScript_library)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#000000]'}
                                backgroundImage='/assets/badges/reactjs.svg'
                                title='React JS'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Next.js'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#000000]'}
                                backgroundImage='/assets/badges/nextjs.svg'
                                title='Next.JS'
                            />
                            <SkillItem
                                skillURL='https://tailwindui.com/'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#06b6d4]'}
                                backgroundImage='/assets/badges/tailwind.svg'
                                title='Tailwind CSS'
                            />
                        </div>
                    </div>
                    <h2 className="text-4xl tracking-tight font-bold text-white md:text-5xl">
                        <p className='pt-3 pb-5 m-10'><span className="block text-black mt-5 md:mt-8 pb-3">Other Tools...</span></p>
                    </h2>
                    <div className='flex align-center justify-center'>
                        <div className='flex flex-wrap items-center justify-center max-w-xl'>
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Docker_(software)'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#2ca5e0]'}
                                backgroundImage='/assets/badges/docker.svg'
                                title='Docker'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Amazon_Web_Services'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#232f3e]'}
                                backgroundImage='/assets/badges/aws.svg'
                                title='AWS'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/Microsoft_Azure'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#0089d6]'}
                                backgroundImage='/assets/badges/azure.svg'
                                title='Microsoft Azure'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/PstgreSQL'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#336791]'}
                                backgroundImage='/assets/badges/postgresql.svg'
                                title='PostgreSQL'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/MongoDB'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#3f2e1e]'}
                                backgroundImage='/assets/badges/mongodb.svg'
                                title='MongoDB'
                            />
                            <SkillItem
                                skillURL='https://en.wikipedia.org/wiki/GIT'
                                decoration={'relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer bg-[#302f2f]'}
                                backgroundImage='/assets/badges/git.svg'
                                title='GIT'
                            />
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Skills