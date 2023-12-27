import Image from "next/image"

const Portfolio = () => {
    return (
        <div className='px-4 pt-10 md:px-12 flex flex-col justify-center z-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="flex flex-col justify-center">
                    <div>
                        <Image src="/dev-league.png" width={300} height={300} alt="dev league" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio