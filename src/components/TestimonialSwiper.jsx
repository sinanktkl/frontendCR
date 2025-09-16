// import "../componentsStyles/TestimonialSwiper.css"; // custom styles for scaling effect



// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { GetTestimonyAPI } from "../Services/allAPI";

// // const testimonials = [

// //   {
// //     name: "Revanth Aachari",
// //     role: "Extended Warranty User",
// //     text: "I recently visited for my Royal Enfield bike service, and I must say, it was a fantastic experience.",
// //     avatar: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/Revanth_Aachari.webp",
// //     comma: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/comma.png",
// //   },
// //   {
// //     name: "Karthick Bachu",
// //     role: "Royal Enfield Maestros User",
// //     text: "One of the best service centers and recently I took AMC where I got a discount on spare parts & labor charges.",
// //     avatar: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/Karthik_bachu.webp",
// //     comma: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/comma.png",
// //   },
// //   {
// //     name: "Amit Kumar",
// //     role: "Road Side Assistance User",
// //     text: "It was a good experience. I got an on-time support mechanic who was fully equipped with all the tools.",
// //     avatar: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/testimonial_user.webp",
// //     comma: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/comma.png",
// //   },
// //   {
// //     name: "Saurav Mavai",
// //     role: "Extended Warranty User",
// //     text: "I was having an issue with the fuel pump, and they changed the part quickly because I purchased an extended warranty.",
// //     avatar: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/testimonial_user.webp",
// //     comma: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/comma.png",
// //   },
// //   {
// //     name: "Vignesh Ramachandran",
// //     role: "Road Side Assistance User",
// //     text: "Quick response from the roadside assistance team. Service was prompt and excellent.",
// //     avatar: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/testimonial_user.webp",
// //     comma: "https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/comma.png",
// //   },
// // ];

// // Custom Arrow Components

// const NextArrow = ({ onClick }) => (
//   <button className="custom-arrow next" onClick={onClick}>
//     <img src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png" alt="" />
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button className="custom-arrow prev " onClick={onClick}>
//     <img src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png" alt="" />
//   </button>
// );

// const TestimonialSwiper = () => {


//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: Math.min(testimonials.length, 3),
//     infinite: testimonials.length > 3,
//     speed: 600,
//     dots: false,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: Math.min(testimonials.length, 2),
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   useEffect(() => {
//     handleTestimonials()
//   }, [])

//   return (
//     <section className="testimonial-section">
//       <div className="container">
//         <h3>Hear from Ride Sure Users</h3>
//         <Slider {...settings}>
//           {testimonials.map((item, index) => (
//             <div className="testimonial-card-wrapper" key={index}>
//               <div className="testimonial-card">
//                 <div className="comma-img">
//                   <img src={item.comma} alt="quote" />
//                 </div>
//                 <div className="avatar-img">
//                   <img src={item.avatar} alt={item.name} />
//                 </div>
//                 <div className="details">
//                   <h3>{item.name}</h3>
//                   <span>{item.role}</span>
//                   <blockquote>{item.text}</blockquote>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSwiper;


import React from 'react'
import "../componentsStyles/TestimonialSwiper.css"; // custom styles for scaling effect



import { useEffect, useState } from "react";
import Slider from "react-slick";
import { GetApprovedTestimonyAPI } from "../Services/allAPI";
import { serverUrl } from '../Services/serverUrl';


function TestimonialSwiper() {
  const [loading, setLoading] = useState(false)
  const [testimonials, setTestimonials] = useState([])






  const handleTestimonials = async () => {
    setLoading(true);
    try {
      const result = await GetApprovedTestimonyAPI()
      console.log(result);
      
      if (result.status === 200) {
        setTestimonials(result.data)

      } else {
        
        console.log(result);
        
      }
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    handleTestimonials()
  }, [])
  
    const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
      <img src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png" alt="" />
    </button>
  );
  
  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev " onClick={onClick}>
      <img src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png" alt="" />
    </button>
  );
  
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: Math.min(testimonials.length, 3),
    infinite: testimonials.length > 3,
    speed: 600,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(testimonials.length, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <h3>Hear from Ride Sure Users</h3>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div className="testimonial-card-wrapper" key={index}>
                <div className="testimonial-card">
                  <div className="comma-img">
                    <img src={`${serverUrl}/Uploads/${item.customerImage}`} alt="quote" />
                  </div>
                  <div className="avatar-img">
                    <img src={item.avatar} alt={item.name} />
                  </div>
                  <div className="details">
                    <h3>{item.customerName}</h3>
                    <span>{item.customer}</span>
                    <blockquote>{item.text}</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default TestimonialSwiper
