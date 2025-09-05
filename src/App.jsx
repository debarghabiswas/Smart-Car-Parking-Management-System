import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/AdminDashboard";
import DashboardUser from "./pages/UserDashboard";
import Signup from "./pages/Signup";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contactus" element={<ContactUs />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/admindashboard" element={<DashboardAdmin />}/>
                <Route path="/userdashboard" element={<DashboardUser />}/>
            </Routes>
        </BrowserRouter>
    );
}