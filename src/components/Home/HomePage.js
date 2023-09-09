import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="w-full pt-10 max-w-xl p-6 bg-white shadow-lg rounded-lg text-center my-9">
        <h1 className="text-3xl font-bold underline mb-4">Track Your Study Plans!</h1>
        <p className="text-gray-700">
          Welcome to our study planning platform. Here, you can effectively organize and manage your study plans to achieve your goals. Whether you're a student or a professional, we've got you covered.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
          Start Here
        </button>
      </div>
    </div>
  );
}

export default HomePage;
