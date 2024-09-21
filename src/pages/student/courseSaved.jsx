import React from "react";
import Logo from "./Logo"; // Assuming this is a logo component
import { BsFillArchiveFill } from "react-icons/bs"; // Example icon

const CourseSaved = () => {
  // Sample data representing saved courses
  const savedCourses = [
    { id: 1, title: "AI/ML", description: "Introduction to AI and Machine Learning", savedDate: "2024-08-10" },
    { id: 2, title: "Data Science", description: "Data analysis and visualization", savedDate: "2024-07-25" },
    { id: 3, title: "Web Development", description: "Full-stack web development", savedDate: "2024-06-15" },
    { id: 4, title: "Cyber Security", description: "Introduction to cyber security", savedDate: "2024-05-20" },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Logo component */}
      <Logo />

      {/* Courses Saved Section */}
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#74C89D" }}>
          <BsFillArchiveFill className="inline-block mr-2 text-2xl" />
          Courses Saved
        </h2>

        {/* List of saved courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCourses.length > 0 ? (
            savedCourses.map((course) => (
              <div key={course.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#333" }}>{course.title}</h3>
                <p className="mb-4">{course.description}</p>
                <p className="text-sm text-gray-500">Saved on: {new Date(course.savedDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No courses saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSaved;
