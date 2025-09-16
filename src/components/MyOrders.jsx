// import React, { useEffect, useState } from "react";
// import { GetMyOrdersAPI } from "../Services/allAPI";
// import { serverUrl } from "../Services/serverUrl";

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const userId = sessionStorage.getItem("userId");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await GetMyOrdersAPI(userId);
//         if (res.data.success) {
//           setOrders(res.data.orders);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h3 className="text-info fw-bold mb-4">My Orders</h3>
//       {orders.length === 0 ? (
//         <h5 className="text-danger">No orders yet</h5>
//       ) : (
//         orders.map(order => (
//           <div key={order._id} className="card mb-3 shadow-sm">
//             <div className="card-body">
//               <h6>Order ID: {order._id}</h6>
//               <p>Status: <span className="fw-bold">{order.status}</span></p>
//               <p>Total Paid: ₹{order.totalAmount}</p>
//               <div>
//                 {order.products.map(item => (
//                   <div key={item.productId._id} className="d-flex align-items-center mb-2">
//                     <img
//                       src={`${serverUrl}/Uploads/${item.productId.productImage}`}
//                       alt={item.productId.productName}
//                       style={{ width: "60px", height: "60px", objectFit: "contain" }}
//                       className="me-2"
//                     />
//                     <div>
//                       <p className="mb-0">{item.productId.productName}</p>
//                       <small>Qty: {item.quantity} | ₹{item.price}</small>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyOrders;


// MyOrders.jsx
import React, { useEffect, useState } from "react";
import { GetMyOrdersApi } from "../Services/allAPI";
import { toast } from "react-toastify";
import { Button, Badge, Modal } from "react-bootstrap";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchMyOrders = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      const reqHeader = { Authorization: `Bearer ${token}` };

      const res = await GetMyOrdersApi(userId, reqHeader);
      if (res.status === 200) {
        setOrders(res.data);
      }
    } catch (err) {
      toast.error("Failed to fetch your orders");
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="fw-bold text-info">My Orders</h3>

      {orders.length === 0 ? (
        <p className="text-danger mt-3">No orders found</p>
      ) : (
        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Products</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Placed On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <ul className="mb-0">
                      {order.products.map((p, i) => (
                        <li key={i}>
                          {p.productId?.productName} × {p.quantity}
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
                      {order.paymentStatus}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg="info">{order.orderStatus}</Badge>
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
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for details */}
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
            <h6 className="fw-bold text-info">Delivery Address</h6>
            <p>
              {selectedOrder.address.name}, {selectedOrder.address.phone} <br />
              {selectedOrder.address.address}, {selectedOrder.address.pincode}
            </p>

            <h6 className="fw-bold text-info mt-3">Products</h6>
            <ul>
              {selectedOrder.products.map((p, i) => (
                <li key={i}>
                  {p.productId?.productName} - ₹{p.productId?.productOfferPrice} ×{" "}
                  {p.quantity}
                </li>
              ))}
            </ul>

            <h6 className="fw-bold text-info mt-3">Summary</h6>
            <p>
              <strong>Total:</strong> ₹{selectedOrder.amount} <br />
              <strong>Payment:</strong> {selectedOrder.paymentMethod} (
              {selectedOrder.paymentStatus}) <br />
              <strong>Status:</strong> {selectedOrder.orderStatus}
            </p>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}

export default MyOrders;
