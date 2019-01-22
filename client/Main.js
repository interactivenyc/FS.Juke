import React from "react";
import Sidebar from "./Sidebar";
import AlbumList from "./AlbumList";
import AlbumDetail from "./AlbumDetail";
import Player from "./Player";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albumData: [],
      selectedAlbum: null,
      selectedSong: null,
      completeAlbumData: {}
    };
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.audio = document.createElement('audio');
  }

  async componentDidMount() {
    console.log("componentDidMount - get data from /api/albums");

    try {
      let albumData = await axios.get("/api/albums");

      this.setState({
        albumData: albumData.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  async handleAlbumClick(albumId) {
    console.log('handleAlbumClick albumId:', albumId);
    if (albumId === this.state.selectedAlbum){
      console.log('handleAlbumClick - same album, do nothing');
      return;
    }
    const completeAlbumData = await axios.get("/api/albums/" + albumId);



    this.setState({
      completeAlbumData: completeAlbumData.data,
      selectedAlbum: albumId
    });
  }

  resetDisplay() {
    console.log('resetDisplay');
    this.setState({
      selectedAlbum: null      
    })
    
  }

  playSong(songId) {
    const trackNumber = this.getTrackNumber(songId)
    const song = this.state.completeAlbumData.songs[trackNumber]

    console.log('playSong songId, trackNumber:', songId, trackNumber);
    console.log('playSong song:', song.name); 
                  
    this.audio.src = song.audioUrl;
    this.audio.load();
    this.audio.play();

    this.setState({
      selectedSong: song
    })
  }

  stopSong() {
    this.audio.pause();
    this.setState({
      selectedSong: null
    })
  }

  getTrackNumber(songId) {
    const trackNumber = songId - this.state.completeAlbumData.songs[0].id
    console.log('getTrackNumber:', trackNumber);
    
    return trackNumber
  }
                                      
  render() {
    console.log('render Main -----');
    
    return (
      <div id="main" className="row container">
        {/* The music starts here! */}
        <Sidebar resetDisplay={this.resetDisplay}/>

        <div className="container">
          {this.state.selectedAlbum ? (
            <AlbumDetail 
            completeAlbumData={this.state.completeAlbumData}
            handleAlbumClick={this.handleAlbumClick}
            playSong={this.playSong}
            selectedSong={this.state.selectedSong}
            />
          ) : (
            <AlbumList
              albumData={this.state.albumData}
              handleAlbumClick={this.handleAlbumClick}
            />
          )}

          <Player 
            stopSong={this.stopSong}
          />
        </div>
      </div>
    );
  }
}
