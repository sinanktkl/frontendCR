// import React from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function AddProducts() {
//   return (
//     <Container className="my-4 ">
//       <Row className="justify-content-center">
//         <Col md={8} lg={6}>
//           <Card className="p-4 shadow-sm">
//             <h3 className="text-center text-info fw-bold mb-4">Add New Product</h3>
//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Label>Product Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter product name" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control type="number" placeholder="Enter price" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Offer Price</Form.Label>
//                 <Form.Control type="number" placeholder="Enter offer price" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control as="textarea" rows={3} placeholder="Enter product description" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Category</Form.Label>
//                 <Form.Control type="text" placeholder="Enter product category" />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label>Product Image</Form.Label>
//                 <Form.Control type="file" />
//               </Form.Group>

//               <Button variant="info" type="submit" className="w-100 fw-bold">
//                 Add Product
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       <div className="col-md-3 mb-4">
//                     <div className="card h-100" style={{ height: '430px' }}>
//                       <img src="https://m.media-amazon.com/images/I/81mSniZplFL.UF894,1000_QL80.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'contain' }} alt="Tyre Set" />
//                       <div className="card-body p-2">
//                         <p className="text-muted small">PART</p>
//                         <h6 className="card-title mb-1">Performance Tyre Set</h6>
//                         <p className="card-text text-success fw-bold mb-1">
//                           <del className="text-muted me-2">$200.00</del> $150.00
//                         </p>
//                         <p className="text-warning mb-2">★★★★☆</p>
//                         <Link to={'/cart'}> <button className="btn btn-info btn-sm me-2">ADD TO CART</button></Link>
//                         <Link to={'/wishlist'}><button className="btn btn-outline-dark btn-sm"> <i className="fa-solid fa-heart text-danger"></i>
//                         </button></Link>
//                       </div>
//                     </div>
//                   </div>
//     </Container>
//   );
// }

// export default AddProducts;



// import React from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function AddProducts() {
//     return (
//         <Container className="my-4">
//             <Row className="justify-content-center">

//                 {/* Left side - Form */}
//                 <Col md={6} lg={5}>
//                     <Card className="p-4 shadow-sm h-100">
//                         <h3 className="text-center text-info fw-bold mb-4">Add New Product</h3>
//                         <Form>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Product Name</Form.Label>
//                                 <Form.Control type="text" placeholder="Enter product name" />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Price</Form.Label>
//                                 <Form.Control type="number" placeholder="Enter price" />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Offer Price</Form.Label>
//                                 <Form.Control type="number" placeholder="Enter offer price" />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Description</Form.Label>
//                                 <Form.Control as="textarea" rows={3} placeholder="Enter product description" />
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Category</Form.Label>
//                                 <Form.Control type="text" placeholder="Enter product category" />
//                             </Form.Group>

//                             {/* Rating with stars */}
//                                           <Form.Group className="mb-3">
//                                             <Form.Label className='text-info'>Rating:</Form.Label>
//                                             <div>
//                                               {[...Array(5)].map((star, index) => {
//                                                 const ratingValue = index + 1;
//                                                 return (
//                                                   <label key={index}>
//                                                     <input
//                                                       type="radio"
//                                                       name="rating"
//                                                       value={ratingValue}
//                                                       onClick={() => setRating(ratingValue)}
//                                                       style={{ display: 'none' }}
//                                                     />
//                                                     <FaStar/>

//                                                   </label>
//                                                 );
//                                               })}
//                                             </div>
//                                           </Form.Group>

//                             <Form.Group className="mb-4">
//                                 <Form.Label>Product Image</Form.Label>
//                                 <Form.Control type="file" />
//                             </Form.Group>

//                             <Button variant="info" type="submit" className="w-100 fw-bold">
//                                 Add Product
//                             </Button>
//                         </Form>
//                     </Card>
//                 </Col>


//                 {/* Right side - Product Preview Card */}
//                 <Col md={4} lg={3}>
//   <div
//     className="card shadow-sm text-center"
//     style={{
//       maxWidth: '220px', // reduced overall card width
//       margin: 'auto'
//     }}
//   >
//     <img
//       src="https://m.media-amazon.com/images/I/81mSniZplFL._UF894,1000_QL80_.jpg"
//       className="card-img-top"
//       style={{
//         height: '120px', // smaller image height
//         objectFit: 'contain',
//         padding: '8px'
//       }}
//       alt="Tyre Set"
//     />
//     <div className="card-body p-2">
//       <p className="text-muted small mb-1">PART</p>
//       <h6 className="card-title mb-1" style={{ fontSize: '0.9rem' }}>
//         Performance Tyre Set
//       </h6>
//       <p className="card-text text-success fw-bold mb-1" style={{ fontSize: '0.85rem' }}>
//         <del className="text-muted me-1">$200.00</del> $150.00
//       </p>
//       <p className="text-warning mb-2" style={{ fontSize: '0.8rem' }}>★★★★☆</p>
//       <div className="d-flex justify-content-center">

//           <button className="btn btn-info btn-sm me-1" style={{ fontSize: '0.75rem' }}>
//             ADD TO CART
//           </button>


//           <button className="btn btn-outline-dark btn-sm" style={{ fontSize: '0.75rem' }}>
//             <i className="fa-solid fa-heart text-danger"></i>
//           </button>

//       </div>
//     </div>
//   </div>
// </Col>



//             </Row>
//         </Container>
//     );
// }

// export default AddProducts;







import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AddProductAPI } from '../../Services/allAPI';
import { serverUrl } from '../../Services/serverUrl';

