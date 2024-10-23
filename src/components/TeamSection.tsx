import Image from "next/image"
import { Facebook, Instagram, Twitter, } from "lucide-react"
import User1 from "@/assets/user-cover-1.svg"
import User2 from "@/assets/user-cover-2.svg"
import User3 from "@/assets/user-cover-3.svg"
import User4 from "@/assets/user-cover-4.svg"
export default function TeamSection() {
    const teamMembers = [
        {
            name: "Julian Jameson",
            profession: "Profession",
            image: User1,
        },
        {
            name: "Julian Jameson",
            profession: "Profession",
            image: User2,
        },
        {
            name: "Julian Jameson",
            profession: "Profession",
            image: User3,
        },
        {
            name: "Julian Jameson",
            profession: "Profession",
            image: User4,
        },
    ]

    return (
        <section className="py-16 px-4 xl:px-48">
            <div className="max-w-6xl mx-auto">
                <div className="item-start flex flex-col ">
                    <p className="text-red-500 font-semibold mb-2">Team</p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
                    <p className="text-gray-600 mb-12 max-w-3xl ">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-4">{member.profession}</p>
                                <div className="flex space-x-4">
                                    <Facebook className="text-red-500 hover:text-red-600 cursor-pointer" />
                                    <Instagram className="text-red-500 hover:text-red-600 cursor-pointer" />
                                    <Twitter className="text-red-500 hover:text-red-600 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
