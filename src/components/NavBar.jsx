import axios from 'axios';
import { useState } from 'react';

const NavBar = ({ userDetails }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {username, email,role, message} = userDetails || {};

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
                                {userDetails && username ? (
                                    <div className="relative">
                                        <button 
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center"
                                        >
                                            Welcome, {username}
                                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                                                <a href={role==='User' ? '/userdashboard' : '/admindashboard'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                                                {role === 'User' && (
                                                    <a href="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Bookings</a>
                                                )}
                                                <hr className="my-1" />
                                                <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                        SignIn
                                    </a>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;