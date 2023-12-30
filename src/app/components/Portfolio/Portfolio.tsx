"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
const Portfolio = () => {
    return (
        <div id="portfolio" className='px-4 md:px-12 flex flex-row justify-center content-center z-10 gap-10'>
            <div className="flex flex-col content-center w-full pt-12 md:px-8 lg:px-32 max-w-[85rem] gap-12">
                <h2 className='text-5xl font-bold w-full text-start'>Portfolio</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                    <Link target="_blank" href="https://dev-hubb.netlify.app/">
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05, y: -15 }}
                            className="flex flex-col justify-start w-[18rem] h-full mx-auto shadow-xl border border-[#919191] rounded-b-xl ">
                            <div className="w-full overflow-hidden">
                                <motion.div
                                    initial={{ scale: 1, x: 0 }}
                                    whileHover={{ scale: 2, x: 115 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full">
                                    <Image
                                        className="relative w-[18rem] h-full"
                                        src="/dev-league.png" width={300} height={300} layout="responsive" alt="dev league" />
                                </motion.div>
                            </div>
                            <div className="w-full pt-4 px-2 pb-2 flex flex-col gap-2">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">Dev League</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                                {/* add link icon here */}
                                <p className="font-normal text-sm text-white opacity-50 inline-block">The digital home for teams of tech enthusiasts</p>
                                <div>
                                    <p className="font-normal text-sm text-white opacity-50 inline-block">Built using:</p>
                                    <span className="flex flex-row gap-4 ">
                                        <span><Image className="inline-block" src="/react.png" width={20} height={20} alt="" /></span>
                                        <span><Image className="inline-block" src="/react-router.png" width={20} height={20} alt="react-router" /></span>
                                        <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="tailwind-css" /></span>
                                    </span>

                                </div>
                            </div>
                        </motion.div>
                    </Link>
                    <Link target="_blank" href="https://citipadi-waitlist.vercel.app//">
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05, y: -15 }}
                            className="flex flex-col justify-start w-[18rem] h-full mx-auto shadow-xl border border-[#919191] rounded-b-xl ">
                            <div className="w-full overflow-hidden">
                                <motion.div
                                    initial={{ scale: 1, x: 0 }}
                                    whileHover={{ scale: 2, x: 115 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full">
                                    <Image
                                        className="relative w-[18rem] h-full"
                                        src="/citipadi-waitlist.png" width={300} height={300} layout="responsive" alt="dev league" />
                                </motion.div>
                            </div>
                            <div className="w-full pt-4 px-2 pb-2 flex flex-col gap-2">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">Citipadi Waitlist</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                                <p className="font-normal text-sm text-white opacity-50 inline-block">Citipadi is an upcoming startup aiming to bridge the information gap within local transportation</p>
                                <div>
                                    <p className="font-normal text-sm text-white opacity-50 inline-block">Built using:</p>
                                    <span className="flex flex-row gap-4">
                                        <span><Image className="inline-block" src="/nextjs.png" width={20} height={20} alt="" /></span>
                                        <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="" /></span>
                                    </span>

                                </div>
                            </div>
                        </motion.div>
                    </Link>
                    <Link target="_blank" href="https://demo-realestate.netlify.app/">
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05, y: -15 }}
                            className="flex flex-col justify-start w-[18rem] h-full mx-auto shadow-xl border border-[#919191] rounded-b-xl ">
                            <div className="w-full overflow-hidden">
                                <motion.div
                                    initial={{ scale: 1, x: 0 }}
                                    whileHover={{ scale: 2, x: 115 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full">
                                    <Image
                                        className="relative w-[18rem] h-full"
                                        src="/homzy-demo.png" width={300} height={300} layout="responsive" alt="dev league" />
                                </motion.div>
                            </div>
                            <div className="w-full pt-4 px-2 pb-2 flex flex-col gap-2">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">Homzy</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                                <p className="font-normal text-sm text-white opacity-50 inline-block">A demo real estate finder app</p>
                                <div>
                                    <p className="font-normal text-sm text-white opacity-50 inline-block">Built using:</p>
                                    <span className="flex flex-row gap-4 m-auto">
                                        <span><Image className="inline-block" src="/react.png" width={20} height={20} alt="" /></span>
                                        <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="" /></span>
                                    </span>

                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio