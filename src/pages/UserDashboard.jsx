const DashboardUser = () =>{
    return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
              <p className="text-gray-600">Welcome back! Manage your parking reservations.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
                      Book Parking
                    </button>
                    <button className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition">
                      View Reservations
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Slot A-101</p>
                        <p className="text-sm text-gray-600">Today, 10:00 AM - 6:00 PM</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Slot B-205</p>
                        <p className="text-sm text-gray-600">Tomorrow, 9:00 AM - 5:00 PM</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Bookings</span>
                      <span className="font-semibold">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Reservations</span>
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wallet Balance</span>
                      <span className="font-semibold text-green-600">$250.00</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    Add Funds
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Profile</h2>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-600">john.doe@email.com</p>
                    <button className="mt-3 text-blue-600 text-sm hover:underline">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default DashboardUser;