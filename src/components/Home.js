import '../style/Home.scss'
import React, { useState } from "react";
import axios from 'axios'


const Home = () => {


    //Hook for input value
    // Changes img, name, date based in input
    const [flightPatch, setFlightPatch] = useState("")


    
    // Input field on change handler
    const onChangeHandler = (e) => {
            async function fetchData(){
                const req = await axios({
                    method: 'post',
                    url: 'https://api.spacexdata.com/v4/launches/query',
                    data: {
                        query: {
                            flight_number: { $eq: e.target.value},
                        }
                    }
                })//End axios
                setFlightPatch(req.data.docs[0].links.patch.small)
            }
            fetchData()
    }//END onChangeHandler
    

    return (
        <div className="content">
            <div className="title__box">
            <h1> Choose Flight Number </h1>
            <br/>
            <h2> Out of 157 Flights </h2>
        </div>
        <input
            type="text"
            onChange={onChangeHandler}
            placeHolder="000"
            // Get input
            // pass state to img
        />
        <img
            // https://i.imgur.com/{patch-small}.png
            src={flightPatch}
            alt="flight patch"
        />
        </div>
    )
}

export default Home