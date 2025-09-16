// import React from 'react'

// function Wishlist() {
//   return (
//     <>
//       <div className="container my-5 vh-100">
//         <h3 className="mb-4 fw-bold text-info">Wishlist ✏</h3>

//         <div className="table-responsive">
//           <table className="table align-middle text-center mt-5">
//             <thead>
//               <tr className="text-info">
//                 <th>#</th>
//                 <th>Product</th>
//                 <th>Unit Price</th>
//                 <th>Stock Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>

//                 <td>
//                   <div>

//                     <img
//                       src="https://i0.wp.com/automarvels.com/wp-content/uploads/2020/03/aL05-123-500x500-1.jpg"
//                       alt="Motule Oil"
//                       style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                       className="mb-2"
//                     />
//                     <p className="fw-bold">MOTUL OIL</p>
//                   </div>
//                 </td>
//                 <td>
//                   <del className="text-muted me-2">€100.00</del>
//                   <span className="text-dark fw-bold">€70.00</span>
//                 </td>
//                 <td>In Stock</td>
//                 <td>
//                 <button className="btn btn-info btn-sm me-2"> <i className="fa-solid fa-cart-shopping"></i></button>
//                   <button className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Wishlist



import React, { useEffect, useState } from "react";
import { GetWishlistApi, EmptyWishlistApi, DeleteWishlistApi, MoveToCartApi } from "../Services/allAPI";
import { toast } from "react-toastify";
import { serverUrl } from "../Services/serverUrl";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Fetch Wishlist
  const fetchWishlist = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const reqHeader = { Authorization: `Bearer ${token}` };

    const res = await GetWishlistApi(userId, reqHeader);
    if (res.status === 200) {
      setWishlist(res.data.products || []);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // Remove single product
  const handleRemoveFromWishlist = async (productId) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqBody = {
      productId
    }

    const result = await DeleteWishlistApi(userId, reqBody, reqHeader);
    if (result.status === 200) {
      console.log(result);

      toast.success("Removed from wishlist");
      setWishlist(result.data.wishlist.products);
    }
  };

  // Empty wishlist
  const handleEmptyWishlist = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const reqHeader = { Authorization: `Bearer ${token}` };

    const res = await EmptyWishlistApi(userId, reqHeader);
    if (res.status === 200) {
      toast.success("Wishlist emptied");
      setWishlist([]);
    }
  };


  //movetocart
  const handleMoveToCart = async (productId) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqBody = {
      productId
    }

    const res = await MoveToCartApi(userId, reqBody, reqHeader);

    if (res.status === 200) {
      toast.success("Moved to cart");
      setWishlist(res.data.wishlist.products); // update wishlist UI
      fetchWishlist();
    } else {
      toast.error("Failed to move product");
    }
  };

  return (
    <div className="container my-5 vh-100">
      <h3 className="mb-4 fw-bold text-info">
        Wishlist ✏
        <button className="btn btn-outline-danger btn-sm float-end" onClick={handleEmptyWishlist}>
          Empty Wishlist
        </button>
      </h3>

      <div className="table-responsive" style={{ overflowY: "auto" }}>
        <table className="table align-middle text-center mt-5">
          <thead>
            <tr className="text-info">
              <th>#</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.length > 0 ? (
              wishlist.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="text-center">
                      <img
                        src={`${serverUrl}/Uploads/${item.productId.productImage}`}
                        alt={item.productId.productName}
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        className="mb-2"
                      />
                      {/* <p className="fw-bold"  style={{maxWidth:"150px",overflow:"hidden"}} >{item.productId.productName}</p> */}
                      <p className="fw-bold" >{item.productId.productName}</p>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark fw-bold">₹{item.productId.productPrice}</span>
                  </td>
                  <td>In Stock</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2" onClick={() => handleMoveToCart(item.productId._id)}>
                      <i className="fa-solid fa-cart-shopping" ></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromWishlist(item.productId._id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-muted">No products in wishlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
