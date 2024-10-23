export default function NewsletterSignup() {
    return (
        <section className="py-16 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <p className="text-red-500 font-semibold mb-2">Newsletter</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">JOIN US</h2>
                <p className="text-gray-600 mb-8">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <form className="flex flex-col sm:flex-row max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="flex-grow px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-red-600 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
