"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PseudoPortfolio from '../PseudoPortfolio/PseudoPortfolio'

const Landing = () => {
  const [toggleTo, setToggleTo] = useState(1)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [currentProject, setCurrentProject] = useState("")

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

  const togglePortfolio = (project: string) => {
    setShowPortfolio(!showPortfolio)
    setCurrentProject(project)
  }

  const goToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (!!portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='px-4 pt-12 md:pt-24 md:px-8 flex flex-row justify- items-start z-10 dark:bg-darkBg max-w-[96rem] w-full relative overflow-hidden'>
      <div className={` flex flex-col md:flex-col justify-center gap-2 md:px-8 lg:px-32 w-full max-w-[85rem] overflow-hidden `}>

        {/* profile info */}
        <div className={`flex flex-col md:flex-col justify-center gap-4 ${showPortfolio && `opacity-50`}`}>

          {/* profile image */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <Image className={`rounded-[60px] m-auto md:hidden`} src="/profile.jpg" width={200} height={200} alt="mob's profile" />
            <Image className={`rounded-[40px]  hidden md:block border-[6px] border-darkBg dark:border-primaryBg shadow-lg`} src="/profile.jpg" width={165} height={180} alt="mob's profile" />
          </div>

          <div className='flex flex-col justify-center '>
            {/* type of developer copy */}
            <div className='flex flex-row justify-start items-center gap-2 h-8 '>
              <div className='flex flex-col relative '>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 100, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className=''>
                  <Image className={`rounded-sm pb-1 ${toggleTo !== 1 ? 'hidden' : 'inline-block'}`} src="/ts-logo-128.png" width={24} height={24} alt='ts-logo' />
                </motion.div>
                <motion.div className="relative">
                  <Image className={`rounded-sm ${toggleTo !== 2 ? 'hidden' : 'inline-block'}`} src="/js.png" width={24} height={24} alt='js-logo' />
                </motion.div>
              </div>
              <h4 className='font-normal pl-3 md:text-md text-white opacity-50 inline-block'>Web Developer</h4>
            </div>
            {/*dev name */}
            <div className='flex flex-row justify-start items-end gap-2'>
              <h2 className='text-3xl font-bold pt-0'>Moboluwade Folarin</h2>
              <h2 className='inline-block pl-1 pb-1'>(mob_codes)</h2>
            </div>
            <h4 className='md:max-w-[30rem] max-w-[10rem]'>Hi, I am a builder dedicated to bringing scalable and next-level web applications to life with music, with words, and with code.</h4>
            {/* <h3>Let`&apos;`s Build!</h3> */}
            <div className='flex flex-row gap-4 w-fit pt-2'>
              <span>Reactjs | Nextjs | Nodejs</span>
              {/* <button className='border-[3px] border-blue-500 rounded-3xl px-6 py-2'>
              ... more coming soon
            </button> */}

            </div>
          </div>

        </div>

        {/* porfolio intro bit */}
        <div className='flex flex-col gap-1'>

          <h4 className='pt-4 md:text-md font-semibold xl:max-w-[40rem] max-w-[90%] inline'>
            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}>
              {/* <span className='pr-1'>Meanwhile check out my portfolio projects</span> */}
              {/* <span className='pr-1  underline underline-offset-2'>Have a look through my favorite portfolio projects</span> */}
              <span className='pr-1'>Click to have a look at my favorite projects</span>
              {/* <Image className='inline pt-2' src="/point-down.png" width={20} height={20} alt='' /> */}
            </Link>
          </h4>
          <div className="flex flex-row flex-wrap gap-2 underline max-w-[50%] w-full">
            <button onClick={() => togglePortfolio("dev-league")}>Dev League</button>
            <button onClick={() => togglePortfolio("chill-zone")}>Chill Zone</button>
            <button onClick={() => togglePortfolio("homzy")}>Homzy</button>
            {/* <button onClick={togglePortfolio}>Nextjs</button> */}

          </div>
        </div>
      </div>
      {
        showPortfolio && <PseudoPortfolio showPortfolio={showPortfolio} currentProject={currentProject} />
      }

    </div>
  )
}

export default Landing