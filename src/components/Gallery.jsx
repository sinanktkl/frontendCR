import React from "react";
import '../componentsStyles/Gallery.css'


function Gallery() {
  const firstRow = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661960487542-352d8c5a69f7?fm=jpg&q=60&w=3000",
      text: "At Custom Rodz Bike Workshop, we specialize in complete bike maintenance, engine tuning, brake inspections, and custom modifications. Our expert mechanics ensure every bike gets top-notch care for performance and safety. Trust us to keep your ride smooth and reliable.",
      size: "col-12 col-lg-8",
    },
    {
      src: "https://media.istockphoto.com/id/1019948816/photo/mechanic-repairing-customized-motorcycle.jpg?s=612x612&w=0&k=20&c=JbOvmcjIei-BpFkycaafdskX3n5TCuZLCUpwkZt8SKY=",
      text: "Our workshop offers quick diagnostics, emergency repairs, and regular servicing to keep your bike in peak condition. Safety and performance are our top priorities.",
      size: "col-12 col-lg-4",
    },
  ];

  const secondRow = [
    {
      src: "https://st3.depositphotos.com/13194036/18625/i/1600/depositphotos_186254938-stock-photo-close-shot-bike-repair-station.jpg",
      text: "Our bike specialists provide expert maintenance, oil changes, chain adjustments, tire replacements, and performance tuning. Every bike gets personalized care to ensure a safe and enjoyable ride.",
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/011/844/022/small_2x/mechanic-using-a-hex-key-or-allen-wrench-to-remove-motorcycle-rear-hydraulic-brake-pump-working-in-garage-maintenance-and-repair-motorcycle-concept-selective-focus-photo.jpg",
      text: "Regular tune-ups and inspections are key to extending the life of your bike. We check brakes, suspension, and engine performance with precision and care.",
    },
    {
      src: "https://t4.ftcdn.net/jpg/04/43/36/15/360_F_443361534_s2VuWPveNCIecA94KpvjLeeOOnhB09hn.jpg",
      text: "Custom Rodz offers premium bike detailing and modifications to enhance both aesthetics and performance. We make every ride unique and smooth.",
    },
  ];

  return (
    <section className="about-gallery-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-info fw-bolder mb-5">
          Custome Rodz Insights
        </h2>

        {/* First row: 2 images */}
        <div className="row g-2 mb-1 justify-content-center">
          {firstRow.map((item, index) => (
            <div
              className={`${item.size} position-relative overflow-hidden about-gallery-card`}
              key={index}
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid w-100 about-gallery-img rounded"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="about-gallery-overlay text-white d-flex align-items-center p-3">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: 3 images */}
        <div className="row g-2 justify-content-center">
          {secondRow.map((item, index) => (
            <div
              className="col-md-4 position-relative overflow-hidden about-gallery-card"
              key={index}
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 3}`}
                className="img-fluid w-100 about-gallery-img rounded"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="about-gallery-overlay text-white d-flex align-items-center p-3">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
