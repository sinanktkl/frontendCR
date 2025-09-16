// import React from 'react'
// import { Link } from 'react-router-dom'

// function Billing() {
//   return (
//     <>
//       <Link
//               to="/admin"
//               className="text-info"
//               style={{
//                 position: "fixed",
//                 top: "100px",
//                 left: "20px",
//                 padding: "8px 14px",
//                 borderRadius: "8px",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
//               }}
//             >
//               ← Back
//             </Link>



//     </>
//   )
// }

// export default Billing

///////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";

// function Billing() {
//   return (
//     <Container className="my-4">
//       <Row className="g-4">
//         {/* Left - Billing Form */}
//         <Col md={7}>
//           <Card className="p-4 shadow-sm">
//             <h4 className="text-info fw-bold mb-4">Billing Details</h4>
//             <Form>
//               <Row>
//                 <Col md={6} className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter your full name" />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" placeholder="Enter your email" />
//                 </Col>
//               </Row>

//               <Form.Group className="mb-3">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control type="text" placeholder="Street address" />
//               </Form.Group>

//               <Row>
//                 <Col md={6} className="mb-3">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control type="text" placeholder="City" />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Label>Postal Code</Form.Label>
//                   <Form.Control type="text" placeholder="ZIP / Postal code" />
//                 </Col>
//               </Row>

//               <Form.Group className="mb-3">
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control type="tel" placeholder="Enter phone number" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Payment Method</Form.Label>
//                 <Form.Select>
//                   <option>Credit/Debit Card</option>
//                   <option>UPI</option>
//                   <option>Net Banking</option>
//                   <option>Cash on Delivery</option>
//                 </Form.Select>
//               </Form.Group>
//             </Form>
//           </Card>
//         </Col>

//         {/* Right - Order Summary */}
//         <Col md={5}>
//           <Card className="p-4 shadow-sm">
//             <h4 className="text-info fw-bold mb-3">Order Summary</h4>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between">
//                 <span>Performance Tyre Set</span>
//                 <span>$150.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between">
//                 <span>Helmet</span>
//                 <span>$50.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between fw-bold">
//                 <span>Subtotal</span>
//                 <span>$200.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between">
//                 <span>Tax (5%)</span>
//                 <span>$10.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between fw-bold">
//                 <span>Total</span>
//                 <span>$210.00</span>
//               </ListGroup.Item>
//             </ListGroup>

//             <Button variant="info" className="w-100 fw-bold mt-4">
//               Place Order
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Billing;

//////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////



//real one

// import React, { useState } from "react";
// import { Container, Row, Col, Card, Form, Button, ListGroup, Table } from "react-bootstrap";

// import { Link } from 'react-router-dom';


// function Billing() {





//   //part2

//   // const [products] = useState([
//   //   {
//   //     id: 1,
//   //     name: "Performance Tyre Set",
//   //     price: 150,
//   //     img: "https://m.media-amazon.com/images/I/81mSniZplFL._AC_UL320_.jpg",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Helmet",
//   //     price: 50,
//   //     img: "https://m.media-amazon.com/images/I/71y1gMEe7-L._AC_UL320_.jpg",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Engine Oil",
//   //     price: 30,
//   //     img: "https://m.media-amazon.com/images/I/71T0XXlZoRL._AC_UL320_.jpg",
//   //   },
//   // ]);

//   // const [search, setSearch] = useState("");
//   // const [cart, setCart] = useState([]);

//   // const handleAddToCart = (product) => {
//   //   const existing = cart.find((item) => item.id === product.id);
//   //   if (existing) {
//   //     setCart(
//   //       cart.map((item) =>
//   //         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//   //       )
//   //     );
//   //   } else {
//   //     setCart([...cart, { ...product, qty: 1 }]);
//   //   }
//   // };

