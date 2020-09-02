import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Import pictures to be used for nav

import overIcon from '../assets/img/overview_icon.png'
import detailsIcon from '../assets/img/details_icon.png'


export default function Nav(){
    return (
        <div className="Nav">
       
            <nav>
                <Link to="/overview">
                    <img src={overIcon} alt="Navigation menu to company overview page"></img>
                </Link>
                <Link to="/details">
                    <img src={detailsIcon} alt="Navigation menu to company details page"></img>
                </Link>
            </nav>
        
    </div>
    )
}
