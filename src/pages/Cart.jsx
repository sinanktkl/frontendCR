// import React from 'react'
// import { useState } from 'react'
// import { DeleteCartApi, EmptyCartApi, GetCartApi, UpdateCartApi } from '../Services/allAPI';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { serverUrl } from '../Services/serverUrl';

// function Cart() {

//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Fetch cart items when component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");

//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }

//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);

//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       } else {
//         toast.error("Failed to fetch cart items");
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   // ✅ Remove item from cart
//   const handleRemove = async (productId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId };

//       const res = await DeleteCartApi(userId, reqBody, reqHeader);

//       if (res.status === 200) {
//         toast.success("Product removed from cart");
//         fetchCartItems(); // refresh cart
//       } else {
//         toast.error("Failed to remove product");
//       }
//     } catch (err) {
//       console.error("Remove error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const total = cartItems.reduce((sum, item) =>
//     sum + (item.productId?.productOfferPrice || 0) * item.quantity, 0);

//   const saved = cartItems.reduce((sum, item) =>
//     sum + (item.productId?.productPrice || 0) * item.quantity, 0);

//   const handleUpdateQuantity = async (productId, newQuantity) => {

//     if (newQuantity < 1) return;

//     try {
//       const token = sessionStorage.getItem("token")
//       const userId = sessionStorage.getItem("userId")
//       const reqHeader = {
//         Authorization: `Bearer ${token}`
//       }
//       const reqBody = {
//         productId, quantity: newQuantity
//       }

//       const result = await UpdateCartApi(userId,reqBody,reqHeader);
//       if(result.status === 200){
//         setCartItems(result.data.cart.products);
//         fetchCartItems();
//       }else{
//         toast.error("Failed to update quantity");
//       }
//     } catch (err) {
//       console.error("Update quantity error:", err);
//       toast.error("Something went wrong");
//     }

//   }

//   const handleEmptyCart = async () => {
//   try {
//     const token = sessionStorage.getItem("token");
//     const userId = sessionStorage.getItem("userId");
//     const reqHeader = { Authorization: `Bearer ${token}` };

//     const result = await EmptyCartApi(userId, reqHeader);

//     if (result.status === 200) {
//       toast.success("Cart emptied");
//       setCartItems([]); // clear UI immediately
//     } else {
//       toast.error("Failed to empty cart");
//     }
//   } catch (err) {
//     console.error("Empty cart error:", err);
//     toast.error("Something went wrong");
//   }
// };

//   return (
//     <>
//       {/* Full Width Container */}
//       <div className="container my-5 vh-100" style={{ padding: "0 5%" }}>


//         {
//           cartItems.length === 0 ?
//             (
//               <div className="row">
//                 {/* Shopping Cart Section */}
//                 <div className="col-12">
//                   <h3 className="fw-bold mb-4 mt-5 text-info">Cart Summary</h3>

//                   <h5 style={{ color: "red" }}>Your Cart is Empty</h5>

//                 </div>
//               </div>
//             ) : (
//               <div className="row">
//                 {/* Shopping Cart Section */}
//                 <div className="col-12" >
//                   <h3 className="fw-bold mb-4 mt-5 text-info">Cart Summary</h3>

//                   {/* Table Header */}
//                   <div className="d-flex justify-content-between text-muted fw-bold border-bottom pb-2 flex-wrap">
//                     <div style={{ flex: "0 0 40%" }}>PRODUCT DETAILS</div>
//                     <div style={{ flex: "0 0 20%", textAlign: "center" }}>QUANTITY</div>
//                     <div style={{ flex: "0 0 20%", textAlign: "right" }}>PRICE</div>
//                     <div style={{ flex: "0 0 20%", textAlign: "right" }}>ACTION</div>
//                   </div>
//               <div className="rtg" style={{overflowY:'auto',maxHeight:"00px"}}>


//                   {/* Product Row */}
//                   {cartItems.map((item, index) => (
//                     <div className="d-flex align-items-center justify-content-between py-3 border-bottom flex-wrap" >
//                       <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                         <img
//                           src=
//                           // "https://png.pngtree.com/png-clipart/20230502/original/pngtree-hard-hat-motorcycle-helmet-png-image_9130925.png"
//                           {`${serverUrl}/Uploads/${item.productId.productImage}`}
//                           alt={item.productId.productName}
//                           className="me-3 rounded"
//                           style={{
//                             width: "70px",
//                             height: "70px",
//                             objectFit: "contain"
//                           }}
//                         />
//                         <div>
//                           <h6 className="mb-1 text-info">{item.productId.productName}</h6>
//                           <small className="text-danger">{item.productId.productCategory}</small><br />
//                         </div>
//                       </div>

//                       {/* Quantity */}
//                       <div className="d-flex align-items-center justify-content-center" style={{ flex: "0 0 20%" }}>
//                         <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}>-</button>
//                         <input
//                           type="text"
//                           value={item.quantity}
//                           className="form-control form-control-sm mx-1 text-center"
//                           style={{ width: "50px" }}
//                           readOnly
//                         />
//                         <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}>+</button>
//                       </div>

//                       {/* Price */}
//                       <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                         <del style={{ flex: "0 0 20%", textAlign: "right", marginRight: "5px" }}>{item.productId.productPrice}</del>
//                         {item.productId.productOfferPrice}
//                       </div>

//                       {/* Action */}
//                       <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                         <small className="text-danger" style={{ cursor: "pointer" }} onClick={() => handleRemove(item.productId._id)}>Remove</small>
//                       </div>
//                     </div>
//                   ))}
// </div>
//                   {/* Total + Buttons */}
//                   <div className="d-flex justify-content-between align-items-center mt-4">
//                     <h5 className="fw-bold text-success">Total: ₹{total}

//                       <p className="fw-bold text-secondary">You Saved: ₹{saved}</p>
//                     </h5>
//                     <div>
//                       <button className="btn btn-outline-danger me-2" onClick={handleEmptyCart}>Empty Cart</button>
//                       <button className="btn btn-info">Buy Now</button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             )}
//       </div>
//     </>
//   )
// }

// export default Cart









// import React, { useEffect, useState } from "react";
// import { DeleteCartApi, EmptyCartApi, GetCartApi, UpdateCartApi } from "../Services/allAPI";
// import { toast } from "react-toastify";
// import { serverUrl } from "../Services/serverUrl";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");

//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }

//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);

//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       } else {
//         toast.error("Failed to fetch cart items");
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId };

//       const res = await DeleteCartApi(userId, reqBody, reqHeader);

//       if (res.status === 200) {
//         toast.success("Product removed from cart");
//         fetchCartItems();
//       } else {
//         toast.error("Failed to remove product");
//       }
//     } catch (err) {
//       console.error("Remove error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleUpdateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) return;

//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId, quantity: newQuantity };

//       const result = await UpdateCartApi(userId, reqBody, reqHeader);
//       if (result.status === 200) {
//         setCartItems(result.data.cart.products);
//         fetchCartItems();
//       } else {
//         toast.error("Failed to update quantity");
//       }
//     } catch (err) {
//       console.error("Update quantity error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleEmptyCart = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };

