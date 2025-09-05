import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () =>{
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <div>
                <h1 className="text-center">Welcome To The Car Parking System</h1>
                <p className="text-center">Your one stop solution for managing parking lots and bookings.</p>
                
                <section style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Our Services</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                        <div>
                            <h3>Easy Booking</h3>
                            <p>Book your parking spot in advance with just a few clicks.</p>
                        </div>
                        <div>
                            <h3>Real-time Availability</h3>
                            <p>Check available parking spaces in real-time.</p>
                        </div>
                        <div>
                            <h3>Secure Payments</h3>
                            <p>Safe and secure online payment processing.</p>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
                    <h2>Why Choose Us?</h2>
                    <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                        <li>24/7 customer support</li>
                        <li>Affordable parking rates</li>
                        <li>Multiple payment options</li>
                        <li>Easy cancellation policy</li>
                        <li>Mobile-friendly interface</li>
                    </ul>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;