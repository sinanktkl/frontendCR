import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";



//registerApi

export const RegisterAPI = async (user) => {
    return await commonAPI("POST", `${serverUrl}/register`, user, "")
}

//loginApi

export const LoginAPI = async (user) => {
    return await commonAPI("POST", `${serverUrl}/login`, user, "")
}

//AddProductApi

export const AddProductAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-product`, reqBody, reqHeader)
}

//getHomeProductApi

export const GetHomeProductAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/home-product`, "", "")
}

//toggleHomeProductApi

export const ToggleHomeProductAPI = async (productid, reqHeader) => {
    return await commonAPI("PATCH", `${serverUrl}/toggle-home/${productid}`, {}, reqHeader)
}

//getAllProductApi

// export const GetAllProductAPI = async(search = "", page = 1,limit = 10,category="")=>{

export const GetAllProductAPI = async (search = "", page = "", limit = "", category = "") => {
    return await commonAPI("GET", `${serverUrl}/all-product?search=${search}&page=${page}&limit=${limit}&category=${category}`, "", "")
}

export const GetAllProductforBillingAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/all-product-billing`, "", "")
}

// export const GetAllProductAPI = async (search = "", page = 1, limit = 10, category = "") => {
//   const params = {};
//   if (search) params.search = search;
//   if (page) params.page = page;
//   if (limit) params.limit = limit;
//   if (category) params.category = category;
//   return await commonAPI("GET", `${serverUrl}/all-product`, {}, {}, params);
// };


//EditProductApi

export const EditProductAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverUrl}/edit-product/${id}`, reqBody, reqHeader)
}

//DeleteProductApi

export const DeleteProductAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-product/${id}`, {}, reqHeader)
}

//AddTestimonyApi

export const AddTestimonyAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-testimony`, reqBody, reqHeader)
}

//GetTestimonyApi

export const GetTestimonyAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/get-all-testimony`, "", "")
}

//GetApprovedTestimonyApi

export const GetApprovedTestimonyAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/get-approved-testimony`, "", "")
}

//DeleteTestimonyApi

export const DeleteTestimonyAPI = async (id) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-testimony/${id}`, {}, "")
}

//ConfirmTestimonyApi

export const ApproveTestimonyAPI = async (id) => {
    return await commonAPI("PATCH", `${serverUrl}/approving-testimony/${id}`, {}, "")
}

//AddFreeQuoteApi

export const AddFreeQuoteApi = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-freequote`, reqBody, reqHeader)
}

//GetFreeQuoteApi

export const GetFreeQuotesApi = async (reqHeader) => {
    return await commonAPI("GET", `${serverUrl}/get-freequote`, "", reqHeader)
}

//UpdateFreeQuoteApi

export const UpdateFreeQuoteApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("PATCH", `${serverUrl}/patch-freequote/${id}`, reqBody, reqHeader)
}

//DeleteFreeQuoteApi

export const DeleteFreeQuoteApi = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-freequote/${id}`, {}, reqHeader)
}

// Send Custom Email
export const SendCustomEmailApi = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/send-email`, reqBody, reqHeader);
};

//AddBookServiceApi

export const AddBookServiceApi = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-bookservice`, reqBody, reqHeader)
}

//GetBookServiceApi
export const GetAllBookServiceApi = async (reqHeader) => {
    return await commonAPI("GET", `${serverUrl}/get-bookservices`, "", reqHeader);
};

//UpdateBookServiceStatusApi
export const UpdateBookServiceStatusApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverUrl}/update-bookservice-status/${id}`, reqBody, reqHeader);
};

//AddBannerApi

export const AddBannerApi = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-banner`, reqBody, reqHeader)
}

//GetBannerApi
export const GetBannerApi = async (category, reqHeader) => {
    return await commonAPI("GET", `${serverUrl}/get-banner/${category}`, {}, reqHeader);
};

//DeleteBannerApi
export const DeleteBannerApi = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-banner/${id}`, {}, reqHeader);
};


//AddWishlistApi
export const AddWishlistApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-wishlist/${id}`, reqBody, reqHeader)
}

//GetWishlistApi
export const GetWishlistApi = async (id, reqHeader) => {
    return await commonAPI("GET", `${serverUrl}/get-wishlist/${id}`, {}, reqHeader);
};

//DeleteWishlistApi
export const DeleteWishlistApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-wishlist/${id}`, reqBody, reqHeader);
};