//       const result = await EmptyCartApi(userId, reqHeader);

//       if (result.status === 200) {
//         toast.success("Cart emptied");
//         setCartItems([]);
//       } else {
//         toast.error("Failed to empty cart");
//       }
//     } catch (err) {
//       console.error("Empty cart error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const total = cartItems.reduce(
//     (sum, item) => sum + (item.productId?.productOfferPrice || 0) * item.quantity,
//     0
//   );

//   const saved = cartItems.reduce(
//     (sum, item) => sum + (item.productId?.productPrice || 0) * item.quantity,
//     0
//   );

//   return (
//     <div className="container my-5">
//       <h3 className="fw-bold mb-4 text-info">Cart Summary</h3>

//       {cartItems.length === 0 ? (
//         <h5 className="text-danger">Your Cart is Empty</h5>
//       ) : (
//         <>
//           {/* Desktop View */}
//           <div className="d-none d-lg-block">
//             <div className="d-flex justify-content-between text-muted fw-bold border-bottom pb-2">
//               <div style={{ flex: "0 0 40%" }}>PRODUCT DETAILS</div>
//               <div style={{ flex: "0 0 20%", textAlign: "center" }}>QUANTITY</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>PRICE</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>ACTION</div>
//             </div>

//             <div style={{ overflowY: "auto", maxHeight: "500px" }}>
//               {cartItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="d-flex align-items-center justify-content-between py-3 border-bottom"
//                 >
//                   {/* Product */}
//                   <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                     <img
//                       src={`${serverUrl}/Uploads/${item.productId.productImage}`}
//                       alt={item.productId.productName}
//                       className="me-3 rounded"
//                       style={{ width: "70px", height: "70px", objectFit: "contain" }}
//                     />
//                     <div>
//                       <h6 className="mb-1 text-info">{item.productId.productName}</h6>
//                       <small className="text-danger">{item.productId.productCategory}</small>
//                     </div>
//                   </div>

//                   {/* Quantity */}
//                   <div className="d-flex align-items-center justify-content-center" style={{ flex: "0 0 20%" }}>
//                     <button
//                       className="btn btn-light btn-sm"
//                       onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}
//                     >-</button>
//                     <input
//                       type="text"
//                       value={item.quantity}
//                       className="form-control form-control-sm mx-1 text-center"
//                       style={{ width: "50px" }}
//                       readOnly
//                     />
//                     <button
//                       className="btn btn-light btn-sm"
//                       onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}
//                     >+</button>
//                   </div>

//                   {/* Price */}
//                   <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                     <del className="me-2">₹{item.productId.productPrice}</del>
//                     <span>₹{item.productId.productOfferPrice}</span>
//                   </div>

//                   {/* Remove */}
//                   <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                     <small
//                       className="text-danger"
//                       style={{ cursor: "pointer" }}
//                       onClick={() => handleRemove(item.productId._id)}
//                     >
//                       Remove
//                     </small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile/Tablet View */}
//           <div className="d-lg-none">
//             {cartItems
//   .filter(item => item && item.productId) // ✅ remove null productId items
//   .map((item, index) => (
//     <div key={index} className="d-flex align-items-center justify-content-between py-3 border-bottom">
//       {/* Product */}
//       <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//         <img
//           src={`${serverUrl}/Uploads/${item.productId.productImage}`}
//           alt={item.productId.productName}
//           className="me-3 rounded"
//           style={{ width: "70px", height: "70px", objectFit: "contain" }}
//         />
//         <div>
//           <h6 className="mb-1 text-info">{item.productId.productName}</h6>
//           <small className="text-danger">{item.productId.productCategory}</small>
//         </div>
//       </div>

//       {/* Quantity */}
//       <div className="d-flex align-items-center justify-content-center" style={{ flex: "0 0 20%" }}>
//         <button
//           className="btn btn-light btn-sm"
//           onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}
//         >
//           -
//         </button>
//         <input
//           type="text"
//           value={item.quantity}
//           className="form-control form-control-sm mx-1 text-center"
//           style={{ width: "50px" }}
//           readOnly
//         />
//         <button
//           className="btn btn-light btn-sm"
//           onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}
//         >
//           +
//         </button>
//       </div>

//       {/* Price */}
//       <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//         <del className="me-2">₹{item.productId.productPrice}</del>
//         <span>₹{item.productId.productOfferPrice}</span>
//       </div>

//       {/* Remove */}
//       <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//         <small
//           className="text-danger"
//           style={{ cursor: "pointer" }}
//           onClick={() => handleRemove(item.productId._id)}
//         >
//           Remove
//         </small>
//       </div>
//     </div>
// ))}

//           </div>

//           {/* Total */}
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
//             <h5 className="fw-bold text-success">
//               Total: ₹{total}
//               <p className="fw-bold text-secondary">You Saved: ₹{saved}</p>
//             </h5>
//             <div className="mt-3 mt-md-0">
//               <button className="btn btn-outline-danger me-2 mb-2 mb-md-0" onClick={handleEmptyCart}>
//                 Empty Cart
//               </button>
//               <button className="btn btn-info">Buy Now</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

// ==================+++++++++++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++++++++++++++++
// ==================+++++++++++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++++++++++++++++
// ==================+++++++++++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++++++++++++++++
// ==================+++++++++++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++++++++++++++++


//real onee
// import { QRCodeSVG } from "qrcode.react";
// import React, { useEffect, useState } from "react";
// import { CreateOrderApi, DeleteCartApi, EmptyCartApi, GetCartApi, UpdateCartApi, VerifyPaymentApi } from "../Services/allAPI";
// import { toast } from "react-toastify";
// import { serverUrl } from "../Services/serverUrl";

// import { Button, Form, Modal } from "react-bootstrap";
// import qrCodeImg from "../assets/qrImage.jpg"


// function Cart() {

//   const [qrVisible, setQrVisible] = useState(false);

//   const [showCheckout, setShowCheckout] = useState(false);

//   // Delivery & Payment States
//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("razorpay");

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");

//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }

//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);

//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       } else {
//         toast.error("Failed to fetch cart items");
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId };

//       const res = await DeleteCartApi(userId, reqBody, reqHeader);

//       if (res.status === 200) {
//         toast.success("Product removed from cart");
//         fetchCartItems();
//       } else {
//         toast.error("Failed to remove product");
//       }
//     } catch (err) {
//       console.error("Remove error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleUpdateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) return;

//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId, quantity: newQuantity };

//       const result = await UpdateCartApi(userId, reqBody, reqHeader);
//       if (result.status === 200) {
//         setCartItems(result.data.cart.products);
//         fetchCartItems();
//       } else {
//         toast.error("Failed to update quantity");
//       }
//     } catch (err) {
//       console.error("Update quantity error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleEmptyCart = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };

//       const result = await EmptyCartApi(userId, reqHeader);

//       if (result.status === 200) {
//         toast.success("Cart emptied");
//         setCartItems([]);
//       } else {
//         toast.error("Failed to empty cart");
//       }
//     } catch (err) {
//       console.error("Empty cart error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const total = cartItems.reduce(
//     (sum, item) => sum + (item.productId?.productOfferPrice || 0) * item.quantity,
//     0
//   );

