import React from 'react';
import logo from './logo.svg';
import './App.css';
import icon from './icon.svg'
import icon2 from './3d_rotation-24px.svg'
import tw_img from './twitter.png'
import explore_img from "./search-property.png"
import home_img from "./home.png"
import notif_img from "./appointment-reminders.png"
import msg_img from "./message-group.png"
import bookmark_img from "./bookmark-ribbon.png"
import lists_img from "./ingredients-list.png"
import profile_img from "./profile.svg"
import more_img from "./connection-status-off.png"
import stars_img from "./stars.png"
import account_img from "./test-account.png"

function App() {
  return (
    <div className='grid'>

      <div className="pro-features">
        <img src={tw_img} width="50" height="50"></img>
        <br></br>
        <div className="item"> <img src={home_img}  width="30" height="30" ></img> <span id="home">Home</span> </div>
        <br></br>
        <div className="item"> <img src={explore_img}  width="30" height="30"></img> <span>Explore</span> </div>
        <br></br>
        <div className="item"> <img src={notif_img}  width="30" height="30"></img> <span>Notifications</span> </div>
        <br></br>
        <div className="item"> <img src={msg_img}  width="30" height="30"></img> <span>Messages</span> </div>
        <br></br>
        <div className="item"> <img src={bookmark_img}   width="30" height="30"></img> <span>Bookmarks</span> </div>
        <br></br>
        <div className="item"> <img src={lists_img}  width="30" height="30"></img> <span>Lists</span> </div>
        <br></br>
        <div className="item"> <img src={profile_img}  width="30" height="30"></img> <span>Profile</span> </div>
        <br></br>
        <div className="item"> <img src={more_img}  width="30" height="30"></img> <span>More</span> </div>
        <br></br>
        <button id="btn">Tweet</button>
      </div>

      <div className="feature-privacy">
        
        <div>Home</div>
        <img src={stars_img}  width="30" height="30"></img>
      
      </div>

      <div class="feature-collab">
        <h2>Trends for you</h2>
      </div>

      <div class="feature-assets">
        <h2>Asset Hosting</h2>
        <div>Search twitter </div>
      </div>

      <div class="feature-debug">
        <h2> <img src={account_img} width="30" height="30"></img> <div>What's happening?</div></h2>
        <br></br>
        <div> <img src={icon}  width="18" height="18"></img>  <img src={icon}  width="18" height="18"></img>   <img src={icon}  width="18" height="18"></img>  </div>
      </div>

    </div>
  );
}

export default App;