function AddProducts() {
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);

  const [AddProducts, setAddProducts] = useState({
    productName: "", productPrice: "", productOfferPrice: "", productCategory: "", productImage: ""
  })



  //stet to gnerte image url
  const [preview, setPreview] = useState("")

  console.log(AddProducts);
  useEffect(() => {
    if (AddProducts.productImage.type == 'image/png' || AddProducts.productImage.type == 'image/jpg' || AddProducts.productImage.type == 'image/jpeg' || AddProducts.productImage.type == 'image/webp') {
      setPreview(URL.createObjectURL(AddProducts.productImage));
      console.log("generete url");

    } else {
      // setPreview("")
      setAddProducts({ ...AddProducts, productImage: "" })
    }
  }, [AddProducts.productImage])

  // console.log(preview);

  //handleAddproducts

  // const handleAddProducts = async (e) => {
  //   e.preventDefault()
  //   const { productName, productPrice, productOfferPrice, productCategory, productImage } = AddProducts

  //   if (!productName || !productPrice || !productOfferPrice || !productCategory || !productImage) {
  //     toast.info("Please fill the missing fields")
  //   } else {

  //     //api call

  //     const reqBody = new FormData()

  //     reqBody.append("productName", productName)
  //     reqBody.append("productPrice", productPrice)
  //     reqBody.append("productOfferPrice", productOfferPrice)
  //     reqBody.append("productCategory", productCategory)
  //     reqBody.append("productImage", productImage)

  //     // console.log(reqBody);

  //     const token = sessionStorage.getItem('token')
  //     if (token) {
  //       const reqHeader = {
  //         "Content-Type": "multipart/form-data",
  //         "Authorization": `Bearer ${token}`
  //       }






  //       try {
  //         //api call
  //         const result = await AddProductAPI(reqBody, reqHeader)

  //         if (result.status == 200) {
  //           setAddProducts({
  //             productName: "",
  //             productPrice: "",
  //             productOfferPrice: "",
  //             productCategory: "",
  //             productImage: "null"
  //           });

  //           document.getElementById("productImage").value = ""; // reset file input
  //           setPreview("")
  //           toast.success("Product Added")

  //         } else {
  //           toast.warning(result.response.data)
  //         }
  //              console.log(result);

  //       } catch (err) {
  //         console.log(err);
  //         toast.error("Server error, please try again later");

  //       }

  //     }else{
  //       alert("plaese login")
  //     }

  //   }
  // }









  // handle form 2
  // const handleAddProducts = async (e) => {
  //   e.preventDefault();

  //   const { productName, productPrice, productOfferPrice, productCategory, productImage } = AddProducts;

  //   // 1. Check required fields (frontend validation)
  //   if (!productName || !productPrice || !productOfferPrice || !productCategory || !productImage) {
  //     toast.info("Please fill the missing fields");
  //     return;
  //   }

  //   // 2. Check if user is logged in
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     toast.warning("Please login first");
  //     return;
  //   }

  //   // 3. Prepare FormData
  //   const reqBody = new FormData();
  //   reqBody.append("productName", productName);
  //   reqBody.append("productPrice", productPrice);
  //   reqBody.append("productOfferPrice", productOfferPrice);
  //   reqBody.append("productCategory", productCategory);
  //   reqBody.append("productImage", productImage);

  //   const reqHeader = {
  //     "Content-Type": "multipart/form-data",
  //     Authorization: `Bearer ${token}`,
  //   };

  //   try {
  //     const result = await AddProductAPI(reqBody,reqHeader);
  //     console.log(result);

  //     if (result.status === 200) {
  //       toast.success("Product Added");
  //       setAddProducts({
  //         productName: "",
  //         productPrice: "",
  //         productOfferPrice: "",
  //         productCategory: "",
  //         productImage: ""
  //       });
  //       setPreview(""); // clear preview
  //     } else {
  //       toast.warning(result.response?.data || "Something went wrong");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Server error, please try again later");
  //   }
  // };








  //handle form submit


  const handleAddProducts = async (e) => {
    e.preventDefault();

    // check missing fields
    const { productName, productPrice, productOfferPrice, productCategory, productImage } = AddProducts;
    if (!productName || !productPrice || !productOfferPrice || !productCategory || !productImage) {
      toast.warning("Please fill all fields");
      return;
    }

    // prepare formData for image upload
    const reqBody = new FormData();
    reqBody.append("productName", productName);
    reqBody.append("productPrice", productPrice);
    reqBody.append("productOfferPrice", productOfferPrice);
    reqBody.append("productCategory", productCategory);
    reqBody.append("productImage", productImage);

    // get token from localStorage
    const token = sessionStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    const reqHeader = {
      "Authorization": `Bearer ${token}`, // ✅ token
      "Content-Type": "multipart/form-data", // ✅ for image
    };

    try {
      const result = await AddProductAPI(reqBody, reqHeader);
      console.log(result.status);

      if (result.status == 200) {
        setAddProducts({
          productName: "",
          productPrice: "",
          productOfferPrice: "",
          productCategory: "",
          productImage: "null"
        });

        document.getElementById("productImage").value = ""; // reset file input
        setPreview("")
        toast.success("Product added successfully")
      } else {
        toast.error(result?.data?.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error, please try again later");
    }
  };






  //   const handleAddProducts = async (e) => {
  //     e.preventDefault()
  //   try {
  //     const response = await axios.post("/add-product", formData, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });

  //     toast.success(response.data.success);

  //   } catch (err) {
  //     if (err.response) {
  //       toast.error(err.response.data.error);
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   }
  // };
  return (

    <>

      <a
        href="/uiedits"
        className="fw-bold text-info d-inline-flex align-items-center mb-3"
        style={{ textDecoration: "none" }}
      >
        <i className="fa-solid fa-arrow-left me-2"></i> Back
      </a>

      <Container className="my-4">
        <Row className="justify-content-center">

          {/* Left side - Form */}
          <Col md={6} lg={5}>
            <Card className="p-4 shadow-sm h-100">
              <h3 className="text-center text-info fw-bold mb-4">Add New Product</h3>
              <Form onSubmit={handleAddProducts}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter product name" onChange={(e) => setAddProducts({ ...AddProducts, productName: e.target.value })} value={AddProducts.productName} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter price" onChange={(e) => { setAddProducts({ ...AddProducts, productPrice: e.target.value }) }} value={AddProducts.productPrice} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Offer Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter offer price" onChange={(e) => { setAddProducts({ ...AddProducts, productOfferPrice: e.target.value }) }} value={AddProducts.productOfferPrice} />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter product description" />
              </Form.Group> */}

                <Form.Group className="d-flex gap-2">
                  {/* parts */}
                  <Form.Check
                    value="Parts"
                    name="productCategory"
                    type="radio"
                    label="Parts"
                    checked={AddProducts.productCategory === "Parts"}
                    onChange={(e) => setAddProducts({ ...AddProducts, productCategory: e.target.value })}
                  />

                  <Form.Check
                    value="Accessories"
                    name="productCategory"
                    type="radio"
                    label="Accessories"
                    checked={AddProducts.productCategory === "Accessories"}
                    onChange={(e) => setAddProducts({ ...AddProducts, productCategory: e.target.value })}
                  />

                  <Form.Check
                    value="Oil"
                    name="productCategory"
                    type="radio"
                    label="Oil"
                    checked={AddProducts.productCategory === "Oil"}
                    onChange={(e) => setAddProducts({ ...AddProducts, productCategory: e.target.value })}
                  />

                </Form.Group>

                {/* Rating with stars */}
                {/* <Form.Group className="mb-3">
                <Form.Label className="text-info">Rating:</Form.Label>
                <div>
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index} style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                          style={{ display: 'none' }}
                        />
                        <FaStar
                          size={20}
                          color={
                            ratingValue <= (hover || rating)
                              ? '#ffc107'
                              : '#e4e5e9'
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    );
                  })}
                </div>
              </Form.Group> */}

                <Form.Group className="mb-4">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    id="productImage"
                    onChange={(e) => { setAddProducts({ ...AddProducts, productImage: e.target.files[0] }) }} />
                </Form.Group>

                <Button variant="info" type="submit" className="w-100 fw-bold"  >
                  Add Product
                </Button>
              </Form>
            </Card>
          </Col>

         {/* Right side - Product Preview Card */}
<Col md={4} lg={3}>
  <div className="product-card card h-100 shadow-sm">
    {/* Product Image */}
    <div className="card-img-container">
      <img
        src={preview || "https://content.hostgator.com/img/weebly_image_sample.png"}
        alt={AddProducts.productName || "productName"}
        className="card-img-top img-fluid"
        style={{ height: "150px", objectFit: "contain", padding: "8px" }}
      />
    </div>

    {/* Card Body */}
    <div className="card-body d-flex flex-column">
      {/* Category */}
      <div className="category-section mb-1">
        <span className="badge bg-light text-dark">
          {AddProducts.productCategory || "productCategory"}
        </span>
      </div>

      {/* Product Name */}
      <h6 className="product-name card-title mb-2 text-truncate">
        {AddProducts.productName || "productName"}
      </h6>

      {/* Price Section */}
      <div className="price-section mb-3 mt-auto">
        <div className="original-price">
          <del className="text-muted">
            {AddProducts.productPrice || "productPrice"}
          </del>
        </div>
        <div className="offer-price text-success fw-bold">
          {AddProducts.productOfferPrice || "productOfferPrice"}
        </div>
      </div>

      {/* Buttons */}
      <div className="text-center">
        <button className="btn btn-info btn-sm me-2">ADD TO CART</button>
        <button className="btn btn-outline-dark btn-sm">
          <i className="fa-solid fa-heart text-danger"></i>
        </button>
      </div>
    </div>
  </div>
</Col>


        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
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

export default AddProducts;