//   const saved = cartItems.reduce(
//     (sum, item) => sum + (item.productId?.productPrice || 0) * item.quantity,
//     0
//   );
//   // ---------------------------------------------------------------------------------------------------------

// ///===================================================ffdsf=================================

//   // ---------------------------------------------------------------------------------------------------------


//   const handleProceed = () => {
//     if (cartItems.length === 0) {
//       toast.warning("Your cart is empty");
//       return;
//     }
//     setShowCheckout(true);
//   };

// const handlePlaceOrder = async () => {
//   if (!address.name || !address.phone || !address.address || !address.pincode) {
//     toast.info("⚠️ Please fill in all delivery address fields");
//     return;
//   }

//   const userId = sessionStorage.getItem("userId");
//   const token = sessionStorage.getItem("token");

//   if (paymentMethod === "razorpay") {
//     // Step 1: Create Razorpay Order (no DB entry yet)
//     const amount = cartItems.reduce((sum, item) => sum + (item.productId.productOfferPrice * item.quantity), 0);

//     const res = await CreateRazorpayOrderApi({ amount }, { Authorization: `Bearer ${token}` });

//     if (res.status === 200) {
//       const { razorpayOrder } = res.data;
//   const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || process.env.REACT_APP_RAZORPAY_KEY_ID;

//       const options = {
//         key: razorpayKey,
//         amount: razorpayOrder.amount,
//         currency: "INR",
//         order_id: razorpayOrder.id,
//         handler: async (response) => {
//           // Step 2: Verify payment and save order in DB
//           const verifyRes = await VerifyPaymentApi(
//             {
//               ...response,
//               userId,
//               cartItems,
//               address,
//             },
//             token
//           );

//           if (verifyRes.status === 200) {
//             toast.success("✅ Payment Successful & Order Placed");
//           } else {
//             toast.error("❌ Payment verification failed");
//           }
//         },
//         modal: {
//           ondismiss: function () {
//             toast.info("Payment cancelled");
//           },
//         },
//       };
//       new window.Razorpay(options).open();
//     }
//   } else {
//     // COD or QR Code → directly save in DB
//     const reqBody = { cartItems, address, paymentMethod };
//     const reqHeader = { Authorization: `Bearer ${token}` };
//     const res = await CreateOrderApi(userId, reqBody, reqHeader);

//     if (res.status === 200) {
//       toast.success("Order placed successfully");
//     }
//   }
// };


// //   const handlePlaceOrder = async () => {
// //     if (!address.name || !address.phone || !address.address || !address.pincode) {
// //     toast.info("⚠️ Please fill in all delivery address fields", {
// //       position: "top-right",
// //       autoClose: 3000,
// //     });
// //     return;
// //   }

// //  const userId = sessionStorage.getItem("userId");
// //  const token = sessionStorage.getItem("token");
// //   const reqBody = {
// //     cartItems,
// //     address,
// //     paymentMethod, // "razorpay" | "qrcode" | "cod"
// //   };
// //   const reqHeader={
// //     Authorization:`Bearer ${token}`
// //   }

// //   const res = await CreateOrderApi(userId,reqBody, reqHeader);
// //   console.log(res);

// //   if (res.status === 200) {
// //     if (paymentMethod === "razorpay") {
// //       const options = {
// //         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
// //         amount: res.order.amount * 100,
// //         currency: "INR",
// //         order_id: res.order.razorpay_order_id,
// //         handler: async (response) => {
// //           await VerifyPaymentApi(response, token);
// //           toast.success("Payment Successful");
// //         },
// //       };
// //       new window.Razorpay(options).open();
// //     } else {
// //       toast.success("Order placed successfully", {
// //       position: "top-right",
// //       autoClose: 3000,
// //     });
// //     }
// //   }
// // };

// // ===========================================
// //  const handlePlaceOrder = async () => {
// //   // 🔹 1. Validate address fields
// //   if (!address.name || !address.phone || !address.address || !address.pincode) {
// //     toast.info("⚠️ Please fill in all delivery address fields", {
// //       position: "top-right",
// //       autoClose: 3000,
// //     });
// //     return;
// //   }

// //   // 🔹 2. Validate cart items
// //   if (!cartItems || cartItems.length === 0) {
// //     toast.warning("🛒 Your cart is empty", {
// //       position: "top-right",
// //       autoClose: 3000,
// //     });
// //     return;
// //   }

// //   const userId = sessionStorage.getItem("userId");
// //   const token = sessionStorage.getItem("token");

// //   if (!userId || !token) {
// //     toast.error("❌ Please login to place an order", {
// //       position: "top-right",
// //       autoClose: 3000,
// //     });
// //     return;
// //   }

// //   try {
// //     const reqBody = {
// //       cartItems,
// //       address,
// //       paymentMethod, // "razorpay" | "qrcode" | "cod"
// //     };

// //     const reqHeader = {
// //       Authorization: `Bearer ${token}`,
// //     };

// //     const res = await CreateOrderApi(userId, reqBody, reqHeader);

// //     // 🔹 3. Handle API response
// //     if (res?.data?.success) {
// //       if (paymentMethod === "razorpay") {
// //         const options = {
// //           key: process.env.REACT_APP_RAZORPAY_KEY_ID,
// //           amount: res.data.order.amount * 100, // amount in paise
// //           currency: "INR",
// //           order_id: res.data.order.razorpay_order_id,
// //           handler: async (response) => {
// //             await VerifyPaymentApi(response, token);
// //             toast.success("✅ Payment Successful", { autoClose: 3000 });
// //           },
// //           theme: { color: "#3399cc" },
// //         };
// //         new window.Razorpay(options).open();
// //       } else {
// //         toast.success("✅ Order placed successfully", { autoClose: 3000 });
// //       }
// //     } else {
// //       toast.error(res?.data?.message || "❌ Failed to place order", {
// //         autoClose: 3000,
// //       });
// //     }
// //   } catch (error) {
// //     console.error("Order Error:", error);
// //     toast.error("❌ Something went wrong while placing order", {
// //       autoClose: 3000,
// //     });
// //   }
// // };

// return (
//     <div className="container my-5">

//       <h3 className="mb-4 fw-bold text-info">
//         Cart Summary
//         <button className="btn btn-outline-danger btn-sm float-end" onClick={handleEmptyCart}>
//           Empty Cart
//         </button>
//       </h3>

//       {cartItems.length === 0 ? (
//         <h5 className="text-danger">Your Cart is Empty</h5>
//       ) : (
//         <>
//           {/* Desktop View */}
//           <div className="d-none d-lg-block">
//             <div className="d-flex justify-content-between text-muted fw-bold border-bottom pb-2">
//               <div style={{ flex: "0 0 40%" }}>PRODUCT DETAILS</div>
//               <div style={{ flex: "0 0 20%", textAlign: "center" }}>QUANTITY</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>PRICE</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>ACTION</div>
//             </div>

