"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import GithubSVG from '@/app/_lib/github-142-svgrepo-com'
import XSVG from '@/app/_lib/x-svg'
import LinkedinSVG from '@/app/_lib/linkedin-svg'

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const goToPortfolio = () => {
        const portfolioSection = document.getElementById("portfolio")
        if (!!portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className="w-full fixed overflow-hidden z-20 pt-2 lg:pt dark:bg-[#00000000] backdrop-blur-sm">

            <div className="relative w-full px-4 md:px-12 lg:px-24 md:pt-4">
                <div className=" flex flex-row relative justify-between items-start">
                    {/* mob_codes logo for light and dark mode */}
                    <Image className="dark:hidden inline-block w-10" width={150} height={100} src="https://utfs.io/f/6d35203d-a55d-497c-a9f2-ce19bf7b8792-7gtmbu.svg" alt="logo" />
                    <Image className="dark:inline-block hidden w-10" width={150} height={100} src="https://utfs.io/f/480f992a-39f3-479d-ac45-902412bcb5b2-7sax6c.svg" alt="logo" />

                    {/* sub menu list */}
                    <div className="flex flex-col justify-start gap-4">
                        <div className="flex-row gap-7 w-fit flex relative -top-1">
                            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}>
                                <span className="font-semibold">Home</span>
                            </Link>
                            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}>
                                <span className="font-semibold opacity-50">Projects</span>
                            </Link>
                            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}>
                                <span className="font-semibold opacity-50">Experience</span>
                            </Link>
                            <Link href="#portfolio" onClick={goToPortfolio} scroll={false}>
                                <span className=" font-semibold opacity-50">Blog</span>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className='h-11 w-44 rounded-full flex flex-row px-4 justify-between items-center bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)]'>

                                <Link target="_blank" href="https://twitter.com/moboluwade_"><XSVG /></Link>
                                <Link href="https://www.github.com/moboluwade"><GithubSVG /></Link>
                                <Link target="_blank" href="https://www.linkedin.com/in/boluwade-folarin/"><LinkedinSVG /></Link>
                            </div>
                            <div>
                                <Link href="https://www.github.com/moboluwade"><GithubSVG /></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex flex-row justify-center">
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header