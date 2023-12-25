import LinkedinSVG from "@/app/_lib/linkedin-svg"
import WhatsappSVG from "@/app/_lib/whatsapp-svg"
import XSVG from "@/app/_lib/x-svg"

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="fixed bottom-0 px-4 md:px-12 border-t border-[#333] w-full bg-[#222]">
            <div className="w-full pb-2 pt-4 flex flex-row justify-between">
                <div className="opacity-80">
                    @ {date} Nigeria
                </div>
                <div className="flex flex-row justify-start gap-8">
                    <div className="opacity-80 hover:opacity-100">
                        <LinkedinSVG />
                    </div>
                    <div className="opacity-80 hover:opacity-100">
                        <WhatsappSVG />
                    </div>
                    <div className="opacity-80 hover:opacity-100">
                        <XSVG />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer