// import React from 'react'

// function Orders() {
//   return (

//     <>
//   <a href="/admin" className='text-info' style={{ textDecoration: "none", fontWeight:'bolder' }}>
//     <i className="fa-solid fa-arrow-left"></i> Back</a>


//     <div className='mt-5'>

//   <div
//   style={{
//                               background: "#fff",
//                               padding: "10px",
//                               borderRadius: "8px",
//                               marginTop: "15px",
//                               overflowX: "auto", // horizontal scroll on mobile
//                           }}
    
//   >
//     <table className="table table-striped table-hover  table-bordered  ">
//       <thead  className='text-info text-center'>
//         <tr  className='bg-info'>
//           <th className='bg-info text-light'>#</th>
//           <th className='bg-info text-light'>User Name</th>
//           <th className='bg-info text-light'>Email</th>
//           <th className='bg-info text-light'>Selected products & Quantity</th>
//           <th className='bg-info text-light'>Amount Paid</th>
//           <th className='bg-info text-light'>Issued Date</th>
//         </tr>
//       </thead>
//       <tbody  className='text-info fw-bolder text-center'>
//         <tr>
//           <td>1</td>
//           <td>Dhanish</td>
//           <td>nishal@gmail.com</td>
//           <td><li>product</li></td>
//           <td>233</td>
//           <td>
//           <p>12/3/2025 : 10;00 pm</p>

//           </td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Dhanish</td>
//           <td>nishal@gmail.com</td>
//           <td><li>products</li></td>
//           <td>233</td>
//           <td>
//           <p>12/3/2025 : 10;00 pm</p>

//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>

//     </>
//   )
// }

// export default Orders




// import React, { useEffect, useState } from "react";
// import { GetAllOrdersApi } from "../Services/allAPI";
// import { toast } from "react-toastify";

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const res = await GetAllOrdersApi(token);

//       if (res.status === 200) {
//         setOrders(res.data);
//       } else {
//         toast.error("Failed to fetch orders");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <>
//       <a
//         href="/admin"
//         className="text-info"
//         style={{ textDecoration: "none", fontWeight: "bolder" }}
//       >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>

//       <div className="mt-5">
//         <div
//           style={{
//             background: "#fff",
//             padding: "10px",
//             borderRadius: "8px",
//             marginTop: "15px",
//             overflowX: "auto",
//           }}
//         >
//           <table className="table table-striped table-hover table-bordered">
//             <thead className="text-info text-center">
//               <tr className="bg-info">
//                 <th className="bg-info text-light">#</th>
//                 <th className="bg-info text-light">User Name</th>
//                 <th className="bg-info text-light">Email</th>
//                 <th className="bg-info text-light">Products</th>
//                 <th className="bg-info text-light">Payment Method</th>
//                 <th className="bg-info text-light">Amount Paid</th>
//                 <th className="bg-info text-light">Status</th>
//                 <th className="bg-info text-light">Issued Date</th>
//               </tr>
//             </thead>
//             <tbody className="text-info fw-bolder text-center">
//               {orders.length > 0 ? (
//                 orders.map((order, idx) => (
//                   <tr key={order._id}>
//                     <td>{idx + 1}</td>
//                     <td>{order.userId?.name || "N/A"}</td>
//                     <td>{order.userId?.email || "N/A"}</td>
//                     <td style={{ textAlign: "left" }}>
//                       <ul className="list-unstyled">
//                         {order.products.map((p, i) => (
//                           <li key={i}>
//                             {p.productId?.productName} (
//                             ₹{p.productId?.productOfferPrice}) × {p.quantity}{" "}
//                             ={" "}
//                             <span className="text-success">
//                               ₹{(p.productId?.productOfferPrice || 0) *
//                                 p.quantity}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td>{order.paymentMethod || "N/A"}</td>
//                     <td className="text-success fw-bold">₹{order.amount}</td>
//                     <td>
//                       <span
//                         className={`badge ${
//                           order.status === "Pending"
//                             ? "bg-warning"
//                             : order.status === "Confirmed"
//                             ? "bg-info"
//                             : order.status === "Shipped"
//                             ? "bg-primary"
//                             : order.status === "Delivered"
//                             ? "bg-success"
//                             : "bg-danger"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                     <td>{new Date(order.createdAt).toLocaleString()}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-danger">
//                     No orders found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Orders;








