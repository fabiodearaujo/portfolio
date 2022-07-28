import React from 'react'
import Image from 'next/image'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <div className="relative mt-10 h-[10px]"></div>,
    <section className='pt-20 md:pt-32 2xl:pt-20 w-full h-[100%]'>
      <div className='container mx-auto'> 
        <div className="relative bg-[#46494e] m-3 2xl:w-2/3 xl:w-3/4 2xl:ml-[20%] xl:ml-[15%] md:m-10">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl md:text-5xl">
                        <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-5 md:mt-8 p-3">Languages</span></p>
                    </h2>
                    <div className='flex flex-wrap justify-center max-w-xl'>
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/HTML5'
                            backgroundImage='/assets/badges/HTML5.svg'
                            title='HTML5'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/CSS'
                            backgroundImage='/assets/badges/css3.svg'
                            title='CSS3'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/JavaScript'
                            backgroundImage='/assets/badges/JavaScript.svg'
                            title='JavaScript'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Python_(programming_language)'
                            backgroundImage='/assets/badges/Python.svg'
                            title='Python'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Java_(programming_language)'
                            backgroundImage='/assets/badges/java.svg'
                            title='Java'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/PHP'
                            backgroundImage='/assets/badges/php.svg'
                            title='PHP'
                        />
                    </div>
                    <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl md:text-5xl">
                        <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-8 md:mt-10 p-3">Frameworks & Libraries</span></p>
                    </h2>
                    <div className='flex flex-wrap justify-center max-w-xl'>
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Flask_(web_framework)'
                            backgroundImage='/assets/badges/flask.svg'
                            title='Flask'
                        />                       
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Django_(web_framework)'
                            backgroundImage='/assets/badges/django.svg'
                            title='Django'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Flutter_(software)'
                            backgroundImage='/assets/badges/flutter.svg'
                            title='Flutter'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/React_(JavaScript_library)'
                            backgroundImage='/assets/badges/reactjs.svg'
                            title='React JS'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Next.js'
                            backgroundImage='/assets/badges/NextJS.svg'
                            title='Next.JS'
                        />
                        <SkillItem
                            skillURL='https://tailwindui.com/'
                            backgroundImage='/assets/badges/tailwind.svg'
                            title='Tailwind CSS'
                        />
                    </div>
                    <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl md:text-5xl">
                        <p className='pt-3 pb-5'><span className="block text-yellow-600 mt-8 md:mt-10 p-3">Other Tools</span></p>
                    </h2>
                  
                    <div className='flex flex-wrap justify-center max-w-xl'>
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Docker_(software)'
                            backgroundImage='/assets/badges/docker.svg'
                            title='Docker'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Amazon_Web_Services'
                            backgroundImage='/assets/badges/aws.svg'
                            title='AWS'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/Microsoft_Azure'
                            backgroundImage='/assets/badges/azure.svg'
                            title='Microsoft Azure'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/PstgreSQL'
                            backgroundImage='/assets/badges/postgresql.svg'
                            title='PostgreSQL'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/MongoDB'
                            backgroundImage='/assets/badges/mongodb.svg'
                            title='MongoDB'
                        />
                        <SkillItem
                            skillURL='https://en.wikipedia.org/wiki/GIT'
                            backgroundImage='/assets/badges/git.svg'
                            title='GIT'
                        />
                    </div>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Skills