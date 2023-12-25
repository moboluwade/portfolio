import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='px-4 pt-24 md:px-12 flex flex-col justify-center'>
      <div className=' flex flex-col md:flex-row justify-center gap-12 md:px-8 lg:px-32'>
        <div>
          <div className=' w-[18rem] h-[18rem] rounded-full bg-[#444] shadow-2xl opacity-80 flex flex-row justify-center content-center'>
            <Image className='rounded-full m-auto' src="/profile.jpg" width={250} height={250} alt="mob's profile" />
          </div>
        </div>
        <div className='flex flex-col justify-center gap-6'>
          <h4 className='font-normal md:text-xl text-white opacity-50'>Full Stack JavaScript Web Developer</h4>
          <h2 className='md:text-5xl font-bold'>Moboluwade Folarin</h2>
          <h4 className='md:text-lg'>Hi, I am a builder dedicated to bringing scalable and next-level web applications to life with music, with words, and with code.</h4>
          {/* <h3>Let`&apos;`s Build!</h3> */}
        </div>
      </div>
    </div>
  )
}

export default Landing