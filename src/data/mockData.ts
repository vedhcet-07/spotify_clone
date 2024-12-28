export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  coverUrl: string;
  description: string;
  songs: Song[];
}

export const recentlyPlayed: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?w=300&h=300&fit=crop',
    duration: '3:20'
  },
  {
    id: '2',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: '3:14'
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    duration: '2:21'
  }
];

export const featuredPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The hottest tracks right now',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    songs: recentlyPlayed
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Lay back and enjoy these smooth tracks',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    songs: recentlyPlayed
  },
  {
    id: '3',
    name: 'Rock Classics',
    description: 'Rock legends and epic guitar solos',
    coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop',
    songs: recentlyPlayed
  }
];

export const categories = [
  { id: '1', name: 'Pop', color: 'from-pink-500 to-purple-500' },
  { id: '2', name: 'Hip-Hop', color: 'from-orange-500 to-red-500' },
  { id: '3', name: 'Rock', color: 'from-blue-500 to-purple-500' },
  { id: '4', name: 'Electronic', color: 'from-green-500 to-teal-500' }
];