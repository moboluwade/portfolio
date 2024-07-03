import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";


interface props {
    showPortfolio: boolean;
    currentProject: string;
}
const PseudoPortfolio: React.FC<props> = ({ showPortfolio, currentProject }) => {
    return (
        <div className={`transform ${showPortfolio ? 'animation-slide-in' : 'animation-slide-out'} dark:shadow-[#FFFFFF] shadow-darkBg shadow-sm md:pr-8 lg:pr-24 pr-4 pl-4 absolute right-0 top-0 w-[40%] h-screen rounded-lg pt-12 md:pt-24 flex flex-col items-end justify-start z-10 bg-primaryBg dark:bg-darkBg`}>
            {
                currentProject === "dev-league" && (
                    <motion.div
                        initial={{ scale: 1 }}
                        // whileHover={{ scale: 1.05, y: -15 }}
                        className="flex flex-col justify-start w-full h-full mx-auto  rounded-b-xl ">
                        <div className="w-full overflow-hidden">
                            {/* image or video */}
                            <motion.div
                                initial={{ scale: 1, x: 0 }}
                                whileHover={{ scale: 2, x: 115 }}
                                transition={{ duration: 0.8 }}
                                className="w-full">
                                <Image
                                    className="relative w-full h-full"
                                    src="/dev-league.png" width={300} height={300} layout="responsive" alt="homzy" />
                            </motion.div>
                        </div>

                        <div className="w-full pt-4 pb-2 flex flex-col gap-2 ">
                            <Link target="_blank" href="https://dev-hubb.netlify.app/">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">Dev League</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                            </Link>
                            {/* add link icon here */}
                            <p className="font-normal text-sm text-white opacity-50 inline-block">The digital home for teams of tech enthusiasts</p>
                            <div className="">
                                <p className="font-normal text-sm text-white opacity-50 inline-block">Built using:</p>
                                <span className="flex flex-row gap-4 ">
                                    <span><Image className="inline-block" src="/react.png" width={20} height={20} alt="react" title="React.js" /></span>
                                    <span><Image className="inline-block" src="/react-router.png" width={20} height={20} alt="react-router" title="React Router" /></span>
                                    <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="tailwind-css" title="TailwindCSS" /></span>
                                    <span><Image className="inline-block" src="/framer-motion.png" width={20} height={20} alt="react-router" title="Framer Motion" /></span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )
            }
            {
                currentProject === "chill-zone" && (
                    <motion.div
                        initial={{ scale: 1 }}
                        // whileHover={{ scale: 1.05, y: -15 }}
                        className="flex flex-col justify-start w-full h-full mx-auto  rounded-b-xl ">
                        <div className="w-full overflow-hidden">
                            {/* image or video */}
                            <motion.div
                                initial={{ scale: 1, x: 0 }}
                                whileHover={{ scale: 2, x: 115 }}
                                transition={{ duration: 0.8 }}
                                className="w-full">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="relative w-full h-full"
                                    src="https://utfs.io/f/9af60b16-3d90-45a6-b19f-90fac99dec23-o0qui6.com).mp4" width={300} height={300} />
                            </motion.div>
                        </div>

                        <div className="w-full pt-4 pb-2 flex flex-col gap-2 ">
                            <Link target="_blank" href="https://top-faves.netlify.app/">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">UI Marquee Scroll</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                            </Link>
                            {/* add link icon here */}
                            <p className="font-normal text-sm text-white opacity-50 inline-block">A scroll triggered animation web project with dynamic marquee borders.</p>
                            <div>
                                <p className="font-normal text-sm inline-block">Tools used:</p>
                                <span className="flex flex-row gap-4 ">
                                    <span><Image className="inline-block" src="/react.png" width={20} height={20} alt="react" title="React.js" /></span>
                                    <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="tailwind-css" title="TailwindCSS" /></span>
                                    <span><Image className="inline-block" src="/framer-motion.png" width={20} height={20} alt="react-router" title="Framer Motion" /></span>
                                </span>
                                {/* <span className="flex flex-row gap-2 text-sm items-start flex-wrap">
                                    <span>
                                        <Image className="inline-block" src="/react.png" width={15} height={15} alt="react" title="React.js" />
                                        React </span>
                                    <span>
                                        <Image className="inline-block" src="/tailwindcss.png" width={15} height={15} alt="tailwind-css" title="TailwindCSS" />
                                        TailwindCSS </span>
                                    <span>
                                        <Image className="inline-block bg-primaryBg -mt-1 pt-1" src="/framer-motion.png" width={15} height={15} alt="react-router" title="Framer Motion" />
                                        Framer Motion</span>
                                </span> */}

                            </div>
                        </div>
                    </motion.div>
                )
            }
            {
                currentProject === "homzy" && (

                    <motion.div
                        initial={{ scale: 1 }}
                        // whileHover={{ scale: 1.05, y: -15 }}
                        className="flex flex-col justify-start w-full h-full mx-auto  rounded-b-xl ">
                        <div className="w-full overflow-hidden">
                            {/* image or video */}
                            <motion.div
                                initial={{ scale: 1, x: 0 }}
                                whileHover={{ scale: 2, x: 115 }}
                                transition={{ duration: 0.8 }}
                                className="w-full">
                                <Image
                                    className="relative w-full h-full"
                                    src="/homzy-demo.png" width={300} height={300} layout="responsive" alt="homzy" />
                            </motion.div>
                        </div>

                        <div className="w-full pt-4 pb-2 flex flex-col gap-2 ">
                            <Link target="_blank" href="https://top-faves.netlify.app/">
                                <h4 className="text-xl font-bold w-full">
                                    <span className=" pr-1">UI Marquee Scroll</span>
                                    <Image className="inline pb-2" src="/white-external-link.png" width={12} height={12} alt="" />
                                </h4>
                            </Link>
                            {/* add link icon here */}
                            <p className="font-normal text-sm text-white opacity-50 inline-block">A demo real estate finder app</p>
                            <div>
                                <p className="font-normal text-sm text-white opacity-50 inline-block">Built using:</p>
                                <span className="flex flex-row gap-4 m-auto">
                                    <span><Image className="inline-block" src="/react.png" width={20} height={20} alt="React.js" title="React.js" /></span>
                                    <span><Image className="inline-block" src="/tailwindcss.png" width={20} height={20} alt="TailwindCSS" title="TailwindCSS" /></span>
                                </span>

                            </div>
                        </div>
                    </motion.div>

                )
            }


        </div >
    )
}

export default PseudoPortfolio