const NavBar = () => {
    return (
        <div className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        <a href="/" className="hover:text-blue-600 transition duration-300">
                            Smart Parking System
                        </a>
                    </h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>
                                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contactus" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Pricing</a>
                            </li>
                            <li>
                                <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                    SignIn
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;