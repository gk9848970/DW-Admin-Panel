import React, { useState, useEffect } from "react";
import axios from 'axios'
import './css/app.css';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


export const REST_ENPOINT = 'http://localhost:5500/adminPref/1';

export default function App() {
  const [APIData, setAPIData] = useState(null);

  useEffect(() => {
    axios.get(REST_ENPOINT)
    .then(res => {
      setAPIData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  console.log(APIData);

  return (
    <>
      {
        APIData ?
          <>
            <Navbar navbar={APIData.navbar} />
            <Footer footer={APIData.footer} />
          </>
        :
          <div>Nooo</div>  
      }
    </>
  );
}

