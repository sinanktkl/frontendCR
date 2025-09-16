// import React from 'react'

// import A247 from '../assets/247.svg';
// import Apickupdrop from '../assets/pickupdrop.svg';
// import Aupdating from '../assets/updating.svg';
// import P1 from '../assets/products/prmservice.jpg';
// import P2 from '../assets/products/mount_tyre.avif';
// import P3 from '../assets/products/led.jpeg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import '../App.css'; // Assuming you have some styles in App.css
// import ExampleCarouselImage from '../components/ExampleCarouselImage';
// import ProductsPagination from '../components/ProductsPagination';
// import '../componentsStyles/Products.scss'


// function Products() {
//   // const products = [
//   //   {
//   //     id: 1,
//   //     name: "Premium Bike Service",
//   //     description: "Full inspection, oiling, brake adjustment, and gear tuning.",
//   //     price: 1500,
//   //     image: P1
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Mountain Bike Tires",
//   //     description: "Durable, high-traction tires for rough terrains.",
//   //     price: 1200,
//   //     image: P2
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "LED Bike Headlight",
//   //     description: "Ultra-bright rechargeable headlight for night riding.",
//   //     price: 600,
//   //     image: P3
//   //   }
//   // ];

//   const products = [
//     { id: 1, name: 'Black Oil Cooler Guard', price: 1300, img: P1 ,category:"electrical"},
//     { id: 2, name: 'Black Master Cylinder Guard', price: 750, img: P2 ,category:"braking"},
//     { id: 3, name: 'Black Compact Engine Guards', price: 1500, img: P3 ,category:"protection"},
//     { id: 4, name: 'Black Oil Cooler Guard', price: 1300, img: P1 ,category:"electrical"},
//     { id: 5, name: 'Black Master Cylinder Guard', price: 750, img: P2 ,category:"braking"},
//     { id: 6, name: 'Black Compact Engine Guards', price: 1500, img: P3 ,category:"protection"},
//     { id: 7, name: 'Black Oil Cooler Guard', price: 1300, img: P1 , category:'electrical'},
//     { id: 8, name: 'Black Master Cylinder Guard', price: 750, img: P2 , category:'braking'},
//     { id: 9, name: 'Black Compact Engine Guards', price: 1500, img: P3 , category:'protection'},
//     { id: 10, name: 'Black Oil Cooler Guard', price: 1300, img: P1 , category:'electrical'},
//     { id: 11, name: 'Black Master Cylinder Guard', price: 750, img: P2 , category:'braking'},
//     { id: 12, name: 'Black Compact Engine Guards', price: 1500, img: P3 , category:'protection'},
//     { id: 13, name: 'Black Oil Cooler Guard', price: 1300, img: P1 , category:'electrical'},
//     { id: 14, name: 'Black Master Cylinder Guard', price: 750, img: P2 , category:'braking'},
//     { id: 15, name: 'Black Compact Engine Guards', price: 1500, img: P3 , category:'protection'},
//     // Add more products...
//   ];
//   return (
//     <>
//       <Container fluid style={{ backgroundColor: '#4968b01b', padding: '70px' }}>
//         <Container className='' >

//           <Carousel>
//             <Carousel.Item >
//               <img style={{ height: '500px', width: '100%' }} src='https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg' alt="Workshop Overview" />
//               <Carousel.Caption>
//                 <h3 className='text-light'>Premium Bike Workshop</h3>
//                 <p>State-of-the-art facility with certified technicians to care for your bike.</p>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//               <img style={{ height: '500px', width: '100%' }} src='https://static.vecteezy.com/system/resources/previews/051/345/521/non_2x/a-mechanic-works-diligently-on-a-vintage-motorcycle-in-a-well-lit-workshop-during-the-early-afternoon-photo.jpg' alt="Repair Services" />
//               <Carousel.Caption>
//                 <h3 className='text-light'>Expert Repairs & Diagnostics</h3>
//                 <p>From engine tuning to brake fixes — we handle all types of repairs with precision.</p>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//               <img style={{ height: '500px', width: '100%' }} src='https://www.allextreme.in/media/weltpixel/owlcarouselslider/images/l/e/leg-guard.jpg' alt="Customer Service" />
//               <Carousel.Caption>
//                 <h3 className='text-light'>Fast & Friendly Service</h3>
//                 <p>Get back on the road faster with our quick turnaround and dedicated support team.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>

