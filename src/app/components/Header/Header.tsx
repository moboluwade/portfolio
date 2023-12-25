"use client"

import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className="w-full fixed overflow-hidden">
            <div className="relative w-full">
                <div className=" flex flex-row px-4 pt-2 relative justify-between">
                    <span>brand</span>
                    <div className="flex-row gap-4 w-fit content-center hidden md:flex">
                        <button>
                            <Link href={"/"}>Portfolio</Link>
                        </button>
                        <button>
                            <Link href={"/"}>Skills</Link>
                        </button>
                        <button>
                            <Link href={"/"}>Contact Me</Link>
                        </button>
                    </div>
                    <button
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="cursor-pointer flex flex-row content-center md:hidden">
                        <span>menu</span>
                    </button>
                </div>
                <div className={`absolute top-0 w-full h-32 bg-white ${showSidebar ? `left-0` : `left-full`}`}>
                    {/* serves as nav toggler */}
                    <div
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="text-black pl-4 pt-4 w-fit">
                        X
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header