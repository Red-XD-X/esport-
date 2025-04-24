import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9.44 13.5h1.5v5.25c0 .138.112.25.25.25h2.17a.25.25 0 0 0 .25-.25V13.5h1.47a.25.25 0 0 0 .247-.216l.3-1.75a.25.25 0 0 0-.247-.284h-1.77v-1.25c0-.47.227-.75.744-.75h1.156a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.213-.247A10.28 10.28 0 0 0 13.77 7a2.73 2.73 0 0 0-2.919 3v1.25H9.44a.25.25 0 0 0-.25.25v1.75c0 .138.112.25.25.25z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm0 4.5a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z" />
    <path d="M16.2 9.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z" />
    <path d="M14.4 5.4H9.6a4.2 4.2 0 0 0-4.2 4.2v4.8a4.2 4.2 0 0 0 4.2 4.2h4.8a4.2 4.2 0 0 0 4.2-4.2V9.6a4.2 4.2 0 0 0-4.2-4.2zm3.3 9a3.3 3.3 0 0 1-3.3 3.3H9.6a3.3 3.3 0 0 1-3.3-3.3V9.6a3.3 3.3 0 0 1 3.3-3.3h4.8a3.3 3.3 0 0 1 3.3 3.3v4.8z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.9 5.1a3.2 3.2 0 0 0-2.3-1 3.2 3.2 0 0 0-3.1 3.9 9 9 0 0 1-6.6-3.3 3.2 3.2 0 0 0 1 4.3 3.2 3.2 0 0 1-1.5-.4v.1a3.2 3.2 0 0 0 2.6 3.1 3.2 3.2 0 0 1-1.4.1 3.2 3.2 0 0 0 3 2.2 6.4 6.4 0 0 1-4.7 1.3 9 9 0 0 0 14-7.8v-.4c.6-.4 1.1-1 1.5-1.6a6.4 6.4 0 0 1-1.8.5 3.2 3.2 0 0 0 1.3-1.4z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zM8.4 18.3H6v-8.4h2.4v8.4zM7.2 8.7a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm11.1 9.6h-2.4v-4.2c0-2.7-3-2.4-3 0v4.2h-2.4V9.9h2.4v1.4c1-1.9 5.4-2 5.4 1.8v5.2z" />
  </svg>
);

const WorldMapContactSection = () => {
  return (
    <div className="bg-indigo-900 text-white min-h-screen font-sans">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center text-sm md:text-base tracking-wide">
          <a href="/" className="hover:text-indigo-200 transition-colors">Home</a>
          <span className="mx-2 text-indigo-300">›</span>
          <span className="text-indigo-200 font-medium">Contact us</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="text-base md:text-xl mb-16 max-w-3xl mx-auto font-light tracking-wide text-indigo-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
        {/* World Map image */}
        <div className="relative w-full mx-auto mb-16 max-w-5xl">
          {/* Use an img tag for the map background instead of SVG */}
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            {/* Replace the src with your actual world map image */}
            <img 
              src="/api/placeholder/1000/500" 
              alt="World Map With Global Locations" 
              className="w-full h-auto object-cover"
            />
            
            {/* Blue overlay to match the screenshot */}
            <div className="absolute inset-0 bg-indigo-700/20"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-t border-indigo-800 pt-10">
          {/* Social Media */}
          <div className="text-center md:text-left">
            <p className="mb-5 text-lg font-medium tracking-wide text-indigo-200">Follow us</p>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="#" className="bg-black rounded-full p-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <FacebookIcon />
              </a>
              <a href="#" className="bg-black rounded-full p-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon />
              </a>
              <a href="#" className="bg-black rounded-full p-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <TwitterIcon />
              </a>
              <a href="#" className="bg-black rounded-full p-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex justify-center items-center gap-3 text-lg font-medium">
            <Phone className="text-white" size={24} />
            <span className="tracking-wide">+94 44444 5555 6</span>
          </div>
          
          {/* Address */}
          <div className="flex justify-center md:justify-end items-center gap-3 text-lg">
            <MapPin className="text-white" size={24} />
            <span className="tracking-wide font-light">but also the leap into electronic typesetting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maphero;