import '../componentsStyles/BookService.css'
import ContactModal from './ContactModal'
import navyblue from '../assets/navyblue.png';
import A247 from '../assets/247.svg';
import Apickupdrop from '../assets/pickupdrop.svg';
import Aupdating from '../assets/updating.svg';
import Awtsp from '../assets/wtsp.svg';
import { useState } from 'react';
   

function BookService() {
     const [showModal, setShowModal] = useState(false);

  return (
    <>
       <section className="container service-container">
        <div className="service-content">
          {/* Left Side: Image */}
          <div className="service-image">
            <img
              // src="https://www.apnamechanic.com/bikes/wp-content/uploads/2024/05/bike-service-offer.png"
              // src="https://www.shutterstock.com/image-photo/two-wheeler-service-260nw-2651295841.jpg"
              // src={bluered}
              src={navyblue}
              alt="Woman booking service"
            />
          </div>

          {/* Right Side: Text + Features */}
          <div className="service-text ">
            <h2 className='text-info  '>Book a Service</h2>
            <p className='text-info'>
              Say goodbye to service booking woes. Enjoy the convenience of booking
              a service from anywhere through WhatsApp and get live status updates
              on-the-go.
            </p>

            <div className="service-features text-info">
              <div className="feature-item">
                <img src={A247} alt="" />
                <span className='text-info'>Service workshop open all 7 days</span>
              </div>
              <div className="feature-item">
                <img src={Aupdating} alt="" />
                <span className='text-info'>Live status updates of your service</span>
              </div>
              <div className="feature-item">
                <img src={Apickupdrop} alt="" />
                <span className='text-info'>Service pick up & drop facility</span>
              </div>
              <div className="feature-item">
                <img src={Awtsp} alt="" />
                <span className='text-info'>Easy booking through WhatsApp</span>
              </div>
            </div>

            <button className="book-btn btn-info" onClick={() => setShowModal(true)}>Book Service</button>
            {showModal && <ContactModal show={showModal} handleClose={() => setShowModal(false)} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default BookService
