import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { AddBookServiceApi } from "../Services/allAPI";


const ContactModal = ({ show, handleClose }) => {

  const [bookedService, setBookedService] = useState({
    BScustomerName: "", BScustomerEmail: "", BScustomerPhone: "", BScustomerRequest: ""
  })

  const handleAddbookservice = async (e) => {
    e.preventDefault()
    const { BScustomerEmail, BScustomerName, BScustomerRequest, BScustomerPhone } = bookedService

    if (!BScustomerEmail || !BScustomerName || !BScustomerRequest || !BScustomerPhone) {
      toast.warn("Please fill the missing fields")
      return
    }

    const token = sessionStorage.getItem("token")
    if(!token){
      toast.warn("Please login")
      return
    }
    const reqBody ={
      BScustomerEmail,BScustomerName,BScustomerPhone,BScustomerRequest
    }
    const reqHeader ={
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await AddBookServiceApi(reqBody,reqHeader)

      if (result.status == 200) {
        setBookedService({
          BScustomerName: "", BScustomerEmail: "", BScustomerPhone: "", BScustomerRequest: ""
        })
        toast.success("Booked service successfully")
      } else {
       toast.error(result?.data?.error || "Something went wrong");

      }
    } catch (err) {
      console.log(err);

    }
  }
  return (
    <>
      {/* Bootstrap Modal */}
      <div className={`modal fade ${show ? "show d-block" : "d-none"}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-body p-4">
              {/* Close Button */}
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>

              {/* Modal Header */}
              <div className="text-center">
                <h3 className="text-info">Book Your Bike Service Today!</h3>
                <h5 className="text-info">Special Offer:</h5>
                <p className="text-info">Get 15% off on your first service — plus free pickup and drop within city limits!</p>
              </div>

              {/* Form */}
              <form id="contactForm " onSubmit={handleAddbookservice}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control bg-light border-0"
                    placeholder="Your Name"
                    pattern="[a-zA-Z ]*"
                    required
                    style={{ height: "55px" }}
                    onChange={(e) => setBookedService({ ...bookedService, BScustomerName: e.target.value })}
                    value={bookedService.BScustomerName}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                    required
                    style={{ height: "55px" }}
                    onChange={(e) => setBookedService({ ...bookedService, BScustomerEmail: e.target.value })}
                    value={bookedService.BScustomerEmail}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control bg-light border-0"
                    placeholder="Your Phone Number"
                    pattern="^((\\+91-?)|0)?[0-9]{10,11}$"
                    required
                    style={{ height: "55px" }}
                    onChange={(e) => setBookedService({ ...bookedService, BScustomerPhone: e.target.value })}
                    value={bookedService.BScustomerPhone}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="query"
                    className="form-control bg-light border-0"
                    rows="3"
                    placeholder="Describe any issues or service requests for your bike"
                    onChange={(e) => setBookedService({ ...bookedService, BScustomerRequest: e.target.value })}
                    value={bookedService.BScustomerRequest}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-info d-block w-100">
                  Submit Booking
                </button>
                <footer className="bg-light text-muted small">
                  *Same-day service available for selected jobs.
                  Call us for urgent repairs: <strong>+91-98765-43210</strong>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Background */}
      {show && <div className="modal-backdrop fade show" onClick={handleClose}></div>}
    </>
  );
};

export default ContactModal;

