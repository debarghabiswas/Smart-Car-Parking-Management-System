import React from "react";

const Home = () =>{
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome To The Car Parking System</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your one stop solution for managing parking lots and bookings.</p>
                </div>
                
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Booking</h3>
                            <p className="text-gray-600">Book your parking spot in advance with just a few clicks.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Availability</h3>
                            <p className="text-gray-600">Check available parking spaces in real-time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Payments</h3>
                            <p className="text-gray-600">Safe and secure online payment processing.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Why Choose Us?</h2>
                    <ul className="space-y-3 max-w-lg mx-auto">
                        <li className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            24/7 customer support
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Affordable parking rates
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Multiple payment options
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Easy cancellation policy
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Mobile-friendly interface
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Home;