import React from "react";

const Song = props => {
  const song = props.song;
  const artist = props.artist;
  const playSong = props.playSong;
  const selectedSong = props.selectedSong;

  console.log('render Song');

  return (
    <tr>
      <td className={selectedSong && song.id === selectedSong.id ? 'active' : ''}>
        <i onClick={() => playSong(song.id)} className="fa fa-play-circle" />
      </td>
      <td>{song.id}</td>
      <td>{song.name}</td>
      <td>{artist.name}</td>
      <td>{song.genre}</td>
    </tr>
  );
};

export default Song;
