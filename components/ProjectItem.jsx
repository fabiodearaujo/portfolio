import React from 'react'
import Image from 'next/image'
import {FaGithub} from 'react-icons/fa'
import {BiWindowOpen} from 'react-icons/bi'

const ProjectItem = ({image, title, description, techUsed, linkGit, linkDeployed}) => {
  return (
    <div className='relative  bg-[#76797e] flex items-center justify-center h-auto w-full shadow-lg shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2c2c2d] to-[#1a1f2a]'>
        <Image
            className="rounded-xl group-hover:scale-105 ease-in duration-300 group-hover:opacity-5"
            src={image}
            alt={title}
        />
        <div className="hidden group-hover:absolute inset-0 group-hover:flex group-hover:flex-col items-center justify-center">
            <h3 className='text-bold text-2xl text-center'>{title}</h3>
            <p className='text-sm mt-3 px-10'>{description}</p>
            <p className='text-bold my-3 px-10 text-center'>{techUsed}</p>
            <div className="flex justify-between mt-5">
                <div className='grid-cols-1 text-center'>
                    <a href={linkGit} target='_blank' rel='noopener noreferrer'>
                        <div className="rounded-full bg-zinc-400 shadow-lg shadow-gray-700 p-3 cursor-pointer items-center justify-center px-5 mx-5">
                            <FaGithub size={20} />
                        </div>
                    </a>
                    <p>Code</p>
                </div>
                <div className='grid-cols-1 text-center'>
                    <a href={linkDeployed} target='_blank' rel='noopener noreferrer'>
                        <div className="rounded-full bg-zinc-400 shadow-lg shadow-gray-700 p-3 cursor-pointer items-center justify-center px-5 mx-5">
                            <BiWindowOpen size={20} />
                        </div>
                    </a>
                    <p>Live</p>
                </div>
            </div>
        </div>         
    </div> 
    )
}


export default ProjectItem