const DashboardUser = ({userDetails}) =>{
    const {username, email} = userDetails || {};

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Welcome, {username}</h1>
          <p className="text-slate-600 text-lg mt-2">Manage your parking operations efficiently</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-6">
            <button className="bg-slate-900 text-white px-6 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
              Book Parking
            </button>
            <button className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
              View Reservations
            </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Recent Bookings</h2>
            <div className="space-y-4">
            <div className="flex justify-between items-center p-5 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div>
              <p className="font-semibold text-slate-900">Slot A-101</p>
              <p className="text-sm text-slate-500 mt-1">Today, 10:00 AM - 6:00 PM</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200">
              Active
              </span>
            </div>
            <div className="flex justify-between items-center p-5 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <div>
              <p className="font-semibold text-slate-900">Slot B-205</p>
              <p className="text-sm text-slate-500 mt-1">Tomorrow, 9:00 AM - 5:00 PM</p>
              </div>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
              Upcoming
              </span>
            </div>
            </div>
          </div>
          </div>

          <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Account Summary</h2>
            <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600 font-medium">Total Bookings</span>
              <span className="font-bold text-slate-900 text-lg">15</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600 font-medium">Active Reservations</span>
              <span className="font-bold text-slate-900 text-lg">2</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600 font-medium">Wallet Balance</span>
              <span className="font-bold text-emerald-600 text-lg">$250.00</span>
            </div>
            </div>
            <button className="w-full mt-6 bg-slate-100 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-200 transition-all duration-200 font-medium border border-slate-200">
            Add Funds
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Profile</h2>
            <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">{username?.charAt(0)?.toUpperCase()}</span>
            </div>
            <p className="font-semibold text-slate-900 text-lg">{username}</p>
            <p className="text-slate-500 mt-1">{email}</p>
            <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
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