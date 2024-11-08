import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className=" mx-auto px-4 lg:px-24">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-gray-900">
                            MedicalRecov
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Product
                        </a>
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-red-500 hover:text-red-600 hidden md:block">
                            Login
                        </a>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">
                            JOIN US
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}