// import React, { useEffect, useState } from "react";
// import { GetAllOrdersApi, UpdateOrderStatusApi } from "../../Services/allAPI";
// import { toast } from "react-toastify";

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const res = await GetAllOrdersApi(token);

//       if (res.status === 200) {
//         setOrders(res.data);
//       } else {
//         toast.error("Failed to fetch orders");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const res = await UpdateOrderStatusApi(orderId, newStatus, token);

//       if (res.data.success) {
//         toast.success("Order status updated");
//         fetchOrders();
//       } else {
//         toast.error("Failed to update status");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong updating status");
//     }
//   };

//   return (
//     <>
//       <a
//         href="/admin"
//         className="text-info"
//         style={{ textDecoration: "none", fontWeight: "bolder" }}
//       >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>

//       <div className="mt-5">
//         <div
//           style={{
//             background: "#fff",
//             padding: "10px",
//             borderRadius: "8px",
//             marginTop: "15px",
//             overflowX: "auto",
//           }}
//         >
//           <table className="table table-striped table-hover table-bordered">
//             <thead className="text-info text-center">
//               <tr className="bg-info">
//                 <th className="bg-info text-light">#</th>
//                 <th className="bg-info text-light">User Name</th>
//                 <th className="bg-info text-light">Email</th>
//                 <th className="bg-info text-light">Products</th>
//                 <th className="bg-info text-light">Payment Method</th>
//                 <th className="bg-info text-light">Payment Status</th>
//                 <th className="bg-info text-light">Amount Paid</th>
//                 <th className="bg-info text-light">Order Status</th>
//                 <th className="bg-info text-light">Issued Date</th>
//               </tr>
//             </thead>
//             <tbody className="text-info fw-bolder text-center">
//               {orders.length > 0 ? (
//                 orders.map((order, idx) => (
//                   <tr key={order._id}>
//                     <td>{idx + 1}</td>
//                     <td>{order.userId?.name || "N/A"}</td>
//                     <td>{order.userId?.email || "N/A"}</td>
//                     <td style={{ textAlign: "left" }}>
//                       <ul className="list-unstyled">
//                         {order.products.map((p, i) => (
//                           <li key={i}>
//                             {p.productId?.productName} (₹
//                             {p.productId?.productOfferPrice}) × {p.quantity} ={" "}
//                             <span className="text-success">
//                               ₹{(p.productId?.productOfferPrice || 0) *
//                                 p.quantity}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="text-capitalize">
//                       {order.paymentMethod}
//                     </td>
//                     <td>
//                       <span
//                         className={`badge ${
//                           order.paymentStatus === "Paid"
//                             ? "bg-success"
//                             : order.paymentStatus === "Pending"
//                             ? "bg-warning"
//                             : "bg-danger"
//                         }`}
//                       >
//                         {order.paymentStatus}
//                       </span>
//                     </td>
//                     <td className="text-success fw-bold">₹{order.amount}</td>
//                     <td>
//                       <select
//                         className="form-select form-select-sm"
//                         value={order.orderStatus}
//                         onChange={(e) =>
//                           handleStatusChange(order._id, e.target.value)
//                         }
//                       >
//                         <option value="Confirmred">Confirmred</option>
//                         <option value="Shipping">Shipping</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="Returned">Returned</option>
//                       </select>
//                     </td>
//                     <td>{new Date(order.createdAt).toLocaleString()}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="9" className="text-danger">
//                     No orders found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Orders;





// import React, { useEffect, useState } from "react";
// import { GetAllOrdersApi, UpdateOrderApi } from "../../Services/allAPI";
// import { toast } from "react-toastify";

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await GetAllOrdersApi();
//       if (res.status === 200) {
//         setOrders(res.data);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch orders");
//     }
//   };

//   const handleUpdate = async (orderId, field, value) => {
//     try {
//       const res = await UpdateOrderApi(orderId, { [field]: value });
//       if (res.status === 200) {
//         toast.success("Order updated");
//         fetchOrders();
//       } else {
//         toast.error("Update failed");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <>
//       <a
//         href="/admin"
//         className="text-info"
//         style={{ textDecoration: "none", fontWeight: "bolder" }}
//       >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>

//       <div className="mt-5">
//         <div
//           style={{
//             background: "#fff",
//             padding: "10px",
//             borderRadius: "8px",
//             marginTop: "15px",
//             overflowX: "auto",
//           }}
//         >
//           <table className="table table-striped table-hover table-bordered">
//             <thead className="text-info text-center">
//               <tr>
//                 <th>#</th>
//                 <th>UserName</th>
//                 <th>Email</th>
//                 <th>Products</th>
//                 <th>Amount Paid</th>
//                 <th>Payment Method</th>
//                 <th>Payment Status</th>
//                 <th>Order Status</th>
//                 <th>Issued Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-info fw-bolder text-center">
//               {orders.length === 0 ? (
//                 <tr>
//                   <td colSpan="10" className="text-danger">
//                     No Orders Found
//                   </td>
//                 </tr>
//               ) : (
//                 orders.map((order, index) => (
//                   <tr key={order._id}>
//                     <td>{index + 1}</td>
//                     <td>{order.userId?.name}</td>
//                     <td>{order.userId?.email}</td>
//                     <td className="text-start">
//                       {order.products.map((p, i) => (
//                         <li key={i}>
//                           {p.productId?.productName} (₹{p.productId?.productOfferPrice} ×{" "}
//                           {p.quantity})
//                         </li>
//                       ))}
//                     </td>
//                     <td>₹{order.amount}</td>
//                     <td>{order.paymentMethod}</td>
//                     <td>
//                       <span
//                         className={`badge ${
//                           order.paymentStatus === "Paid"
//                             ? "bg-success"
//                             : order.paymentStatus === "Failed"
//                             ? "bg-danger"
//                             : "bg-warning"
//                         }`}
//                       >
//                         {order.paymentStatus}
//                       </span>
//                     </td>
//                     <td>
//                       <span
//                         className={`badge ${
//                           order.orderStatus === "Delivered"
//                             ? "bg-success"
//                             : order.orderStatus === "Cancelled"
//                             ? "bg-danger"
//                             : "bg-info"
//                         }`}
//                       >
//                         {order.orderStatus}
//                       </span>
//                     </td>
//                     <td>
//                       {new Date(order.createdAt).toLocaleDateString()} <br />
//                       {new Date(order.createdAt).toLocaleTimeString()}
//                     </td>
//                     <td>
//                       {/* Payment Control */}
//                       {order.paymentStatus === "Pending" && (
//                         <>
//                           <button
//                             className="btn btn-sm btn-success me-1"
//                             onClick={() =>
//                               handleUpdate(order._id, "paymentStatus", "Paid")
//                             }
//                           >
//                             Mark Paid
//                           </button>
//                           <button
//                             className="btn btn-sm btn-danger me-1"
//                             onClick={() =>
//                               handleUpdate(order._id, "paymentStatus", "Failed")
//                             }
//                           >
//                             Mark Failed
//                           </button>
//                         </>
//                       )}

//                       {/* Order Control */}
//                       {["Confirmed", "Shipping"].includes(order.orderStatus) && (
//                         <button
//                           className="btn btn-sm btn-primary me-1"
//                           onClick={() =>
//                             handleUpdate(
//                               order._id,
//                               "orderStatus",
//                               order.orderStatus === "Confirmed"
//                                 ? "Shipping"
//                                 : "Delivered"
//                             )
//                           }
//                         >
//                           {order.orderStatus === "Confirmed"
//                             ? "Ship"
//                             : "Deliver"}
//                         </button>
//                       )}

//                       {order.orderStatus === "Delivered" && (
//                         <button
//                           className="btn btn-sm btn-warning"
//                           onClick={() =>
//                             handleUpdate(order._id, "orderStatus", "Returned")
//                           }
//                         >
//                           Mark Returned
//                         </button>
//                       )}

//                       {order.orderStatus !== "Cancelled" && (
//                         <button
//                           className="btn btn-sm btn-outline-danger ms-1"
//                           onClick={() =>
//                             handleUpdate(order._id, "orderStatus", "Cancelled")
//                           }
//                         >
//                           Cancel
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Orders;




// import React, { useEffect, useState } from "react";
// import { GetAllOrdersApi, UpdateOrderStatusApi } from "../../Services/allAPI"; // make sure UpdateOrderStatusApi exists
// import { Modal, Button, Form } from "react-bootstrap";
// import { toast } from "react-toastify";

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await GetAllOrdersApi();
//       if (res.status === 200) {
//         setOrders(res.data);
//       }
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     }
//   };

//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);
//     setShowModal(true);
//   };

//   const handleUpdateOrder = async () => {
//     if (!selectedOrder) return;

//     setUpdating(true);
//     try {
//       const res = await UpdateOrderStatusApi(selectedOrder._id, {
//         orderStatus: selectedOrder.orderStatus,
//         paymentStatus: selectedOrder.paymentStatus,
//       });

//       if (res.status === 200) {
//         toast.success("✅ Order updated successfully");
//         fetchOrders(); // refresh list
//         setShowModal(false);
//       } else {
//         toast.error("❌ Failed to update order");
//       }
//     } catch (err) {
//       console.error("Update error:", err);
//       toast.error("Something went wrong");
//     }
//     setUpdating(false);
//   };

//   return (
//     <>
//       <a
//         href="/admin"
//         className="text-info"
//         style={{ textDecoration: "none", fontWeight: "bolder" }}
//       >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>