//   // const handleQtyChange = (id, change) => {
//   //   setCart(
//   //     cart
//   //       .map((item) =>
//   //         item.id === id
//   //           ? { ...item, qty: Math.max(1, item.qty + change) }
//   //           : item
//   //       )
//   //       .filter((item) => item.qty > 0)
//   //   );
//   // };

//   // const handleRemoveFromCart = (id) => {
//   //   setCart(cart.filter((item) => item.id !== id));
//   // };

//   // const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   return (
//     <>

//     <a
//           href="/admin"
//           className="fw-bold text-info d-inline-flex align-items-center mb-3"
//           style={{ textDecoration: "none" }}
//         >
//           <i className="fa-solid fa-arrow-left me-2"></i> Back
//         </a>
//      {/* <Link
//                     to="/admin"
//                     className="text-info"
//                     style={{
//                         position: "fixed",
//                         top: "100px",
//                         left: "20px",
//                         padding: "8px 14px",
//                         borderRadius: "8px",
//                         textDecoration: "none",
//                         fontWeight: "bold",
//                         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
//                     }}
//                 >
//                     ← Back
//                 </Link> */}

//     <Container className="my-4">
//       <Row className="g-3">
//         {/* Left - Billing Form */}
//         <Col md={7}>
//           <Card className="shadow-sm border-0 rounded p-3" style={{ fontSize: "0.9rem" }}>
//             <h5 className="text-info fw-bold mb-3">Billing Details</h5>
//             <Form>
//               <Row>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Full Name</Form.Label>
//                   <Form.Control size="sm" type="text" placeholder="Enter full name" />
//                 </Col>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Phone</Form.Label>
//                   <Form.Control size="sm" type="tel" placeholder="Enter phone number" />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Vehicle Name</Form.Label>
//                   <Form.Control size="sm" type="text" placeholder="Enter Vehicle name" />
//                 </Col>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Vehicle Number</Form.Label>
//                   <Form.Control size="sm" type="tel" placeholder="Enter Vehicle number" />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={6} className="mb-2">
//                   {/* <Form.Group className="mb-2">
//                 <Form.Label className="mb-1">Payment Method</Form.Label>
//                 <Form.Select size="sm">
//                   <option>Credit/Debit Card</option>
//                   <option>UPI</option>
//                   <option>Net Banking</option>
//                   <option>Cash on Delivery</option>
//                 </Form.Select>
//               </Form.Group> */}
//                 </Col>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Date</Form.Label>
//                   <Form.Control size="sm" type="date" placeholder="Enter date" />
//                 </Col>
//               </Row>

//               {/* <Form.Group className="mb-2">
//                 <Form.Label className="mb-1">Address</Form.Label>
//                 <Form.Control size="sm" type="text" placeholder="Street address" />
//               </Form.Group>

//               <Row>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">City</Form.Label>
//                   <Form.Control size="sm" type="text" placeholder="City" />
//                 </Col>
//                 <Col md={6} className="mb-2">
//                   <Form.Label className="mb-1">Postal Code</Form.Label>
//                   <Form.Control size="sm" type="text" placeholder="ZIP / Postal code" />
//                 </Col>
//               </Row>

//               <Form.Group className="mb-2">
//                 <Form.Label className="mb-1">Email</Form.Label>
//                 <Form.Control size="sm" type="email" placeholder="Enter email" />
//               </Form.Group> */}

//               {/* <Form.Group className="mb-2">
//                 <Form.Label className="mb-1">Payment Method</Form.Label>
//                 <Form.Select size="sm">
//                   <option>Credit/Debit Card</option>
//                   <option>UPI</option>
//                   <option>Net Banking</option>
//                   <option>Cash on Delivery</option>
//                 </Form.Select>
//               </Form.Group> */}
//             </Form>
//           </Card>
//         </Col>

