import React, { useState } from 'react';

import { Button, Carousel } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import ContactModal from '../components/ContactModal'
import InstagramFeed from '../components/InstagramFeed';

import { useNavigate } from "react-router-dom";
import { AddCartApi, AddWishlistApi, GetAllProductAPI, GetApprovedTestimonyAPI, GetBannerApi, GetCartApi, GetHomeProductAPI, GetWishlistApi } from '../Services/allAPI';
import { useEffect } from 'react';
import { serverUrl } from '../Services/serverUrl';
// import TestimonialSwiper from '../components/TestimonialSwiper';

import '../pages/Home.css'
import TestimonialSlider from '../components/TestimonialSlider';
import { toast } from 'react-toastify';
import Feed from '../components/Feed';
import Instagraming from '../components/Instagraming';
import Gallery from '../components/Gallery';

function Home() {

  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [HomeProduct, setHomeproduct] = useState([])
  const [approvedTestimony, setApprovedTestimony] = useState([])

  const getApprovedTestimonyAPI = async () => {
    setLoading(true)
    try {
      //api call
      const result = await GetApprovedTestimonyAPI()
      console.log(result);
      if (result.status == 200) {
        setApprovedTestimony(result.data)
      } else {
        console.log(result);

      }
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }

  }
  const getHomeProduct = async () => {
    setLoading(true)
    try {
      //api call
      const result = await GetHomeProductAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeproduct(result.data)
      } else {
        console.log(result);

      }
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }

  }
  // console.log(HomeProduct);

  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  const [homeBanners, setHomeBanners] = useState([]);

  const fetchBanners = async (category) => {
    try {
      const { data } = await GetBannerApi(category);
      setHomeBanners(data || []);
    } catch (err) {
      console.error("Failed to fetch banners:", err);
    }
  };

  useEffect(() => {
    getHomeProduct();
    getApprovedTestimonyAPI();
    fetchBanners("home")
  }, [])

  console.log(HomeProduct.productImage);

  // const fetchBanners =async()=>{
  //   setLoading(true)
  //     try {
  //       //api call
  //       const result = await GetBannerApi()
  //       console.log(result);
  //       if (result.status == 200) {
  //         setHomeproduct(result.data)
  //       } else {
  //         console.log(result);

  //       }
  //     } catch (err) {
  //       console.log(err);

  //     } finally {
  //       setLoading(false)
  //     }
  // }

  // (((((((((((((((((((((((((((((((((((((((((((((((((+++++++++++++++++++)))))))))))))))))))))))))))))))))))))))))))))))))
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getAllProduct = async () => {

    setLoading(true)
    try {
      const result = await GetAllProductAPI()

      // console.log(result);
      if (result.status == 200) {
        setAllProducts(result.data.data);
        
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }

  }

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

  const fetchWishlist = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const reqHeader = { Authorization: `Bearer ${token}` };

    const res = await GetWishlistApi(userId, reqHeader);
    if (res.status === 200) {
      setWishlist(res.data.products || []);
    }
  };

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
         window.scrollTo(0, 0);
      } else {
        toast.error(res.response?.data || "Failed to process order");
      }
    } catch (err) {
      console.error("Buy Now Error:", err);
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


  useEffect(() => {
    getAllProduct();
    fetchWishlist();
    fetchCartItems();


  }, [])
  return (
    <>

      {/* carousil */}


      {homeBanners.length > 0 ? (
        <Carousel>

          {homeBanners.map((banner) => (
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


      {/* experience section */}

      <h1 className='text-info fw-bolder' style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px', textDecoration: 'underline' }}>WHY CUSTOM RODZ ?</h1>
      <section className="py-5 bg- mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              {/* New icon: Helmet with badge = Experience */}
              <img src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png" width="50" alt="Experienced Mechanics" />
              <h5 className="mt-3 fw-bold text-info">15+ Years in Service</h5>
              <p className="text-muted">Expert mechanics with years of hands-on experience in bike repair & service.</p>
            </div>

            <div className="col-md-3 mb-4">
              {/* Better icon: Clear handshake for trust */}
              <img src="https://cdn-icons-png.flaticon.com/512/6815/6815042.png" width="50" alt="Trusted by Bikers" />
              <h5 className="mt-3 fw-bold text-info">Trusted by Bikers</h5>
              <p className="text-muted">Thousands of happy bikers choose us for our reliable and quick service.</p>
            </div>


            <div className="col-md-3 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972502.png" width="50" alt="Quality Service" />
              <h5 className="mt-3 fw-bold text-info">Top-notch Service</h5>
              <p className="text-muted">We use quality parts and deliver every service with precision and care.</p>
            </div>
            <div className="col-md-3 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/5971/5971912.png" width="50" alt="Support" />
              <h5 className="mt-3 fw-bold text-info">Emergency Support</h5>
              <p className="text-muted">We’re ready 24/7 for roadside assistance and emergency repairs.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* display admin selected home products */}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Loading offer products...</p>
        </div>
      ) : (

        <section className="product-section py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-3 text-info fw-bolder">Special Bike Accessories With Offers</h2>
            <p className="text-dark mb-4">Top quality accessories at unbeatable prices. Upgrade your ride today!</p>

            <div className="row g-3 mb-4 justify-content-center">
              {HomeProduct?.length > 0 ? (
                HomeProduct.map((product, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="product-card card h-100 shadow-sm">
                      {/* Product Image */}
                      <div className="card-img-container">
                        <img
                          src={`${serverUrl}/Uploads/${product?.productImage}`}
                          alt={product.productName}
                          className="card-img-top img-fluid"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="card-body d-flex flex-column">
                        {/* Category */}
                        <div className="category-section">
                          <span className="category-badge">
                            {product.productCategory || "N/A"}
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

                        {/* <div className="text-center">
                          <button className="btn btn-info btn-sm me-2">ADD TO CART</button>
                          <button className="btn btn-outline-dark btn-sm">
                            <i className="fa-solid fa-heart text-danger"></i>
                          </button>
                        </div> */}

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
                    <i className="bi bi-inbox text-muted" style={{ fontSize: "4rem" }}></i>
                    <h4 className="text-muted mt-3">No Products Found</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      )}



      {/* Book Your Bike Service */}
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="bg-info p-4 rounded">
              <h3 className="text-light">
                <i className="bi bi-bicycle me-2"></i> Fast & Reliable Bike Repairs
              </h3>
              <p className="text-light">
                Contact our bike service experts and get your ride tuned up or repaired the same day.
              </p>
              {/* <button className="btn btn-light text-info" onClick={() => setShowModal(true)}> */}
              {/* <button className="btn btn-light text-info" > */}
              <button className="btn btn-light text-info" onClick={() => navigate("/services", { state: { section: 'service123_quote' } })}>
                {/* <Link to="/service#service123_quote" style={{ color: "inherit", textDecoration: "none" }}> */}
                Get a Service Quote
                {/* </Link> */}
              </button>
              {/* {showModal && <ContactModal show={showModal} handleClose={() => setShowModal(false)} />} */}
            </div>
          </div>
        </div>
      </div>








<Gallery/>










      {/* instagram feed */}

      {/* <section className="instagram-feed-section py-5">
        <div className="container text-center">
          <h3 className="mb-4 text-info">Follow Us on Instagram</h3>
          <div className="d-flex justify-content-center">
            <iframe
              src="https://snapwidget.com/embed/1104904"
              className="snapwidget-widget"
              allowtransparency="true"
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden', width: '480px', height: '160px' }}
              title="Posts from Instagram"
            ></iframe>
          </div>
        </div>
      </section> */}



{/* <Feed/> */}

<Instagraming/>


      {/* <InstagramFeed /> */}





    </>
  )
}

export default Home




