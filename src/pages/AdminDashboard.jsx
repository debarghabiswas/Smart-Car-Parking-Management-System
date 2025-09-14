import axios from "axios";
import { useEffect, useState } from "react";

const DashboardAdmin = ({adminDetails}) =>{
    const {username, email, role} = adminDetails || {};

    const [plotDetails, setPlotDetails] = useState(null);

    useEffect(()=>{
        const fetchPlotDetails = async ()=>{
            if (!email) return;
            
            try {
                const response = await axios.post('http://localhost:2025/api/parklots/getlots', {
                    email: email,
                });
                setPlotDetails(response.data.lots || []);
            } catch (error) {
                console.error("Error fetching parking lots:", error);
                setMessage(error.response?.data?.message || "Error fetching parking lots");
            }
        };

        fetchPlotDetails();

    }, [email]);

    const totals = plotDetails?.reduce((acc, lot)=>{
        acc.availableSpots += lot.unreservedLots;
        acc.occupiedSpots += lot.reservedLots;
        acc.totalSpots += lot.unreservedLots + lot.reservedLots;
        return acc;
    },{availableSpots:0, occupiedSpots:0, totalSpots:0}) || {availableSpots:0, occupiedSpots:0, totalSpots:0};

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <header className="bg-white border-b border-slate-200 shadow-sm px-6 py-4">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">{role} Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm text-slate-600">Welcome back,</p>
                            <p className="font-semibold text-slate-900">{username}</p>
                        </div>
                        <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{username?.charAt(0)?.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Total Spots</h3>
                                <p className="text-3xl font-bold text-slate-900 mt-2">{totals.totalSpots}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Available</h3>
                                <p className="text-3xl font-bold text-emerald-600 mt-2">{totals.availableSpots}</p>
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Occupied</h3>
                                <p className="text-3xl font-bold text-red-600 mt-2">{totals.occupiedSpots}</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Revenue Today</h3>
                                <p className="text-3xl font-bold text-amber-600 mt-2">$255</p>
                            </div>
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                            <h2 className="text-lg font-semibold text-slate-900">Parking Status</h2>
                            <p className="text-sm text-slate-600 mt-1">Real-time parking spot availability</p>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Parking spots will be rendered here */}
                                <div className="text-center py-8 text-slate-500">
                                    <svg className="w-12 h-12 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <p>Parking spots will be displayed here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                            <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                            <p className="text-sm text-slate-600 mt-1">Latest parking transactions</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900">Vehicle ABC123 entered</p>
                                        <p className="text-sm text-slate-600">Spot A1</p>
                                        <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900">Vehicle XYZ789 exited</p>
                                        <p className="text-sm text-slate-600">Spot B3</p>
                                        <p className="text-xs text-slate-500 mt-1">5 minutes ago</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900">Payment received</p>
                                        <p className="text-sm text-slate-600">$15.00 - ABC123</p>
                                        <p className="text-xs text-slate-500 mt-1">8 minutes ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;