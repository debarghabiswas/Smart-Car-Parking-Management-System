import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [selectedRole, setSelectedRole] = useState("");
    const handleChange = (e) => setSelectedRole(e.target.value);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:2025/api/auth/login',{
                email: email,
                selectedRole: selectedRole,
                password: password,
            },{
                headers:{
                    "Content-Type" : "application/json"
                }
            });

            setMessage(response.data.message);

            setTimeout(()=>{
                if(response.data.role === 'Admin'){
                    navigate('/admindashboard');
                } else if(response.data.role === 'User'){
                    navigate('/userdashboard');                
                }
            }, 2000);


        } catch(err){
            setMessage(err.response?.data?.message ||"ERROR LOGGING IN!");
        }
    };

    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-900">
                <a href="/" className="hover:text-blue-600 transition duration-300">SMART PARKING SYSTEM</a>
            </h1>
            {/* LOGIN FORM */}
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 border rounded-xl p-5 bg-white shadow-lg">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            LOGIN FORM
                        </h1>
                    </div>
                    {/* LOGIN FORM SUBMISSION */}
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <p className="text-center">{message}</p>
                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className="form-group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required 
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            {/* Role Input */}
                            <div className="form-group">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role:</label>
                                <select
                                    value={selectedRole}
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
                            {/* Password Input */}
                            <div className="form-group">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required 
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>        
                        </div>
                        <div>
                            {/* LOGIN BUTTON */}
                            <button 
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p 
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                        >
                            <a href="/signup">
                                Don't have an account? Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;