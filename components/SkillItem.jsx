import React from 'react'
import Image from 'next/image'

const SkillItem = ({skillURL, backgroundImage, title, decoration}) => {
  return (
      <div className={decoration}>
        <a href={skillURL} target='_blank' rel='noopener noreferrer'>
          <Image
              className="rounded-2xl"
              src={backgroundImage}
              alt={title}
              layout='fill'
          />
        </a>
      </div>
  )
}

export default SkillItem