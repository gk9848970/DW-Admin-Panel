import React, { useState, useEffect } from "react";
import axios from 'axios'

import './css/app.css';
import logoImg from './assets/logoSL.png'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Feature from './components/Feature/Feature'
import Testimonial from './components/Testimonial/Testimonial'
import Carousel from './components/Carousel/Carousel'
import Brand from './components/Brand/Brand'
import Form from './components/Form/Form'

// Get by "Email"
// export const REST_ENPOINT = 'http://localhost:5500/getInitialData';

// Get by "Domain"
// export const REST_ENPOINT = 'http://localhost:5500/getAllData';

const REST_ENPOINT_GET_DATA = 'https://speedlabs-server-host.herokuapp.com/getInitialData';

export const REST_ENPOINT_POST_EMAIL = "messi@leo.com";
export const REST_ENPOINT_POST_DATA = 'https://speedlabs-server-host.herokuapp.com/adminPref';

export default function App() {
  const [APIData, setAPIData] = useState(null);
  const [selectedComponentId, setSelectedComponentId] = useState(1);

  useEffect(() => {
    axios.post(REST_ENPOINT_GET_DATA, {
      Email: REST_ENPOINT_POST_EMAIL,
      })
      .then(res => {
        setAPIData(res.data);
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  console.log(APIData)
  function handleListClick(e) {
    if(!e.target.matches('.sidemenu__link')) {
      return;
    }

    const links = [...document.querySelectorAll('.sidemenu__link')];
    links.forEach(link => link.classList.remove('sidemenu__link--highlighted'));

    e.target.classList.add('sidemenu__link--highlighted');
    setSelectedComponentId( parseInt(e.target.id) );
  }

  return (
    <div>
      <div className="topbar__container">
        <img className="topbar__logo" src={logoImg} alt="SpeedLabs Logo"></img>
      </div>
      <div className="sidemenu__container">
        <ul onClick={e => handleListClick(e)}>
          <li id={1} className="sidemenu__link sidemenu__link--highlighted">Navbar</li>
          <li id={2} className="sidemenu__link">Footer</li>
          <li id={3} className="sidemenu__link">Header</li>
          <li id={4} className="sidemenu__link">Feature</li>
          <li id={5} className="sidemenu__link">Testimonial</li>
          <li id={6} className="sidemenu__link">Carousel</li>
          <li id={7} className="sidemenu__link">Brand Image</li>
          <li id={8} className="sidemenu__link">Form</li>
        </ul>
      </div>
      {
         APIData ?
          <div className="settings__container">
            
            {selectedComponentId === 1 && <Navbar id={1} navbar={APIData.navbar} />}
            {selectedComponentId === 2 && <Footer id={2} footer={APIData.footer} />}
            {selectedComponentId === 3 && <Header id={3} header={APIData.header} />}
            {selectedComponentId === 4 && <Feature id={4} feature={APIData.feature} />}
            {selectedComponentId === 5 && <Testimonial id={5} testimonial={APIData.testimonial} />}
            {selectedComponentId === 6 && <Carousel id={6} carousel={APIData.carousel} />}
            {selectedComponentId === 7 && <Brand id={7} brand={APIData.brand} />}
            {selectedComponentId === 8 && <Form id={8} form={APIData.form} />}

          </div>
        :
          <div>Nooo</div>  
      }
    </div>
  );
}

