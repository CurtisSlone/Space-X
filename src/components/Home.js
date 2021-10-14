import '../style/Home.scss'
import React, { useState, useEffect} from "react";


const Home = () => {


    //Hook for input value
    // Changes img based in input
    const [value, setValue] = useState("")

    //OnChangeHandler
    // Use to collect input from field, initiate API query,
    // refresh img component to reflect patch from launch

    const OnChangeHandler = e => {
        useEffect(()=>{

        })
    }

    return (
        <div className="content">
            <div className="title__box">
            <h1> Choose Flight Number </h1>
            <br/>
            <h2> Out of 157 Flights </h2>
        </div>
        <input
            type="text"
            value={value}
            onChange={e=>setValue(e.target.value)}
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