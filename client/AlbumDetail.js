import React from "react";
import Album from "./Album";
import SongList from "./SongList";

const AlbumDetail = props => {
    const completeAlbumData = props.completeAlbumData;
    const handleAlbumClick = props.handleAlbumClick;
    const playSong = props.playSong;
    
    const selectedSong = props.selectedSong;

    console.log('render AlbumDetail');
    
    return (
        <div>
        <Album 
            album={completeAlbumData}
            handleAlbumClick={handleAlbumClick}
        />
        <SongList
            songsFromAlbum={completeAlbumData.songs}
            artist={completeAlbumData.artist}
            playSong={playSong}
            selectedSong={selectedSong}
        />
        </div>
    );
};

export default AlbumDetail;