//         {/* Right - Order Summary */}
//         {/* <Col md={5}>
//           <Card className="shadow-sm border-0 rounded p-3" style={{ fontSize: "0.9rem" }}>
//             <h5 className="text-info fw-bold mb-3">Order Summary</h5>
//             <ListGroup variant="flush">
//               <ListGroup.Item className="d-flex justify-content-between p-2">
//                 <span>Performance Tyre Set</span>
//                 <span>$150.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between p-2">
//                 <span>Helmet</span>
//                 <span>$50.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between fw-bold p-2">
//                 <span>Subtotal</span>
//                 <span>$200.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between p-2">
//                 <span>Tax (5%)</span>
//                 <span>$10.00</span>
//               </ListGroup.Item>
//               <ListGroup.Item className="d-flex justify-content-between fw-bold p-2">
//                 <span>Total</span>
//                 <span>$210.00</span>
//               </ListGroup.Item>
//             </ListGroup>

//             <Button
//               variant="info"
//               size="sm"
//               className="w-100 fw-bold mt-3"
//               style={{ fontSize: "0.85rem" }}
//             >
//               Place Order
//             </Button>
//           </Card>
//         </Col> */}
//       </Row>
//     </Container>




// <hr />






// <Container className="my-4">
//       <Row className="g-3">
//         {/* Left - Product Search Grid */}
//         <Col md={7}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Search & Add Products</h5>
//             <Form.Control
//               type="text"
//               placeholder="Search products..."
//               // value={search}
//               // onChange={(e) => setSearch(e.target.value)}
//               className="mb-3"
//             />
//             <Row className="g-3">
//               {/* {products
//                 .filter((p) =>
//                   p.name.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((product) => ( */}
//                   <Col md={4} sm={6} xs={12} 
//                   // key={product.id}
//                   >
//                     <Card className="h-100 shadow-sm text-center p-2">
//                       <img
//                         // src={product.img}
//                         // alt={product.name}
//                         style={{
//                           height: "120px",
//                           objectFit: "contain",
//                         }}
//                         className="mb-2"
//                       />
//                       <h6>
//                         {/* {product.name} */}
//                       </h6>
//                       <p className="text-success fw-bold">$
//                         {/* {product.price} */}
//                         </p>
//                       <Button
//                         variant="info"
//                         size="sm"
//                         className="w-100 fw-bold"
//                         // onClick={() => handleAddToCart(product)}
//                       >
//                         + Add
//                       </Button>
//                     </Card>
//                   </Col>
//                 {/* ))} */}
//             </Row>
//           </Card>
//         </Col>

//         {/* Right - Billing Summary */}
//         <Col md={5}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Billing Summary</h5>
//             {/* {cart.length === 0 ? (
//               <p className="text-muted">No products added yet</p>
//             ) : ( */}
//               <Table bordered hover size="sm">
//                 <thead>
//                   <tr className="table-light">
//                     <th>Product</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* {cart.map((item) => ( */}
//                     <tr
//                     //  key={item.id}
//                      >
//                       <td>
//                         {/* {item.name} */}
//                         </td>
//                       <td>
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           // onClick={() => handleQtyChange(item.id, -1)}
//                         >
//                           -
//                         </Button>{" "}
//                         {/* {item.qty}{" "} */}
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           // onClick={() => handleQtyChange(item.id, 1)}
//                         >
//                           +
//                         </Button>
//                       </td>
//                       <td>$
//                         {/* {item.price * item.qty} */}

//                       </td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           // onClick={() => handleRemoveFromCart(item.id)}
//                         >
//                           x
//                         </Button>
//                       </td>
//                     </tr>
//                   {/* ))} */}
//                   <tr>
//                     <td colSpan="2" className="fw-bold text-end">
//                       Total
//                     </td>
//                     <td colSpan="2" className="fw-bold text-success">
//                       {/* ${total} */}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             {/* )} */}
//             <Button
//               variant="success"
//               size="lg"
//               className="w-100 fw-bold"
//               // disabled={cart.length === 0}
//             >
//               ✅ Checkout & Print Bill
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </Container>

