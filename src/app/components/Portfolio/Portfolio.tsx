import Image from "next/image"

const Portfolio = () => {
    return (
        <div id="portfolio" className='px-4 pt-32 md:px-12 flex flex-col justify-center z-10 gap-10 scroll-smooth'>
            <h2 className='text-5xl font-bold w-full text-start'>Portfolio</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="flex flex-col justify-center w-[18rem] shadow-xl border border-[#919191] rounded-b-xl ">
                    <div className="w-full">
                        <Image src="/dev-league.png" width={300} height={300} layout="responsive" alt="dev league" />
                    </div>
                    <div className="w-full pt-4 px-2 pb-2 flex flex-col gap-2">
                        <h4 className="text-xl font-bold">Dev League</h4>
                        {/* add link icon here */}
                        <p className="font-normal text-white opacity-50 inline-block">The digital home for teams of tech enthusiasts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio