"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Landing = () => {
  const [toggleTo, setToggleTo] = useState(1)
  useEffect(() => {
    setTimeout(() => {
      if (toggleTo < 2) {
        setToggleTo(toggleTo + 1)
      } else {
        setToggleTo(1)
      }
    }, 5000);
    // make this happen only whileinview later
  }, [toggleTo])

  const goToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (!!portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='px-4 pt-10 pb-32 md:pt-28 md:px-12 flex flex-row justify-center z-10 dark:bg-[rgba(34,34,34,0.8)] '>
      <div className=' flex flex-col md:flex-row justify-center gap-12 md:px-8 lg:px-32 w-full max-w-[85rem]'>
        <div className='flex flex-col justify-center content-center'>
          <div className='m-auto w-[20rem] h-[20rem] rounded-full bg-[rgb(68,68,68)] shadow-2xl opacity-80 flex flex-row justify-center content-center'>
            <Image className='rounded-full m-auto md:hidden' src="/profile.jpg" width={250} height={250} alt="mob's profile" />
            <Image className='rounded-full m-auto hidden md:block' src="/profile.jpg" width={300} height={300} alt="mob's profile" />
          </div>
        </div>
        <div className='flex flex-col justify-center gap-6'>
          {/* replace javascript with a js logo and a ts logo */}
          <div className='flex flex-row justify-start gap-2'>
            <h4 className='font-normal md:text-xl text-white opacity-50 inline-block'>Full Stack</h4>
            <div className='flex flex-col relative '>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 100, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className=''>
                <Image className={`rounded-sm ${toggleTo !== 1 ? 'hidden' : 'inline-block'}`} src="/ts-logo-128.png" width={24} height={24} alt='ts-logo' />
              </motion.div>
              <motion.div className="relative">
                <Image className={`rounded-sm ${toggleTo !== 2 ? 'hidden' : 'inline-block'}`} src="/js.png" width={24} height={24} alt='js-logo' />
              </motion.div>
            </div>
            <h4 className='font-normal md:text-xl text-white opacity-50 inline-block'>Web Developer</h4>
          </div>
          <h2 className='text-5xl font-bold'>Moboluwade Folarin</h2>
          <h4 className='md:text-lg xl:max-w-[40rem] max-w-[90%]'>Hi, I am a builder dedicated to bringing scalable and next-level web applications to life with music, with words, and with code.</h4>
          {/* <h3>Let`&apos;`s Build!</h3> */}
          <div className='flex flex-row gap-4 w-fit'>
            <button className='border-[3px] border-blue-500 rounded-3xl px-6 py-2'>
              ... more coming soon
            </button>

            {/* <Link href="https://wa.link/eyx709">
              <button className='border-[3px] border-white rounded-3xl px-6 py-2'>Contact Me</button>
            </Link> */}

          </div>
          <h4 className='md:text-lg xl:max-w-[40rem] max-w-[90%] inline'>
            <span className='pr-1'>Meanwhile check out my portfolio projects</span>
            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}><Image className='inline pt-2' src="/point-down.png" width={20} height={20} alt='' /></Link>

          </h4>

        </div>
      </div>
    </div>
  )
}

export default Landing