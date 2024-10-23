import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from "lucide-react"
export default function Footer() {
    const footerSections = [
        {
            title: "Company Info",
            links: ["About Us", "Carrier", "We are hiring", "Blog"],
        },
        {
            title: "Legal",
            links: ["About Us", "Carrier", "We are hiring", "Blog"],
        },
        {
            title: "Features",
            links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
        },
        {
            title: "Resources",
            links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
        },
    ]

    return (
        <footer className="bg-gray-100 py-16 px-4 ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center justify-start">
                            <Phone className="w-5 h-5 mr-2 text-red-500" />
                            <span >(480) 555-0103-1111. </span>
                        </li>
                        <li className="flex items-center justify-start">
                            <MapPin className="w-5 h-5 mr-2 text-red-500" />
                            <span >4517 Washington Ave. </span>
                        </li>
                        <li className="flex items-center justify-start">
                            <Mail className="w-5 h-5 mr-2 text-red-500" />
                            <span >debra@example.com </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 mb-4 md:mb-0">Made With Love By Figmaland All Right Reserved</p>
                <div className="flex space-x-4">
                    <Facebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
                    <Instagram className="text-pink-600 hover:text-pink-700 cursor-pointer" />
                    <Twitter className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                </div>
            </div>
        </footer>
    )
}