import React, { useEffect, useState, createContext } from 'react';
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";
import "../App.css";
import Speech from 'react-speech';

const Button = () => {

    const { speak } = useSpeechSynthesis();
    const value = "abc"
    const[setup,setSetup]=useState("");
    const[delivery,setDelivery]=useState("");

    
        //https://v2.jokeapi.dev/joke/Any


        async function fetchJoke() {
         const res = await axios.get("https://v2.jokeapi.dev/joke/Any")
       
          await setDelivery(res.data.delivery);
          await  setSetup(res.data.setup);
          speak({ text: res.data.setup });
          speak({ text: res.data.delivery });
        }
        
     
  return (

    <div>
      <div className="box-3" >
        <div onClick = {fetchJoke} className="btn btn-three">
          <span>Tell Me A Joke</span>

        </div>
      </div>
 
      <div className="main">
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_content">
          <h2 className="card_title"></h2>
          <div className="card_text">
            <p>{setup}</p>
            <p>{delivery}</p>
          </div>
        </div>
      </div>
    </li>


  </ul>
</div>

    </div>

  );
};

export default Button;
