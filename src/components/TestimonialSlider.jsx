// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../componentsStyles/TestimonialSlider.css";
// import { GetApprovedTestimonyAPI } from "../Services/allAPI";
// import { serverUrl } from "../Services/serverUrl";
// import { FaStar } from "react-icons/fa";
// import comma from '../assets/comma.png'



// function TestimonialSlider() {


//   // Custom arrows
//   function PrevArrow({ onClick }) {
//     return (
//       <button className="custom-arrow prev" onClick={onClick}>
//         <img
//           src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
//           alt="prev"
//         />
//       </button>
//     );
//   }

//   function NextArrow({ onClick }) {
//     return (
//       <button className="custom-arrow next" onClick={onClick}>
//         <img
//           src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
//           alt="next"
//         />
//       </button>
//     );
//   }

//   // const settings = {
//   //   infinite: true,
//   //   centerMode: true,
//   //   centerPadding: "0",
//   //   slidesToShow: 3,
//   //   autoplay: true,
//   //   autoplaySpeed: 2500,
//   //   speed: 600,
//   //   arrows: true,
//   //   dots: true,
//   //   nextArrow: <NextArrow />,
//   //   prevArrow: <PrevArrow />,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1200, // tablets & small laptops
//   //       settings: { slidesToShow: 3, centerMode: true }
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: { slidesToShow: 3 }
//   //     }
//   //   ]
//   // };
//   // ((((((((((((((((((((()))))))))))))))))))))

//   // const settings = {
//   //   infinite: true,
//   //   centerMode: true,
//   //   centerPadding: "0",
//   //   slidesToShow: 3,
//   //   autoplay: true,
//   //   autoplaySpeed: 2500,
//   //   speed: 600,
//   //   arrows: true,
//   //   dots: true,
//   //   nextArrow: <NextArrow />,
//   //   prevArrow: <PrevArrow />,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1200, // tablets & small laptops
//   //       settings: { slidesToShow: 3, centerMode: true }
//   //     },
//   //     {
//   //       breakpoint: 1024, // tablets
//   //       settings: { slidesToShow: 2, centerMode: false }
//   //     },
//   //     {
//   //       breakpoint: 768, // mobile
//   //       settings: { slidesToShow: 1, centerMode: false }
//   //     }
//   //   ]
//   // };


//   const settings = {
//     infinite: true,
//     centerMode: screenWidth > 768, // disable center mode on mobile
//     centerPadding: "0",
//     slidesToShow: screenWidth > 1024 ? 3 : screenWidth > 768 ? 2 : 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     speed: 600,
//     arrows: !(screenWidth <= 1024 && screenWidth > 768), // disable arrows for 2 cards
//     dots: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };


//   const [loading, setLoading] = useState(false)
//   const [testimonials, setTestimonials] = useState([])
//   const [expandedRows, setExpandedRows] = useState({})



//   const handleTestimonials = async () => {
//     setLoading(true);
//     try {
//       const result = await GetApprovedTestimonyAPI()
//       console.log(result);

//       if (result.status === 200) {
//         setTestimonials(result.data)

//       } else {

//         console.log(result);

//       }
//     } catch (err) {
//       console.log(err);

//     } finally {
//       setLoading(false)
//     }
//   }

//   const toggleReadMore = (id) => {
//     setExpandedRows((prev) => ({
//       ...prev,
//       [id]: !prev[id]
//     }))
//   }

//   useEffect(() => {
//     handleTestimonials();
//   }, [])

//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <section className="testimonial-section">
//         <div className="container">
//           <div className="testimonial-header">
//             <h3 className="testimonial-title text-info">Hear from Ride Sure Users</h3>
//             {screenWidth <= 1024 && screenWidth > 768 && (
//               <div className="testimonial-arrows">
//                 <PrevArrow onClick={() => document.querySelector(".testimonial-slider .slick-prev")?.click()} />
//                 <NextArrow onClick={() => document.querySelector(".testimonial-slider .slick-next")?.click()} />
//               </div>
//             )}
//           </div>
//           <Slider {...settings} className="testimonial-slider " >
//             {testimonials.map((item, index) => {
//               const isExpanded = expandedRows[item._id];
//               const text = item.customerText || "";
//               return (

