import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        StudyPrep
      </div>

      {/* Right Side Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-lg p-2 border border-r-0 focus:outline-none focus:border-blue-700"
          />
          <button className="bg-blue-700 text-white p-2 rounded-r-lg hover:bg-blue-800 focus:outline-none">
            Search
          </button>
        </div>

        {/* Download Button */}
        <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 focus:outline-none">
          Download
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
