import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';  

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import DashboardAdmin from "./pages/AdminDashboard";
import DashboardUser from "./pages/UserDashboard";
import Signup from "./pages/Signup";  
import Profile from './pages/Profile';
import Bookings from "./pages/Bookings";
import ManageParkingLots from "./pages/ManageParkingLots";

export default function App(){
    const token = localStorage.getItem('token');

    // Getting the "User" or "Admin" details
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (token) {
                try {
                    const response = await axios.get(`http://localhost:2025/api/tokenverify`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    
                    const {username, email, role} = response.data.user;
                    const message = response.data.message;
                    
                    setUserDetails({ username, email, role, message });
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            }
        };

        fetchUserDetails();
    }, [token]);
    
    return (
        <BrowserRouter>
            <NavBar userDetails={userDetails} />
            <Routes>
                <Route path="/" element={<Home />}/>    
                <Route path="/about" element={<About />}/>
                <Route path="/contactus" element={<ContactUs />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/login" element={token && userDetails ? <Navigate to={userDetails.role === "User" ? '/userdashboard' : '/admindashboard'} /> : <Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/admindashboard" element={<DashboardAdmin adminDetails={userDetails}/>}/>
                <Route path="/userdashboard" element={<DashboardUser userDetails={userDetails} />}/>
                <Route path="/profile" element={<Profile userDetails={userDetails} />}/>
                <Route path="/bookings" element={userDetails && userDetails.role === "Admin" ? <Navigate to="/" /> : <Bookings />} />
                <Route path="/manage-parkinglots" element={
                    token ? (
                        userDetails ? (
                            userDetails.role === "Admin" ? <ManageParkingLots userDetails={userDetails} /> : <Navigate to="/" />
                        ) : (
                            <div>Loading...</div>
                        )
                    ) : (
                        <Navigate to="/login" />
                    )
                } />
                {/* NOT FOUND  */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}