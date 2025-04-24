import { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

export default function Abouthero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      src: "/imgs/hero.png",
      alt: "Cyberpunk city scene with neon lights",
    },
    {
      id: 1,
      src: "/imgs/hero.png",
      alt: "Second slide image",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="flex flex-col lg:flex-row w-full bg-indigo-800 text-white px-6 md:px-16">
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
        <nav className="mb-8 flex items-center text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-orange-400">About us</span>
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p className="mb-8 text-base md:text-lg max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div>
          <a
            href="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            Get in touch
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="h-full">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 flex items-center px-4 py-2">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-gray-700 rounded-full focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="mx-4 text-sm">
            {currentSlide + 1} of {slides.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-gray-700 rounded-full focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
