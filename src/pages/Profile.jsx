const Profile = ({userDetails})=>{
    const {username, email, role} = userDetails || {};

    return(
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
                <div className="bg-blue-500 h-20"></div>
                <div className="px-6 py-4">
                    <div className="flex items-center -mt-12">
                        <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
                            <span className="text-xl font-bold text-gray-600">
                                {username?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-gray-800">{username}</h2>
                        <p className="text-gray-600 mt-1">{email}</p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                            {role}
                        </span>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );    
};

export default Profile;