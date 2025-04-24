import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <div className="bg-indigo-800 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
          <div className="text-orange-500 font-bold mb-4">Proved By prodesigner</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Work that we<br />
            produce for our<br />
            clients
          </h1>
          
          <p className="text-gray-200 mb-12 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard.
          </p>
          
          <Link to="/details" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Get more details
          </Link>
        </div>
        
        {/* Right Content with Logos and Controller Image */}
        <div className="w-full md:w-1/2 relative flex justify-end">
          {/* Game Controller Image */}
          <div className="relative w-full max-w-md">
            <img 
              src="/imgs/controller.png" 
              alt="Game Controller" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