//       <div className="mt-5">
//         <div
//           style={{
//             background: "#fff",
//             padding: "10px",
//             borderRadius: "8px",
//             marginTop: "15px",
//             overflowX: "auto",
//           }}
//         >
//           <table className="table table-striped table-hover table-bordered">
//             <thead className="text-info text-center">
//               <tr>
//                 <th>#</th>
//                 <th>User Name</th>
//                 <th>Email</th>
//                 <th>Products</th>
//                 <th>Amount Paid</th>
//                 <th>Payment Method</th>
//                 <th>Status</th>
//                 <th>Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-info fw-bolder text-center">
//               {orders.map((order, index) => (
//                 <tr key={order._id}>
//                   <td>{index + 1}</td>
//                   <td>{order.userId?.username}</td>
//                   <td>{order.userId?.email}</td>
//                   <td>
//                     {order.products.map((p, i) => (
//                       <li key={i}>
//                         {p.productId?.productName} (₹{p.productId?.productOfferPrice}) ×{" "}
//                         {p.quantity}
//                       </li>
//                     ))}
//                   </td>
//                   <td>₹{order.amount}</td>
//                   <td>{order.paymentMethod}</td>
//                   <td>
//                     <span className="badge bg-success">{order.paymentStatus}</span>
//                   </td>
//                   <td>
//                     {new Date(order.createdAt).toLocaleDateString()}{" "}
//                     {new Date(order.createdAt).toLocaleTimeString()}
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-info"
//                       onClick={() => handleViewDetails(order)}
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Order Details Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedOrder && (
//             <>
//               <h5 className="text-info">Customer Info</h5>
//               <p><b>Name:</b> {selectedOrder.address.name}</p>
//               <p><b>Phone:</b> {selectedOrder.address.phone}</p>
//               <p><b>Address:</b> {selectedOrder.address.address}, {selectedOrder.address.pincode}</p>

//               <hr />

//               <h5 className="text-info">Products</h5>
//               <ul>
//                 {selectedOrder.products.map((p, i) => (
//                   <li key={i}>
//                     {p.productId?.productName} - ₹{p.productId?.productOfferPrice} × {p.quantity} = ₹
//                     {p.productId?.productOfferPrice * p.quantity}
//                   </li>
//                 ))}
//               </ul>

//               <hr />
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Order Status</Form.Label>
//                   <Form.Select
//                     value={selectedOrder.orderStatus}
//                     onChange={(e) =>
//                       setSelectedOrder({ ...selectedOrder, orderStatus: e.target.value })
//                     }
//                   >
//                     <option value="Confirmred">Confirmed</option>
//                     <option value="Shipping">Shipping</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Returned">Returned</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Payment Status</Form.Label>
//                   <Form.Select
//                     value={selectedOrder.paymentStatus}
//                     onChange={(e) =>
//                       setSelectedOrder({ ...selectedOrder, paymentStatus: e.target.value })
//                     }
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Failed">Failed</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Form>

//               <p><b>Payment Method:</b> {selectedOrder.paymentMethod}</p>
//               <p><b>Total Paid:</b> ₹{selectedOrder.amount}</p>
//               <p><b>Date:</b> {new Date(selectedOrder.createdAt).toLocaleString()}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button
//             variant="success"
//             onClick={handleUpdateOrder}
//             disabled={updating}
//           >
//             {updating ? "Updating..." : "Update Order"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Orders;




// import React, { useEffect, useState } from "react";
// import {
//   GetAllOrdersApi,
//   UpdateOrderStatusApi,
//   // UpdateOrderApi,
// } from "../../Services/allAPI";
// import { toast } from "react-toastify";
// import { Button, Table, Badge, Modal } from "react-bootstrap";

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

// // =========================================================================


// const fetchOrders = async () => {
//   try {
//     const token = sessionStorage.getItem("token");
//     const reqHeader = { Authorization: `Bearer ${token}` };

//     const res = await GetAllOrdersApi(reqHeader);
//     if (res.status === 200) {
//       setOrders(res.data);
//     } else {
//       toast.error(res.response?.data?.message || "Failed to fetch orders");
//     }
//   } catch (err) {
//     toast.error("Unauthorized - Please login again");
//   }
// };

// useEffect(() => {
//   fetchOrders();
// }, []);



// // =========================================================================


//   // Update payment or order status
//   // const handleUpdateOrder = async (id, field, value) => {
//   //   try {
//   //     const res = await UpdateOrderStatusApi(id, { [field]: value });
//   //     if (res.status === 200) {
//   //       toast.success(`${field} updated`);
//   //       fetchOrders();
//   //     }
//   //   } catch {
//   //     toast.error("Update failed");
//   //   }
//   // };
// const handleUpdateOrder = async (id, field, value) => {
//   try {
//     const token = sessionStorage.getItem("token");
//     const reqHeader = { Authorization: `Bearer ${token}` };

//     const res = await UpdateOrderStatusApi(id, { [field]: value }, reqHeader);

//     if (res.status === 200) {
//       toast.success(`${field} updated`);
//       fetchOrders();
//     } else {
//       toast.error(res.response?.data?.message || "Update failed");
//     }
//   } catch (err) {
//     toast.error("Update failed");
//   }
// };

// // ==========================================
//   return (

    
//     <div className="container my-4">
//       <h3 className="fw-bold text-info">All Orders</h3>

//       <Table striped bordered hover responsive className="mt-3">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>User</th>
//             <th>Products</th>
//             <th>Amount</th>
//             <th>Payment</th>
//             <th>Order Status</th>
//             <th>Created</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.length === 0 ? (
//             <tr>
//               <td colSpan="8" className="text-center text-danger">
//                 No Orders Found
//               </td>
//             </tr>
//           ) : (
//             orders.map((order, i) => (
//               <tr key={order._id}>
//                 <td>{i + 1}</td>
//                 <td>{order.userId?.username || "Unknown"}</td>
//                 <td>
//                   <ul className="mb-0">
//                     {order.products.map((p, idx) => (
//                       <li key={idx}>
//                         {p.productId?.productName} (
//                         ₹{p.productId?.productOfferPrice}) × {p.quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td>₹{order.amount}</td>
//                 <td>
//                   <Badge
//                     bg={
//                       order.paymentStatus === "Paid"
//                         ? "success"
//                         : order.paymentStatus === "Failed"
//                         ? "danger"
//                         : "warning"
//                     }
//                   >
//                     {order.paymentStatus}
//                   </Badge>
//                   <div className="mt-2 d-flex gap-1">
//                     {order.paymentStatus !== "Paid" && (
//                       <Button
//                         size="sm"
//                         variant="success"
//                         onClick={() =>
//                           handleUpdateOrder(order._id, "paymentStatus", "Paid")
//                         }
//                       >
//                         Mark Paid
//                       </Button>
//                     )}
//                     {order.paymentStatus !== "Failed" && (
//                       <Button
//                         size="sm"
//                         variant="danger"
//                         onClick={() =>
//                           handleUpdateOrder(order._id, "paymentStatus", "Failed")
//                         }
//                       >
//                         Mark Failed
//                       </Button>
//                     )}
//                   </div>
//                 </td>
//                 <td>
//                   <Badge bg="info">{order.orderStatus}</Badge>
//                   <div className="mt-2 d-flex gap-1 flex-wrap">
//                     {["Confirmed", "Shipping", "Delivered", "Cancelled"].map(
//                       (st) => (
//                         <Button
//                           key={st}
//                           size="sm"
//                           variant={
//                             order.orderStatus === st ? "secondary" : "outline-info"
//                           }
//                           onClick={() =>
//                             handleUpdateOrder(order._id, "orderStatus", st)
//                           }
//                         >
//                           {st}
//                         </Button>
//                       )
//                     )}
//                   </div>
//                 </td>
//                 <td>{new Date(order.createdAt).toLocaleString()}</td>
//                 <td>
//                   <Button
//                     size="sm"
//                     variant="primary"
//                     onClick={() => setSelectedOrder(order)}
//                   >
//                     View
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>

//       {/* Modal for detailed view */}
//       <Modal
//         show={!!selectedOrder}
//         onHide={() => setSelectedOrder(null)}
//         size="lg"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Order Details</Modal.Title>
//         </Modal.Header>
//         {selectedOrder && (
//           <Modal.Body>
//             <h5>User: {selectedOrder.userId?.name || "Unknown"}</h5>
//             <p>
//               <strong>Phone:</strong> {selectedOrder.address.phone}
//               <br />
//               <strong>Address:</strong> {selectedOrder.address.address},{" "}
//               {selectedOrder.address.pincode}
//             </p>

//             <h6 className="mt-3">Products:</h6>
//             <ul>
//               {selectedOrder.products.map((p, idx) => (
//                 <li key={idx}>
//                   {p.productId?.productName} - ₹
//                   {p.productId?.productOfferPrice} × {p.quantity}
//                 </li>
//               ))}
//             </ul>

//             <p>
//               <strong>Amount:</strong> ₹{selectedOrder.amount}
//               <br />
//               <strong>Payment:</strong> {selectedOrder.paymentMethod} (
//               {selectedOrder.paymentStatus})
//               <br />
//               <strong>Status:</strong> {selectedOrder.orderStatus}
//             </p>
//           </Modal.Body>
//         )}
//       </Modal>
//     </div>
//   );
// }

// export default Orders;

import React, { useEffect, useState } from "react";
import {
  GetAllOrdersApi,
  UpdateOrderStatusApi,
} from "../../Services/allAPI";
import { toast } from "react-toastify";
import { Button, Table, Badge, Modal, Tabs, Tab } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [key, setKey] = useState("all"); // default tab

  // =========================================================================
  const fetchOrders = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = { Authorization: `Bearer ${token}` };

      const res = await GetAllOrdersApi(reqHeader);
      if (res.status === 200) {
        setOrders(res.data);
      } else {
        toast.error(res.response?.data?.message || "Failed to fetch orders");
      }
    } catch (err) {
      toast.error("Unauthorized - Please login again");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // =========================================================================
  const handleUpdateOrder = async (id, field, value) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = { Authorization: `Bearer ${token}` };

      const res = await UpdateOrderStatusApi(id, { [field]: value }, reqHeader);

      if (res.status === 200) {
        toast.success(`${field} updated`);
        fetchOrders();
      } else {
        toast.error(res.response?.data?.message || "Update failed");
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  // =========================================================================
  // Filter orders by category
  const filterOrders = (method) => {
    if (method === "all") return orders;
    return orders.filter((o) => o.paymentMethod?.toLowerCase() === method);
  };

  // =========================================================================
  const renderOrdersTable = (filteredOrders) => (
    <Table striped bordered hover responsive className="mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Products</th>
          <th>Amount</th>
          <th>Payment</th>
          <th>Order Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders.length === 0 ? (
          <tr>
            <td colSpan="8" className="text-center text-danger">
              No Orders Found
            </td>
          </tr>
        ) : (
          filteredOrders.map((order, i) => (
            <tr key={order._id}>
              <td>{i + 1}</td>
              <td>{order.userId?.username || "Unknown"}</td>
              <td>
                <ul className="mb-0">
                  {order.products.map((p, idx) => (
                    <li key={idx}>
                      {p.productId?.productName} (₹
                      {p.productId?.productOfferPrice}) × {p.quantity}
                    </li>
                  ))}
                </ul>
              </td>
              <td>₹{order.amount}</td>
              <td>
                <Badge
                  bg={
                    order.paymentStatus === "Paid"
                      ? "success"
                      : order.paymentStatus === "Failed"
                      ? "danger"
                      : "warning"
                  }
                >
                  {order.paymentMethod} - {order.paymentStatus}
                </Badge>
                <div className="mt-2 d-flex gap-1">
                  {order.paymentStatus !== "Paid" && (
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() =>
                        handleUpdateOrder(order._id, "paymentStatus", "Paid")
                      }
                    >
                      Mark Paid
                    </Button>
                  )}
                  {order.paymentStatus !== "Failed" && (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() =>
                        handleUpdateOrder(order._id, "paymentStatus", "Failed")
                      }
                    >
                      Mark Failed
                    </Button>
                  )}
                </div>
              </td>
              <td>
                <Badge bg="info">{order.orderStatus}</Badge>
                <div className="mt-2 d-flex gap-1 flex-wrap">
                  {["Confirmed", "Shipping", "Delivered", "Cancelled"].map(
                    (st) => (
                      <Button
                        key={st}
                        size="sm"
                        variant={
                          order.orderStatus === st
                            ? "secondary"
                            : "outline-info"
                        }
                        onClick={() =>
                          handleUpdateOrder(order._id, "orderStatus", st)
                        }
                      >
                        {st}
                      </Button>
                    )
                  )}
                </div>
              </td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setSelectedOrder(order)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );

  // =========================================================================
  return (
    <div className="container my-4">
      <h3 className="fw-bold text-info">All Orders</h3>

      <Tabs
        id="orders-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All Orders">
          {renderOrdersTable(filterOrders("all"))}
        </Tab>
        <Tab eventKey="cod" title="COD">
          {renderOrdersTable(filterOrders("cod"))}
        </Tab>
        <Tab eventKey="qr" title="QR">
          {renderOrdersTable(filterOrders("qrcode"))}
        </Tab>
        <Tab eventKey="razorpay" title="Razorpay">
          {renderOrdersTable(filterOrders("razorpay"))}
        </Tab>
      </Tabs>

      {/* Modal for detailed view */}
      <Modal
        show={!!selectedOrder}
        onHide={() => setSelectedOrder(null)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        {selectedOrder && (
          <Modal.Body>
            <h5>User: {selectedOrder.userId?.username || "Unknown"}</h5>
            <p>
              <strong>Phone:</strong> {selectedOrder.address.phone}
              <br />
              <strong>Address:</strong> {selectedOrder.address.address},{" "}
              {selectedOrder.address.pincode}
            </p>

            <h6 className="mt-3">Products:</h6>
            <ul>
              {selectedOrder.products.map((p, idx) => (
                <li key={idx}>
                  {p.productId?.productName} - ₹
                  {p.productId?.productOfferPrice} × {p.quantity}
                </li>
              ))}
            </ul>

            <p>
              <strong>Amount:</strong> ₹{selectedOrder.amount}
              <br />
              <strong>Payment:</strong> {selectedOrder.paymentMethod} (
              {selectedOrder.paymentStatus})
              <br />
              <strong>Status:</strong> {selectedOrder.orderStatus}
            </p>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}

export default Orders;