// </>
//   );
// }

// export default Billing;

//////////////////////////////////////////////////////////////////////////






// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Form,
//   Button,
//   Table,
// } from "react-bootstrap";
// import { GetAllProductAPI } from "../../Services/allAPI";
// import { useEffect } from "react";
// import { serverUrl } from "../../Services/serverUrl";

// function Billing() {

//   const currencyFormatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR'
//   });

//   const truncateText = (text, maxLength) => {
//     if (!text) return '';
//     return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // 🔹 Billing form state
//   const [billingDetails, setBillingDetails] = useState({
//     fullName: "",
//     phone: "",
//     vehicleName: "",
//     vehicleNumber: "",
//     date: "",
//   });

//   // 🔹 Dummy product list (replace with API later)
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const res = await GetAllProductAPI()
//     console.log(res);
//     if (res.status == 200) {
//       setProducts(res.data.data);
//     } else {
//       console.log(res);
//     }

//   }

//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   // 🔹 Handle input changes
//   const handleChange = (e) => {
//     setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
//   };

//   // 🔹 Add product to bill
//   // const handleAddtobill = (product) => {
//   //   const existing = cart.find((item) => item.id === product.id);
//   //   if (existing) {
//   //     setCart(
//   //       cart.map((item) =>
//   //         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//   //       )
//   //     );
//   //   } else {
//   //     setCart([...cart, { ...product, qty: 1 }]);
//   //   }
//   // };

//   const handleAddtobill = (product) => {
//     const existing = cart.find((item) => item._id === product._id);
//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item._id === product._id ? { ...item, qty: item.qty + 1 } : item
//         )
//       );
//     } else {
//       setCart([
//         ...cart,
//         {
//           _id: product._id,
//           name: product.productName,
//           price: product.productOfferPrice, // use offer price for billing
//           qty: 1,
//         },
//       ]);
//     }
//   };

//   // 🔹 Change quantity
//   const handleQtyChange = (id, delta) => {
//     setCart(
//       cart
//         .map((item) =>
//           item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // 🔹 Remove product
//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item._id !== id));
//   };

  
//   // 🔹 Calculate total
//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <>
//       <a
//         href="/admin"
//         className="fw-bold text-info d-inline-flex align-items-center mb-3"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>

//       {/* Billing Form */}
//       <Container className="my-4">
//         <Row className="g-3">
//           <Col md={7}>
//             <Card className="shadow-sm border-0 rounded p-3">
//               <h5 className="text-info fw-bold mb-3">Billing Details</h5>
//               <Form>
//                 <Row>
//                   <Col md={6} className="mb-2">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       size="sm"
//                       type="text"
//                       name="fullName"
//                       value={billingDetails.fullName}
//                       onChange={handleChange}
//                       placeholder="Enter full name"
//                     />
//                   </Col>
//                   <Col md={6} className="mb-2">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control
//                       size="sm"
//                       type="tel"
//                       name="phone"
//                       value={billingDetails.phone}
//                       onChange={handleChange}
//                       placeholder="Enter phone number"
//                     />
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6} className="mb-2">
//                     <Form.Label>Vehicle Name</Form.Label>
//                     <Form.Control
//                       size="sm"
//                       type="text"
//                       name="vehicleName"
//                       value={billingDetails.vehicleName}
//                       onChange={handleChange}
//                       placeholder="Enter vehicle name"
//                     />
//                   </Col>
//                   <Col md={6} className="mb-2">
//                     <Form.Label>Vehicle Number</Form.Label>
//                     <Form.Control
//                       size="sm"
//                       type="text"
//                       name="vehicleNumber"
//                       value={billingDetails.vehicleNumber}
//                       onChange={handleChange}
//                       placeholder="Enter vehicle number"
//                     />
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}></Col>
//                   <Col md={6} className="mb-2">
//                     <Form.Label>Date</Form.Label>
//                     <Form.Control
//                       size="sm"
//                       type="date"
//                       name="date"
//                       value={billingDetails.date}
//                       onChange={handleChange}
//                     />
//                   </Col>
//                 </Row>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <hr />

