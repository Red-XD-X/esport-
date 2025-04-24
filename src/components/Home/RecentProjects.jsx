import React from "react";
import { Link } from "react-router-dom";

// Sample projects data
const recentProjects = [
  {
    id: 1,
    title: "Arcade Room",
    image: "/imgs/projects.png",
    category: "Gaming Environment",
  },
  {
    id: 2,
    title: "Gaming Tournament",
    image: "/imgs/projects.png",
    category: "E-Sports Event",
  },
  {
    id: 3,
    title: "Custom PC Build",
    image: "/imgs/projects.png",
    category: "Hardware Design",
  },
  {
    id: 4,
    title: "PlayStation Setup",
    image: "/imgs/projects.png",
    category: "Console Gaming",
  },
  {
    id: 5,
    title: "Arcade Center",
    image: "/imgs/projects.png",
    category: "Entertainment Venue",
  },
];

export default function RecentProjects() {
  return (
    <div className="bg-indigo-800 w-full py-16 px-6 md:px-16">
      <div className="text-center mb-4">
        <h2 className="text-white text-3xl font-bold mb-4">
          Our Recent Projects
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={recentProjects[0].image}
            alt={recentProjects[0].title}
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img
            src={recentProjects[1].image}
            alt={recentProjects[1].title}
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img
            src={recentProjects[2].image}
            alt={recentProjects[2].title}
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img
            src={recentProjects[3].image}
            alt={recentProjects[3].title}
            className="w-full h-48 md:h-48 object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-2 rounded-3xl overflow-hidden">
          <img
            src={recentProjects[4].image}
            alt={recentProjects[4].title}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/projects"
          className="bg-indigo-700 hover:bg-indigo-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        >
          SEE ALL
        </Link>
      </div>
    </div>
  );
}
