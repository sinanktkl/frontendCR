import React from "react";

const JoinUs = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-white"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="container p-5 rounded shadow-lg"
        style={{
          maxWidth: "700px",
          backgroundColor: "#ffffff",
        }}
      >
        <h1 className="text-center mb-4 text-info fw-bold">
          Join Us – Custom Rodz
        </h1>
        <p className="text-center mb-4 text-secondary">
          Be a part of the <strong className="text-dark">Custom Rodz</strong> family — whether you’re a biker,
          mechanic, or enthusiast, we welcome you to ride with us!  
          Get updates, exclusive offers, and priority service booking.
        </p>

        {/* Form */}
        <form>
          <div className="mb-3">
            <label className="form-label text-info">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-info">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-info">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-info">Interest</label>
            <select className="form-select">
              <option value="">Select an option</option>
              <option value="membership">Membership</option>
              <option value="job">Work with Us</option>
              <option value="newsletter">Newsletter</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-info px-5 py-2 text-white fw-bold"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
