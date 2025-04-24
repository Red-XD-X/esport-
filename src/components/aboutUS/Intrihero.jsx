export default function Intrihero() {
    return (
      <section className="bg-gray-900 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 lg:w-2/5">
              {/* Replace with your actual anime character image */}
              <img 
                src="/api/placeholder/600/700" 
                alt="Anime character with glowing effects"
                className="w-full h-auto rounded-lg shadow-lg shadow-purple-500/20"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 lg:w-3/5 space-y-6">
              {/* Subtitle */}
              <h3 className="text-lg text-gray-300">Lorem ipsum</h3>
              
              {/* Main title */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h2>
              
              {/* Description text */}
              <div className="text-gray-300 space-y-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }