import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1>404 - Page Not Found</h1>
          <Link to="/" className="btn btn-info mt-3">Go to Home</Link>
        </div>
      </div>
    </>
  )
}

export default NotFound





// import ContactModal from './ContactModal';
// import navyblue from '../assets/navyblue.png';
// import A247 from '../assets/247.svg';
// import Apickupdrop from '../assets/pickupdrop.svg';
// import Aupdating from '../assets/updating.svg';
// import Awtsp from '../assets/wtsp.svg';
// import { useState } from 'react';

// function BookService() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <section className="container service-container py-5">
//       <div className="service-content d-flex flex-column flex-lg-row align-items-center gap-5 p-4 shadow-lg rounded bg-light">
        
//         {/* Left Side: Image */}
//         <figure className="service-image w-100 w-lg-50 text-center mb-4 mb-lg-0">
//           <img
//             src={navyblue}
//             alt="Bike service booking"
//             className="img-fluid rounded shadow"
//             loading="lazy"
//           />
//         </figure>

//         {/* Right Side: Text + Features */}
//         <article className="service-text w-100 w-lg-50 text-center text-lg-start">
//           <h2 className="text-info fw-bold mb-3">Book a Service</h2>
//           <p className="text-muted mb-4 fs-5">
//             Say goodbye to service booking woes. Enjoy the convenience of booking
//             a service from anywhere through WhatsApp and get live status updates
//             on the go.
//           </p>

//           <div className="service-features d-grid gap-4 mb-4">
//             {[
//               { img: A247, text: 'Service workshop open all 7 days', alt: '24/7 service' },
//               { img: Aupdating, text: 'Live status updates of your service', alt: 'Live updates' },
//               { img: Apickupdrop, text: 'Service pick up & drop facility', alt: 'Pickup and drop' },
//               { img: Awtsp, text: 'Easy booking through WhatsApp', alt: 'WhatsApp booking' }
//             ].map((feature, index) => (
//               <div key={index} className="feature-item d-flex align-items-center gap-3 p-2 rounded hover-shadow">
//                 <img src={feature.img} alt={feature.alt} width="35" />
//                 <span className="fw-semibold">{feature.text}</span>
//               </div>
//             ))}
//           </div>

//           <button
//             className="book-btn btn btn-info text-white fw-bold px-5 py-3 rounded-pill shadow-sm hover-scale"
//             onClick={() => setShowModal(true)}
//           >
//             Book Service
//           </button>

//           {showModal && (
//             <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
//           )}
//         </article>
//       </div>
//     </section>
//   );
// }

// export default BookService;


// .service-container {
//   max-width: 1200px;
//   margin: auto;
// }

// .service-content {
//   display: flex;
//   flex-wrap: wrap;
//   background: #f9f9f9; /* Soft background */
//   border-radius: 15px;
//   padding: 2rem;
// }

// .service-image img {
//   max-width: 100%;
//   border-radius: 15px;
//   transition: transform 0.3s ease-in-out;
// }

// .service-image img:hover {
//   transform: scale(1.03);
// }

// .service-features {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// }

// .feature-item {
//   background: #fff;
//   border-radius: 12px;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;
// }

// .feature-item:hover {
//   background: #f1f9ff;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// }

// .book-btn {
//   font-size: 1.2rem;
//   transition: transform 0.3s ease-in-out;
// }

// .book-btn:hover {
//   transform: scale(1.05);
//   background-color: #0dcaf0;
// }

// .hover-shadow {
//   transition: box-shadow 0.3s ease;
// }

// .hover-shadow:hover {
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
// }

// .hover-scale {
//   transition: transform 0.3s ease;
// }

// .hover-scale:hover {
//   transform: scale(1.05);
// }

// @media (max-width: 768px) {
//   .service-content {
//     flex-direction: column;
//     text-align: center;
//     padding: 1rem;
//   }
//   .service-features {
//     grid-template-columns: 1fr;
//   }
//   .book-btn {
//     width: 100%;
//   }
// }




//-----------------------------------------------------------------------------------------------------------------




// import ContactModal from './ContactModal';
// import navyblue from '../assets/navyblue.png';
// import A247 from '../assets/247.svg';
// import Apickupdrop from '../assets/pickupdrop.svg';
// import Aupdating from '../assets/updating.svg';
// import Awtsp from '../assets/wtsp.svg';
// import { useState } from 'react';



// function BookService() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <section className="container service-container py-5">
//       <div className="service-content d-flex flex-column flex-lg-row align-items-center gap-4">
        
//         {/* Left Side: Image */}
//         <figure className="service-image w-100 w-lg-50 text-center">
//           <img
//             src={navyblue}
//             alt="Bike service booking"
//             className="img-fluid rounded"
//           />
//         </figure>

//         {/* Right Side: Text + Features */}
//         <article className="service-text w-100 w-lg-50 text-center text-lg-start">
//           <h2 className="text-info fw-bold mb-3">Book a Service</h2>
//           <p className="text-muted mb-4">
//             Say goodbye to service booking woes. Enjoy the convenience of booking
//             a service from anywhere through WhatsApp and get live status updates
//             on the go.
//           </p>

//           <div className="service-features d-grid gap-3 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
//             <div className="feature-item d-flex align-items-center gap-2">
//               <img src={A247} alt="24/7 service" width="30" />
//               <span>Service workshop open all 7 days</span>
//             </div>
//             <div className="feature-item d-flex align-items-center gap-2">
//               <img src={Aupdating} alt="Live updates" width="30" />
//               <span>Live status updates of your service</span>
//             </div>
//             <div className="feature-item d-flex align-items-center gap-2">
//               <img src={Apickupdrop} alt="Pickup and drop" width="30" />
//               <span>Service pick up & drop facility</span>
//             </div>
//             <div className="feature-item d-flex align-items-center gap-2">
//               <img src={Awtsp} alt="WhatsApp booking" width="30" />
//               <span>Easy booking through WhatsApp</span>
//             </div>
//           </div>

//           <button
//             className="book-btn btn btn-info text-white fw-bold px-4 py-2 rounded"
//             onClick={() => setShowModal(true)}
//           >
//             Book Service
//           </button>

//           {showModal && (
//             <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
//           )}
//         </article>
//       </div>
//     </section>
//   );
// }

// export default BookService;

// .service-container {
//   max-width: 1200px;
//   margin: auto;
// }

// .service-content {
//   display: flex;
//   flex-wrap: wrap;
// }

// .service-image img {
//   max-width: 100%;
//   border-radius: 12px;
// }

// .service-features {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// }

// .feature-item img {
//   flex-shrink: 0;
// }

// @media (max-width: 768px) {
//   .service-content {
//     flex-direction: column;
//     text-align: center;
//   }
//   .service-features {
//     grid-template-columns: 1fr;
//   }
// }
