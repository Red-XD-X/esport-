import { User } from 'lucide-react';

export default function Ourteamhero() {
  const teamMembers = [
    {
      id: 1,
      name: "John Peter",
      position: "COO",
      avatar: null,
      hasCustomAvatar: false
    },
    {
      id: 2,
      name: "John Peter",
      position: "COO",
      avatar: null,
      hasCustomAvatar: false
    },
    {
      id: 3,
      name: "John Peter",
      position: "COO",
      avatar: null,
      hasCustomAvatar: false
    },
    {
      id: 4,
      name: "John Peter",
      position: "COO",
      avatar: null,
      hasCustomAvatar: false
    }
  ];

  return (
    <section className="bg-indigo-500 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 ml-4 md:ml-0">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center text-white transition-transform hover:transform hover:scale-105"
            >
              <div className="mb-4 w-24 h-24 flex items-center justify-center">
                {member.hasCustomAvatar ? (
                  <img 
                    src={member.avatar} 
                    alt={`${member.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-full">
                    <User size={40} className="text-gray-400" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 mt-1">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}