//       {/* Product Search + Cart */}
//       <Container className="my-4">
//         <Row className="g-3">
//           {/* Left - Search & Add Products */}
//           <Col md={7}>
//             <Card className="shadow-sm border-0 rounded p-3">
//               <h5 className="text-info fw-bold mb-3">Search & Add Products</h5>
//               <Form.Control
//                 type="text"
//                 placeholder="Search products..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="mb-3"
//               />
//               <Row className="g-3">
//                 {products
//                   .filter((p) =>
//                     p.productName.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((product) => (
//                     // <Col md={4} sm={6} xs={12} key={product.id}>
//                     //   <Card className="h-100 shadow-sm text-center p-2">
//                     //     <img
//                     //       src={`${serverUrl}/Uploads/${product?.productImage}`}
//                     //       alt={product.productName}
//                     //       style={{ height: "120px", objectFit: "contain" }}
//                     //       className="mb-2"
//                     //     />
//                     //     <h6>{product.productName}</h6>
//                     //     <p className="text-success fw-bold">₹{product.productPrice}</p>
//                     //     <Button
//                     //       variant="info"
//                     //       size="sm"
//                     //       className="w-100 fw-bold"
//                     //       onClick={() => handleAddToCart(product)}
//                     //     >
//                     //       + Add
//                     //     </Button>
//                     //   </Card>
//                     // </Col>
//                     <div key={product._id} className="col-12 col-sm-4 col-md-4 col-xl-3">
//                       <div className="product-card card h-100 shadow-sm">
//                         {/* Product Image */}
//                         <div className="card-img-container">
//                           <img
//                             src={`${serverUrl}/Uploads/${product?.productImage}`}
//                             alt={product.productName}
//                             className="card-img-top"
//                           />

//                         </div>

//                         {/* Card Body */}
//                         <div className="card-body d-flex flex-column p-3">
//                           {/* Category */}
//                           <div className="category-section">
//                             <span className="category-badge">
//                               {product.productCategory || 'N/A'}
//                             </span>
//                           </div>

//                           {/* Product Name */}
//                           <h6 className="product-name card-title mb-2">
//                             {truncateText(product.productName, 50)}
//                           </h6>

//                           {/* Price Section */}
//                           <div className="price-section mb-3 mt-auto">
//                             <div className="original-price">
//                               <del className="text-muted">
//                                 {currencyFormatter.format(product.productPrice)}
//                               </del>
//                             </div>
//                             <div className="offer-price text-success fw-bold">
//                               {currencyFormatter.format(product.productOfferPrice)}
//                             </div>
//                           </div>

//                           <div className='text-center'>
//                             {/* <button className="btn btn-info btn-sm me-2" onClick={() => handleAddtobill(product._id)}>Buy Now</button> */}
//                             {/* <button className="btn btn-outline-dark btn-sm" onClick={()=>handleAddToWishlist(product._id)}> <i className="fa-solid fa-heart text-danger"></i></button> */}
//                             <button
//                               className="btn btn-info btn-sm "
//                               onClick={() => handleAddtobill(product)}
//                             >
//                               Buy Now
//                             </button>

//                           </div>


//                         </div>
//                       </div>
//                     </div>


//                   ))}
//               </Row>
//             </Card>
//           </Col>

