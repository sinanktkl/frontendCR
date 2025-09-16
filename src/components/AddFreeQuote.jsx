// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

// function AddFreeQuote() {


//   const[freeQuote,setFreeQuote]=useState({
//     FQname:""
//   })
//   return (
//     <>
//        <div id='' className=' '>
//     <section id='service123_quote'>
//           <div className='mt-1 p-1'></div>
//     </section>

//       {/* Get a Free Quote Section */}
//       <section id='service123_quote'  className="py-5 bg-white mt-5 p-5">
//         <div className="container">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-md-8 text-center">
//               <h2 className="text-info fw-bold mb-3">Get a Free Quote</h2>
//               <p className="text-muted mb-4">
//                 Want to know how much your repair or upgrade will cost? Fill out the form below and our team will get back to you with a free, no-obligation quote!
//               </p>
//               <form className="row g-3 justify-content-center">
//                 <div className="col-md-4">
//                   <input type="text" className="form-control" placeholder="Your Name" required />
//                 </div>
//                 <div className="col-md-4">
//                   <input type="email" className="form-control" placeholder="Email Address" required />
//                 </div>
//                 <div className="col-md-4">
//                   <input type="text" className="form-control" placeholder="Bike Model" required />
//                 </div>
//                 <div className="col-12">
//                   <textarea className="form-control" rows="3" placeholder="Describe your issue or request" required></textarea>
//                 </div>
//                 <div className="col-12">
//                   <Button variant="info" type="submit" className="px-4 fw-bold">
//                     Request Quote
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

// </div>
//     </>
//   )
// }

// export default AddFreeQuote


import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddFreeQuoteApi } from "../Services/allAPI";
import { Bounce, toast, ToastContainer } from 'react-toastify';

function AddFreeQuote() {
  const [freeQuote, setFreeQuote] = useState({
    FQname: "",
    FQemail: "",
    FQbikeModel: "",
    FQmessage: "",
  });

  // handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFreeQuote((prev) => ({ ...prev, [name]: value }));
  // };



  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { FQname, FQemail, FQbikeModel, FQmessage } = freeQuote
    if (!FQname || !FQemail || !FQbikeModel || !FQmessage) {
      toast.warn("Please fill all the fields")
      return
    }

    const token = sessionStorage.getItem("token");

    if (!token) {
      toast.warn("Please login first");
      return;
    }

    const reqHeader = {
      "Authorization": `Bearer ${token}`, // ✅ token

    };
    const reqBody = {
      FQname: FQname,
      FQemail: FQemail,
      FQbikeModel: FQbikeModel,
      FQmessage: FQmessage,
    };

    try {
      const result = await AddFreeQuoteApi(reqBody, reqHeader);
      console.log(result);

      if (result.status == 201) {
        setFreeQuote({
          FQname: "",
          FQemail: "",
          FQbikeModel: "",
          FQmessage: "",
        });

       
        toast.success("FreeQuote requested successfully")
      } else {
        toast.error(result?.data?.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error, please try again later");
    }
  };

  



  // later you can send `freeQuote` to backend API
  // Example: await axios.post("/api/free-quote", freeQuote);

  // // reset form
  // setFreeQuote({
  //   FQname: "",
  //   FQemail: "",
  //   FQbikeModel: "",
  //   FQmessage: "",
  // });
  ;

  return (
    <>
      <section id="service123_quote" className="py-5 bg-white mt-5 p-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 text-center">
              <h2 className="text-info fw-bold mb-3">Get a Free Quote</h2>
              <p className="text-muted mb-4">
                Want to know how much your repair or upgrade will cost? Fill out
                the form below and our team will get back to you with a free,
                no-obligation quote!
              </p>
              <form
                className="row g-3 justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={freeQuote.FQname}
                    onChange={(e) => setFreeQuote({ ...freeQuote, FQname: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={freeQuote.FQemail}
                    onChange={(e) => setFreeQuote({ ...freeQuote, FQemail: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bike Model"
                    name="bikeModel"
                    value={freeQuote.FQbikeModel}
                    onChange={(e) => setFreeQuote({ ...freeQuote, FQbikeModel: e.target.value })} required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Describe your issue or request"
                    name="message"
                    value={freeQuote.FQmessage}
                    onChange={(e) => setFreeQuote({ ...freeQuote, FQmessage: e.target.value })} required
                  />
                </div>
                <div className="col-12">
                  <Button
                    variant="info"
                    type="submit"
                    className="px-4 fw-bold"
                  >
                    Request Quote
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default AddFreeQuote;
