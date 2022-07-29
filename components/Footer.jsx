import React from 'react'
import { FaArrowUp, FaCopyright } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className='items-right flex justify-end bg-[#74777c]'>
        <div className='bg-[#464648] py-2 px-4 mr-10 mb-5 shadow-md rounded-full hover:scale-110 ease-in duration-300 cursor-pointer' onClick={
          () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        }><FaArrowUp/></div>
      </div>
      <div className='bg-black text-white text-center text-xs font-bold relative w-full'>
        <p className='py-4'>Fabio De Araujo<span><FaCopyright className='inline-block'/></span> - 2022</p>
      </div>
    </footer>
  )
}

export default Footer