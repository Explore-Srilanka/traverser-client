function Header (){
    return (
        <div className="bg-white overflow-hidden">
            <header  className="flex flex-none items-center bg-white py-10">
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div>
                    <a href="#" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                    <span>Company</span>
                    </a>
                </div>
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
                    <nav className="space-x-4 md:space-x-6">
                        <a href="#" className="font-semibold text-gray-900 hover:text-gray-500">
                            <span>Features</span>
                        </a>
                        <a href="#" className="font-semibold text-gray-900 hover:text-gray-500">
                            <span>Pricing</span>
                        </a>
                        <a href="#" className="font-semibold text-gray-900 hover:text-gray-500">
                            <span>Support</span>
                        </a>
                    </nav>
                </div>
                </div>
            </header>
            <div className="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                <div className="lg:w-1/2 lg:flex lg:items-center">
                <div>
                    <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-green-700 bg-green-200">
                    New dashboard is live!
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Premium leads for all your SaaS projects
                    </h2>
                    <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                    Focus on building your amazing service and we will do the rest. We grew more than 10,000 online businesses.
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                        <span>Join us today</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                        <span>Start a 30-day trial</span>
                    </button>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
                <div className="lg:w-96 relative">
                    <div className="absolute pattern-dots-xl text-indigo-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
                    <div className="absolute pattern-dots-xl text-indigo-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
                    <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
                    <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
                    <img src="https://source.unsplash.com/MChSQHxGZrQ/800x1000" alt="Hero Image" className="relative rounded-lg mx-auto shadow-lg" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header;