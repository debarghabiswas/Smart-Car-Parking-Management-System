import { useState } from "react";

const Signup = () =>{
    const [selected, setSelected] = useState("");
    const handleChange = (e) => setSelected(e.target.value);

    return(
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-900">
                <a href="/" className="hover:text-blue-600 transition duration-300">SMART PARKING SYSTEM</a>
            </h1>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 border rounded-xl p-5 bg-white shadow-lg">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            SIGNUP FORM
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="form-group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role:</label>
                                <select
                                    value={selected}
                                    onChange={handleChange}
                                    name="role"
                                    id="role"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >   
                                    <option value="">-- Select --</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    required 
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>       
                        </div>
                        <div>
                            <button 
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p 
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                        >
                            <a href="/login">
                                Already have an account? Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;