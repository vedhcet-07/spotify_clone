import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1618609377864-68609b857e90?w=300&h=300&fit=crop" 
            alt="Current track" 
            className="w-14 h-14 rounded"
          />
          <div className="ml-4">
            <div className="text-white text-sm">Blinding Lights</div>
            <div className="text-gray-400 text-xs">The Weeknd</div>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition">
              <Play size={20} className="text-black" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:20</span>
          </div>
        </div>

        <div className="flex items-center justify-end w-1/3 gap-2">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;