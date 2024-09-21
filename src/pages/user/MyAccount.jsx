import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsHeart, BsFillBellFill } from 'react-icons/bs';

const MyAccount = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#92E3A9', color: '#1a1a1a' }}>
      <header className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold" style={{ color: '#74C89D' }}>DASHBOARD</h3>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </header>

      <main className="p-8 rounded-lg shadow-lg bg-white mt-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#74C89D', color: 'white', height: '140px' }}>
            <div className="flex justify-between items-center mb-2">
              <h3>COURSES SAVED</h3>
              <BsFillArchiveFill className="text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">5</h1>
            <button className="bg-white text-[#74C89D] px-5 py-2 rounded-lg shadow-lg hover:bg-[#58a678] hover:text-white transition duration-300 ml-auto ">
              View
            </button>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#74C89D', color: 'white', height: '140px' }}>
            <div className="flex justify-between items-center mb-2">
              <h3>No of hours Spent</h3>
              <BsFillGrid3X3GapFill className="text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">80hr</h1>
            <button className="bg-white text-[#74C89D] px-4 py-2 rounded-lg shadow-lg hover:bg-[#58a678] hover:text-white transition duration-300">
              View
            </button>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#74C89D', color: 'white', height: '140px' }}>
            <div className="flex justify-between items-center mb-2">
              <h3>Likes</h3>
              <BsHeart className="text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">33</h1>
            <button className="bg-white text-[#74C89D] px-4 py-2 rounded-lg shadow-lg hover:bg-[#58a678] hover:text-white transition duration-300">
              View
            </button>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#74C89D', color: 'white', height: '140px' }}>
            <div className="flex justify-between items-center mb-2">
              <h3>ALERTS</h3>
              <BsFillBellFill className="text-3xl" />
            </div>
            <h1 className="text-2xl font-bold">42</h1>
            <button className="bg-white text-[#74C89D] px-4 py-2 rounded-lg shadow-lg hover:bg-[#58a678] hover:text-white transition duration-300">
              View
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl mb-4" style={{ color: '#74C89D' }}>Recently Done</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold">Math 101</h4>
              <p>Completed on September 1, 2024</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold">History 202</h4>
              <p>Completed on September 10, 2024</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold">Science 303</h4>
              <p>Completed on September 15, 2024</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold">Literature 101</h4>
              <p>Completed on September 20, 2024</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#74C89D] text-white py-2 text-center text-2xl mt-auto">
        <p>Keep Learning!</p>
      </footer>
    </div>
  );
};

export default MyAccount;
