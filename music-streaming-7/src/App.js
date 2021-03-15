import { useState } from 'react'
import './App.css';
import AddAlbum from './components/AddAlbum';
import Album from './components/Album';
import Albums from './components/Albums'


function App() {
  const [artist, setArtist] = useState('A.R. Rahman')
  const [album, setAlbum] = useState('Rockstar')
  const [albumCover, setAlbumCover] = useState('https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg')


  const [albums, setAlbums] = useState([{id: 1, aritst: 'A.R. Rahman', album_title: 'Rockstar', album_cover: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg', songs: ['Kun Fayakun', 'Nadaan Parindey', 'Saadda Haq']},
  {id: 2, aritst: 'A.R. Rahman', album_title: 'Highway', album_cover: 'https://a10.gaanacdn.com/images/albums/86/150486/crop_175x175_150486.jpg', songs: ['Patakha Guddi - Female Version', 'Maahi Ve']},
  {id: 3, aritst: 'Vishal-Shekhar', album_title: 'I hate Luv Storys', album_cover: 'https://a10.gaanacdn.com/images/albums/80/22080/crop_175x175_22080.jpg', songs: ['Bahara', 'Bin Tere', 'I hate Luv Storys', 'Sadka Hua', 'Jab Mila Tu']}])

  return (
    <div className="App">
      <Album artist={artist} album={album} albumCover={albumCover}/>
      <Albums albums={albums} />
      <AddAlbum />
    </div>
  );
}

export default App;
