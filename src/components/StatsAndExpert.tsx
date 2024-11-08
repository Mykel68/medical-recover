"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTA from "@/assets/cta.png";
import CountUp from "react-countup";

export default function Component() {
    return (
        <div className="mx-auto px-4 lg:px-24  py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 place-content-between mb-16 text-center">
                {[
                    { value: 15000, label: "Happy Customers", suffix: "K" },
                    { value: 150000, label: "Monthly Visitors", suffix: "K" },
                    { value: 15, label: "Countries Worldwide" },
                    { value: 100, label: "Top Partners", suffix: "+" },
                ].map((stat, index) => (
                    <div key={index}>
                        <h2 className="text-2xl md:text-4xl  font-bold text-red-500 mb-2">
                            <CountUp
                                end={stat.value}
                                duration={2.5}
                                suffix={stat.suffix ? stat.suffix : ""}
                                enableScrollSpy
                                scrollSpyOnce
                            />
                        </h2>
                        <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between py-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="w-12 h-1 bg-red-500 mb-6"></div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
                    <p className="text-gray-600 mb-6">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors duration-200"
                    >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
                <div className="md:w-1/3 relative">
                    <Image
                        src={CTA}
                        alt="Medical expert holding a test tube"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
