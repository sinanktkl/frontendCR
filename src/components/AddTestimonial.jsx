
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { AddTestimonyAPI } from '../Services/allAPI';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function AddTestimonial() {
  const [testimonial, setTestimonial] = useState({
    customerName: "", customerVehicle: "", customerText: "", customerImage: "", customerRating: ""
  })
  const [testimonialImage, setTestimonialImage] = useState("")
  // const [hover, setHover] = useState()

  const handleStarClick = (starValue) => {
    setTestimonial({ ...testimonial, customerRating: starValue });
  }
  console.log(testimonial)

  const handleAddTestimonials = async (e) => {
    e.preventDefault()

     const { customerName, customerVehicle, customerText, customerImage, customerRating } = testimonial;
        if (!customerName || !customerVehicle || !customerText || !customerRating) {
          toast.warning("Please fill all fields");
          return;
        }
    
        // prepare formData for image upload
        const reqBody = new FormData();
        reqBody.append("customerName", customerName);
        reqBody.append("customerVehicle", customerVehicle);
        reqBody.append("customerText", customerText);
        reqBody.append("customerRating", customerRating);
        reqBody.append("customerImage", customerImage);
    
       
        const reqHeader = {
           "Content-Type": "multipart/form-data"
        }
        
    
    
        try {
          const result = await AddTestimonyAPI(reqBody,reqHeader);
          console.log(result.status);
    
          if (result.status == 200) {
            setTestimonial({
              customerName: "",
              customerVehicle: "",
              customerText: "",
              customerRating: "",
              customerImage: "null"
            });
    
            document.getElementById("customerImage").value = ""; // reset file input
            setTestimonialImage("")
            toast.success("Testimony added successfully")
          } else {
            toast.error(result?.data?.error || "Something went wrong");
          }    
        } catch (err) {
          toast.error("Server error, please try again later");
        }

        

  }


    useEffect(() => {
      if (testimonial.customerImage.type == 'image/png' || testimonial.customerImage.type == 'image/jpg' || testimonial.customerImage.type == 'image/jpeg' || testimonial.customerImage.type == 'image/webp') {
        setTestimonialImage(URL.createObjectURL(testimonial.customerImage));
        console.log("genereted url");
  
      } else {  
        // setPreview("")
        setTestimonial({ ...testimonial, customerImage: "" })
      }
    }, [testimonial.customerImage])
  return (

    <>
   
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center mb-4 text-info">Add Testimonial</h2>
            <Form onSubmit={handleAddTestimonials}>
              <Form.Group className="mb-3">
                <Form.Label className='text-info'>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={testimonial.customerName}
                  onChange={(e) => setTestimonial({ ...testimonial, customerName: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='text-info'>Vehicle Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter vehicle name"
                  value={testimonial.customerVehicle}
                  onChange={(e) => setTestimonial({ ...testimonial, customerVehicle: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='text-info'>Testimonial Text:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write testimonial here..."
                  value={testimonial.customerText}
                  onChange={(e) => setTestimonial({ ...testimonial, customerText: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='text-info'>Image URL:</Form.Label>
                <Form.Control
                      id='customerImage'
                  type="file"
                  placeholder="https://example.com/image.jpg"
                 
                 onChange={(e) => { setTestimonial({ ...testimonial, customerImage: e.target.files[0] }) }}
                  
                />
              </Form.Group>
              {/* Rating with stars */}
              {/* <Form.Group className="mb-3">
                <Form.Label className='text-info'>Rating:</Form.Label>
                <div>
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key="">
                        <input
                          type="radio"
                          name="rating"
                          value={testimonial.customerRating}
                          onClick={() => setTestimonial({...testimonial,customerRating:e.target.value})}
                          style={{ display: 'none' }}
                        />
                        <FaStar
                          size={30}
                          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                   })} 
                </div>
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label className="text-info">Rating:</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`fa-star fa-lg me-2 ${star <= testimonial.customerRating ? 'fas text-warning' : 'far text-muted'
                        }`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleStarClick(star)}
                    ></i>
                  ))}
                </div>
              </Form.Group>
              <div className="d-grid ">
                <Button className='btn btn-info' size="lg" type="submit">
                  Add Testimonial
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>

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

export default AddTestimonial;