//           {/* Right - Billing Summary */}
//           <Col md={5}>
//             <Card className="shadow-sm border-0 rounded p-3">
//               <h5 className="text-info fw-bold mb-3">Billing Summary</h5>
//               {cart.length === 0 ? (
//                 <p className="text-muted">No products added yet</p>
//               ) : (
//                 <Table bordered hover size="sm">
//                   <thead>
//                     <tr className="table-light">
//                       <th>Product</th>
//                       <th>Qty</th>
//                       <th>Price</th>
//                       <th></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.map((item) => (
//                       <tr key={item._id}>
//                         <td>{item.name}</td>
//                         <td>
//                           <Button
//                             variant="outline-secondary"
//                             size="sm"
//                             onClick={() => handleQtyChange(item._id, -1)}
//                           >
//                             -
//                           </Button>{" "}
//                           {item.qty}{" "}
//                           <Button
//                             variant="outline-secondary"
//                             size="sm"
//                             onClick={() => handleQtyChange(item._id, 1)}
//                           >
//                             +
//                           </Button>
//                         </td>
//                         <td>₹{item.price * item.qty}</td>
//                         <td>
//                           <Button
//                             size="sm"
//                             variant="danger"
//                             onClick={() => handleRemoveFromCart(item._id)}
//                           >
//                             x
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                     <tr>
//                       <td colSpan="2" className="fw-bold text-end">
//                         Total
//                       </td>
//                       <td colSpan="2" className="fw-bold text-success">
//                         ₹{total}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               )}
//               <Button
//                 variant="success"
//                 size="lg"
//                 className="w-100 fw-bold"
//                 disabled={cart.length === 0}
//                 onClick={() => console.log("Checkout", { billingDetails, cart })}
//               >
//                 ✅ Checkout & Print Bill
//               </Button>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Billing;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Billing() {
  return (
    <>
      
<a
        href="/admin"
        className="fw-bold text-info"
        style={{ textDecoration: "none" }}
        >
        <i className="fa-solid fa-arrow-left"></i> Back
      </a>





      <Container className="mt-4 ">
        {/* Page Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-info">Billing & Bills</h2>
        </div>

        {/* Top Cards */}
        <Row className="mb-4 g-4">
          {/* BILLLING */}
          <Col md={6}>
            <Link style={{ textDecoration: "none" }} to={"/billingcalc"}>
              <Card className="shadow-sm h-100 text-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "60px" }}
                >
                  <i
                    className="fa-solid fa-house fa-2xl"
                    style={{ color: "#0d6efd" }}
                  ></i>
                </div>
                <h5 className="fw-bold text-info">Billing</h5>
                <p className="text-dark fw-semibold">
                  
                </p>
              </Card>
            </Link>
          </Col>

          {/* BILLS */}
          <Col md={6}>
            <Link style={{ textDecoration: "none" }} to={"/bills"}>
              <Card className="shadow-sm h-100 text-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "60px" }}
                >
                  <i
                    className="fa-solid fa-calendar fa-2xl"
                    style={{ color: "#198754" }}
                  ></i>
                </div>
                <h5 className="fw-bold text-info">Bills</h5>
                <p className="text-dark fw-semibold">
                  Paid and Pending Bills
                </p>
              </Card>
            </Link>
          </Col>

          
        </Row>
      </Container>
    </>
  )
}

export default Billing




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

///////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";

// function Billing() {
//   const [products] = useState([
//     { id: 1, name: "Performance Tyre Set", price: 150 },
//     { id: 2, name: "Helmet", price: 50 },
//     { id: 3, name: "Engine Oil", price: 30 },
//   ]);

//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <Container className="my-4">
//       <Row className="g-3">
//         {/* Left - Product Search & List */}
//         <Col md={7}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Product Search</h5>
//             <Form.Control
//               type="text"
//               placeholder="Search for a product..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="mb-3"
//             />

//             <Table striped bordered hover size="sm">
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products
//                   .filter((p) =>
//                     p.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((product) => (
//                     <tr key={product.id}>
//                       <td>{product.name}</td>
//                       <td>${product.price}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="info"
//                           onClick={() => handleAddToCart(product)}
//                         >
//                           Add
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </Table>
//           </Card>
//         </Col>

