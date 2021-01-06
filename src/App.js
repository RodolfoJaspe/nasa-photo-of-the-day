import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Photo from './components/Photo';
import Footer from './components/Footer';
import "./App.css";
import axios from 'axios';

function App() {
    const [photoData, setPhotoData] = useState({});
    useEffect (() => {
       axios.get("https://api.nasa.gov/planetary/apod?api_key=jOev6Fm1lVwGGzhDnZ9rPdOFWmfmhfUGzBa3TWtL")
    .then(response => {
        console.log(response.data)
        setPhotoData(response.data);
    })
    .catch(err => console.log(`=== ERROR === ${err}`)) 
    },[])
    console.log(photoData)
    

  return (
    <div className="App">
      < Header photoUrl={photoData.hdurl}/>
      < Photo photoData={photoData}/>
      < Footer photoUrl={photoData.hdurl}/>
    </div>
  );
}

export default App;
