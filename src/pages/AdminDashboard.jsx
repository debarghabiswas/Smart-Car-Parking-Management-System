const DashboardAdmin = ({adminDetails}) =>{
    const {username, email, role} = adminDetails || {};
    
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md px-6 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">{role} Dashboard</h1>
                    <div className="text-gray-600">
                        <span>Welcome, {username}</span>
                    </div>
                </div>
            </header>
            
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Spots</h3>
                        <p className="text-3xl font-bold text-blue-600">100</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Available</h3>
                        <p className="text-3xl font-bold text-green-600">45</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Occupied</h3>
                        <p className="text-3xl font-bold text-red-600">55</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenue Today</h3>
                        <p className="text-3xl font-bold text-yellow-600">$230</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Parking Status</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Parking spots will be rendered here */}
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Vehicle ABC123 entered - Spot A1</span>
                                <span className="text-sm text-gray-500">2 min ago</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-gray-700">Vehicle XYZ789 exited - Spot B3</span>
                                <span className="text-sm text-gray-500">5 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;