//         {/* Right - Billing Summary */}
//         <Col md={5}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Billing Summary</h5>
//             {cart.length === 0 ? (
//               <p className="text-muted">No products added yet</p>
//             ) : (
//               <Table striped bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.name}</td>
//                       <td>{item.qty}</td>
//                       <td>${item.price * item.qty}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           onClick={() => handleRemoveFromCart(item.id)}
//                         >
//                           x
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td colSpan="2" className="fw-bold text-end">
//                       Total
//                     </td>
//                     <td colSpan="2" className="fw-bold">
//                       ${total}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             )}

//             <Button
//               variant="success"
//               size="sm"
//               className="w-100 fw-bold"
//               disabled={cart.length === 0}
//             >
//               Confirm & Generate Bill
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Billing;


///////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";

// function BillingPOS() {
//   const [products] = useState([
//     {
//       id: 1,
//       name: "Performance Tyre Set",
//       price: 150,
//       img: "https://m.media-amazon.com/images/I/81mSniZplFL._AC_UL320_.jpg",
//     },
//     {
//       id: 2,
//       name: "Helmet",
//       price: 50,
//       img: "https://m.media-amazon.com/images/I/71y1gMEe7-L._AC_UL320_.jpg",
//     },
//     {
//       id: 3,
//       name: "Engine Oil",
//       price: 30,
//       img: "https://m.media-amazon.com/images/I/71T0XXlZoRL._AC_UL320_.jpg",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const handleQtyChange = (id, change) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? { ...item, qty: Math.max(1, item.qty + change) }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <Container className="my-4">
//       <Row className="g-3">
//         {/* Left - Product Search Grid */}
//         <Col md={7}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Search & Add Products</h5>
//             <Form.Control
//               type="text"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="mb-3"
//             />
//             <Row className="g-3">
//               {products
//                 .filter((p) =>
//                   p.name.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((product) => (
//                   <Col md={4} sm={6} xs={12} key={product.id}>
//                     <Card className="h-100 shadow-sm text-center p-2">
//                       <img
//                         src={product.img}
//                         alt={product.name}
//                         style={{
//                           height: "120px",
//                           objectFit: "contain",
//                         }}
//                         className="mb-2"
//                       />
//                       <h6>{product.name}</h6>
//                       <p className="text-success fw-bold">${product.price}</p>
//                       <Button
//                         variant="info"
//                         size="sm"
//                         className="w-100 fw-bold"
//                         onClick={() => handleAddToCart(product)}
//                       >
//                         + Add
//                       </Button>
//                     </Card>
//                   </Col>
//                 ))}
//             </Row>
//           </Card>
//         </Col>

//         {/* Right - Billing Summary */}
//         <Col md={5}>
//           <Card className="shadow-sm border-0 rounded p-3">
//             <h5 className="text-info fw-bold mb-3">Billing Summary</h5>
//             {cart.length === 0 ? (
//               <p className="text-muted">No products added yet</p>
//             ) : (
//               <Table bordered hover size="sm">
//                 <thead>
//                   <tr className="table-light">
//                     <th>Product</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.name}</td>
//                       <td>
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           onClick={() => handleQtyChange(item.id, -1)}
//                         >
//                           -
//                         </Button>{" "}
//                         {item.qty}{" "}
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           onClick={() => handleQtyChange(item.id, 1)}
//                         >
//                           +
//                         </Button>
//                       </td>
//                       <td>${item.price * item.qty}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           onClick={() => handleRemoveFromCart(item.id)}
//                         >
//                           x
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td colSpan="2" className="fw-bold text-end">
//                       Total
//                     </td>
//                     <td colSpan="2" className="fw-bold text-success">
//                       ${total}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             )}
//             <Button
//               variant="success"
//               size="lg"
//               className="w-100 fw-bold"
//               disabled={cart.length === 0}
//             >
//               ✅ Checkout & Print Bill
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default BillingPOS;



