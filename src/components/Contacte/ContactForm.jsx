import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#231815] text-gray-300 min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Decorative curves - top right */}
      <div className="absolute top-0 right-0 w-1/3 h-64 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <path 
            fill="none" 
            stroke="#D68B00" 
            strokeWidth="1" 
            d="M100,20 C140,40 180,50 180,100 S140,180 100,180" 
          />
        </svg>
      </div>
      
      {/* Decorative curves - bottom left */}
      <div className="absolute bottom-0 left-0 w-1/2 h-80 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <path 
            fill="none" 
            stroke="#D68B00" 
            strokeWidth="1" 
            d="M10,80 C40,40 80,20 120,20 S180,60 190,100" 
          />
        </svg>
      </div>
      
      {/* Form container */}
      <div className="max-w-2xl w-full mx-auto relative z-10">
        {/* Heading section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Say hello</h2>
          <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        
        {/* Form section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name fields - two columns on desktop, stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-400 mb-2 text-sm">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border border-gray-700 rounded p-3 focus:outline-none focus:border-amber-600 transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-400 mb-2 text-sm">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border border-gray-700 rounded p-3 focus:outline-none focus:border-amber-600 transition-colors"
                required
              />
            </div>
          </div>
          
          {/* Email field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400 mb-2 text-sm">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-gray-700 rounded p-3 focus:outline-none focus:border-amber-600 transition-colors"
              required
            />
          </div>
          
          {/* Message field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-400 mb-2 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              className="bg-transparent border border-gray-700 rounded p-3 focus:outline-none focus:border-amber-600 transition-colors resize-none"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded transition-colors"
            >
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;