//         </Container>
//       </Container>

//       {/* <div className="container py-5">
//         <h1 className="text-center mb-4">Our Products</h1>
//         <div className="row">
//           {products.map(product => (
//             <div key={product.id} className="col-md-4 mb-4">
//               <div className="card h-100 shadow-sm">
//                 <img src={product.image} style={{ objectFit: 'contain', height: '200px' }} className="card-img-top" alt={product.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.description}</p>
//                   <h6 className="text-primary">₹{product.price}</h6>
//                 </div>
//                 <div className="card-footer bg-white">
//                   <button className="btn btn-success w-100">Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}

// {/* <ProductsPagination/> */}




// <div className="products-page container-fluid">
//       <div className="row">

//         {/* Sidebar */}
//         <aside className="col-12 col-md-3 mb-4 mb-md-0">
//           <h5 className="mb-3">Category</h5>
//           <ul className="list-unstyled category-list">
//             <li>Electrical</li>
//             <li>Security and Maintenance</li>
//             <li>Engine</li>
//             <li>Luggage</li>
//             <li>Bodywork</li>
//             <li>Seats</li>
//             <li>Controls</li>
//             <li>Protection</li>
//           </ul>
//         </aside>

//         {/* Product Grid */}
//         <main className="col-12 col-md-9">
//           <div className="row g-4">
//             {products.map((p) => (
//               <div className="col-6 col-md-4" key={p.id}>
//                 <div className="product-card">
//                   <img src={p.img} alt={p.name} className="img-fluid" />
//                   <div className="product-info">
//                     <h6>{p.name}</h6>
//                     <p>INR {p.price.toLocaleString()}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//       </div>
//     </div>
//     </>
//   )
// }

// export default Products















import React, { useEffect, useState } from 'react';