//EmptyWishlistApi
export const EmptyWishlistApi = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/empty-wishlist/${id}/empty`, {}, reqHeader);
};

//MoveToCartApi
export const MoveToCartApi = async (id,reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/move-to-cart/${id}`, reqBody, reqHeader);
};


// =====================================================                   ============================================


//AddCartApi
export const AddCartApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverUrl}/add-cart/${id}`, reqBody, reqHeader)
}

//GetCartApi
export const GetCartApi = async (id, reqHeader) => {
    return await commonAPI("GET", `${serverUrl}/get-cart/${id}`, {}, reqHeader);
};

//DeleteCartApi
export const DeleteCartApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/delete-cart/${id}`, reqBody, reqHeader);
};

//UpdateCartApi
export const UpdateCartApi = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverUrl}/update-cart/${id}`, reqBody, reqHeader);
};

//EmptyCartApi
export const EmptyCartApi = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverUrl}/empty-cart/${id}/empty`, {}, reqHeader);
};




// ===================================================== Orders ============================================

export const CreateOrderApi = async (id, reqBody, reqHeader) =>
  await commonAPI("POST", `${serverUrl}/create-order/${id}`, reqBody, reqHeader);

export const CreateRazorpayOrderApi = async (id,reqBody, reqHeader) =>
  await commonAPI("POST", `${serverUrl}/create-razorpay-order/${id}`, reqBody, reqHeader);

export const VerifyPaymentApi = async (id,reqBody, reqHeader) =>
  await commonAPI("POST", `${serverUrl}/verify-payment/${id}`, reqBody, reqHeader);

export const GetAllOrdersApi = async (reqHeader) =>
  await commonAPI("GET", `${serverUrl}/get-all-orders`, {}, reqHeader);

export const GetMyOrdersApi = async (id, reqHeader) =>
  await commonAPI("GET", `${serverUrl}/get-my-orders/${id}`, {}, reqHeader);

export const UpdateOrderStatusApi = async (id, reqBody, reqHeader) =>
  await commonAPI("PUT", `${serverUrl}/update-order-status/${id}`, reqBody, reqHeader);




// ++++++++++++++++++++++++++++++++++++

// AddBillApi
export const AddBillApi = async (id, reqBody, reqHeader) => {
  return await commonAPI("POST", `${serverUrl}/add-bill/${id}`, reqBody, reqHeader);
};

// GetAllBillsApi (optional: for admin view)
export const GetAllBillsApi = async (reqHeader) => {
  return await commonAPI("GET", `${serverUrl}/get-all-bills`, {}, reqHeader);
};


// Update Bill API
export const UpdateBillApi = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${serverUrl}/update-bill/${id}`, reqBody, reqHeader);
};

// GetBillsApi (all bills of a user)
// export const GetBillsApi = async (id, reqHeader) => {
//   return await commonAPI("GET", `${serverUrl}/get-bill/${id}`, {}, reqHeader);
// };



// $$$$$$$$$$$$$$$$$$$$$$$$$$$             FEED                   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// // Add Post API
// export const AddPostApi = async (id, reqBody, reqHeader) => {
//   return await commonAPI("POST", `${serverUrl}/add-post/${id}`, reqBody, reqHeader);
// };

// // Get All Posts API
// export const GetAllPostsApi = async (reqHeader) => {
//   return await commonAPI("GET", `${serverUrl}/get-posts`, {}, reqHeader);
// };

// // Like / Unlike Post API
// export const LikePostApi = async (id, reqBody, reqHeader) => {
//   return await commonAPI("PUT", `${serverUrl}/like-post/${id}`, reqBody, reqHeader);
// };


// 🔹 Add Post API
export const AddPostApi = async (id, reqBody, reqHeader) => {
  return await commonAPI("POST", `${serverUrl}/add-post/${id}`, reqBody, reqHeader);
};

// 🔹 Get All Posts API
export const GetAllPostsApi = async (reqHeader) => {
  return await commonAPI("GET", `${serverUrl}/get-posts`, {}, reqHeader);
};

// 🔹 Like / Unlike Post API
export const LikePostApi = async (id, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${serverUrl}/like-post/${id}`, reqBody, reqHeader);
};
















// ===================================================== Orders ============================================
// // Create Order
// export const CreateOrderApi = async (id, reqBody, reqHeader) => {
//     return await commonAPI("POST", `${serverUrl}/create-order/${id}`, reqBody, reqHeader);
// };

// // Verify Razorpay Payment
// export const VerifyPaymentApi = async (reqBody, reqHeader) => {
//     return await commonAPI("POST", `${serverUrl}/verify-payment`, reqBody, reqHeader);
// };

