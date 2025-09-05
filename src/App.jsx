import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contactus" element={<ContactUs />}/>
                <Route path="/pricing" element={<Pricing />}/>
            </Routes>
        </BrowserRouter>
    );
}