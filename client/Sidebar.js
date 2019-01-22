import React from 'react';

const Sidebar = (props) => {
  const resetDisplay = props.resetDisplay;

  console.log('render Sidebar');

  return (
      <div id='sidebar'>
        <img src='juke.svg' id='logo' />
        <section>
          <h4>
            <a onClick={resetDisplay} >ALBUMS</a>
          </h4>
        </section>
      </div>
  )
}

export default Sidebar;