import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
const trendingGames = [
  {
    id: 1,
    name: "For Honor",
    image: "/imgs/image.png",
    followers: 40,
    category: "Action",
    description: "A medieval combat image with vikings, knights and samurai"
  },
  {
    id: 2,
    name: "Cyberpunk VR",
    image: "/imgs/image.png",
    followers: 40,
    category: "RPG",
    description: "Virtual reality set in a dystopian future"
  },
  {
    id: 3,
    name: "Call of Duty",
    image: "/imgs/image.png",
    followers: 40,
    category: "FPS",
    description: "First-person shooter military combat image"
  },
  {
    id: 4,
    name: "Neon City",
    image: "/imgs/image.png",
    followers: 40,
    category: "Adventure",
    description: "Open world cyberpunk adventure"
  }
];

export default function TrendingGamesSection() {
  return (
    <div className="bg-indigo-800 w-full py-16 px-6 md:px-16">
      {/* Header with "See All" button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-white text-2xl font-bold">Currently Trending Games</h2>
        <Link to="/games" className="bg-indigo-700 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition-colors">
          SEE ALL
        </Link>
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {trendingGames.map((game) => (
          <div key={game.id} className="flex flex-col">
            {/* Game Image */}
            <div className="rounded-2xl overflow-hidden mb-4">
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-44 object-cover"
              />
            </div>
            
            {/* Followers Count */}
            <div className="flex items-center text-white gap-2">
              <Flame size={18} className="text-white fill-orange-500" />
              <span>{game.followers} Followers</span>
            </div>
          </div>
        ))}
      </div>

      {/* Center Text Section */}
      <div className="text-center mb-16">
        <p className="text-white text-2xl max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry.
        </p>
      </div>

      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Text Content */}
        <div className="md:w-1/3">
          <h3 className="text-white text-2xl font-bold mb-4">Lorem Ipsum</h3>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s,
          </p>
        </div>

        {/* Right Image with Dot Pattern */}
        <div className="md:w-2/3 relative">
          {/* Dot Pattern */}
          <div className="absolute top-1/4 right-4 grid grid-rows-4 grid-cols-10 gap-2">
            {Array(40).fill().map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
            ))}
          </div>
          
          {/* Full Width Image */}
          <img 
            src="/imgs/image.png" 
            alt="Game Character" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
