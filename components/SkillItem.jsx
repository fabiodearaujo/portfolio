import React from 'react'
import Image from 'next/image'

const SkillItem = ({skillURL, backgroundImage, title}) => {
  return (
    <div className='relative m-2 px-20 py-7 rounded-2xl shadow-gray-900 shadow-md  hover:scale-105 ease-in duration-300 cursor-pointer' onClick={
        () => {
          window.open({skillURL}, '_blank')
        }
    }>
        <Image
            className="rounded-2xl"
            src={backgroundImage}
            alt={title}
            layout='fill'
        />
    </div>
  )
}

export default SkillItem