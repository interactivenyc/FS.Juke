import React from 'react';

const Player = (props) => {
  const stopSong = props.stopSong;

  console.log('render Player');

    return (
        <div id='player-container'>
          <div id='player-controls'>
            <div className='row center'>
              <i className='fa fa-step-backward'></i>
              <i onClick={stopSong} className='fa fa-pause-circle'></i>
              <i className='fa fa-step-forward'></i>
            </div>
          </div>
        </div>
    )
}

export default Player;