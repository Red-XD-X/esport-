export default function Withushero() {
    // Data for the feature cards
    const features = [
      {
        id: 1,
        badge: "Lorem ipsum",
        badgeColor: "bg-purple-700",
        title: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id: 2,
        badge: "Lorem ipsum",
        badgeColor: "bg-amber-800",
        title: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id: 3,
        badge: "Lorem ipsum",
        badgeColor: "bg-green-800",
        title: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      }
    ];
  
    return (
      <section className="bg-indigo-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 ml-4 md:ml-0">
            Why work with us
          </h2>
  
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg transform transition hover:scale-105 duration-300"
              >
                {/* Colored Badge */}
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm ${feature.badgeColor} mb-6`}
                >
                  {feature.badge}
                </span>
  
                {/* Card Title */}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
  
                {/* Card Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }