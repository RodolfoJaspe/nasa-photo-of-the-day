import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Photo from './components/Photo';
import Footer from './components/Footer';
import "./App.css";
import axios from 'axios';

function App() {
    const [photoData, setPhotoData] = useState({});
    const [date, setDate] = useState("");

    let dateHandler = (e) => {
            setDate(e.target.value);
        }

    useEffect (() => {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=jOev6Fm1lVwGGzhDnZ9rPdOFWmfmhfUGzBa3TWtL&date=${date}`)
    .then(response => {
        setPhotoData(response.data);
    })
    .catch(err => console.log(`=== ERROR === ${err}`)) 
    },[date])

  return (
    <div className="App">
      < Header photoUrl={photoData.hdurl}/>
      < Photo photoData={photoData} dateHandler={dateHandler}/>
      < Footer photoUrl={photoData.hdurl}/>
    </div>
  );
}

export default App;
