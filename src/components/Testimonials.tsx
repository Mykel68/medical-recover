import Image from "next/image"
import { Star } from "lucide-react"
import Person1 from "@/assets/person1.svg"
import Person2 from "@/assets/person2.svg"
import Person3 from "@/assets/person3.svg"

export default function Component() {
    const testimonials = [
        {
            id: 1,
            image: Person1,
            name: "Regina Miles",
            role: "Designer",
        },
        {
            id: 2,
            image: Person2,
            name: "Regina Miles",
            role: "Designer",
        },
        {
            id: 3,
            image: Person3,
            name: "Regina Miles",
            role: "Designer",
        },
    ]

    return (
        <div className=" mx-auto px-4 lg:px-24 py-16">
            <div className="text-start mb-16">
                <p className="text-red-500 font-semibold mb-2">Practice Advice</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Leading Medicine</h2>
                <p className="text-gray-600 max-w-2xl ">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex flex-col items-center text-center">
                        <div className="flex mb-4">
                            {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="text-gray-600 mb-6">
                            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
                        </p>
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full mb-2"
                        />
                        <h3 className="font-semibold text-red-500">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}