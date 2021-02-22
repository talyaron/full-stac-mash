import React from "react";
import './About.css'

import Image from '../../components/image/image';
import Info from '../../components/info/info';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function About() {
    return (
        <div className='page about'>
            <h1>About</h1>
            <Link to="/games">Games</Link>
            <br></br>
            <Image/>
            <Info/>
        </div>
        
    )
}

