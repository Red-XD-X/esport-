import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white absolute bottom-0 w-full">
      <div className="container  px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">LOGO</h2>
            <p className="text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-300">@Lorem</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Zeux</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact us</h3>
            <p className="text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-300">+908 89097 890</p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400 text-sm">
          Copyright © 2022 prodesigner All rights Rcerved
        </div>
      </div>
    </footer>
  );
}
