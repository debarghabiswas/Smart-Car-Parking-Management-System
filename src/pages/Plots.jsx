import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Plots = ()=>{
    const {id} = useParams();
    const [plot, setPlot] = useState(null);
    const [error, setError] = useState("");

    const token = localStorage.getItem('token');

    useEffect(()=>{
        const fetchPlot = async ()=>{
            try{
                const response = await axios.get(`http://localhost:2025/api/parklots/plots/${id}`);

                setPlot(response.data.plot);

            } catch(err){
                setError(err.response?.data?.message || "ERROR FINDING PLOT");
            }
        }

        fetchPlot();
    }, [id]);
    if(error) return <div className="flex items-center justify-center min-h-screen bg-gray-900"><p className="text-red-400 text-lg font-medium">{error}</p></div>

    if (!plot) return <div className="flex items-center justify-center min-h-screen bg-gray-900"><p className="text-gray-300 text-lg">Loading...</p></div>;

    return(
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                    <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-600 pb-4">
                        {plot.parkingLotName} Parking Lot
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <p className="text-gray-400 text-sm font-medium mb-1">Location</p>
                                <p className="text-white text-lg">{plot.parkingLotLocation}</p>
                            </div>
                            
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <p className="text-gray-400 text-sm font-medium mb-1">Address</p>
                                <p className="text-white text-lg">{plot.parkingLotAddress}</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                                <p className="text-green-400 text-sm font-medium mb-1">Available Spots</p>
                                <p className="text-green-100 text-2xl font-bold">{plot.unreservedLots}</p>
                            </div>
                            
                            <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                                <p className="text-blue-400 text-sm font-medium mb-1">Reserved Spots</p>
                                <p className="text-blue-100 text-2xl font-bold">{plot.reservedLots}</p>
                            </div>
                            
                            <div className="bg-purple-900 p-4 rounded-lg border border-purple-700">
                                <p className="text-purple-400 text-sm font-medium mb-1">Rate</p>
                                <p className="text-purple-100 text-2xl font-bold">${plot.rate}</p>
                            </div>
                        </div>
                    </div>
                    <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <Link to={token ? '/':'/login'} >
                            Reserve Your Spot
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plots;