import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsHeart, BsFillBellFill } from 'react-icons/bs';
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS

const MyAccount = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <main className="p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h3 className="text-3xl shadow-xl bg-slate-4  "
          style={{color:'#92E3A9'}}
          ><b>DASHBOARD</b></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-600 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center mb-2">
              <h3>COURSES SAVED</h3>
              <BsFillArchiveFill className="text-3xl" />
            </div>
            <h1 className="text-4xl font-bold">5</h1>
          </div>
          <div className="bg-orange-600 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center mb-2">
              <h3>No of hours Spent</h3>
              <BsFillGrid3X3GapFill className="text-3xl" />
            </div>
            <h1 className="text-4xl font-bold">80hr</h1>
          </div>
          <div className="bg-green-600 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center mb-2">
              <h3>Likes</h3>
              <BsHeart className="text-3xl" />
            </div>
            <h1 className="text-4xl font-bold">33</h1>
          </div>
          <div className="bg-red-600 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center mb-2">
              <h3>ALERTS</h3>
              <BsFillBellFill className="text-3xl" />
            </div>
            <h1 className="text-4xl font-bold">42</h1>
          </div>
        </div>

        {/* Sliding Pictures Section */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-xl"> {/* Centering the slider */}
            <h3 className=" mb-4 text-center text-3xl">Completed Courses</h3>
            <Slider {...settings}>
              <div>
                <img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg" alt="Course 1" className="rounded-lg" />
              </div>
              <div>
                <img src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Course 2" className="rounded-lg" />
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNi3oZpWNBhd5M3qqfCL7Dg3Q2OuNAPd7sw&s" alt="Course 3" className="rounded-lg" />
              </div>
              <div>
                <img src="data:image/png;base64,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" alt="Course 4" className="rounded-lg" />
              </div>
            </Slider>
          </div>
        </div>

        {/* Completed Courses Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl text-gray-800 mb-4">Recently Done</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <footer className="bg-white text-black py-4 text-center text-3xl">
        <p className="text-3xl">Keep Learning!</p>
      </footer>
    </div>
  );
};

// Custom next arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <span className="text-gray-800 text-2xl">➔</span>
    </div>
  );
};

// Custom previous arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <span className="text-gray-800 text-2xl">➔</span>
    </div>
  );
};

export default MyAccount;