//             <div style={{ overflowY: "auto", maxHeight: "500px" }}>
//               {cartItems
//                 .filter((item) => item?.productId) // ✅ filter out null productId
//                 .map((item, index) => (
//                   <div
//                     key={index}
//                     className="d-flex align-items-center justify-content-between py-3 border-bottom"
//                   >
//                     {/* Product */}
//                     <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                       <img
//                         src={
//                           item.productId?.productImage
//                             ? `${serverUrl}/Uploads/${item.productId.productImage}`
//                             : "/placeholder.png"
//                         }
//                         alt={item.productId?.productName || "Product"}
//                         className="me-3 rounded"
//                         style={{ width: "70px", height: "70px", objectFit: "contain" }}
//                       />
//                       <div>
//                         <h6 className="mb-1 text-info">
//                           {item.productId?.productName || "Unknown Product"}
//                         </h6>
//                         <small className="text-danger">
//                           {item.productId?.productCategory || "N/A"}
//                         </small>
//                       </div>
//                     </div>

//                     {/* Quantity */}
//                     <div
//                       className="d-flex align-items-center justify-content-center"
//                       style={{ flex: "0 0 20%" }}
//                     >
//                       <button
//                         className="btn btn-light btn-sm"
//                         onClick={() =>
//                           handleUpdateQuantity(item.productId?._id, item.quantity - 1)
//                         }
//                       >
//                         -
//                       </button>
//                       <input
//                         type="text"
//                         value={item.quantity}
//                         className="form-control form-control-sm mx-1 text-center"
//                         style={{ width: "50px" }}
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-light btn-sm"
//                         onClick={() =>
//                           handleUpdateQuantity(item.productId?._id, item.quantity + 1)
//                         }
//                       >
//                         +
//                       </button>
//                     </div>

//                     {/* Price */}
//                     <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                       <del className="me-2">₹{item.productId?.productPrice || 0}</del>
//                       <span>₹{item.productId?.productOfferPrice || 0}</span>
//                     </div>

//                     {/* Remove */}
//                     <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                       <small
//                         className="text-danger"
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleRemove(item.productId?._id)}
//                       >
//                         Remove
//                       </small>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Mobile/Tablet View */}
//           <div className="d-lg-none">
//             {cartItems
//               .filter((item) => item?.productId) // ✅ filter out null productId
//               .map((item, index) => (
//                 <div key={index} className="card shadow-sm mb-3">
//                   <div className="card-body d-flex">
//                     <img
//                       src={
//                         item.productId?.productImage
//                           ? `${serverUrl}/Uploads/${item.productId.productImage}`
//                           : "/placeholder.png"
//                       }
//                       alt={item.productId?.productName || "Product"}
//                       style={{ width: "80px", height: "80px", objectFit: "contain" }}
//                       className="me-3"
//                     />
//                     <div className="flex-grow-1">
//                       <h6 className="text-info text-truncate">
//                         {item.productId?.productName || "Unknown Product"}
//                       </h6>
//                       <small className="text-danger">
//                         {item.productId?.productCategory || "N/A"}
//                       </small>
//                       <div className="d-flex align-items-center mt-2">
//                         <button
//                           className="btn btn-light btn-sm"
//                           onClick={() =>
//                             handleUpdateQuantity(item.productId?._id, item.quantity - 1)
//                           }
//                         >
//                           -
//                         </button>
//                         <span className="mx-2">{item.quantity}</span>
//                         <button
//                           className="btn btn-light btn-sm"
//                           onClick={() =>
//                             handleUpdateQuantity(item.productId?._id, item.quantity + 1)
//                           }
//                         >
//                           +
//                         </button>
//                       </div>
//                       <div className="mt-2">
//                         <del className="me-2">₹{item.productId?.productPrice || 0}</del>
//                         <span className="fw-bold">
//                           ₹{item.productId?.productOfferPrice || 0}
//                         </span>
//                       </div>
//                       <button
//                         className="btn btn-sm btn-danger mt-2"
//                         onClick={() => handleRemove(item.productId?._id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           {/* Total */}
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
//             <h5 className="fw-bold text-success">
//               Total: ₹{total}
//               <p className="fw-bold text-secondary">You Saved: ₹{saved}</p>
//             </h5>
//             <div className="mt-3 mt-md-0">

//               <button className="btn btn-info" onClick={handleProceed}>Proceed to Buy</button>
//               {/* <Checkout total={total} /> */}
//             </div>
//           </div>
//           {/* ------------------------------------------------------- */}

//           {/* Checkout Modal */}
//           <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg" centered>
//             <Modal.Header closeButton>
//               <Modal.Title>Checkout</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="row">
//                 {/* Section 1: Delivery Address */}
//                 <div className="col-md-6 border-end">
//                   <h5 className="mb-3 text-info">Delivery Address</h5>
//                   <Form>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Full Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter your name"
//                         value={address.name}
//                         onChange={(e) =>
//                           setAddress({ ...address, name: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Phone</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter phone number"
//                         value={address.phone}
//                         onChange={(e) =>
//                           setAddress({ ...address, phone: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Address</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={2}
//                         placeholder="Enter delivery address"
//                         value={address.address}
//                         onChange={(e) =>
//                           setAddress({ ...address, address: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Pincode</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter pincode"
//                         value={address.pincode}
//                         onChange={(e) =>
//                           setAddress({ ...address, pincode: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                   </Form>
//                 </div>

//                 {/* Section 2: Payment Method */}
//                 <div className="col-md-6">
//                   <h5 className="mb-3 text-info">Payment Method</h5>
//                   <Form>
//                     <Form.Check
//                       type="radio"
//                       label="Pay with Razorpay"
//                       value="razorpay"
//                       checked={paymentMethod === "razorpay"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <Form.Check
//                       type="radio"
//                       label="Pay with QR code"
//                       value="qrcode"
//                       checked={paymentMethod === "qrcode"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <Form.Check
//                       type="radio"
//                       label="Cash on Delivery (COD)"
//                       value="cod"
//                       checked={paymentMethod === "cod"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                   </Form>
//                   <div className="mt-4">
//                     <h6 className="fw-bold">Order Summary</h6>
//                     <p>Total Amount: ₹{total}</p>
//                   </div>
//                 </div>
//               </div>



//               {paymentMethod === "qrcode" && (
//                 <div className="mt-3 text-center">
//                   <h6 className="fw-bold">Scan to Pay</h6>
//                   <QRCodeSVG
//   value={`upi://pay?pa=yourupiid@upi&pn=YourShopName&am=${total}&cu=INR`}
//   size={200}
//   includeMargin={true}
// />
//                   <p className="mt-2 text-muted">
//                     Pay ₹{total} by scanning this QR (UPI)
//                   </p>
//                 </div>
//               )}

//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={() => setShowCheckout(false)}>
//                 Cancel
//               </Button>
//               <Button variant="success" onClick={handlePlaceOrder}>
//                 Place Order
//               </Button>
//             </Modal.Footer>
//           </Modal>


//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;



// ===================================================================

import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";
import {
  CreateOrderApi,
  CreateRazorpayOrderApi,
  DeleteCartApi,
  EmptyCartApi,
  GetCartApi,
  UpdateCartApi,
  VerifyPaymentApi,
} from "../Services/allAPI";
import { toast } from "react-toastify";
import { serverUrl } from "../Services/serverUrl";
import { Button, Form, Modal } from "react-bootstrap";

