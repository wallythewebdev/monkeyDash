import React from 'react';
import monkeyLogo from '../assets/img/designMonkey.png'

export default function header(){
    return (
        <div className="header">
            <h2>React Text</h2>
            <img src={monkeyLogo} alt="monkey design logo"></img>
        </div>
    )
}