function Header (){
    return (
        <div className="bg-white overflow-hidden">
            <header  className="flex flex-none items-center bg-white py-10">
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div>
                    <a href="#" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                    <span>Traverser</span>
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


        </div>
    )
}
export default Header;