// // Get All Orders (Admin Only)
// export const GetAllOrdersApi = async (reqHeader) => {
//     return await commonAPI("GET", `${serverUrl}/get-all-orders`, {}, reqHeader);
// };

// // export const GetAllOrdersApi = async (reqHeader) => {
// //   return await commonAPI("GET", `${serverUrl}/get-all-orders`, "", reqHeader);
// // };


// // Get My Orders (User Specific)
// // export const GetMyOrdersApi = async (id, reqHeader) => {
// //     return await commonAPI("GET", `${serverUrl}/get-my-orders/${id}`, {}, reqHeader);
// // };

// // Update Order Status (Admin Only)
// export const UpdateOrderStatusApi = async (id, reqBody, reqHeader) => {
//     return await commonAPI("PUT", `${serverUrl}/update-order-status/${id}`, reqBody, reqHeader);
// };

// // Get my orders (user)
// export const GetMyOrdersApi = async (id, reqHeader) => {
//   return await commonAPI("GET", `${serverUrl}/get-my-orders/${id}`, "", reqHeader);
// };














// // Create order
// export const CreateOrderApi = async (id,reqBody, reqHeader) => {
//   return await commonAPI("POST", `${serverUrl}/create-order/${id}`, reqBody, reqHeader);
// };
// // Verify Razorpay
// export const VerifyPaymentApi = async (reqBody, reqHeader) => {
//   return await commonAPI("POST", `${serverUrl}/verify-payment`, reqBody, reqHeader);
// };
// // Get all orders (Admin)
// export const GetAllOrdersApi = async ( reqHeader) => {
//   return await commonAPI("GET", `${serverUrl}/get-all-order`, {}, reqHeader);
// };
// Update order status (Admin)
// export const UpdateOrderStatusApi = async (id, reqBody, reqHeader) => {
//   return await commonAPI("PUT", `${serverUrl}/update-order-status/${id}`, reqBody, reqHeader);
// };





// // Create order

//   await commonAPI("POST", `${serverUrl}/api/order`, reqBody, {Authorization: `Bearer ${token}`,});

// // Verify Razorpay

//   await commonAPI("POST", `${serverUrl}/api/order/verify`, reqBody, {
//     Authorization: `Bearer ${token}`,
//   });

// // Get all orders (Admin)

//   await commonAPI("GET", `${serverUrl}/api/order`, {}, {
//     Authorization: `Bearer ${token}`,
//   });

// // Update order status (Admin)

//   await commonAPI("PUT", `${serverUrl}/api/order/${orderId}/status`, reqBody, {
//     Authorization: `Bearer ${token}`,
//   });
































//   //CreateOrderApi
//   export const CreateOrderApi = async (reqBody) => {
//     return await commonAPI("POST", `${serverUrl}/create-order`, reqBody, "");
//   };
  
//   //VerifyPaymentApi
//   export const VerifyPaymentApi = async (reqBody) => {
//     return await commonAPI("POST", `${serverUrl}/verify-payment`, reqBody, "");
//   };
  
//   // Get all orders
//   export const GetAllOrdersApi = async () => {
//   return await commonAPI("GET", `${serverUrl}/orders`, {}, "");
//   };
  
  // Update order (paymentStatus / orderStatus)
//   export const UpdateOrderApi = async (id, reqbody) => {
//   return await commonAPI("PUT", `${serverUrl}/orders/${id}`, reqbody, "");
//   };
  
  
//   // Update order status
//   export const UpdateOrderStatusApi = async (orderId, reqBody) => {
//   return await commonAPI("PUT", `${serverUrl}/orders/${orderId}/update`, reqBody, "");
//   };


















// //GetMyOrdersAPI
// export const GetMyOrdersAPI = async (reqBody) => {
//   return await commonAPI("GET", `${serverUrl}/my-orders/${reqBody}`, {}, "");
// };

// export const GetAllOrdersApi = async (token) => {
//   return await commonAPI("GET",`${serverUrl}/orders`,"",{ Authorization: `Bearer ${token}` });
// };

// export const UpdateOrderStatusApi = async (orderId, status, token) => {
//   return await commonAPI("PUT",`${serverUrl}/orders/${orderId}/status`,{ status },{ Authorization: `Bearer ${token}` });
// };










// //UpdateWishlistApi
// export const UpdateWishlistApi = async (id,reqBody,reqHeader) => {
//   return await commonAPI("PUT", `${serverUrl}/update-cart/${id}`, reqBody, reqHeader);
// };
