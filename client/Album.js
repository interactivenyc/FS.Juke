import React from "react";

const Album = props => {
  const album = props.album;
  const handleAlbumClick = props.handleAlbumClick;

  console.log('render Album');

  return (
    <div className="album">
      <a>
        <img
          src={album.artworkUrl}
          onClick={
              () => handleAlbumClick(album.id)
            }
        />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  );
};

export default Album;
