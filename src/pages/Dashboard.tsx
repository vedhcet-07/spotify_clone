import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import { featuredPlaylists, categories, recentlyPlayed } from '../data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black p-8 pb-28">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Good evening, {user.username}</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/login');
            }}
            className="text-white hover:underline"
          >
            Logout
          </button>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recently played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {recentlyPlayed.map((song) => (
              <div 
                key={song.id}
                className="bg-gray-800 bg-opacity-40 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer"
              >
                <img src={song.coverUrl} alt={song.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                <h3 className="text-white font-semibold truncate">{song.title}</h3>
                <p className="text-gray-400 text-sm truncate">{song.artist}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredPlaylists.map((playlist) => (
              <div 
                key={playlist.id}
                className="bg-gray-800 bg-opacity-40 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer"
              >
                <img src={playlist.coverUrl} alt={playlist.name} className="w-full aspect-square object-cover rounded-md mb-4" />
                <h3 className="text-white font-semibold mb-1">{playlist.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`rounded-lg p-6 bg-gradient-to-br ${category.color} cursor-pointer hover:scale-105 transition`}
              >
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Player />
    </div>
  );
};

export default Dashboard;