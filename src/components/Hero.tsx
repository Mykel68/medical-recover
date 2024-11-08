import { Heart, Stethoscope, Syringe } from "lucide-react"
import Image from "next/image"
import HeroImage from "@/assets/hero.svg"

export default function Component() {
    return (
        <div className=" mx-auto px-4 lg:px-24  py-8 bg-[#FAFAFA]">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12 ">
                <div className="lg:w-3/4 mb-8 lg:mb-0">
                    <p className="text-red-500 font-semibold mb-2">Join Us</p>
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#252B42] mb-4 tracking-wide">
                        A Great Place to Receive Care
                    </h1>
                    <p className="text-[#737373] mb-6">
                        Medical Recover is most focused in helping you discover your most beautiful smile
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-red-500 text-white text-xs md:text-lg px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
                            Get Quote Now
                        </button>
                        <button className="border border-slate-700 text-gray-700 text-xs md:text-lg px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="rounded-3xl p-4">
                        <div className="relative">
                            <Image
                                src={HeroImage}
                                alt="Healthcare Professional"
                                width={400}
                                height={400}
                                className="rounded-2xl "
                            />
                            {/* <div className="absolute top-0 -right-32 w-full h-full bg-gradient-to-br from-purple-500 to-transparent opacity-50 rounded-2xl"></div> */}
                        </div>
                    </div>
                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full -mt-8 -mr-8 z-10"></div> */}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Heart, title: "Online Appointment" },
                    { icon: Stethoscope, title: "Emergency Case" },
                    { icon: Syringe, title: "Cancer Care" },
                ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <service.icon className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">
                            The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}