//                 <div key={item._id} className="testimonial-card" >
//                   <div className="comma-icon">
//                     <img
//                       src={comma}
//                       alt="comma"
//                     />
//                   </div>
//                   <div className="avatar">
//                     <img src={`${serverUrl}/Uploads/${item.customerImage}`} alt={item.customerName} />
//                   </div>
//                   <div className="details">
//                     <h3 className="text-info">{item.customerName}</h3>
//                     <span className="role">{item.customerVehicle}</span>
//                     <blockquote className="blckquote">
//                       {isExpanded ? text : text.slice(0, 100)}
//                       {text.length > 100 && (
//                         <button
//                           onClick={() => toggleReadMore(item._id)}
//                           className="btn btn-link p-0 ms-1"
//                           style={{ fontSize: "0.9rem" }}
//                         >
//                           {isExpanded ? "Read less" : "...Read more"}
//                         </button>
//                       )}
//                     </blockquote>
//                     <span>{[...Array(item.customerRating)].map((_, i) => (
//                       <FaStar key={i} color="#f39c12" />
//                     ))}</span>
//                   </div>
//                 </div>
//               )
//             })}
//           </Slider>
//         </div>
//       </section>
//     </>
//   )
// }

// export default TestimonialSlider
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++                                  +++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../componentsStyles/TestimonialSlider.css";
import { GetApprovedTestimonyAPI } from "../Services/allAPI";
import { serverUrl } from "../Services/serverUrl";
import { FaStar } from "react-icons/fa";
import comma from "../assets/comma.png";