import { AddCartApi, AddWishlistApi, DeleteWishlistApi, GetAllProductAPI, GetBannerApi, GetCartApi, GetWishlistApi } from '../Services/allAPI';
import { serverUrl } from '../Services/serverUrl';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Products() {


  const [searchKey, setSearchKey] = useState("")
  // console.log(searchKey);

  const [allProducts, setAllProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("");


  const getAllProduct = async () => {

    setLoading(true)
    try {
      const result = await GetAllProductAPI(searchKey, currentPage, limit, category)

      // console.log(result);
      if (result.status == 200) {
        setAllProducts(result.data.data);
        setTotalPages(result.data.pagination.totalPages);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }

  }

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
    setCurrentPage(1);
  }
  // -----------------



  const updateLimit = () => {
    const width = window.innerWidth;
    let newLimit;

    if (width < 588) {
      newLimit = 4; // Mobile
    } else if (width < 768) {
      newLimit = 6; // Small tablet
    } else if (width < 993) {
      newLimit = 6; // Tablet
    } else {
      newLimit = 12; // Desktop
    }

    if (newLimit !== limit) {
      setLimit(newLimit);
      setCurrentPage(1); // Reset to first page when limit changes
    }
  };









  // --------------------
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };



  const handleCategoryFilter = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentPage(1);
  };



  const [loading, setLoading] = useState(false)

  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };


  useEffect(() => {
    getAllProduct()
    fetchBanners("product")
  }, [searchKey, currentPage, category, limit])

  useEffect(() => {
    updateLimit(); // Run on mount

    const handleResize = () => {
      updateLimit();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [limit]);
  // console.log(allProducts);


  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 6;


  //   // Calculate start & end index
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const [productBanners, setProductBanners] = useState([]);

  const fetchBanners = async (category) => {
    try {
      const { data } = await GetBannerApi(category);
      setProductBanners(data || []);
    } catch (err) {
      console.error("Failed to fetch banners:", err);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------------------

const [cartItems, setCartItems] = useState([]);

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

  // -------------------------------------------------------------------------------------------------------------------------------

  const handleAddToCart = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId") // stored after login
      if (!token || !userId) {
        toast.warning("Please login to add products to cart");
        return;
      }

      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = { productId, quantity: 1 }; // default quantity = 1

      const res = await AddCartApi(userId, reqBody, reqHeader);

      if (res.status === 200) {
        toast.success("Product added to cart");
        fetchCartItems();
      } else {
        toast.error(res.response?.data || "Failed to add product to cart");
      }
    } catch (err) {
      console.error("Add to Cart Error:", err);
      toast.error("Something went wrong");
    }
  };



  const handleAddToWishlist = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      if (!token || !userId) {
        toast.warning("Please login to add products to wishlist");
        return;
      }

      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = { productId };

      const res = await AddWishlistApi(userId, reqBody, reqHeader);

      if (res.status === 200) {
        toast.success("Product added to wishlist ❤️");
        fetchWishlist();
      } else {
        toast.error(res.response?.data || "Failed to add product to wishlist");
      }
    } catch (err) {
      console.error("Add to Wishlist Error:", err);
      toast.error("Something went wrong");
    }
  };

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
  const handleRemoveFromWishlist = async (productId) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqBody = {
      productId
    }

    const result = await DeleteWishlistApi(userId, reqBody, reqHeader);
    if (result.status === 200) {
      // console.log(result);

      fetchWishlist();
      toast.success("Removed from wishlist");
      setWishlist(result.data.wishlist.products);
    }
  };

  useEffect(() => {
    fetchWishlist();
    fetchCartItems();
  }, []);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   const navigate = useNavigate();

  // ...

  const handleBuyNow = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");

      if (!token || !userId) {
        toast.warning("Please login to continue");
        return;
      }

      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = { productId, quantity: 1 };

      // ✅ Add to cart first
      const res = await AddCartApi(userId, reqBody, reqHeader);

      if (res.status === 200) {
        toast.success("Redirecting to checkout...");
        fetchCartItems(); // refresh cart
        // Navigate to checkout page with productId
        navigate("/cart", { state: { productId, quantity: 1 } });
      } else {
        toast.error(res.response?.data || "Failed to process order");
      }
    } catch (err) {
      console.error("Buy Now Error:", err);
      toast.error("Something went wrong");
    }
  };



  return (
    <>

      {/* carousil */}


      {productBanners.length > 0 ? (
        <Carousel>

          {productBanners.map((banner) => (
            <Carousel.Item key={banner._id} >
              <img style={{ height: '500px', width: '100%' }} src={`${serverUrl}/Uploads/${banner.bannerImage}`} alt="Workshop Overview" />
              <Carousel.Caption>
                <h3 className='text-light'>{banner.bannerTitle}</h3>
                <p>{banner.bannerDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
          )}



        </Carousel>) :

        // null
        (<p className="text-muted">No banners uploaded yet.</p>)}


      {/* Search Bar */}
      <div className="search-container mt-4 mb-4">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control search-input"
            onChange={handleSearchChange}
            value={searchKey}
          />
          <button
            className="btn btn-info search-btn"
            onClick={() => setCurrentPage(1)}
          >
            <i className="bi bi-search me-1"></i>
            Search
          </button>
        </div>
      </div>

      <div className="products-page" style={{ overflow: 'hidden' }}>
        <div className="row">
          {/* Sidebar */}
          <aside className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div className="sidebar-content">
              <h5 className="mb-3 text-info fw-bold">
                <i className="bi bi-funnel me-2"></i>
                Categories
              </h5>
              <ul className="category-list">
                <li
                  className={category === "" ? "active-category" : ""}
                  onClick={() => handleCategoryFilter("")}
                >
                  <i className="bi bi-grid me-2"></i>
                  All Products
                </li>
                <li
                  className={category === "Parts" ? "active-category" : ""}
                  onClick={() => handleCategoryFilter("Parts")}
                >
                  <i className="bi bi-gear me-2"></i>
                  Parts
                </li>
                <li
                  className={category === "Accessories" ? "active-category" : ""}
                  onClick={() => handleCategoryFilter("Accessories")}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Accessories
                </li>
                <li
                  className={category === "Oil" ? "active-category" : ""}
                  onClick={() => handleCategoryFilter("Oil")}
                >
                  <i className="bi bi-droplet me-2"></i>
                  Oil
                </li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="col-12 col-lg-9">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading products...</p>
              </div>
            ) : (
              <>
                <div className="row g-3 mb-4">
                  {allProducts?.length > 0 ? (
                    allProducts.map((product, index) => (
                      <div key={index} className="col-12 col-sm-4 col-md-4 col-xl-3">
                        <div className="product-card card h-100 shadow-sm">
                          {/* Product Image */}
                          <div className="card-img-container">
                            <img
                              src={`${serverUrl}/Uploads/${product?.productImage}`}
                              alt={product.productName}
                              className="card-img-top"
                            />

                          </div>

                          {/* Card Body */}
                          <div className="card-body d-flex flex-column p-3">
                            {/* Category */}
                            <div className="category-section">
                              <span className="category-badge">
                                {product.productCategory || 'N/A'}
                              </span>
                            </div>

                            {/* Product Name */}
                            <h6 className="product-name card-title mb-2">
                              {truncateText(product.productName, 50)}
                            </h6>

                            {/* Price Section */}
                            <div className="price-section mb-3 mt-auto">
                              <div className="original-price">
                                <del className="text-muted">
                                  {currencyFormatter.format(product.productPrice)}
                                </del>
                              </div>
                              <div className="offer-price text-success fw-bold">
                                {currencyFormatter.format(product.productOfferPrice)}
                              </div>
                            </div>

                            <div className='text-center'>
                              <button className="btn btn-info btn-sm me-2" onClick={() => handleBuyNow(product._id)}>Buy Now</button>
                              {/* <button className="btn btn-outline-dark btn-sm" onClick={()=>handleAddToWishlist(product._id)}> <i className="fa-solid fa-heart text-danger"></i></button> */}
                              {cartItems.some(w => w.productId._id === product._id) ? (
                                <button
                                  className="btn btn-danger btn-sm me-2"
                                  onClick={() => handleAddToCart(product._id)} // ✅ toggle remove
                                >
                                  <i className="fa-solid fa-cart-shopping"></i>
                                 
                                </button>
                              ) : (
                                <button
                                  className="btn btn-outline-dark btn-sm me-2"
                                 onClick={() => handleAddToCart(product._id)}
                                >
                                  <i className="fa-solid fa-cart-plus"></i>         
                                </button>
                              )}
                              {wishlist.some(w => w.productId._id === product._id) ? (
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleRemoveFromWishlist(product._id)} // ✅ toggle remove
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-outline-dark btn-sm"
                                  onClick={() => handleAddToWishlist(product._id)}
                                >
                                  <i className="fa-regular fa-heart"></i>
                                </button>
                              )}
                            </div>


                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <i className="bi bi-inbox text-muted" style={{ fontSize: '4rem' }}></i>
                        <h4 className="text-muted mt-3">No Products Found</h4>
                        <p className="text-muted">
                          {searchKey ? 'Try adjusting your search terms' : 'No products available in this category'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination-container">
                    <nav aria-label="Products pagination">
                      <ul className="pagination justify-content-center mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                          >
                            <i className="bi bi-chevron-left"></i>
                            <span className=" d-sm-inline ms-1">{limit === 4 ? `<<` : `Prev`}</span>
                          </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => {
                          const pageNum = index + 1;
                          return (
                            <li
                              key={pageNum}
                              className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                            >
                              <button
                                className="page-link"
                                onClick={() => handlePageClick(pageNum)}
                              >
                                {pageNum}
                              </button>
                            </li>
                          );
                        })}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                          >
                            <span className=" d-sm-inline me-1">{limit === 4 ? `>>` : `Next`}</span>
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>

                    <div className="pagination-info text-center mt-2">
                      <small className="text-muted">
                        Page {currentPage} of {totalPages} | Showing {limit} items per page
                      </small>
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

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

export default Products;




// import { Link } from 'react-router-dom';

// function Products() {
//   return (
//     <>
//       {/* Product Grid */}
// <main className="col-12 col-md-9">
//   <div className="row justify-content-center">
//     {currentProducts.map((p) => (
//       <div className="col-md-3 mb-4" key={p.id}>
//         <div
//           className="card h-100 position-relative"
//           style={{ height: '430px' }}
//         >
//           {/* Optional Discount Tag */}
//           {p.discount && (
//             <span className="position-absolute top-0 start-0 bg-success text-white p-1">
//               {p.discount}% OFF
//             </span>
//           )}

//           {/* Product Image */}
//           <img
//             src={p.img}
//             className="card-img-top"
//             style={{ height: '160px', objectFit: 'contain' }}
//             alt={p.name}
//           />

//           {/* Product Info */}
//           <div className="card-body p-2">
//             <p className="text-muted small text-uppercase">
//               {p.category || 'Accessory'}
//             </p>
//             <h6 className="card-title mb-1">{p.name}</h6>

//             <p className="card-text text-success fw-bold mb-1">
//               {p.oldPrice && (
//                 <del className="text-muted me-2">
//                   ${p.oldPrice.toFixed(2)}
//                 </del>
//               )}
//               ${p.price.toFixed(2)}
//             </p>

//             {/* Static Star Rating (can be dynamic later) */}
//             <p className="text-warning mb-2">★★★★☆</p>

//             {/* Action Buttons */}
//             <Link to="/cart">
//               <button className="btn btn-info btn-sm me-2">
//                 ADD TO CART
//               </button>
//             </Link>
//             <Link to="/wishlist">
//               <button className="btn btn-outline-dark btn-sm">
//                 <i className="fa-solid fa-heart text-danger"></i>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Pagination */}
//   <ProductsPagination
//     totalProducts={products.length}
//     productsPerPage={productsPerPage}
//     currentPage={currentPage}
//     setCurrentPage={setCurrentPage}
//   />
// </main>
//     </>
//   )
// }

// export default Products









// {/* Product Grid */}
// <main className="col-12 col-md-9">
//   <div className="row justify-content-center">
//     {currentProducts.map((p) => (
//       <div className="col-md-3 mb-4" key={p.id}>
//         <div
//           className="card h-100 position-relative"
//           style={{ height: '430px' }}
//         >
//           {/* Optional Discount Tag */}
//           {p.discount && (
//             <span className="position-absolute top-0 start-0 bg-success text-white p-1">
//               {p.discount}% OFF
//             </span>
//           )}

//           {/* Product Image */}
//           <img
//             src={p.img}
//             className="card-img-top"
//             style={{ height: '160px', objectFit: 'contain' }}
//             alt={p.name}
//           />

//           {/* Product Info */}
//           <div className="card-body p-2">
//             <p className="text-muted small text-uppercase">
//               {p.category || 'Accessory'}
//             </p>
//             <h6 className="card-title mb-1">{p.name}</h6>

//             <p className="card-text text-success fw-bold mb-1">
//               {p.oldPrice && (
//                 <del className="text-muted me-2">
//                   ${p.oldPrice.toFixed(2)}
//                 </del>
//               )}
//               ${p.price.toFixed(2)}
//             </p>

//             {/* Static Star Rating (can be dynamic later) */}
//             <p className="text-warning mb-2">★★★★☆</p>

//             {/* Action Buttons */}
//             <Link to="/cart">
//               <button className="btn btn-info btn-sm me-2">
//                 ADD TO CART
//               </button>
//             </Link>
//             <Link to="/wishlist">
//               <button className="btn btn-outline-dark btn-sm">
//                 <i className="fa-solid fa-heart text-danger"></i>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Pagination */}
//   <ProductsPagination
//     totalProducts={products.length}
//     productsPerPage={productsPerPage}
//     currentPage={currentPage}
//     setCurrentPage={setCurrentPage}
//   />
// </main>