function Cart() {
  const [qrVisible, setQrVisible] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // Delivery & Payment States
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");

      if (!token || !userId) {
        toast.warning("Please login to view your cart");
        return;
      }

      const reqHeader = { Authorization: `Bearer ${token}` };
      const res = await GetCartApi(userId, reqHeader);

      if (res.status === 200) {
        setCartItems(res.data.products || []);
      } else {
        toast.error("Failed to fetch cart items");
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
      toast.error("Something went wrong");
    }
  };

  const handleRemove = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = { productId };

      const res = await DeleteCartApi(userId, reqBody, reqHeader);

      if (res.status === 200) {
        toast.success("Product removed from cart");
        fetchCartItems();
      } else {
        toast.error("Failed to remove product");
      }
    } catch (err) {
      console.error("Remove error:", err);
      toast.error("Something went wrong");
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = { productId, quantity: newQuantity };

      const result = await UpdateCartApi(userId, reqBody, reqHeader);
      if (result.status === 200) {
        setCartItems(result.data.cart.products);
        fetchCartItems();
      } else {
        toast.error("Failed to update quantity");
      }
    } catch (err) {
      console.error("Update quantity error:", err);
      toast.error("Something went wrong");
    }
  };

  const handleEmptyCart = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await EmptyCartApi(userId, reqHeader);

      if (result.status === 200) {
        toast.success("Cart emptied");
        setCartItems([]);
      } else {
        toast.error("Failed to empty cart");
      }
    } catch (err) {
      console.error("Empty cart error:", err);
      toast.error("Something went wrong");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.productId?.productOfferPrice || 0) * item.quantity,
    0
  );

  const saved = cartItems.reduce(
    (sum, item) => sum + (item.productId?.productPrice || 0) * item.quantity,
    0
  );

  // ------------------------------------------------------

  const handleProceed = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }
    setShowCheckout(true);
  };

  const isAddressValid = () => {
    return (
      address?.name?.trim() &&
      address?.phone?.trim() &&
      address?.address?.trim() &&
      address?.pincode?.trim()
    );
  };

  const handlePlaceOrder = async () => {
    if (!isAddressValid()) {
      toast.info("⚠️ Please fill in all delivery address fields");
      return;
    }

    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");

    if (paymentMethod === "razorpay") {
      // 🔹 Step 1: Create Razorpay Order
      const amount = total;
      const res = await CreateRazorpayOrderApi(
        userId,
        { cartItems, address },
        { Authorization: `Bearer ${token}` }

      );

      if (res.status === 200) {
        // const { razorpayOrder } = res.data;
        const { razorpayOrder, orderId } = res.data;

        const razorpayKey =
          import.meta.env.VITE_RAZORPAY_KEY_ID ||
          process.env.REACT_APP_RAZORPAY_KEY_ID;

        const options = {
          key: razorpayKey,
          amount: razorpayOrder.amount,
          currency: "INR",
          order_id: razorpayOrder.id,
          handler: async (response) => {
            // 🔹 Step 2: Verify payment and save order in DB
            const verifyRes = await VerifyPaymentApi(
              userId,
              {
                ...response,
                orderId,
                userId,
                cartItems,
                address,
              },
              { Authorization: `Bearer ${token}` }
            );

            if (verifyRes.status === 200) {
              toast.success("✅ Payment Successful & Order Placed");
              setShowCheckout(false);
              fetchCartItems();
            } else {
              toast.error("❌ Payment verification failed");
            }
          },
          modal: {
            ondismiss: function () {
              toast.info("Payment cancelled");
            },
          },
        };
        new window.Razorpay(options).open();
      }
    } else {
      // 🔹 COD / QR → directly save order
      const reqBody = { cartItems, address, paymentMethod };
      const reqHeader = { Authorization: `Bearer ${token}` };
      const res = await CreateOrderApi(userId, reqBody, reqHeader);

      if (res.status === 200) {
        toast.success("✅ Order placed successfully");
        setShowCheckout(false);
        fetchCartItems();
      } else {
        toast.error("❌ Failed to place order");
      }
    }
  };

  return (
    <>


      <div className="container my-5">

        <h3 className="mb-4 fw-bold text-info">
          Cart Summary
          <button className="btn btn-outline-danger btn-sm float-end" onClick={handleEmptyCart}>
            Empty Cart
          </button>
        </h3>

        {cartItems.length === 0 ? (
          <h5 className="text-danger">Your Cart is Empty</h5>
        ) : (
          <>
            {/* Desktop View */}
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-between text-muted fw-bold border-bottom pb-2">
                <div style={{ flex: "0 0 40%" }}>PRODUCT DETAILS</div>
                <div style={{ flex: "0 0 20%", textAlign: "center" }}>QUANTITY</div>
                <div style={{ flex: "0 0 20%", textAlign: "right" }}>PRICE</div>
                <div style={{ flex: "0 0 20%", textAlign: "right" }}>ACTION</div>
              </div>

              <div style={{ overflowY: "auto", maxHeight: "500px" }}>
                {cartItems
                  .filter((item) => item?.productId) // ✅ filter out null productId
                  .map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center justify-content-between py-3 border-bottom"
                    >
                      {/* Product */}
                      <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
                        <img
                          src={
                            item.productId?.productImage
                              ? `${serverUrl}/Uploads/${item.productId.productImage}`
                              : "/placeholder.png"
                          }
                          alt={item.productId?.productName || "Product"}
                          className="me-3 rounded"
                          style={{ width: "70px", height: "70px", objectFit: "contain" }}
                        />
                        <div>
                          <h6 className="mb-1 text-info">
                            {item.productId?.productName || "Unknown Product"}
                          </h6>
                          <small className="text-danger">
                            {item.productId?.productCategory || "N/A"}
                          </small>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ flex: "0 0 20%" }}
                      >
                        <button
                          className="btn btn-light btn-sm"
                          onClick={() =>
                            handleUpdateQuantity(item.productId?._id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          className="form-control form-control-sm mx-1 text-center"
                          style={{ width: "50px" }}
                          readOnly
                        />
                        <button
                          className="btn btn-light btn-sm"
                          onClick={() =>
                            handleUpdateQuantity(item.productId?._id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div style={{ flex: "0 0 20%", textAlign: "right" }}>
                        <del className="me-2">₹{item.productId?.productPrice || 0}</del>
                        <span>₹{item.productId?.productOfferPrice || 0}</span>
                      </div>

                      {/* Remove */}
                      <div style={{ flex: "0 0 20%", textAlign: "right" }}>
                        <small
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRemove(item.productId?._id)}
                        >
                          Remove
                        </small>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Mobile/Tablet View */}
            <div className="d-lg-none">
              {cartItems
                .filter((item) => item?.productId) // ✅ filter out null productId
                .map((item, index) => (
                  <div key={index} className="card shadow-sm mb-3">
                    <div className="card-body d-flex">
                      <img
                        src={
                          item.productId?.productImage
                            ? `${serverUrl}/Uploads/${item.productId.productImage}`
                            : "/placeholder.png"
                        }
                        alt={item.productId?.productName || "Product"}
                        style={{ width: "80px", height: "80px", objectFit: "contain" }}
                        className="me-3"
                      />
                      <div className="flex-grow-1">
                        <h6 className="text-info text-truncate">
                          {item.productId?.productName || "Unknown Product"}
                        </h6>
                        <small className="text-danger">
                          {item.productId?.productCategory || "N/A"}
                        </small>
                        <div className="d-flex align-items-center mt-2">
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() =>
                              handleUpdateQuantity(item.productId?._id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() =>
                              handleUpdateQuantity(item.productId?._id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="mt-2">
                          <del className="me-2">₹{item.productId?.productPrice || 0}</del>
                          <span className="fw-bold">
                            ₹{item.productId?.productOfferPrice || 0}
                          </span>
                        </div>
                        <button
                          className="btn btn-sm btn-danger mt-2"
                          onClick={() => handleRemove(item.productId?._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Total */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
              <h5 className="fw-bold text-success">
                Total: ₹{total}
                <p className="fw-bold text-secondary">You Saved: ₹{saved}</p>
              </h5>
              <div className="mt-3 mt-md-0">

                <button className="btn btn-info" onClick={handleProceed}>Proceed to Buy</button>
                {/* <Checkout total={total} /> */}
              </div>
            </div>
            {/* ------------------------------------------------------- */}

            {/* Checkout Modal */}
            <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  {/* Section 1: Delivery Address */}
                  <div className="col-md-6 border-end">
                    <h5 className="mb-3 text-info">Delivery Address</h5>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          value={address.name}
                          onChange={(e) =>
                            setAddress({ ...address, name: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter phone number"
                          value={address.phone}
                          onChange={(e) =>
                            setAddress({ ...address, phone: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Enter delivery address"
                          value={address.address}
                          onChange={(e) =>
                            setAddress({ ...address, address: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter pincode"
                          value={address.pincode}
                          onChange={(e) =>
                            setAddress({ ...address, pincode: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Form>
                  </div>

                  {/* Section 2: Payment Method */}
                  <div className="col-md-6">
                    <h5 className="mb-3 text-info">Payment Method</h5>
                    <Form>
                      <Form.Check
                        type="radio"
                        label="Pay with Razorpay"
                        value="razorpay"
                        checked={paymentMethod === "razorpay"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="Pay with QR code"
                        value="qrcode"
                        checked={paymentMethod === "qrcode"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label="Cash on Delivery (COD)"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                    </Form>
                    <div className="mt-4">
                      <h6 className="fw-bold">Order Summary</h6>
                      <p>Total Amount: ₹{total}</p>
                    </div>
                  </div>
                </div>



                {paymentMethod === "qrcode" && (
                  <div className="mt-3 text-center">
                    <h6 className="fw-bold">Scan to Pay</h6>
                    <QRCodeSVG
                      value={`upi://pay?pa=yourupiid@upi&pn=YourShopName&am=${total}&cu=INR`}
                      size={200}
                      includeMargin={true}
                    />
                    <p className="mt-2 text-muted">
                      Pay ₹{total} by scanning this QR (UPI)
                    </p>
                  </div>
                )}

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowCheckout(false)}>
                  Cancel
                </Button>
                <Button
                  variant="success"
                  onClick={handlePlaceOrder}
                  disabled={!isAddressValid() || cartItems.length === 0}
                >
                  Place Order
                </Button>
              </Modal.Footer>
            </Modal>


          </>
        )}
      </div>


      {/* Cart Summary + Checkout modal (same as your code, shortened here) */}
      {/* Keep your JSX, just replace handlePlaceOrder with this updated version */}
      {/* And disable button if address invalid */}
      {/* <div className="container my-5">

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCheckout(false)}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={handlePlaceOrder}
          disabled={!isAddressValid() || cartItems.length === 0}
        >
          Place Order
        </Button>
      </Modal.Footer>
    </div> */}

    </>
  );
}

export default Cart;










// ===================================================================

// import { QRCodeSVG } from "qrcode.react";
// import React, { useEffect, useState } from "react";
// import {
//   CreateOrderApi,
//   GetCartApi,
//   DeleteCartApi,
//   EmptyCartApi,
//   UpdateCartApi,
//   VerifyPaymentApi,
// } from "../Services/allAPI";
// import { toast } from "react-toastify";
// import { serverUrl } from "../Services/serverUrl";
// import { Button, Form, Modal } from "react-bootstrap";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);

//   // Delivery & Payment
//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("razorpay");

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const token = sessionStorage.getItem("token");
//   const userId = sessionStorage.getItem("userId");

//   // ================== Cart APIs ===================
//   const fetchCartItems = async () => {
//     try {
//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);
//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       }
//     } catch (err) {
//       toast.error("Error fetching cart");
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await DeleteCartApi(userId, { productId }, reqHeader);
//       if (res.status === 200) {
//         toast.success("Product removed");
//         fetchCartItems();
//       }
//     } catch {
//       toast.error("Error removing product");
//     }
//   };

//   const handleEmptyCart = async () => {
//     try {
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await EmptyCartApi(userId, reqHeader);
//       if (res.status === 200) {
//         setCartItems([]);
//         toast.success("Cart emptied");
//       }
//     } catch {
//       toast.error("Error emptying cart");
//     }
//   };

//   const total = cartItems.reduce(
//     (sum, item) =>
//       sum + (item.productId?.productOfferPrice || 0) * item.quantity,
//     0
//   );

//   // ================== Checkout ===================
//   const handleProceed = () => {
//     if (cartItems.length === 0) {
//       toast.warning("Your cart is empty");
//       return;
//     }
//     setShowCheckout(true);
//   };

//   const handlePlaceOrder = async () => {
//     if (!address.name || !address.phone || !address.address) {
//       toast.error("Please fill delivery address");
//       return;
//     }

//     try {
//       const reqBody = {
//         userId,
//         cartItems,
//         address,
//         paymentMethod,
//       };
//       const res = await CreateOrderApi(reqBody, token);

//       if (!res.data.success) {
//         toast.error("Order creation failed");
//         return;
//       }

//       // ========== Razorpay Flow ==========
//       if (paymentMethod === "razorpay") {
//         const options = {
//           key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//           amount: res.data.order.amount * 100,
//           currency: "INR",
//           order_id: res.data.order.razorpay_order_id,
//           name: "Your Shop",
//           description: "Order Payment",
//           handler: async function (response) {
//             const verifyRes = await VerifyPaymentApi(response, token);
//             if (verifyRes.data.success) {
//               toast.success("✅ Payment successful");
//               setCartItems([]);
//               setShowCheckout(false);
//             } else {
//               toast.error("❌ Payment verification failed");
//             }
//           },
//           prefill: {
//             name: address.name,
//             contact: address.phone,
//           },
//           theme: { color: "#0d6efd" },
//         };
//         new window.Razorpay(options).open();
//       }

//       // ========== QR Flow ==========
//       else if (paymentMethod === "qrcode") {
//         toast.info("Order placed. Waiting for payment confirmation.");
//         setCartItems([]);
//         setShowCheckout(false);
//       }

//       // ========== COD Flow ==========
//       else if (paymentMethod === "cod") {
//         toast.success("Order placed with Cash on Delivery");
//         setCartItems([]);
//         setShowCheckout(false);
//       }
//     } catch (err) {
//       toast.error("Something went wrong placing order");
//     }
//   };

//   // ================== UI ===================
//   return (
//     <div className="container my-5">
//       <h3 className="mb-4 fw-bold text-info">
//         Cart Summary
//         <button
//           className="btn btn-outline-danger btn-sm float-end"
//           onClick={handleEmptyCart}
//         >
//           Empty Cart
//         </button>
//       </h3>

//       {cartItems.length === 0 ? (
//         <h5 className="text-danger">Your Cart is Empty</h5>
//       ) : (
//         <>
//           {/* Products Table (simplified) */}
//           {cartItems.map((item, i) => (
//             <div
//               key={i}
//               className="d-flex justify-content-between align-items-center border-bottom py-2"
//             >
//               <span>{item.productId?.productName}</span>
//               <span>
//                 ₹{item.productId?.productOfferPrice} × {item.quantity}
//               </span>
//               <Button
//                 variant="danger"
//                 size="sm"
//                 onClick={() => handleRemove(item.productId?._id)}
//               >
//                 Remove
//               </Button>
//             </div>
//           ))}

//           {/* Total */}
//           <div className="d-flex justify-content-between mt-4">
//             <h5>Total: ₹{total}</h5>
//             <Button variant="info" onClick={handleProceed}>
//               Proceed to Buy
//             </Button>
//           </div>

//           {/* Checkout Modal */}
//           <Modal
//             show={showCheckout}
//             onHide={() => setShowCheckout(false)}
//             size="lg"
//             centered
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>Checkout</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="row">
//                 {/* Address */}
//                 <div className="col-md-6 border-end">
//                   <h5 className="text-info">Delivery Address</h5>
//                   <Form>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Full Name</Form.Label>
//                       <Form.Control
//                         value={address.name}
//                         onChange={(e) =>
//                           setAddress({ ...address, name: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Phone</Form.Label>
//                       <Form.Control
//                         value={address.phone}
//                         onChange={(e) =>
//                           setAddress({ ...address, phone: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Address</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={2}
//                         value={address.address}
//                         onChange={(e) =>
//                           setAddress({ ...address, address: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Form.Label>Pincode</Form.Label>
//                       <Form.Control
//                         value={address.pincode}
//                         onChange={(e) =>
//                           setAddress({ ...address, pincode: e.target.value })
//                         }
//                       />
//                     </Form.Group>
//                   </Form>
//                 </div>

//                 {/* Payment */}
//                 <div className="col-md-6">
//                   <h5 className="text-info">Payment Method</h5>
//                   <Form>
//                     <Form.Check
//                       type="radio"
//                       label="Razorpay"
//                       value="razorpay"
//                       checked={paymentMethod === "razorpay"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <Form.Check
//                       type="radio"
//                       label="QR Code / UPI"
//                       value="qrcode"
//                       checked={paymentMethod === "qrcode"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                     <Form.Check
//                       type="radio"
//                       label="Cash on Delivery"
//                       value="cod"
//                       checked={paymentMethod === "cod"}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                     />
//                   </Form>

//                   {paymentMethod === "qrcode" && (
//                     <div className="text-center mt-3">
//                       <QRCodeSVG
//                         value={`upi://pay?pa=yourupiid@upi&pn=YourShop&am=${total}&cu=INR`}
//                         size={200}
//                         includeMargin
//                       />
//                       <p className="text-muted mt-2">
//                         Scan QR to pay ₹{total}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={() => setShowCheckout(false)}>
//                 Cancel
//               </Button>
//               <Button variant="success" onClick={handlePlaceOrder}>
//                 Place Order
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;





// ===================================================================
// ===================================================================

// import React, { useEffect, useState } from "react";
// import { DeleteCartApi, EmptyCartApi, GetCartApi, UpdateCartApi } from "../Services/allAPI";
// import { toast } from "react-toastify";
// import { serverUrl } from "../Services/serverUrl";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");

//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }

//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);

//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       } else {
//         toast.error("Failed to fetch cart items");
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId };

//       const res = await DeleteCartApi(userId, reqBody, reqHeader);
//       if (res.status === 200) {
//         toast.success("Product removed from cart");
//         fetchCartItems();
//       } else {
//         toast.error("Failed to remove product");
//       }
//     } catch (err) {
//       console.error("Remove error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleUpdateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 1) return;

//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId, quantity: newQuantity };

//       const result = await UpdateCartApi(userId, reqBody, reqHeader);
//       if (result.status === 200) {
//         setCartItems(result.data.cart.products);
//       } else {
//         toast.error("Failed to update quantity");
//       }
//     } catch (err) {
//       console.error("Update quantity error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleEmptyCart = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };

//       const result = await EmptyCartApi(userId, reqHeader);
//       if (result.status === 200) {
//         toast.success("Cart emptied");
//         setCartItems([]);
//       } else {
//         toast.error("Failed to empty cart");
//       }
//     } catch (err) {
//       console.error("Empty cart error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   // Total and saved
//   const total = cartItems.reduce(
//     (sum, item) => sum + (item.productId?.productOfferPrice || 0) * item.quantity,
//     0
//   );
//   const saved = cartItems.reduce(
//     (sum, item) => sum + ((item.productId?.productPrice || 0) - (item.productId?.productOfferPrice || 0)) * item.quantity,
//     0
//   );

//   // Razorpay Buy Now
//   const handleBuyNow = async () => {
//     if (!cartItems.length) return toast.warning("Cart is empty");

//     try {
//       const totalAmount = total;

//       // 1️⃣ Create order on backend
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: totalAmount }),
//       });
//       const orderData = await res.json();

//       // 2️⃣ Open Razorpay checkout
//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Bike Service & E-commerce",
//         description: "Purchase from Cart",
//         order_id: orderData.id,
//         handler: async function (response) {
//           // 3️⃣ Verify payment
//           const verifyRes = await fetch("/api/verify-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(response),
//           });
//           const verifyData = await verifyRes.json();
//           if (verifyData.success) {
//             toast.success("Payment successful!");
//             setCartItems([]);
//           } else {
//             toast.error("Payment verification failed!");
//           }
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#0d6efd" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       toast.error("Payment failed");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h3 className="fw-bold mb-4 text-info">Cart Summary</h3>

//       {cartItems.length === 0 ? (
//         <h5 className="text-danger">Your Cart is Empty</h5>
//       ) : (
//         <>
//           {/* Desktop */}
//           <div className="d-none d-lg-block">
//             <div className="d-flex justify-content-between text-muted fw-bold border-bottom pb-2">
//               <div style={{ flex: "0 0 40%" }}>PRODUCT DETAILS</div>
//               <div style={{ flex: "0 0 20%", textAlign: "center" }}>QUANTITY</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>PRICE</div>
//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>ACTION</div>
//             </div>

//             <div style={{ overflowY: "auto", maxHeight: "500px" }}>
//               {cartItems.filter(item => item && item.productId).map((item, index) => (
//                 <div key={index} className="d-flex align-items-center justify-content-between py-3 border-bottom">
//                   <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                     <img
//                       src={`${serverUrl}/Uploads/${item.productId.productImage}`}
//                       alt={item.productId.productName}
//                       className="me-3 rounded"
//                       style={{ width: "70px", height: "70px", objectFit: "contain" }}
//                     />
//                     <div>
//                       <h6 className="mb-1 text-info">{item.productId.productName}</h6>
//                       <small className="text-danger">{item.productId.productCategory}</small>
//                     </div>
//                   </div>

//                   <div className="d-flex align-items-center justify-content-center" style={{ flex: "0 0 20%" }}>
//                     <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}>-</button>
//                     <input type="text" value={item.quantity} readOnly className="form-control form-control-sm mx-1 text-center" style={{ width: "50px" }} />
//                     <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}>+</button>
//                   </div>

//                   <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                     <del className="me-2">₹{item.productId.productPrice}</del>
//                     <span>₹{item.productId.productOfferPrice}</span>
//                   </div>

//                   <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                     <small className="text-danger" style={{ cursor: "pointer" }} onClick={() => handleRemove(item.productId._id)}>Remove</small>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile */}
//           <div className="d-lg-none">
//             {cartItems.filter(item => item && item.productId).map((item, index) => (
//               <div key={index} className="d-flex align-items-center justify-content-between py-3 border-bottom">
//                 <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                   <img src={`${serverUrl}/Uploads/${item.productId.productImage}`} alt={item.productId.productName} className="me-3 rounded" style={{ width: "70px", height: "70px", objectFit: "contain" }} />
//                   <div>
//                     <h6 className="mb-1 text-info">{item.productId.productName}</h6>
//                     <small className="text-danger">{item.productId.productCategory}</small>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-center justify-content-center" style={{ flex: "0 0 20%" }}>
//                   <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}>-</button>
//                   <input type="text" value={item.quantity} readOnly className="form-control form-control-sm mx-1 text-center" style={{ width: "50px" }} />
//                   <button className="btn btn-light btn-sm" onClick={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}>+</button>
//                 </div>

//                 <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                   <del className="me-2">₹{item.productId.productPrice}</del>
//                   <span>₹{item.productId.productOfferPrice}</span>
//                 </div>

//                 <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                   <small className="text-danger" style={{ cursor: "pointer" }} onClick={() => handleRemove(item.productId._id)}>Remove</small>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total & Buy Now */}
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
//             <h5 className="fw-bold text-success">
//               Total: ₹{total}
//               <p className="fw-bold text-secondary">You Saved: ₹{saved}</p>
//             </h5>
//             <div className="mt-3 mt-md-0">
//               <button className="btn btn-outline-danger me-2 mb-2 mb-md-0" onClick={handleEmptyCart}>Empty Cart</button>
//               <button className="btn btn-info" onClick={handleBuyNow}>Buy Now</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;














// import React from 'react'
// import { useState } from 'react'
// import { GetCartApi } from '../Services/allAPI';
// import { useEffect } from 'react';

// function Cart() {

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(false);


//   const fetchCart = async () => {

//     try {
//       setLoading(true);

//       const token = sessionStorage.getItem("token")
//       const userId = sessionStorage.getItem("userId")
//       if (!token || !userId) {
//         return
//       }

//       const reqHeader = {
//         "Authorization": `Bearer ${token}`
//       }

//       const result = await GetCartApi(userId, reqHeader);
//       if (result.status == 200) {
//         setCartItems(result.data);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//     fetchCart();
//   },[])
//   return (
//     <div className="container my-5 vh-100" style={{ padding: "0 5%" }}>
//       <h3 className="fw-bold mb-4 mt-5 text-info">Cart Summary</h3>

//       {loading ? <p>Loading...</p> : cartItems.length === 0 ? (
//         <p className="text-muted">Cart is empty</p>
//       ) : (
//         <>
//           {cartItems.map(item => (
//             <div key={item._id} className="d-flex align-items-center justify-content-between py-3 border-bottom flex-wrap">
//               <div className="d-flex align-items-center" style={{ flex: "0 0 40%" }}>
//                 <img
//                   src={`${serverUrl}/Uploads/${item.productId?.productImage}`}
//                   alt={item.productId?.productName}
//                   style={{ width: "70px", height: "70px", objectFit: "contain" }}
//                   className="me-3 rounded"
//                 />
//                 <div>
//                   <h6 className="mb-1 text-info">{item.productId?.productName}</h6>
//                   <small className="text-danger">{item.productId?.productCategory}</small>
//                 </div>
//               </div>

//               <div style={{ flex: "0 0 20%", textAlign: "center" }}>
//                 {item.quantity}
//               </div>

//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                 ₹{item.productId?.productOfferPrice}
//               </div>

//               <div style={{ flex: "0 0 20%", textAlign: "right" }}>
//                 <small className="text-danger" style={{ cursor: "pointer" }}
//                   onClick={() => handleRemove(item._id)}>Remove</small>
//               </div>
//             </div>
//           ))}

//           <div className="d-flex justify-content-between align-items-center mt-4">
//             <h5 className="fw-bold text-danger">Total: ₹{total}</h5>
//             <div>
//               <button className="btn btn-outline-danger me-2">Empty Cart</button>
//               <button className="btn btn-info">Buy Now</button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default Cart








// import React, { useEffect, useState } from "react";
// import { GetCartApi, DeleteCartApi } from "../Services/allAPI";
// import { toast } from "react-toastify";
// import { serverUrl } from "../Services/serverUrl";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Fetch cart items when component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");

//       if (!token || !userId) {
//         toast.warning("Please login to view your cart");
//         return;
//       }

//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const res = await GetCartApi(userId, reqHeader);

//       if (res.status === 200) {
//         setCartItems(res.data.products || []);
//       } else {
//         toast.error("Failed to fetch cart items");
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   // ✅ Remove item from cart
//   const handleRemove = async (productId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const userId = sessionStorage.getItem("userId");
//       const reqHeader = { Authorization: `Bearer ${token}` };
//       const reqBody = { productId };

//       const res = await DeleteCartApi(userId, reqBody, reqHeader);

//       if (res.status === 200) {
//         toast.success("Product removed from cart");
//         fetchCartItems(); // refresh cart
//       } else {
//         toast.error("Failed to remove product");
//       }
//     } catch (err) {
//       console.error("Remove error:", err);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="row">
//           {cartItems.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card shadow-sm p-3 mb-4">
//                 {/* ✅ Access populated product */}
//                 <img
//                   src=
//                   // {item.productId?.productImage || "/placeholder.png"}
//                   // {`${serverUrl}/Uploads/${item.productImage}`}
//                   {`${serverUrl}/Uploads/${item.productId?.productImage}`}
//                   alt={item.productId?.productName}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.productId?.productName}</h5>
//                   <p className="card-text">Price: ₹{item.productId?.productPrice}</p>
//                   <p className="card-text">Quantity: {item.quantity}</p>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleRemove(item.productId._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
