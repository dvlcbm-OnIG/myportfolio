export default function ProfileCard() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
          />
  
          <h2 className="text-xl font-semibold text-center mt-4">
            Russel Sto Tomas
          </h2>
  
          <p className="text-gray-500 text-center text-sm mt-1">
            Frontend Developer
          </p>
  
          <p className="text-center text-gray-600 mt-4 text-sm">
            Building clean UI with React, CSS, and JavaScript.
          </p>
  
          <button
            className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            View Profile
          </button>
  
        </div>
      </div>
    );
  }
  