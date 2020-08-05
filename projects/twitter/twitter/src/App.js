import React from 'react';
import logo from './logo.svg';
import './App.css';
import icon from './icon.svg'
import icon2 from './3d_rotation-24px.svg'

function App() {
  return (
    <div className='grid'>
      <div className="pro-features">
        <img src={icon2}></img>
        <img src={icon}></img>
        Pro Fetures</div>
      <div className="feature-privacy">Privacy</div>
      <div class="feature-collab">
        <h2>Collab Mode</h2>
      </div>
      <div class="feature-assets">
        <h2>Asset Hosting</h2>
        <p>You'll be able to </p>
      </div>
      <div class="feature-debug">
        <h2>Debug View</h2>
      </div>
    </div>
  );
}

export default App;
