import '../style/Home.scss'
import React, { useState, useEffect} from "react";
import axios from 'axios'

const Home = () => {
    return (
        <div className="content">
            <div className="title__box">
            <h1> Choose Flight Number </h1>
            <br/>
            <h2> Out of 157 Flights </h2>
        </div>
        <input
            type="text"
            placeHolder="000"
            // Get input
            // pass state to img
        />
        <img
            // https://i.imgur.com/{patch-small}.png
            src="https://i.imgur.com/yPv13SR.png"
            alt="flight patch"
        />
        </div>
    )
}

export default Home