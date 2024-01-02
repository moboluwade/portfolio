import LinkedinSVG from "@/app/_lib/linkedin-svg"
import WhatsappSVG from "@/app/_lib/whatsapp-svg"
import XSVG from "@/app/_lib/x-svg"
import Link from "next/link"
import Year from "./Year"
const Footer = () => {
    return (
        <div className="fixed bottom-0 px-4 md:px-12 border-t border-[#333] w-full bg-[#222]">
            <div className="w-full pb-2 pt-4 flex flex-row justify-between">
                <Year />
                <div className="flex flex-row justify-start gap-8">
                    <div className="opacity-80 hover:opacity-100">
                        <Link target="_blank" href="https://www.linkedin.com/in/boluwade-folarin/"><LinkedinSVG /></Link>
                    </div>
                    <div className="opacity-80 hover:opacity-100">
                        <Link href="https://wa.link/eyx709"><WhatsappSVG /></Link>
                    </div>
                    <div className="opacity-80 hover:opacity-100">
                        <Link target="_blank" href="https://twitter.com/moboluwade_"><XSVG /></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer