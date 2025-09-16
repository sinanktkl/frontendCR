// import React, { useEffect, useState } from "react";
// import { Table, Card, Container } from "react-bootstrap";
// import { serverUrl } from "../../Services/serverUrl";

// function Bills() {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     fetch(`${serverUrl}/bills`)
//       .then((res) => res.json())
//       .then((data) => setBills(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (<>
  
//     <a
//                 href="/billing"
//                 className="fw-bold text-info d-inline-flex align-items-center mb-3"
//                 style={{ textDecoration: "none" }}
//             >
//                 <i className="fa-solid fa-arrow-left me-2"></i> Back
//             </a>
//     <Container className="my-4">
//       <Card className="shadow-sm p-3">
//         <h5 className="text-info fw-bold mb-3">All Bills</h5>
//         <Table bordered hover>
//           <thead>
//             <tr className="table-light">
//               <th>Customer</th>
//               <th>Phone</th>
//               <th>Vehicle</th>
//               <th>Date</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bills.map((bill) => (
//               <tr key={bill._id}>
//                 <td>{bill.billingDetails.fullName}</td>
//                 <td>{bill.billingDetails.phone}</td>
//                 <td>{bill.billingDetails.vehicleNumber}</td>
//                 <td>{new Date(bill.billingDetails.date).toLocaleDateString()}</td>
//                 <td>₹{bill.totalAmount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card>
//     </Container>
//     </>
//   );
// }

// export default Bills;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++           ++++++++++++++++++++++++++++++               ++++++++++++++++++++++++++ ++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++           ++++++++++++++++++++++++++++++               ++++++++++++++++++++++++++ ++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++           ++++++++++++++++++++++++++++++               ++++++++++++++++++++++++++ ++++++++++++++++