function TestimonialSlider() {
  const sliderRef = useRef(null);

  // Custom arrows for header
  function HeaderPrevArrow({ onClick }) {
    return (
      <button className="header-arrow prev-header" onClick={onClick}>
        <img
          src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
          alt="prev"
        />
      </button>
    );
  }

  function HeaderNextArrow({ onClick }) {
    return (
      <button className="header-arrow next-header" onClick={onClick}>
        <img
          src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
          alt="next"
        />
      </button>
    );
  }

  // Track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  // Handle arrow clicks
  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  // Slider settings (responsive logic)
  const settings = {
    infinite: true,
    centerMode: screenWidth > 1024, // center mode only on desktop
    centerPadding: "0",
    slidesToShow: screenWidth > 1024 ? 3 : screenWidth > 768 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    arrows: false, // Always hide default arrows
    dots: testimonials.length <= 6, // Show dots only when testimonials <= 6
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          dots: testimonials.length <= 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: testimonials.length <= 6
        }
      }
    ]
  };

  const handleTestimonials = async () => {
    setLoading(true);
    try {
      const result = await GetApprovedTestimonyAPI();
      if (result.status === 200) {
        setTestimonials(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleReadMore = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to truncate text to 4 lines approximately
  const truncateText = (text, maxLength = 200) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) : text;
  };

  useEffect(() => {
    handleTestimonials();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <h3 className="testimonial-title text-info">Hear from Ride Sure Users</h3>
          
          {/* Header arrows - always visible on all screen sizes */}
          <div className="testimonial-arrows">
            <HeaderPrevArrow onClick={handlePrevClick} />
            <HeaderNextArrow onClick={handleNextClick} />
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading testimonials...</div>
        ) : (
          <Slider {...settings} ref={sliderRef} className="testimonial-slider">
            {testimonials.map((item) => {
              const isExpanded = expandedRows[item._id];
              const text = item.customerText || "";
              const truncatedText = truncateText(text, 200);
              
              return (
                <div key={item._id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="comma-icon">
                      <img src={comma} alt="comma" />
                    </div>
                    <div className="avatar">
                      <img
                        src={`${serverUrl}/Uploads/${item.customerImage}`}
                        alt={item.customerName}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/80x80/cccccc/666666?text=User";
                        }}
                      />
                    </div>
                    <div className="details">
                      <h3 className="text-info">{item.customerName}</h3>
                      <span className="role">{item.customerVehicle}</span>
                      
                      <div className="testimonial-text">
                        <blockquote className="blckquote">
                          {isExpanded ? text : truncatedText}
                          {text.length > 200 && (
                            <button
                              onClick={() => toggleReadMore(item._id)}
                              className="read-more-btn"
                            >
                              {isExpanded ? " Read less" : "... Read more"}
                            </button>
                          )}
                        </blockquote>
                      </div>
                      
                      <div className="rating">
                        {[...Array(Math.min(5, Math.max(1, item.customerRating || 1)))].map((_, i) => (
                          <FaStar key={i} color="#f39c12" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default TestimonialSlider;



// import "../componentsStyles/TestimonialSlider.css";

// import React, { useEffect, useState, useRef, useMemo } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../componentsStyles/TestimonialSlider.css";
// import { GetApprovedTestimonyAPI } from "../Services/allAPI";
// import { serverUrl } from "../Services/serverUrl";
// import { FaStar } from "react-icons/fa";
// import comma from "../assets/comma.png";

// export default function TestimonialSlider() {
//   const sliderRef = useRef(null);

//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [expandedRows, setExpandedRows] = useState({});
//   const [screenWidth, setScreenWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1400
//   );

//   // fetch data
//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       try {
//         const res = await GetApprovedTestimonyAPI();
//         if (res?.status === 200 && Array.isArray(res.data)) {
//           setTestimonials(res.data);
//         } else {
//           console.warn("Testimony API returned unexpected:", res);
//         }
//       } catch (err) {
//         console.error("GetApprovedTestimonyAPI error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   // track resize to change slidesToShow and center behaviour
//   useEffect(() => {
//     const onResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // slidesToShow logic
//   const slidesToShow = useMemo(() => {
//     if (screenWidth > 1024) return 3;
//     if (screenWidth > 768) return 2;
//     return 1;
//   }, [screenWidth]);

//   // slider settings memoized (dots depend on testimonials length)
//   const settings = useMemo(
//     () => ({
//       infinite: true,
//       slidesToShow,
//       slidesToScroll: 1,
//       centerMode: slidesToShow === 3,      // only center/zoom when 3 cards visible
//       centerPadding: "0px",
//       autoplay: false,
//       arrows: false,                       // header arrows control slider
//       dots: testimonials.length <= 6,      // show dots only when <= 6
//       responsive: [
//         { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
//         { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
//       ],
//     }),
//     [slidesToShow, testimonials.length]
//   );

//   const toggleReadMore = (id) =>
//     setExpandedRows((p) => ({ ...p, [id]: !p[id] }));

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="testimonial-header">
//           <h3 className="testimonial-title">Hear from Ride Sure Users</h3>

//           <div className="testimonial-arrows" aria-hidden={false}>
//             <button
//               className="header-arrow"
//               aria-label="Previous testimonial"
//               onClick={() => sliderRef.current?.slickPrev()}
//             >
//               <img
//                 src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
//                 alt="prev"
//                 style={{ transform: "rotate(180deg)" }}
//               />
//             </button>

//             <button
//               className="header-arrow"
//               aria-label="Next testimonial"
//               onClick={() => sliderRef.current?.slickNext()}
//             >
//               <img
//                 src="https://www.royalenfield.com/node/assets/service-platform/SEC/assets/images/arrow-right.png"
//                 alt="next"
//               />
//             </button>
//           </div>
//         </div>

//         <div className="testimonial-slider-wrap">
//           <Slider ref={sliderRef} {...settings} className="testimonial-slider">
//             {loading && (
//               <div>
//                 <div className="testimonial-card">
//                   <p>Loading…</p>
//                 </div>
//               </div>
//             )}

//             {!loading &&
//               testimonials.map((item) => {
//                 const text = item.customerText || "";
//                 const isExpanded = !!expandedRows[item._id];
//                 return (
//                   <div key={item._id} className="slide">
//                     <div className="testimonial-card">
//                       {/* comma icon top-left area */}
//                       <div className="comma-wrapper">
//                         <img src={comma} alt="quote" className="comma-image" />
//                       </div>

//                       {/* avatar in center top */}
//                       <div className="avatar">
//                         <img
//                           src={`${serverUrl}/Uploads/${item.customerImage}`}
//                           alt={item.customerName}
//                         />
//                       </div>

//                       {/* text content */}
//                       <div className="content">
//                         <h4 className="customer-name">{item.customerName}</h4>
//                         <span className="customer-role">{item.customerVehicle}</span>

//                         <blockquote className="blckquote">
//                           {isExpanded ? text : text.slice(0, 160)}
//                           {text.length > 160 && (
//                             <button
//                               className="read-more"
//                               onClick={() => toggleReadMore(item._id)}
//                             >
//                               {isExpanded ? " Read less" : " ...Read more"}
//                             </button>
//                           )}
//                         </blockquote>

//                         <div className="stars">
//                           {[...Array(item.customerRating || 0)].map((_, i) => (
//                             <FaStar key={i} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }
