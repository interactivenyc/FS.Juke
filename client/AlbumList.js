import React from "react";
import Album from "./Album";

const AlbumList = props => {
  const albumData = props.albumData;
  const handleAlbumClick = props.handleAlbumClick;

  console.log('render AlbumList');

  return (
    <div id="albums" className="row wrap">
      {albumData.map(album => {
        return (
          <Album
            key={album.id}
            album={album}
            handleAlbumClick={handleAlbumClick}
          />
        );
      })}
    </div>
  );
};

export default AlbumList;
