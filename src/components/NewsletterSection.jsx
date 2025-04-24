import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="bg-indigo-400 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto mb-16 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lorem Ipsum</h2>
        <p className="text-white text-lg max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay in the loop</h3>
            <p className="text-white text-base md:text-lg">
              Subscribe to receive the latest news and updates about TDA.
              We promise not to spam you!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-64 md:w-72 px-4 py-3 rounded-l-md rounded-r-md sm:rounded-r-none focus:outline-none bg-white placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors rounded-l-md sm:rounded-l-none rounded-r-md"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