// import React, { useEffect, useState } from "react";
// import { Table, Card, Container, Spinner } from "react-bootstrap";
// import { GetAllBillsApi } from "../../Services/allAPI";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch bills from API
//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) {
//         setBills(res.data);
//       } else {
//         console.log("Failed to fetch bills", res);
//       }
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   return (
//     <>
//       <a
//         href="/billing"
//         className="fw-bold text-info d-inline-flex align-items-center mb-3"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>

//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : bills.length > 0 ? (
//             <Table bordered hover className="">
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>
//                       {new Date(bill.billingDetails.date).toLocaleDateString()}
//                     </td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">
//                         {bill.userId?.email}
//                       </small>
//                     </td>
//                     <td><button>View</button></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           ) : (
//             <p className="text-muted text-center">No bills found.</p>
//           )}
//         </Card>
//       </Container>
//     </>
//   );
// }

// export default Bills;


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                                      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Card,
//   Container,
//   Spinner,
//   Button,
//   Modal,
//   Form,
// } from "react-bootstrap";
// import { GetAllBillsApi } from "../../Services/allAPI";
// import { serverUrl } from "../../Services/serverUrl";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [serviceCharge, setServiceCharge] = useState(0);

//   // ✅ Fetch bills from API
//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) {
//         setBills(res.data);
//       } else {
//         console.log("Failed to fetch bills", res);
//       }
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   // ✅ Open modal with bill details
//   const handleView = (bill) => {
//     setSelectedBill({
//       ...bill,
//       products: [...bill.products], // copy products
//     });
//     setServiceCharge(bill.serviceCharge || 0);
//     setShowModal(true);
//   };

//   // ✅ Delete product from bill
//   const handleDeleteProduct = (productId) => {
//     setSelectedBill({
//       ...selectedBill,
//       products: selectedBill.products.filter((p) => p._id !== productId),
//     });
//   };

//   // ✅ Add new product manually
//   const handleAddProduct = () => {
//     setSelectedBill({
//       ...selectedBill,
//       products: [
//         ...selectedBill.products,
//         { _id: Date.now(), name: "", price: 0, qty: 1, isNew: true },
//       ],
//     });
//   };

//   // ✅ Update product details (name/qty/price)
//   const handleProductChange = (id, field, value) => {
//     setSelectedBill({
//       ...selectedBill,
//       products: selectedBill.products.map((p) =>
//         p._id === id ? { ...p, [field]: field === "qty" || field === "price" ? Number(value) : value } : p
//       ),
//     });
//   };

//   // ✅ Calculate updated total
//   const calculateTotal = () => {
//     if (!selectedBill) return 0;
//     const productTotal = selectedBill.products.reduce(
//       (sum, p) => sum + p.price * p.qty,
//       0
//     );
//     return productTotal + Number(serviceCharge || 0);
//   };

//   // ✅ Save updated bill (you can add API call here)
//   const handleSaveChanges = async () => {
//     const updatedBill = {
//       ...selectedBill,
//       serviceCharge,
//       totalAmount: calculateTotal(),
//     };

//     console.log("Updated Bill:", updatedBill);
//     // 🔹 TODO: call UpdateBillApi(updatedBill._id, updatedBill)

//     setShowModal(false);
//   };

//   return (
//     <>
//       <a
//         href="/billing"
//         className="fw-bold text-info d-inline-flex align-items-center mb-3"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>

//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : bills.length > 0 ? (
//             <Table bordered hover>
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>
//                       {new Date(bill.billingDetails.date).toLocaleDateString()}
//                     </td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">{bill.userId?.email}</small>
//                     </td>
//                     <td>
//                       <Button
//                         size="sm"
//                         variant="info"
//                         onClick={() => handleView(bill)}
//                       >
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           ) : (
//             <p className="text-muted text-center">No bills found.</p>
//           )}
//         </Card>
//       </Container>

//       {/* ✅ Modal for Bill Details */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Bill Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedBill && (
//             <>
//               <h6 className="text-info">Customer: {selectedBill.billingDetails.fullName}</h6>
//               <Table bordered size="sm" className="mt-3">
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th>Total</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedBill.products.map((p) => (
//                     <tr key={p._id}>
//                       <td>
//                         <Form.Control
//                           type="text"
//                           size="sm"
//                           value={p.name}
//                           onChange={(e) =>
//                             handleProductChange(p._id, "name", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <Form.Control
//                           type="number"
//                           size="sm"
//                           min="1"
//                           value={p.qty}
//                           onChange={(e) =>
//                             handleProductChange(p._id, "qty", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <Form.Control
//                           type="number"
//                           size="sm"
//                           min="0"
//                           value={p.price}
//                           onChange={(e) =>
//                             handleProductChange(p._id, "price", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>₹{p.price * p.qty}</td>
//                       <td>
//                         <Button
//                           variant="danger"
//                           size="sm"
//                           onClick={() => handleDeleteProduct(p._id)}
//                         >
//                           x
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td colSpan="3" className="text-end fw-bold">
//                       Service Charge
//                     </td>
//                     <td colSpan="2">
//                       <Form.Control
//                         type="number"
//                         size="sm"
//                         value={serviceCharge}
//                         onChange={(e) => setServiceCharge(e.target.value)}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan="3" className="text-end fw-bold">
//                       Grand Total
//                     </td>
//                     <td colSpan="2" className="fw-bold text-success">
//                       ₹{calculateTotal()}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <Button variant="secondary" onClick={handleAddProduct}>
//                 + Add Product
//               </Button>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="success" onClick={handleSaveChanges}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bills;


// ===================================================================----------------------------



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Card,
//   Container,
//   Spinner,
//   Modal,
//   Button,
//   Form,
// } from "react-bootstrap";
// import { GetAllBillsApi, UpdateBillApi } from "../../Services/allAPI";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [serviceCharge, setServiceCharge] = useState(0);

//   // ✅ Fetch bills from API
//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) {
//         setBills(res.data);
//       } else {
//         console.log("Failed to fetch bills", res);
//       }
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   // ✅ Open modal
//   const handleView = (bill) => {
//     setSelectedBill({ ...bill });
//     setServiceCharge(bill.serviceCharge || 0);
//     setShowModal(true);
//   };

//   // ✅ Close modal
//   const handleClose = () => {
//     setSelectedBill(null);
//     setServiceCharge(0);
//     setShowModal(false);
//   };

//   // ✅ Delete product
//   const handleDeleteProduct = (index) => {
//     const updatedProducts = selectedBill.products.filter((_, i) => i !== index);
//     setSelectedBill({ ...selectedBill, products: updatedProducts });
//   };

//   // ✅ Add new product
//   const handleAddProduct = () => {
//     const newProduct = {
//       productName: "New Item",
//       productPrice: 0,
//       quantity: 1,
//     };
//     setSelectedBill({
//       ...selectedBill,
//       products: [...selectedBill.products, newProduct],
//     });
//   };

//   // ✅ Update product field
//   const handleChangeProduct = (index, field, value) => {
//     const updatedProducts = [...selectedBill.products];
//     updatedProducts[index][field] =
//       field === "quantity" || field === "productPrice"
//         ? Number(value)
//         : value;
//     setSelectedBill({ ...selectedBill, products: updatedProducts });
//   };

//   // ✅ Calculate total
//   const calculateTotal = () => {
//     const productTotal = selectedBill?.products.reduce(
//       (sum, p) => sum + p.productPrice * p.quantity,
//       0
//     );
//     return productTotal + Number(serviceCharge);
//   };

//   // ✅ Save changes to backend
//   const handleSave = async () => {
//     try {
//       const updatedData = {
//         ...selectedBill,
//         serviceCharge,
//         totalAmount: calculateTotal(),
//       };

//       const res = await UpdateBillApi(selectedBill._id, updatedData, {
//         "Content-Type": "application/json",
//       });

//       if (res.status === 200) {
//         alert("Bill updated successfully!");
//         fetchBills(); // refresh
//         handleClose();
//       } else {
//         alert("Failed to update bill");
//       }
//     } catch (err) {
//       console.error("Error saving bill:", err);
//     }
//   };

//   return (
//     <>
//       <a
//         href="/billing"
//         className="fw-bold text-info d-inline-flex align-items-center mb-3"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>

//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : bills.length > 0 ? (
//             <Table bordered hover>
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>
//                       {new Date(bill.billingDetails.date).toLocaleDateString()}
//                     </td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">{bill.userId?.email}</small>
//                     </td>
//                     <td>
//                       <Button
//                         size="sm"
//                         variant="info"
//                         onClick={() => handleView(bill)}
//                       >
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           ) : (
//             <p className="text-muted text-center">No bills found.</p>
//           )}
//         </Card>
//       </Container>

//       {/* ✅ Modal for viewing & editing bill */}
//       <Modal show={showModal} onHide={handleClose} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Bill</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedBill && (
//             <>
//               <h6 className="fw-bold text-info">Products</h6>
//               <Table bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Qty</th>
//                     <th>Total</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedBill.products.map((p, index) => (
//                     <tr key={index}>
//                       <td>
//                         <Form.Control
//                           type="text"
//                           value={p.productName}
//                           onChange={(e) =>
//                             handleChangeProduct(index, "productName", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <Form.Control
//                           type="number"
//                           value={p.productPrice}
//                           onChange={(e) =>
//                             handleChangeProduct(index, "productPrice", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <Form.Control
//                           type="number"
//                           value={p.quantity}
//                           onChange={(e) =>
//                             handleChangeProduct(index, "quantity", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>₹{p.productPrice * p.quantity}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="danger"
//                           onClick={() => handleDeleteProduct(index)}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>

//               <Button variant="secondary" size="sm" onClick={handleAddProduct}>
//                 + Add Product
//               </Button>

//               <hr />

//               <Form.Group className="mt-3">
//                 <Form.Label>Service Charge (₹)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={serviceCharge}
//                   onChange={(e) => setServiceCharge(Number(e.target.value))}
//                 />
//               </Form.Group>

//               <h5 className="mt-3 text-end">
//                 Total: <span className="text-success">₹{calculateTotal()}</span>
//               </h5>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="success" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bills;


// ===================================================================----------------------------



// import React, { useEffect, useState } from "react";
// import { Table, Card, Container, Spinner, Button, Modal, Form } from "react-bootstrap";
// import { GetAllBillsApi, UpdateBillApi } from "../../Services/allAPI";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [formData, setFormData] = useState({
//     products: [],
//     serviceCharge: 0,
//     totalAmount: 0,
//   });

//   // ✅ Fetch bills
//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) setBills(res.data);
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   // ✅ Open modal with selected bill
//  const handleView = (bill) => {
//   setSelectedBill(bill);

//   const safeProducts = (bill.products || []).map((p) => ({
//     productName: p.productName || "",
//     productPrice: p.productPrice || 0,
//     quantity: p.quantity || 1,
//   }));

//   setFormData({
//     products: safeProducts,
//     serviceCharge: bill.serviceCharge || 0,
//     totalAmount: bill.totalAmount || 0,
//   });

//   setShowModal(true);
// };


//   // ✅ Handle product change
//   const handleProductChange = (index, field, value) => {
//     const updatedProducts = [...formData.products];
//     updatedProducts[index][field] = field === "quantity" || field === "productPrice" ? Number(value) : value;
//     setFormData({ ...formData, products: updatedProducts });
//   };

//   // ✅ Delete product
//   const handleDeleteProduct = (index) => {
//     const updatedProducts = [...formData.products];
//     updatedProducts.splice(index, 1);
//     setFormData({ ...formData, products: updatedProducts });
//   };

//   // ✅ Add new product
//   const handleAddProduct = () => {
//     setFormData({
//       ...formData,
//       products: [...formData.products, { productName: "", productPrice: 0, quantity: 1 }],
//     });
//   };

//   // ✅ Save changes
//   const handleSave = async () => {
//     try {
//       const res = await UpdateBillApi(selectedBill._id, formData, { "Content-Type": "application/json" });
//       if (res.status === 200) {
//         setShowModal(false);
//         fetchBills(); // refresh list
//       }
//     } catch (err) {
//       console.error("Error updating bill:", err);
//     }
//   };


//   const safeProducts = (bill.products || []).map((p) => ({
//   productName: p.productName || p.name || "",
//   productPrice: p.productPrice || p.price || 0,
//   quantity: p.quantity || p.qty || 1,
// }));


//   return (
//     <>
//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : (
//             <Table bordered hover>
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>{new Date(bill.billingDetails.date).toLocaleDateString()}</td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">{bill.userId?.email}</small>
//                     </td>
//                     <td>
//                       <Button size="sm" variant="info" onClick={() => handleView(bill)}>
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card>
//       </Container>

//       {/* ✅ Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Bill</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h6 className="fw-bold">Products</h6>
//           {formData.products.map((product, index) => (
//             <div key={index} className="d-flex gap-2 mb-2">
//               <Form.Control
//   placeholder="Product Name"
//   value={product.productName ?? ""}
//   onChange={(e) => handleProductChange(index, "productName", e.target.value)}
// />
//               <Form.Control
//   type="number"
//   placeholder="Price"
//   value={product.productPrice ?? 0}
//   onChange={(e) => handleProductChange(index, "productPrice", e.target.value)}
// />

// <Form.Control
//   type="number"
//   placeholder="Qty"
//   value={product.quantity ?? 1}
//   onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
// />
//               <Button variant="danger" onClick={() => handleDeleteProduct(index)}>
//                 X
//               </Button>
//             </div>
//           ))}
//           <Button variant="secondary" size="sm" onClick={handleAddProduct}>
//             + Add Product
//           </Button>

//           <hr />
//           <Form.Group>
//             <Form.Label>Service Charge</Form.Label>
//             <Form.Control
//   type="number"
//   value={formData.serviceCharge ?? 0}
//   onChange={(e) => setFormData({ ...formData, serviceCharge: Number(e.target.value) })}
// />

//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bills;
// (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// import React, { useEffect, useState } from "react";
// import { Table, Card, Container, Spinner, Button, Modal, Form } from "react-bootstrap";
// import { GetAllBillsApi, UpdateBillApi } from "../../Services/allAPI";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [formData, setFormData] = useState({
//     products: [],
//     serviceCharge: 0,
//     totalAmount: 0,
//   });

//   // ✅ Fetch bills
//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) setBills(res.data);
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   // ✅ Open modal with selected bill
//   const handleView = (bill) => {
//     setSelectedBill(bill);
//     setFormData({
//       products: bill.products || [],
//       serviceCharge: bill.serviceCharge || 0,
//       totalAmount: bill.totalAmount || 0,
//     });
//     setShowModal(true);
//   };

//   // ✅ Handle product change
//   const handleProductChange = (index, field, value) => {
//     const updatedProducts = [...formData.products];
//     updatedProducts[index][field] = field === "quantity" || field === "productPrice" ? Number(value) : value;
//     setFormData({ ...formData, products: updatedProducts });
//   };

//   // ✅ Delete product
//   const handleDeleteProduct = (index) => {
//     const updatedProducts = [...formData.products];
//     updatedProducts.splice(index, 1);
//     setFormData({ ...formData, products: updatedProducts });
//   };

//   // ✅ Add new product
//   const handleAddProduct = () => {
//     setFormData({
//       ...formData,
//       products: [...formData.products, { productName: "", productPrice: 0, quantity: 1 }],
//     });
//   };

//   // ✅ Save changes
//   const handleSave = async () => {
//     try {
//       const res = await UpdateBillApi(selectedBill._id, formData, { "Content-Type": "application/json" });
//       if (res.status === 200) {
//         setShowModal(false);
//         fetchBills(); // refresh list
//       }
//     } catch (err) {
//       console.error("Error updating bill:", err);
//     }
//   };

//   return (
//     <>
//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : (
//             <Table bordered hover>
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>{new Date(bill.billingDetails.date).toLocaleDateString()}</td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">{bill.userId?.email}</small>
//                     </td>
//                     <td>
//                       <Button size="sm" variant="info" onClick={() => handleView(bill)}>
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card>
//       </Container>

//       {/* ✅ Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Bill</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h6 className="fw-bold">Products</h6>
//           {formData.products.map((product, index) => (
//             <div key={index} className="d-flex gap-2 mb-2">
//               <Form.Control
//                 placeholder="Product Name"
//                 value={product.productName}
//                 onChange={(e) => handleProductChange(index, "productName", e.target.value)}
//               />
//               <Form.Control
//                 type="number"
//                 placeholder="Price"
//                 value={product.productPrice}
//                 onChange={(e) => handleProductChange(index, "productPrice", e.target.value)}
//               />
//               <Form.Control
//                 type="number"
//                 placeholder="Qty"
//                 value={product.quantity}
//                 onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
//               />
//               <Button variant="danger" onClick={() => handleDeleteProduct(index)}>
//                 X
//               </Button>
//             </div>
//           ))}
//           <Button variant="secondary" size="sm" onClick={handleAddProduct}>
//             + Add Product
//           </Button>

//           <hr />
//           <Form.Group>
//             <Form.Label>Service Charge</Form.Label>
//             <Form.Control
//               type="number"
//               value={formData.serviceCharge}
//               onChange={(e) => setFormData({ ...formData, serviceCharge: Number(e.target.value) })}
//             />
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bills;


// (((((((((((((((((((((((((((((((((((((((((((((((((           ITS OK               )))))))))))))))))))))))))))))))))))))))))))))))))
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Card,
//   Container,
//   Spinner,
//   Button,
//   Modal,
//   Form,
// } from "react-bootstrap";
// import { GetAllBillsApi, UpdateBillApi } from "../../Services/allAPI";

// function Bills() {
//   const [bills, setBills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);

//   // Modal form uses this normalized shape:
//   // products: [{ productName, productPrice, quantity }]
//   const [formData, setFormData] = useState({
//     products: [],
//     serviceCharge: 0,
//     totalAmount: 0,
//   });

//   const fetchBills = async () => {
//     try {
//       const res = await GetAllBillsApi({ "Content-Type": "application/json" });
//       if (res.status === 200) setBills(res.data);
//     } catch (err) {
//       console.error("Error fetching bills:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   // Normalize DB product shape -> modal shape
//   const normalizeProductsForModal = (products = []) =>
//     products.map((p) => ({
//       productName: p.productName ?? p.name ?? "",
//       productPrice: p.productPrice ?? p.price ?? 0,
//       quantity: p.quantity ?? p.qty ?? 1,
//       // keep original productId if exists (so you can map back)
//       productId: p.productId ?? p._id ?? null,
//     }));

//   // Open modal and load normalized data
//   const handleView = (bill) => {
//     setSelectedBill(bill);
//     setFormData({
//       products: normalizeProductsForModal(bill.products),
//       serviceCharge: bill.serviceCharge ?? 0,
//       totalAmount: bill.totalAmount ?? 0,
//     });
//     setShowModal(true);
//   };

//   // Controlled updates
//   const handleProductChange = (index, field, value) => {
//     const updated = [...formData.products];
//     if (field === "productPrice" || field === "quantity") {
//       updated[index][field] = Number(value || 0);
//     } else {
//       updated[index][field] = value;
//     }
//     setFormData((s) => ({ ...s, products: updated }));
//   };

//   const handleDeleteProduct = (index) => {
//     const updated = [...formData.products];
//     updated.splice(index, 1);
//     setFormData((s) => ({ ...s, products: updated }));
//   };

//   const handleAddProduct = () => {
//     setFormData((s) => ({
//       ...s,
//       products: [...s.products, { productName: "", productPrice: 0, quantity: 1 }],
//     }));
//   };

//   // Live total (modal)
//   const calculateTotal = () => {
//     const prodTotal = formData.products.reduce(
//       (sum, p) => sum + (Number(p.productPrice) || 0) * (Number(p.quantity) || 0),
//       0
//     );
//     return prodTotal + Number(formData.serviceCharge || 0);
//   };

//   // Save: convert modal shape -> DB shape (name/price/qty)
//   const handleSave = async () => {
//     if (!selectedBill) return;

//     const dbProducts = formData.products.map((p) => ({
//       // if original productId exists, keep it as productId
//       productId: p.productId || undefined,
//       name: p.productName || "",
//       price: Number(p.productPrice || 0),
//       qty: Number(p.quantity || 1),
//     }));

//     const payload = {
//       billingDetails: selectedBill.billingDetails, // keep billing details unchanged
//       products: dbProducts,
//       serviceCharge: Number(formData.serviceCharge || 0),
//       totalAmount: calculateTotal(),
//       userId: selectedBill.userId?._id || selectedBill.userId || null,
//     };

//     try {
//       const res = await UpdateBillApi(selectedBill._id, payload, {
//         "Content-Type": "application/json",
//       });
//       if (res.status === 200) {
//         alert("Bill updated");
//         setShowModal(false);
//         fetchBills();
//       } else {
//         console.error("Update failed", res);
//         alert("Update failed");
//       }
//     } catch (err) {
//       console.error("Error updating bill:", err);
//       alert("Error updating bill (see console)");
//     }
//   };

//   return (
//     <>
//       <Container className="my-4">
//         <Card className="shadow-sm p-3">
//           <h5 className="text-info fw-bold mb-3">All Bills</h5>

//           {loading ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="info" />
//             </div>
//           ) : (
//             <Table bordered hover>
//               <thead>
//                 <tr className="table-info">
//                   <th>Customer</th>
//                   <th>Phone</th>
//                   <th>Vehicle</th>
//                   <th>Date</th>
//                   <th>Total</th>
//                   <th>Billed By</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bills.map((bill) => (
//                   <tr key={bill._id}>
//                     <td>{bill.billingDetails.fullName}</td>
//                     <td>{bill.billingDetails.phone}</td>
//                     <td>{bill.billingDetails.vehicleNumber}</td>
//                     <td>{new Date(bill.billingDetails.date).toLocaleDateString()}</td>
//                     <td>₹{bill.totalAmount}</td>
//                     <td>
//                       {bill.userId?.username || "Unknown"} <br />
//                       <small className="text-muted">{bill.userId?.email}</small>
//                     </td>
//                     <td>
//                       <Button size="sm" variant="info" onClick={() => handleView(bill)}>
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card>
//       </Container>

//       {/* Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Bill</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h6 className="fw-bold">Products</h6>

//           {formData.products.length === 0 && <p className="text-muted">No products</p>}

//           {formData.products.map((product, index) => (
//             <div key={index} className="d-flex gap-2 mb-2 align-items-center">
//               <Form.Control
//                 placeholder="Product Name"
//                 value={product.productName ?? ""}
//                 onChange={(e) => handleProductChange(index, "productName", e.target.value)}
//               />
//               <Form.Control
//                 type="number"
//                 placeholder="Price"
//                 value={product.productPrice ?? 0}
//                 onChange={(e) => handleProductChange(index, "productPrice", e.target.value)}
//               />
//               <Form.Control
//                 type="number"
//                 placeholder="Qty"
//                 value={product.quantity ?? 1}
//                 onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
//               />
//               <div style={{ minWidth: 80 }}>₹{(product.productPrice || 0) * (product.quantity || 0)}</div>
//               <Button variant="danger" onClick={() => handleDeleteProduct(index)}>
//                 X
//               </Button>
//             </div>
//           ))}

//           <Button variant="secondary" size="sm" onClick={handleAddProduct}>
//             + Add Product
//           </Button>

//           <hr />

//           <Form.Group>
//             <Form.Label>Service Charge</Form.Label>
//             <Form.Control
//               type="number"
//               value={formData.serviceCharge ?? 0}
//               onChange={(e) => setFormData((s) => ({ ...s, serviceCharge: Number(e.target.value || 0) }))}
//             />
//           </Form.Group>

//           <div className="text-end mt-3">
//             <h5>
//               Grand Total: <span className="text-success">₹{calculateTotal()}</span>
//             </h5>
//           </div>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Bills;








// +++++++++++++++++++++++++++++                   ++++++++++++++++++++++++++++++                         +++++++++++++++++++++++++++++++


import React, { useEffect, useState, useRef } from "react";
import {
  Table,
  Card,
  Container,
  Spinner,
  Button,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { GetAllBillsApi, UpdateBillApi } from "../../Services/allAPI";

function Bills() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  // Normalized modal form state
  const [formData, setFormData] = useState({
    products: [],
    serviceCharge: 0,
    totalAmount: 0,
  });

  // Delete confirmation & undo states
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndexPending, setDeleteIndexPending] = useState(null);
  const [lastDeleted, setLastDeleted] = useState(null); // { item, index, timeoutId }
  const undoTimeoutRef = useRef(null);

  // Fetch bills
  const fetchBills = async () => {
    try {
      const res = await GetAllBillsApi({ "Content-Type": "application/json" });
      if (res.status === 200) setBills(res.data);
    } catch (err) {
      console.error("Error fetching bills:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();
    // cleanup on unmount
    return () => {
      if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
    };
  }, []);

  // Normalize DB product shape -> modal shape
  const normalizeProductsForModal = (products = []) =>
    products.map((p) => ({
      productName: p.productName ?? p.name ?? "",
      productPrice: p.productPrice ?? p.price ?? 0,
      quantity: p.quantity ?? p.qty ?? 1,
      productId: p.productId ?? p._id ?? null,
    }));

  // Open modal and populate formData
  const handleView = (bill) => {
    setSelectedBill(bill);
    setFormData({
      products: normalizeProductsForModal(bill.products || []),
      serviceCharge: bill.serviceCharge ?? 0,
      totalAmount: bill.totalAmount ?? 0,
    });
    // reset undo/delete UI
    setLastDeleted(null);
    setDeleteIndexPending(null);
    setShowDeleteConfirm(false);
    setShowModal(true);
  };

  // Close modal & clear pending undo
  const handleCloseModal = () => {
    setShowModal(false);
    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
      undoTimeoutRef.current = null;
    }
    setLastDeleted(null);
  };

  // Product editing helpers
  const handleProductChange = (index, field, value) => {
    const updated = [...formData.products];
    if (field === "productPrice" || field === "quantity") {
      updated[index][field] = Number(value || 0);
    } else {
      updated[index][field] = value;
    }
    setFormData((s) => ({ ...s, products: updated }));
  };

  const requestDeleteProduct = (index) => {
    setDeleteIndexPending(index);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteProduct = () => {
    if (deleteIndexPending == null) return;
    const updated = [...formData.products];
    const [removed] = updated.splice(deleteIndexPending, 1);
    setFormData((s) => ({ ...s, products: updated }));

    // setup undo (8 seconds)
    if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
    const timeoutId = setTimeout(() => {
      setLastDeleted(null);
      undoTimeoutRef.current = null;
    }, 8000);

    undoTimeoutRef.current = timeoutId;
    setLastDeleted({ item: removed, index: deleteIndexPending, timeoutId });

    // clear confirmation UI
    setDeleteIndexPending(null);
    setShowDeleteConfirm(false);
  };

  const handleUndoDelete = () => {
    if (!lastDeleted) return;
    const updated = [...formData.products];
    updated.splice(lastDeleted.index, 0, lastDeleted.item);
    setFormData((s) => ({ ...s, products: updated }));

    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
      undoTimeoutRef.current = null;
    }
    setLastDeleted(null);
  };

  const handleAddProduct = () => {
    setFormData((s) => ({
      ...s,
      products: [...s.products, { productName: "", productPrice: 0, quantity: 1 }],
    }));
  };

  // Live total calc
  const calculateTotal = () => {
    const prodTotal = (formData.products || []).reduce(
      (sum, p) => sum + (Number(p.productPrice) || 0) * (Number(p.quantity) || 0),
      0
    );
    return prodTotal + Number(formData.serviceCharge || 0);
  };

  // Save changes -> convert to DB shape and call UpdateBillApi
  const handleSave = async () => {
    if (!selectedBill) return;

    const dbProducts = (formData.products || []).map((p) => ({
      productId: p.productId || undefined,
      name: p.productName || "",
      price: Number(p.productPrice || 0),
      qty: Number(p.quantity || 1),
    }));

    const payload = {
      billingDetails: selectedBill.billingDetails,
      products: dbProducts,
      serviceCharge: Number(formData.serviceCharge || 0),
      totalAmount: calculateTotal(),
      userId: selectedBill.userId?._id || selectedBill.userId || null,
    };

    try {
      const res = await UpdateBillApi(selectedBill._id, payload, {
        "Content-Type": "application/json",
      });
      if (res.status === 200) {
        alert("Bill updated");
        setShowModal(false);
        fetchBills();
      } else {
        console.error("Update failed", res);
        alert("Update failed");
      }
    } catch (err) {
      console.error("Error updating bill:", err);
      alert("Error updating bill (see console)");
    }
  };

  // Print / Download: generate printable HTML and open new window
  const handlePrint = () => {
    if (!selectedBill) return;
    const billHtml = generatePrintableHTML(selectedBill, formData, calculateTotal());
    const w = window.open("", "_blank", "width=900,height=700");
    if (!w) {
      alert("Popup blocked. Allow popups to enable printing.");
      return;
    }
    w.document.open();
    w.document.write(billHtml);
    w.document.close();
    // wait briefly for resources to render
    setTimeout(() => {
      w.focus();
      w.print();
    }, 500);
  };

  const generatePrintableHTML = (bill, form, total) => {
    const productsRows = (form.products || [])
      .map(
        (p, idx) => `
      <tr>
        <td style="padding:8px;border:1px solid #ddd">${idx + 1}</td>
        <td style="padding:8px;border:1px solid #ddd">${escapeHtml(p.productName)}</td>
        <td style="padding:8px;border:1px solid #ddd">${p.quantity}</td>
        <td style="padding:8px;border:1px solid #ddd">₹${Number(p.productPrice || 0)}</td>
        <td style="padding:8px;border:1px solid #ddd">₹${(Number(p.productPrice || 0) * Number(p.quantity || 0)).toFixed(
          2
        )}</td>
      </tr>`
      )
      .join("");

    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Bill - ${escapeHtml(bill.billingDetails.fullName || "")}</title>
      </head>
      <body style="font-family: Arial, Helvetica, sans-serif; padding:20px;">
        <h2>Invoice</h2>
        <div>
          <strong>Customer:</strong> ${escapeHtml(bill.billingDetails.fullName || "")}<br/>
          <strong>Phone:</strong> ${escapeHtml(bill.billingDetails.phone || "")}<br/>
          <strong>Vehicle:</strong> ${escapeHtml(billingField(bill, "vehicleName"))} / ${escapeHtml(
      billingField(bill, "vehicleNumber")
    )}<br/>
          <strong>Date:</strong> ${escapeHtml(billingField(bill, "date"))}
        </div>

        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <thead>
            <tr>
              <th style="padding:8px;border:1px solid #ddd">#</th>
              <th style="padding:8px;border:1px solid #ddd">Product</th>
              <th style="padding:8px;border:1px solid #ddd">Qty</th>
              <th style="padding:8px;border:1px solid #ddd">Price</th>
              <th style="padding:8px;border:1px solid #ddd">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productsRows}
            <tr>
              <td colspan="4" style="padding:8px;border:1px solid #ddd;text-align:right">Service Charge</td>
              <td style="padding:8px;border:1px solid #ddd">₹${Number(form.serviceCharge || 0).toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="4" style="padding:8px;border:1px solid #ddd;text-align:right"><strong>Grand Total</strong></td>
              <td style="padding:8px;border:1px solid #ddd"><strong>₹${Number(total || 0).toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top:20px;font-size:12px;color:#666">
          Billed by: ${escapeHtml(bill.userId?.username || "Unknown")}
        </div>
      </body>
    </html>`;

    return html;
  };

  const escapeHtml = (str) =>
    String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/>/g, "&gt;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");

  const billingField = (bill, field) => (bill.billingDetails ? bill.billingDetails[field] ?? "" : "");

  return (
    <>
    <a
        href="/billing"
        className="fw-bold text-info d-inline-flex align-items-center mb-3"
        style={{ textDecoration: "none" }}
      >
        <i className="fa-solid fa-arrow-left me-2"></i> Back
      </a>
      
      <Container className="my-4">
        <Card className="shadow-sm p-3">
          <h5 className="text-info fw-bold mb-3">All Bills</h5>

          {loading ? (
            <div className="text-center py-4">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <Table bordered hover responsive>
              <thead>
                <tr className="table-info">
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Vehicle</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Billed By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill._id}>
                    <td>{bill.billingDetails?.fullName}</td>
                    <td>{bill.billingDetails?.phone}</td>
                    <td>{bill.billingDetails?.vehicleNumber}</td>
                    <td>{new Date(bill.billingDetails?.date || Date.now()).toLocaleDateString()}</td>
                    <td>₹{Number(bill.totalAmount || 0)}</td>
                    <td>
                      {bill.userId?.username || "Unknown"} <br />
                      <small className="text-muted">{bill.userId?.email}</small>
                    </td>
                    <td>
                      <Button size="sm" variant="info" onClick={() => handleView(bill)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
      </Container>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Bill</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="mb-2">
            <Col>
              <strong>Customer:</strong> {selectedBill?.billingDetails?.fullName}
            </Col>
            <Col className="text-end">
              <strong>Billed By:</strong> {selectedBill?.userId?.username || "Unknown"}
            </Col>
          </Row>

          <h6 className="fw-bold">Products</h6>

          {formData.products.length === 0 && <p className="text-muted">No products</p>}

          {formData.products.map((product, index) => (
            <div key={index} className="d-flex gap-2 mb-2 align-items-center">
              <Form.Control
                placeholder="Product Name"
                value={product.productName ?? ""}
                onChange={(e) => handleProductChange(index, "productName", e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Price"
                value={product.productPrice ?? 0}
                onChange={(e) => handleProductChange(index, "productPrice", e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Qty"
                value={product.quantity ?? 1}
                onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
              />
              <div style={{ minWidth: 80 }}>₹{((product.productPrice || 0) * (product.quantity || 0)).toFixed(2)}</div>
              <Button variant="danger" onClick={() => requestDeleteProduct(index)}>
                Delete
              </Button>
            </div>
          ))}

          <Button variant="secondary" size="sm" onClick={handleAddProduct}>
            + Add Product
          </Button>

          <hr />

          <Form.Group>
            <Form.Label>Service Charge (₹)</Form.Label>
            <Form.Control
              type="number"
              value={formData.serviceCharge ?? 0}
              onChange={(e) => setFormData((s) => ({ ...s, serviceCharge: Number(e.target.value || 0) }))}
            />
          </Form.Group>

          <div className="text-end mt-3">
            <h5>
              Grand Total: <span className="text-success">₹{calculateTotal().toFixed(2)}</span>
            </h5>
          </div>

          {/* Undo UI */}
          {lastDeleted && (
            <div className="mt-3">
              <small className="text-muted">
                Product "{lastDeleted.item.productName || lastDeleted.item.name}" deleted.
              </small>{" "}
              <Button size="sm" variant="link" onClick={handleUndoDelete}>
                Undo
              </Button>
              <small className="text-muted"> (available for 8s)</small>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <div className="me-auto">
            <Button variant="outline-primary" size="sm" onClick={handlePrint}>
              Print / Save PDF
            </Button>
          </div>

          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product from the bill?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bills;
