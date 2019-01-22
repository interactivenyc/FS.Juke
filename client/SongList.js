import React from "react";
import Song from "./Song";

const SongList = props => {
  const songs = props.songsFromAlbum;
  const artist = props.artist;
  const playSong = props.playSong;
  const selectedSong = props.selectedSong;

  console.log('render SongList');

  return (
    <table id="songs">
      <tbody>
        <tr className="gray">
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {songs.map(song => {
          return <Song 
                    key={song.id} 
                    song={song} 
                    artist={artist}
                    playSong={playSong}
                    selectedSong={selectedSong}
                     />;
        })}
      </tbody>
    </table>
  );
};

export default SongList;
