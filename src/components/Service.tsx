import Image from "next/image"
import { Heart, ShoppingCart, MessageCircle, ArrowRight } from "lucide-react"
import img1 from "@/assets/img1.svg"
import img2 from "@/assets/img2.svg"
import img3 from "@/assets/img3.svg"

export default function Component() {
    const services = [
        {
            image: img1,
            title: "Quick examination",
            subtitle: "Painless procedures",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            rating: 4.9,
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48",
        },
        {
            image: img2,
            title: "Online Appointment",
            subtitle: "Cancer Care",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            rating: 4.9,
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48",
        },
        {
            image: img3,
            title: "Emergency Case",
            subtitle: "Best dental surgeons",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            rating: 4.9,
            sales: 15,
            oldPrice: "$16.48",
            newPrice: "$6.48",
        },
    ]

    return (
        <div className=" mx-auto px-4 lg:px-24 py-12 bg-cyan-50">
            <div className="mb-12">
                <p className="text-red-500 font-semibold mb-2">Practice Advice</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Department</h2>
                <p className="text-gray-600">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                                Sale
                            </span>
                            <div className="absolute bottom-4 left-4 flex space-x-4">
                                <button className="bg-white p-2 rounded-full">
                                    <Heart className="h-5 w-5 text-gray-600" />
                                </button>
                                <button className="bg-white p-2 rounded-full">
                                    <ShoppingCart className="h-5 w-5 text-gray-600" />
                                </button>
                                <button className="bg-white p-2 rounded-full">
                                    <MessageCircle className="h-5 w-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-sm text-blue-600 mb-4">{service.subtitle}</p>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span className="font-semibold mr-2">{service.rating}</span>
                                <span className="text-gray-500">{service.sales} Sales</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-gray-500 line-through mr-2">{service.oldPrice}</span>
                                    <span className="text-blue-600 font-semibold">{service.newPrice}</span>
                                </div>
                                <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}