import React, { useEffect, useState, createContext } from 'react';
import Button from "./components/Button";
import Gif from "./components/Gif";
import axios from "axios";
import Speech from 'react-speech';
const App = () => {

  return (
    <div>
      <Gif></Gif>
      <Button></Button>
     
    </div>
  );
};

export default App;
