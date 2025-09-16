import React, { useEffect, useState } from 'react';

import service_1 from '../assets/service1.png';
import service_2 from '../assets/service2.jpeg';
import service_3 from '../assets/service3.jpg';

import { Button, Carousel, FloatingLabel } from 'react-bootstrap';
import '../pages/Service.css';

import {
  faCalendarAlt,
  faHandshake,
  faShieldAlt,
  faMotorcycle,
  faWarehouse,
  faOilCan
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import A247 from '../assets/247.svg';
import Apickupdrop from '../assets/pickupdrop.svg';
import Aupdating from '../assets/updating.svg';
import Awtsp from '../assets/wtsp.svg';
import bluered from '../assets/bluered.png';
import navyblue from '../assets/navyblue.png';

import AddTestimonial from '../components/AddTestimonial';

import ContactModal from '../components/ContactModal';
import { useLocation } from 'react-router-dom';


import FloatingMenu from '../components/FloatingMenu';
import AddFreeQuote from '../components/AddFreeQuote';
import BookService from '../components/BookService';
import { GetBannerApi } from '../Services/allAPI';
import { serverUrl } from '../Services/serverUrl';

function Service() {
  const [serviceBanners, setServiceBanners] = useState([]);
  
    const fetchBanners = async (category) => {
      try {
        const { data } = await GetBannerApi(category);
        setServiceBanners(data || []);
      } catch (err) {
        console.error("Failed to fetch banners:", err);
      }
    };
 

  const location = useLocation();

  useEffect(()=>{
    fetchBanners("service")
    if(location.state?.section){
      const sectionE1 = document.getElementById(location.state.section);
      if(sectionE1){
        sectionE1.scrollIntoView({behavior:'smooth'})
      }
    }
  },[location])
  return (
    <>


   
   {/* carousil */}
   
   
         {serviceBanners.length > 0 ? (
           <Carousel>
   
            {serviceBanners.map((banner)=> (
             <Carousel.Item key={banner._id} >
               <img style={{ height: '500px', width: '100%' }} src={`${serverUrl}/Uploads/${banner.bannerImage}`} alt="Workshop Overview" />
               <Carousel.Caption>
                 <h3 className='text-light'>{banner.bannerTitle}</h3>
                 <p>{banner.bannerDescription}</p>
               </Carousel.Caption>
             </Carousel.Item>
             )
             )}
   
   
   
           </Carousel>) :
   
           // null
           (<p className="text-muted">No banners uploaded yet.</p>)}


{/* <FloatingMenu />  */}



<AddFreeQuote/>



<BookService/>




     




      <section className="features text-info">
        <h2 className="features-title text-info">Customised Care For All Your Needs</h2>
        <div className="features-grid">
          <div className="feature-item">
            {/* <img src="/icons/workshop.svg" alt="Workshop Icon" /> */}
            <FontAwesomeIcon icon={faWarehouse} size="2x" className="mb-3 text-info" />
            <p className="text-info">Service Workshop<br />Open All 7 Days</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faMotorcycle} size="2x" className="mb-3 text-info" />
            <p className="text-info">Service Pick Up &<br />Drop Facility</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faOilCan} size="2x" className="mb-3 text-info" />
            <p className="text-info">Genuine Parts<br />& Oil</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHandshake} size="2x" className="mb-3 text-info" />
            <p className="text-info">Annual Maintenance<br />Plan Coverage</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mb-3 text-info" />
            <p className="text-info">5 Years Standard<br />Warranty</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="mb-3 text-info" />
            <p className="text-info">24 x 7 Assistance<br />Through RSA</p>
          </div>
        </div>
      </section>


      <AddTestimonial />

      {/* <Testimonials /> */}
     

    </>
  )
}

export default Service
