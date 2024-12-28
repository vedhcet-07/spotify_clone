import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-black w-64 h-full flex flex-col p-6">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl text-white font-bold">Spotify Clone</span>
      </div>
      
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <Search size={24} />
          <span>Search</span>
        </Link>
        <Link to="/library" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <Library size={24} />
          <span>Your Library</span>
        </Link>
      </nav>

      <div className="mt-8 space-y-4">
        <button className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <PlusSquare size={24} />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
          <Heart size={24} />
          <span>Liked Songs</span>
        </button>
      </div>

      <div className="mt-auto">
        <div className="text-xs text-gray-400">
          <a href="#" className="hover:underline">Legal</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Privacy Center</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;