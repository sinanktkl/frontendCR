// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// import P1 from '../../assets/products/prmservice.jpg'
// import P2 from '../../assets/products/mount_tyre.avif';
// import P3 from '../../assets/products/led.jpeg';
// import ProductsPagination from '../../components/ProductsPagination'
// import { Button, Form, ListGroup, Modal } from 'react-bootstrap';


// function DisplayHomeProducts() {

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const products = [
//     { id: 1, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 2, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 3, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 4, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 5, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 6, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 7, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 8, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 9, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 10, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 11, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 13, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 12, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 14, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 16, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 15, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 17, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 19, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 18, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 20, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 22, name: 'Black Oil Cooler Guard', mrp: 4560, offerprice: 1300, img: P1, category: "electrical" },
//     { id: 21, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 23, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 24, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },
//     { id: 23, name: 'Black Master Cylinder Guard', mrp: 4560, offerprice: 750, img: P2, category: "braking" },
//     { id: 24, name: 'Black Compact Engine Guards', mrp: 4560, offerprice: 1500, img: P3, category: "protection" },


//     // ... your full list
//   ];

//   //   // Calculate start & end index
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


//   const [uploadedProductshow, setUploadedProductShow] = useState(false);
//   const handleCloseUploadedProduct = () => setUploadedProductShow(false);
//   const handleShowUploadedProduct = () => setUploadedProductShow(true);

//   return (
//     <>


//  <a
//         href="/uiedits"
//         className="fw-bold text-info"
//         style={{ textDecoration: "none" }}
//         >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>



//       {/* <Link
//             to="/uiedits"
//             className="text-info"
//             style={{
//               position: "fixed",
//               top: "100px",
//               left: "20px",
//               padding: "8px 14px",
//               borderRadius: "8px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
//             }}
//           >
//             ← Back
//           </Link> */}

//       <h2 className="text-center text-info fw-bold mb-4">Home Products</h2>
//       <p className="text-center text-dark">
//         Here you can manage the products displayed on the home page.
//       </p>



//       <div className="mb-4 text-center">
//         <Button className="btn btn-info" onClick={handleShowUploadedProduct}>Uploaded Offer Products</Button>

//         {/* <Modal
//           show={uploadedProductshow}
//           onHide={handleCloseUploadedProduct}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title className='text-info'>Uploaded Offer Products</Modal.Title>
//           </Modal.Header>

//             <Form.Label>Uploaded Products:</Form.Label>
//           <Modal.Body className='d-flex'>
//             <div className="row g-4 mb-2">

//               <div className="col-md-4 mb-4 text-center" >
//                 <div className="card h-100 position-relative">
//                   <img src='https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg' className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt='Black Master Cylinder Guard' />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">Parts</p>
//                     <h6 className="card-title mb-1">Black Master Cylinder Guard</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">4,560</del>INR 750</p>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="row g-4 mb-2">

//               <div className="col-md-4 mb-4 text-center" >
//                 <div className="card h-100 position-relative">
//                   <img src='https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg' className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt='Black Master Cylinder Guard' />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">Parts</p>
//                     <h6 className="card-title mb-1">Black Master Cylinder Guard</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">4,560</del>INR 750</p>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="row g-4 mb-2">

//               <div className="col-md-4 mb-4 text-center" >
//                 <div className="card h-100 position-relative">
//                   <img src='https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg' className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt='Black Master Cylinder Guard' />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">Parts</p>
//                     <h6 className="card-title mb-1">Black Master Cylinder Guard</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">4,560</del>INR 750</p>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="row g-4 mb-2">

//               <div className="col-md-4 mb-4 text-center" >
//                 <div className="card h-100 position-relative">
//                   <img src='https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg' className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt='Black Master Cylinder Guard' />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">Parts</p>
//                     <h6 className="card-title mb-1">Black Master Cylinder Guard</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">4,560</del>INR 750</p>

//                   </div>
//                 </div>
//               </div>

//             </div>

//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseUploadedProduct}>
//               Close
//             </Button>
//             <Button variant="primary" className='btn-info'>Save Changes</Button>
//           </Modal.Footer>
//         </Modal> */}


//         <Modal
//           show={uploadedProductshow}
//           onHide={handleCloseUploadedProduct}
//           backdrop="static"
//           keyboard={false}
//           size="lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title className="text-info">Uploaded Offer Products</Modal.Title>
//           </Modal.Header>

//           <Form.Label className="fw-bold">Uploaded Products:</Form.Label>
//           <Modal.Body className="d-flex flex-wrap justify-content-center">
//             <div className="row g-4">
//               {/* Card 1 */}
//               <div className="col-12 col-sm-6 col-md-3 text-center">
//                 <div className="card h-100 position-relative shadow-sm">
//                   <img
//                     src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg"
//                     className="card-img-top"
//                     style={{ height: "160px", objectFit: "cover" }}
//                     alt=""
//                   />

//                   <div className="card-body p-2">
//                     <p className="text-muted small">kdncdjk</p>
//                     <h6 className="card-title mb-1">ddbvcvdshs</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">896</del>
//                       INR 200
//                     </p>
//                   </div>
//                   <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                 </div>

//               </div>


//               {/* Card 2 */}
//               <div className="col-12 col-sm-6 col-md-3 text-center">
//                 <div className="card h-100 position-relative shadow-sm">
//                   <img
//                     src="https://static.vecteezy.com/system/resources/previews/051/345/521/non_2x/a-mechanic-works-diligently-on-a-vintage-motorcycle-in-a-well-lit-workshop-during-the-early-afternoon-photo.jpg"
//                     className="card-img-top"
//                     style={{ height: "160px", objectFit: "cover" }}
//                     alt=""
//                   />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">kdncdjk</p>
//                     <h6 className="card-title mb-1">ddbvcvdshs</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">896</del>
//                       INR 200
//                     </p>
//                   </div>
//                   <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="col-12 col-sm-6 col-md-3 text-center">
//                 <div className="card h-100 position-relative shadow-sm">
//                   <img
//                     src="https://www.allextreme.in/media/weltpixel/owlcarouselslider/images/l/e/leg-guard.jpg"
//                     className="card-img-top"
//                     style={{ height: "160px", objectFit: "cover" }}
//                     alt=""
//                   />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">kdncdjk</p>
//                     <h6 className="card-title mb-1">ddbvcvdshs</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">896</del>
//                       INR 200
//                     </p>
//                   </div>
//                   <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                 </div>
//               </div>

//               {/* Card 4 */}
//               <div className="col-12 col-sm-6 col-md-3 text-center">
//                 <div className="card h-100 position-relative shadow-sm">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/5971/5971912.png"
//                     className="card-img-top"
//                     style={{ height: "160px", objectFit: "cover" }}
//                     alt=""
//                   />
//                   <div className="card-body p-2">
//                     <p className="text-muted small">kdncdjk</p>
//                     <h6 className="card-title mb-1">ddbvcvdshs</h6>
//                     <p className="card-text text-success fw-bold mb-1">
//                       <del className="text-muted me-2">896</del>
//                       INR 200
//                     </p>
//                   </div>
//                   <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>



//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseUploadedProduct}>
//               Close
//             </Button>
//             <Button variant="info" className="text-white">
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>








//       <div className="products-page container-fluid">
//         <div className="row">
//           <aside id='Fixsidebar' className="col-12 col-md-3 mb-4 mb-md-0 ">
//             <h5 className="mb-3">Category</h5>
//             <ul className="list-unstyled category-list">
//               <li>All Products</li>
//               <li>Parts</li>
//               <li>Accessories</li>
//               <li>Oil</li>

//             </ul>
//           </aside>
//           {/* Sidebar */}

//           {/* Product Grid */}
//           <main className="col-12 col-md-9 mb-5">
//             {/* <div className="row g-4">
//               {currentProducts.map((p) => (
//                 <div className="col-6 col-md-4" key={p.id}>
//                   <div className="product-card">
//                     <img style={{ height: '200px', width: '200px' }} src={p.img} alt={p.name} className="img-fluid" />
//                     <div className="product-info">
//                       <h6>{p.name}</h6>
//                       <p>INR {p.price.toLocaleString()}</p>

//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div> */}


//             <div className="row g-4 mb-2">
//               {currentProducts.map((p) => (
//                 <div className="col-md-4 mb-4 text-center" key={p.id}>
//                   <div className="card h-100 position-relative">
//                     <img src={p.img} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt={p.name} />
//                     <div className="card-body p-2">
//                       <p className="text-muted small">{p.category}</p>
//                       <h6 className="card-title mb-1">{p.name}</h6>
//                       <p className="card-text text-success fw-bold mb-1">
//                         <del className="text-muted me-2">{p.mrp.toLocaleString()}</del>INR {p.offerprice.toLocaleString()}</p>
//                       <div className="d-flex gap-2 justify-content-center">
//                         <button className="btn btn-warning btn-sm me-2">Edit</button>
//                         <button className="btn btn-danger btn-sm">Delete</button>
//                         <button className="btn btn-danger btn-sm">ADD TO HOME</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>




//             {/* <div className="col-md-3 mb-4 text-center">
//                             <div className="card h-100 position-relative justify-content-center align-items-center" style={{ height: '430px' }}>
//                               <span className="position-absolute top-0 start-0 bg-success text-white p-1">15% OFF</span>
//                               <img src="https://i0.wp.com/automarvels.com/wp-content/uploads/2020/03/aL05-123-500x500-1.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'contain' }} alt="Motul Engine Oil" />
//                               <div className="card-body p-2">
//                                 <p className="text-muted small">OTHER</p>
//                                 <h6 className="card-title mb-1">Motul Engine Oil</h6>
//                                 <p className="card-text text-success fw-bold mb-1">
//                                   <del className="text-muted me-2">$80.00</del> $68.00
//                                 </p>
//                                 <p className="text-warning mb-2">★★★★★</p>
//                                 <Link to={'/cart'}> <button className="btn btn-info btn-sm me-2">ADD TO CART</button></Link>
//                                 <Link to={'/wishlist'}><button className="btn btn-outline-dark btn-sm"> <i className="fa-solid fa-heart text-danger"></i>
//                                 </button></Link>
//                               </div>
//                             </div>
//                           </div> */}


//             {/* Pagination Component */}
//             <ProductsPagination
//               totalProducts={products.length}
//               productsPerPage={productsPerPage}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//             />

//             {/* <div className="text-center">
//         <button className="btn btn-info">Add New Product</button>
//       </div> */}
//           </main>
//         </div>
//       </div>
//     </>
//   )
// }

// export default DisplayHomeProducts




// import React, { useContext, useEffect, useState } from 'react'


// import { Button, Form, Modal, } from 'react-bootstrap';
// // import ProductsPagination from '../../components/ProductsPagination';
// import { DeleteProductAPI, GetAllProductAPI, GetHomeProductAPI, ToggleHomeProductAPI } from '../../Services/allAPI';
// import { serverUrl } from '../../Services/serverUrl';
// import EditProduct from '../../components/EditProduct';
// import { Bounce, toast, ToastContainer } from 'react-toastify';
// import { editProductResponseContext } from '../../ContextAPI/ContextShare';
// import '../../componentsStyles/Products.scss'
// import { useMediaQuery } from 'react-responsive';

// function DisplayHomeProducts() {



//   const { editProductResponse, setEditProductResponse } = useContext(editProductResponseContext)



//   const [uploadedProductshow, setUploadedProductShow] = useState(false);
//   const handleCloseUploadedProduct = () => setUploadedProductShow(false);
//   const handleShowUploadedProduct = () => setUploadedProductShow(true);

//   const [currentPage, setCurrentPage] = useState(1)
//   const [category, setCategory] = useState("");
//   const [totalPages, setTotalPages] = useState(1)
//   const [searchKey, setSearchKey] = useState("")
//   const [allProducts, setAllProducts] = useState([])
//   const [homeProducts, setHomeProducts] = useState([])
//   const [loading, setLoading] = useState(false)

//   const [limit, setLimit] = useState(8);
//   const maxHomeProducts = 4;
//   const selectedCount = homeProducts.length;




//   const handleDeleteProduct = async (id) => {


//     const token = sessionStorage.getItem("token")


//     if (token) {
//       const reqHeader = {
//         "Authorization": `Bearer ${token}`, // ✅ token
//         "Content-Type": "multipart/form-data", // ✅ for image
//       };

//       try {

//         const result = await DeleteProductAPI(id, reqHeader)
//         if (result.status == 200) {
//           toast.success("Product Deleted")

//           getAllProducts()
//         } else {
//           toast.error("Error Deleting Product")
//         }
//       } catch (err) {
//         toast.error(err)
//       }
//     } else {
//       toast.warn("PLEASE LOGIN")
//     }
//   }



//   const getAllProducts = async () => {
//     const result = await GetAllProductAPI(searchKey, currentPage, limit, category)

//     if (result.status == 200) {
//       // console.log(result);

//       setAllProducts(result.data.data)
//       setTotalPages(result.data.pagination.totalPages);
//     } else {
//       console.log(result);
//     }
//   }


//   const getHomeProducts = async () => {
//     const result = await GetHomeProductAPI()
//     if (result.status === 200) {
//       setHomeProducts(result.data)
//     } else {
//       toast.error("Failed to fetch home Products")
//     }
//   }

//   const handleToggleHome = async (id) => {
//     const token = sessionStorage.getItem("token");
//     const reqHeader = {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     }
//     try {
//       const result = await ToggleHomeProductAPI(id, reqHeader);

//       if (result.status === 200) {
//         // console.log(result);

//         toast.success(result.data)
//         getAllProducts();
//         getHomeProducts()
//       } else {
//         // toast.error(result.response?.data?.error || "Failed to update home Product")
//         toast.error("Failed to update home Product")
//       }
//     } catch (err) {
//       toast.error("Error updating home product")
//     }
//   }



//   const handleSearchChange = (e) => {
//     setSearchKey(e.target.value);
//     setCurrentPage(1);
//   }

//   const handleCategoryFilter = (selectedCategory) => {
//     setCategory(selectedCategory)
//     setCurrentPage(1)
//   }

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   }

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   }

//   const handlePageClick = (page) => {
//     setCurrentPage(page)
//   }

//   const currencyFormatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR'
//   });

// const isMobile = useMediaQuery({ maxWidth: 575 });
// const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 992 });

// useEffect(() => {
//   const updateLimit = () => {
//     const width = window.innerWidth;
//     if (0 < 576) {
//       setLimit(4); // Mobile
//     } else if (width < 992) {
//       setLimit(6); // Tablet
//     } else {
//       setLimit(8); // Desktop
//     }
//   };

//   updateLimit(); // Run on mount
//   window.addEventListener("resize", updateLimit);

//   return () => window.removeEventListener("resize", updateLimit);
// }, []);


// // useEffect(() => {
// //   if (isMobile) {
// //     setLimit(4);
// //   } else if (isTablet) {
// //     setLimit(6);
// //   } else {
// //     setLimit(8);
// //   }
// // }, [isMobile, isTablet]);

//   // useEffect(() => {

//   //   const updateLimit = () => {
//   //     if (window.innerWidth < 576) {
//   //       setLimit(4); // Small screens
//   //     } else if (window.innerWidth < 992) {
//   //       setLimit(6); // Tablets
//   //     } else {
//   //       setLimit(8); // Large screens
//   //     }
//   //   };

//   //   // Run on mount
//   //   updateLimit();

//   //   // // Run on resize
//   //   // window.addEventListener('resize', updateLimit);

//   //   // return () => window.removeEventListener('resize', updateLimit);

//   //   const mediaQuery = window.matchMedia("(max-width: 768px)");
//   // const handler = () => updateLimit();

//   // mediaQuery.addEventListener("change", handler);
//   // window.addEventListener("resize", updateLimit);

//   // return () => {
//   //   mediaQuery.removeEventListener("change", handler);
//   //   window.removeEventListener("resize", updateLimit);
//   // }
//   // }, []);

//   useEffect(() => {
//     getAllProducts();
//       getHomeProducts();
//   }, [editProductResponse, searchKey, currentPage, category, limit])


//   useEffect(() => {
//   setCurrentPage(1);
// }, [limit]);



//   return (
//     <>

//       {/* back */}
//       <a
//         href="/booked"
//         className="fw-bold text-info"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left"></i> Back
//       </a>



//       <h2 className="text-center text-info fw-bold mb-4">Home Products</h2>
//       <p className="text-center text-dark">
//         Here you can manage the products displayed on the home page.
//       </p>


//       {/* Uploaded offer product */}
//       <div className="mb-4 text-center">
//         <Button className="btn btn-info" onClick={handleShowUploadedProduct}>Uploaded Home Products</Button>

//         <Modal
//           show={uploadedProductshow}
//           onHide={handleCloseUploadedProduct}
//           backdrop="static"
//           keyboard={false}
//           size="lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title className="text-info">Uploaded Home Products</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <div className="row g-4 justify-content-center">
//               {homeProducts.length > 0 ? (
//                 homeProducts.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`col-12 ${homeProducts.length === 1 ? "col-md-6" : "col-sm-6 col-md-4 col-lg-3"} text-center`}
//                   >
//                     <div className="card h-100 position-relative shadow-sm">
//                       <img
//                         src={`${serverUrl}/Uploads/${item.productImage}`}
//                         className="card-img-top"
//                         style={{ height: "160px", objectFit: "cover" }}
//                         alt={item.productName}
//                       />
//                       <div className="card-body p-2">
//                         <p className="text-muted small">{item.productCategory}</p>
//                         <h6 className="card-title mb-1">
//                           {item.productName && item.productName.length > 20
//                             ? item.productName.substring(0, 20) + "..."
//                             : item.productName}
//                         </h6>
//                         <p className="card-text text-success fw-bold mb-1">
//                           <del className="text-muted me-2">{item.productPrice}</del>
//                           {item.productOfferPrice}
//                         </p>
//                       </div>
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleToggleHome(item._id)}
//                       >
//                         Remove
//                       </Button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-muted">No products selected for home.</p>
//               )}
//             </div>
//           </Modal.Body>




//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseUploadedProduct}>
//               Close
//             </Button>

//           </Modal.Footer>
//         </Modal>
//       </div>




//       {/* search */}
//       <div className="search-bar m-3 d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="form-control w-100 w-sm-50 w-md-25"
//           style={{ maxWidth: "250px" }}
//           onChange={handleSearchChange}
//           value={searchKey}
//         />
//         <button className="btn btn-info px-4" onClick={() => setCurrentPage(1)}>Search</button>
//       </div>





//       <div className="products-page container-fluid">
//         <div className="row">

//           {/* Sidebar */}
//           <aside id='Fixsidebar' className="col-12 col-md-3 mb-4 mb-md-0 ">
//             <h5 className="mb-3 text-info">Category</h5>
//             <ul className="list-unstyled category-list text-dark">
//               <li className={category === "" ? "active-category" : ""} onClick={() => handleCategoryFilter("")}>All Products</li>
//               <li className={category === "Parts" ? "active-category" : ""} onClick={() => handleCategoryFilter("Parts")}>Parts</li>
//               <li className={category === "Accessories" ? "active-category" : ""} onClick={() => handleCategoryFilter("Accessories")}>Accessories</li>
//               <li className={category === "Oil" ? "active-category" : ""} onClick={() => handleCategoryFilter("Oil")}>Oil</li>

//             </ul>
//           </aside>

//           {/* Product Grid */}
//           <main className="col-12 col-md-9 mb-5">
//             <div className="row g-4 mb-2">
//               {allProducts?.length > 0 ? allProducts.map((product, index) => (
//                 // <div key={index} className="col-md-3 mb-4 text-center"
//                 // // key={p.id}
//                 // >
//                 //   <div className="card h-100 position-relative">
//                 //     <img src={`${serverUrl}/Uploads/${product?.productImage}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} alt={product.productName} />
//                 //     <div className="card-body p-2">
//                 //       <p className="text-muted small">{product.productCategory}</p>
//                 //       <h6 className="card-title mb-1 line-height-2">{product.productName && product.productName.length > 20
//                 //         ? product.productName.substring(0, 20) + "..."
//                 //         : product.productName}</h6>
//                 //       <p className="card-text text-success fw-bold mb-1">
//                 //         <del className="text-muted me-2">{product.productPrice}</del>INR {product.productOfferPrice}</p>
//                 //       <div className="d-flex flex-wrap justify-content-center gap-2">
//                 //         {/* Edit Button */}
//                 //         <EditProduct product={product} />

//                 //         {/* Add/Remove Home */}
//                 //         <button
//                 //           className={`btn btn-sm ${product.homeSelected ? "btn-danger" : "btn-success"}`}
//                 //           style={{ minWidth: "130px" }}
//                 //           onClick={() => handleToggleHome(product._id)}
//                 //           disabled={!product.homeSelected && selectedCount >= maxHomeProducts}
//                 //           title={!product.homeSelected && selectedCount >= maxHomeProducts ? "Maximum 4 products allowed" : ""}

//                 //         >
//                 //           {product.homeSelected ? (
//                 //             <>
//                 //               <i className="bi bi-house-dash"></i> Remove from home
//                 //             </>
//                 //           ) : (
//                 //             <>
//                 //               <i className="bi bi-house-add"></i> Add to Home
//                 //             </>
//                 //           )}
//                 //         </button>

//                 //         {/* Delete Button */}
//                 //         <button
//                 //           className="btn btn-outline-danger btn-sm"
//                 //           style={{ minWidth: "100px" }}
//                 //           onClick={() => handleDeleteProduct(product._id)}
//                 //         >
//                 //           <i className="bi bi-trash"></i> Delete
//                 //         </button>
//                 //       </div>

//                 //     </div>
//                 //   </div>
//                 // </div>

//                 <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//                   <div className="card h-100 d-flex flex-column justify-content-between shadow-sm p-2">
//                     {/* Product Image */}
//                     <div className="text-center">
//                       <img
//                         src={`${serverUrl}/Uploads/${product?.productImage}`}
//                         alt={product.productName}
//                         className="card-img-top rounded"
//                         style={{ height: '160px', objectFit: 'cover' }}
//                       />
//                     </div>

//                     {/* Card Body */}
//                     <div className="card-body d-flex flex-column justify-content-between text-center p-2">
//                       {/* Category */}
//                       <p className="text-muted small mb-1" style={{ minHeight: '18px' }}>
//                         {product.productCategory || 'N/A'}
//                       </p>

//                       {/* Product Name */}
//                       <h6
//                         className="fw-bold text-dark mb-2"
//                         style={{
//                           minHeight: '40px',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}
//                       >
//                         {product.productName && product.productName.length > 20
//                           ? product.productName.substring(0, 20) + '...'
//                           : product.productName}
//                       </h6>

//                       {/* Price Section */}
//                       <p className="fw-bold text-success mb-2" style={{ minHeight: '24px' }}>
//                         <del className="text-muted me-2"> {currencyFormatter.format(product.productPrice)}</del><br />
//                         {currencyFormatter.format(product.productOfferPrice)}
//                       </p>
//                     </div>

//                     {/* Buttons Section */}
//                     <div
//                       className="d-flex flex-wrap justify-content-center gap-2 mt-2"
//                       style={{ minHeight: '80px' }}
//                     >
//                       {/* Edit Button */}
//                       <EditProduct product={product} />

//                       {/* Add / Remove Home */}
//                       <button
//                         className={`btn btn-sm ${product.homeSelected ? 'btn-danger' : 'btn-success'}`}
//                         style={{ minWidth: '130px' }}
//                         onClick={() => handleToggleHome(product._id)}
//                         disabled={!product.homeSelected && selectedCount >= maxHomeProducts}
//                         title={!product.homeSelected && selectedCount >= maxHomeProducts ? 'Maximum 4 products allowed' : ''}
//                       >
//                         {product.homeSelected ? (
//                           <>
//                             <i className="bi bi-house-dash"></i> Remove
//                           </>
//                         ) : (
//                           <>
//                             <i className="bi bi-house-add"></i> Add
//                           </>
//                         )}
//                       </button>

//                       {/* Delete Button */}
//                       <button
//                         className="btn btn-outline-danger btn-sm"
//                         style={{ minWidth: '100px' }}
//                         onClick={() => handleDeleteProduct(product._id)}
//                       >
//                         <i className="bi bi-trash"></i> Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//               )) : <p className='text-danger fw-bolder ms-2'>Nothing To Display</p>}
//             </div>


//             {totalPages > 1 && (<div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
//               <button
//                 className="btn btn-outline-info me-2"
//                 disabled={currentPage === 1}
//                 onClick={handlePrev}

//               >
//                 Prev
//               </button>

//               {/* Page Numbers */}


//               {[...Array(totalPages)].map((_, index) => {
//                 const pageNum = index + 1;
//                 return (
//                   <button
//                     key={pageNum}
//                     className={`btn mx-1 ${currentPage === pageNum ? "btn-info" : "btn-outline-info"}`}
//                     onClick={() => handlePageClick(pageNum)}

//                   >
//                     {pageNum}
//                   </button>
//                 )
//               })}



//               <button
//                 className="btn btn-outline-info ms-2"
//                 disabled={currentPage === totalPages}
//                 onClick={handleNext}

//               >
//                 Next
//               </button>
//             </div>)}




//           </main>
//         </div>
//       </div>


//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition={Bounce}
//       />
//     </>
//   )
// }

// export default DisplayHomeProducts



import './Adminstyles/DisplayHomeProducts.css'

import React, { useContext, useEffect, useState } from 'react'

import { Button, Form, Modal, } from 'react-bootstrap';
import { DeleteProductAPI, GetAllProductAPI, GetHomeProductAPI, ToggleHomeProductAPI } from '../../Services/allAPI';
import { serverUrl } from '../../Services/serverUrl';
import EditProduct from '../../components/EditProduct';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { editProductResponseContext } from '../../ContextAPI/ContextShare';


function DisplayHomeProducts() {
  const { editProductResponse, setEditProductResponse } = useContext(editProductResponseContext)

  const [uploadedProductshow, setUploadedProductShow] = useState(false);
  const handleCloseUploadedProduct = () => setUploadedProductShow(false);
  const handleShowUploadedProduct = () => setUploadedProductShow(true);

  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState("");
  const [totalPages, setTotalPages] = useState(1)
  const [searchKey, setSearchKey] = useState("")
  const [allProducts, setAllProducts] = useState([])
  const [homeProducts, setHomeProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(8);

  const maxHomeProducts = 4;
  const selectedCount = homeProducts.length;

  const handleDeleteProduct = async (id) => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      try {
        const result = await DeleteProductAPI(id, reqHeader)
        if (result.status == 200) {
          toast.success("Product Deleted")
          getAllProducts()
        } else {
          toast.error("Error Deleting Product")
        }
      } catch (err) {
        toast.error(err)
      }
    } else {
      toast.warn("PLEASE LOGIN")
    }
  }

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const result = await GetAllProductAPI(searchKey, currentPage, limit, category)
      if (result.status == 200) {
        setAllProducts(result.data.data)
        setTotalPages(result.data.pagination.totalPages);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  const getHomeProducts = async () => {
    const result = await GetHomeProductAPI()
    if (result.status === 200) {
      setHomeProducts(result.data)
    } else {
      toast.error("Failed to fetch home Products")
    }
  }

  const handleToggleHome = async (productid) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await ToggleHomeProductAPI(productid, reqHeader);

      if (result.status === 200) {
        toast.success(result.data)
        getAllProducts();
        getHomeProducts()
      } else {
        toast.error("Failed to update home Product")
      }
    } catch (err) {
      toast.error("Error updating home product")
    }
  }

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
    setCurrentPage(1);
  }

  const handleCategoryFilter = (selectedCategory) => {
    setCategory(selectedCategory)
    setCurrentPage(1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Fixed responsive limit logic
  const updateLimit = () => {
    const width = window.innerWidth;
    let newLimit;

    if (width < 588) {
      newLimit = 4; // Mobile
    } else if (width < 768) {
      newLimit = 6; // Small tablet
    } else if (width < 993) {
      newLimit = 6; // Tablet
    } else  {
      newLimit = 12; // Desktop
    }

    if (newLimit !== limit) {
      setLimit(newLimit);
      setCurrentPage(1); // Reset to first page when limit changes
    }
  };
// ----------------------------------------------------------------------------------------------------
//   // Fixed responsive limit logic
//   const updateLimit = () => {
//     const width = window.innerWidth;
//     if (width < 576) return 4;   // XS (phones)
//     if (width < 768) return 6;   // SM
//     if (width < 992) return 8;   // MD
//     return 12;                   // LG+
//   };

// useEffect(() => {
//   const handleResize = () => {
//     const newLimit = updateLimit();
//     setLimit(prev => (prev !== newLimit ? newLimit : prev));
//   };

//   handleResize(); // Run once on mount
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);
  

// --------------------------------------------------------------------------------------------------------
  useEffect(() => {
    updateLimit(); // Run on mount

    const handleResize = () => {
      updateLimit();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [limit]);

  useEffect(() => {
    getAllProducts();
    getHomeProducts();
  }, [editProductResponse, searchKey, currentPage, category, limit])

  return (
    <>
      {/* Back Button */}
      <div className="mb-3">
        <a
          href="/booked"
          className="fw-bold text-info back-link"
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Back
        </a>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-info fw-bold mb-2">Home Products</h2>
        <p className="text-muted">
          Here you can manage the products displayed on the home page.
        </p>
      </div>

      {/* Uploaded Home Products Modal Button */}
      <div className="mb-4 text-center">
        <Button className="btn btn-info" onClick={handleShowUploadedProduct}>
          View Home Products ({selectedCount}/{maxHomeProducts})
        </Button>

        <Modal
          show={uploadedProductshow}
          onHide={handleCloseUploadedProduct}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-info">
              Home Products ({selectedCount}/{maxHomeProducts})
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row g-3">
              {homeProducts.length > 0 ? (
                homeProducts.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-3 col-lg-3"
                  >
                    <div className="card h-100 shadow-sm">
                      <div className="card-img-container">
                        <img
                          src={`${serverUrl}/Uploads/${item.productImage}`}
                          className="card-img-top"
                          alt={item.productName}
                        />
                      </div>
                      <div className="card-body text-center p-2">
                        <p className="text-muted small category-text">{item.productCategory}</p>
                        <h6 className="card-title product-name">
                          {truncateText(item.productName, 25)}
                        </h6>
                        <div className="price-section">
                          <del className="text-muted original-price">
                            {currencyFormatter.format(item.productPrice)}
                          </del>
                          <p className="text-success fw-bold offer-price mb-2">
                            {currencyFormatter.format(item.productOfferPrice)}
                          </p>
                        </div>
                        <Button
                          variant="danger"
                          size="sm"
                          className="w-100"
                          onClick={() => handleToggleHome(item._id)}
                        >
                          <i className="bi bi-house-dash me-1"></i>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="text-center py-4">
                    <i className="bi bi-house text-muted" style={{ fontSize: '3rem' }}></i>
                    <p className="text-muted mt-2">No products selected for home page.</p>
                  </div>
                </div>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseUploadedProduct}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Search Bar */}
      <div className="search-container mb-4">
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

      <div className="products-page " style={{overflow:'hidden'}}>
        <div className="row">
          {/* Sidebar */}
          <aside className="col-12 col-lg-3 mb-4 mb-lg-0 ">
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
          <main className="col-12 col-lg-9 ">
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
                      <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3 ">
                        <div className="product-card card h-100 shadow-sm">
                          {/* Product Image */}
                          <div className="card-img-container">
                            <img
                              src={`${serverUrl}/Uploads/${product?.productImage}`}
                              alt={product.productName}
                              className="card-img-top"
                            />
                            {product.homeSelected && (
                              <div className="home-badge">
                                <i className="bi bi-house-fill"></i>
                              </div>
                            )}
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
                              {truncateText(product.productName, 30)}
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

                            {/* Action Buttons */}
                            <div className="action-buttons">
                              <div className="d-flex  justify-content-between mb-2">

                                <EditProduct product={product} />
                                <button
                                  className=" btn btn-outline-danger "
                                  onClick={() => handleDeleteProduct(product._id)}
                                >
                                  <i className="bi bi-trash"></i>
                                  <span className=" d-sm-inline ms-1">Delete</span>
                                </button>
                              </div>

                              <button
                                className={`btn btn-sm w-100 ${product.homeSelected ? 'btn-danger' : 'btn-success'
                                  }`}
                                onClick={() => handleToggleHome(product._id)}
                                disabled={!product.homeSelected && selectedCount >= maxHomeProducts}
                                title={
                                  !product.homeSelected && selectedCount >= maxHomeProducts
                                    ? 'Maximum 4 products allowed on home page'
                                    : ''
                                }
                              >
                                {product.homeSelected ? (
                                  <>
                                    <i className="bi bi-house-dash me-1"></i>
                                    Remove from Home
                                  </>
                                ) : (
                                  <>
                                    <i className="bi bi-house-add me-1"></i>
                                    Add to Home
                                  </>
                                )}
                              </button>
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
  )
}

export default DisplayHomeProducts



// // DisplayHomeProducts.jsx
// import './Adminstyles/DisplayHomeProducts.css'

// import React, { useContext, useEffect, useState } from 'react'
// import { Button, Form, Modal } from 'react-bootstrap';
// import { DeleteProductAPI, GetAllProductAPI, GetHomeProductAPI, ToggleHomeProductAPI } from '../../Services/allAPI';
// import { serverUrl } from '../../Services/serverUrl';
// import EditProduct from '../../components/EditProduct';
// import { Bounce, toast, ToastContainer } from 'react-toastify';
// import { editProductResponseContext } from '../../ContextAPI/ContextShare';

// function DisplayHomeProducts() {
//   const { editProductResponse } = useContext(editProductResponseContext)

//   const [uploadedProductshow, setUploadedProductShow] = useState(false);
//   const handleCloseUploadedProduct = () => setUploadedProductShow(false);
//   const handleShowUploadedProduct = () => setUploadedProductShow(true);

//   const [currentPage, setCurrentPage] = useState(1)
//   const [category, setCategory] = useState("");
//   const [totalPages, setTotalPages] = useState(1)
//   const [searchKey, setSearchKey] = useState("")
//   const [allProducts, setAllProducts] = useState([])
//   const [homeProducts, setHomeProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [limit, setLimit] = useState(8);

//   // server-provided values
//   const [pageSize, setPageSize] = useState(0)
//   const [serverLimit, setServerLimit] = useState(limit)

//   const maxHomeProducts = 4;
//   const selectedCount = homeProducts.length;

//   const currencyFormatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR'
//   });

//   const truncateText = (text, maxLength) => {
//     if (!text) return '';
//     return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
//   };

//   /* ---------- API calls ---------- */
//   const getAllProducts = async () => {
//     setLoading(true);
//     try {
//       const result = await GetAllProductAPI(searchKey, currentPage, limit, category);
//       // debug log
//       console.log('getAllProducts debug', { searchKey, currentPage, limit, category, response: result?.data });

//       if (result?.status === 200) {
//         setAllProducts(result.data.data || []);
//         // read pagination fields returned by server (if provided)
//         const pg = result.data.pagination || {};
//         setTotalPages(pg.totalPages ?? 1);
//         setPageSize(pg.pageSize ?? (result.data.data ? result.data.data.length : 0));
//         setServerLimit(pg.limit ?? limit);
//       } else {
//         console.error('GetAllProductAPI returned non-200:', result);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const getHomeProducts = async () => {
//     try {
//       const result = await GetHomeProductAPI();
//       if (result?.status === 200) {
//         setHomeProducts(result.data || []);
//       } else {
//         toast.error("Failed to fetch home Products");
//       }
//     } catch (err) {
//       toast.error("Failed to fetch home Products");
//     }
//   }

//   const handleDeleteProduct = async (id) => {
//     const token = sessionStorage.getItem("token")
//     if (!token) return toast.warn("PLEASE LOGIN");

//     const reqHeader = {
//       "Authorization": `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     };

//     try {
//       const result = await DeleteProductAPI(id, reqHeader);
//       if (result?.status === 200) {
//         toast.success("Product Deleted")
//         // refetch
//         getAllProducts();
//         getHomeProducts();
//       } else {
//         toast.error("Error Deleting Product")
//       }
//     } catch (err) {
//       toast.error("Error Deleting Product");
//       console.error(err);
//     }
//   }

//   const handleToggleHome = async (id) => {
//     const token = sessionStorage.getItem("token");
//     if (!token) return toast.warn("PLEASE LOGIN");

//     const reqHeader = {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     }
//     try {
//       const result = await ToggleHomeProductAPI(id, reqHeader);
//       if (result?.status === 200) {
//         toast.success(result.data?.message ?? "Updated")
//         // refresh
//         getAllProducts();
//         getHomeProducts();
//       } else {
//         toast.error(result.response?.data?.error || "Failed to update home Product")
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error updating home product")
//     }
//   }

//   /* ---------- Pagination handlers ---------- */
//   const handlePrev = () => { if (currentPage > 1) setCurrentPage(p => p - 1); }
//   const handleNext = () => { if (currentPage < totalPages) setCurrentPage(p => p + 1); }
//   const handlePageClick = (page) => setCurrentPage(page)

//   /* ---------- Responsive limit logic (atomic) ---------- */
//   const updateLimit = () => {
//     const width = window.innerWidth;
//     if (width < 576) return 4;   // phones
//     if (width < 768) return 6;   // small tablets
//     if (width < 992) return 8;   // tablets
//     return 12;                   // desktop
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const newLimit = updateLimit();
//       setLimit(prev => {
//         if (prev !== newLimit) {
//           setCurrentPage(1); // reset page together with limit change
//           return newLimit;
//         }
//         return prev;
//       });
//     };

//     handleResize(); // initial
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ---------- Data fetch effects ---------- */
//   useEffect(() => {
//     getAllProducts();
//     getHomeProducts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [editProductResponse, searchKey, currentPage, category, limit]);

//   /* ---------- UI ---------- */
//   return (
//     <>
//       <div className="mb-3">
//         <a href="/booked" className="fw-bold text-info back-link">
//           <i className="fa-solid fa-arrow-left me-2"></i>Back
//         </a>
//       </div>

//       <div className="text-center mb-4">
//         <h2 className="text-info fw-bold mb-2">Home Products</h2>
//         <p className="text-muted">Here you can manage the products displayed on the home page.</p>
//       </div>

//       <div className="mb-4 text-center">
//         <Button className="btn btn-info" onClick={handleShowUploadedProduct}>
//           View Home Products ({selectedCount}/{maxHomeProducts})
//         </Button>

//         <Modal show={uploadedProductshow} onHide={handleCloseUploadedProduct} backdrop="static" keyboard={false} size="lg">
//           <Modal.Header closeButton>
//             <Modal.Title className="text-info">Home Products ({selectedCount}/{maxHomeProducts})</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="row g-3">
//               {homeProducts.length > 0 ? (
//                 homeProducts.map((item) => (
//                   <div key={item._id} className="col-12 col-sm-6 col-md-3 col-lg-3">
//                     <div className="card h-100 shadow-sm">
//                       <div className="card-img-container">
//                         <img src={`${serverUrl}/Uploads/${item.productImage}`} className="card-img-top" alt={item.productName} />
//                       </div>
//                       <div className="card-body text-center p-2">
//                         <p className="text-muted small category-text">{item.productCategory}</p>
//                         <h6 className="card-title product-name">{truncateText(item.productName, 25)}</h6>
//                         <div className="price-section">
//                           <del className="text-muted original-price">{currencyFormatter.format(item.productPrice)}</del>
//                           <p className="text-success fw-bold offer-price mb-2">{currencyFormatter.format(item.productOfferPrice)}</p>
//                         </div>
//                         <Button variant="danger" size="sm" className="w-100" onClick={() => handleToggleHome(item._id)}>
//                           <i className="bi bi-house-dash me-1"></i>Remove
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-12">
//                   <div className="text-center py-4">
//                     <i className="bi bi-house text-muted" style={{ fontSize: '3rem' }}></i>
//                     <p className="text-muted mt-2">No products selected for home page.</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseUploadedProduct}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>

//       <div className="search-container mb-4">
//         <div className="search-bar">
//           <input type="text" placeholder="Search products..." className="form-control search-input" onChange={(e) => { setSearchKey(e.target.value); setCurrentPage(1); }} value={searchKey} />
//           <button className="btn btn-info search-btn" onClick={() => setCurrentPage(1)}><i className="bi bi-search me-1"></i>Search</button>
//         </div>
//       </div>

//       <div className="products-page" style={{ overflow: 'hidden' }}>
//         <div className="row">
//           <aside className="col-12 col-lg-3 mb-4 mb-lg-0 ">
//             <div className="sidebar-content">
//               <h5 className="mb-3 text-info fw-bold"><i className="bi bi-funnel me-2"></i>Categories</h5>
//               <ul className="category-list">
//                 <li className={category === "" ? "active-category" : ""} onClick={() => { setCategory(""); setCurrentPage(1); }}><i className="bi bi-grid me-2"></i>All Products</li>
//                 <li className={category === "Parts" ? "active-category" : ""} onClick={() => { setCategory("Parts"); setCurrentPage(1); }}><i className="bi bi-gear me-2"></i>Parts</li>
//                 <li className={category === "Accessories" ? "active-category" : ""} onClick={() => { setCategory("Accessories"); setCurrentPage(1); }}><i className="bi bi-plus-circle me-2"></i>Accessories</li>
//                 <li className={category === "Oil" ? "active-category" : ""} onClick={() => { setCategory("Oil"); setCurrentPage(1); }}><i className="bi bi-droplet me-2"></i>Oil</li>
//               </ul>
//             </div>
//           </aside>

//           <main className="col-12 col-lg-9 ">
//             {loading ? (
//               <div className="text-center py-5">
//                 <div className="spinner-border text-info" role="status"><span className="visually-hidden">Loading...</span></div>
//                 <p className="mt-2 text-muted">Loading products...</p>
//               </div>
//             ) : (
//               <>
//                 <div className="row g-3 mb-4">
//                   {allProducts?.length > 0 ? (
//                     allProducts.map((product) => (
//                       <div key={product._id} className="col-12 col-sm-6 col-md-4 col-xl-3 ">
//                         <div className="product-card card h-100 shadow-sm">
//                           <div className="card-img-container">
//                             <img src={`${serverUrl}/Uploads/${product?.productImage}`} alt={product.productName} className="card-img-top" />
//                             {product.homeSelected && (<div className="home-badge"><i className="bi bi-house-fill"></i></div>)}
//                           </div>

//                           <div className="card-body d-flex flex-column p-3">
//                             <div className="category-section"><span className="category-badge">{product.productCategory || 'N/A'}</span></div>
//                             <h6 className="product-name card-title mb-2">{truncateText(product.productName, 30)}</h6>

//                             <div className="price-section mb-3 mt-auto">
//                               <div className="original-price"><del className="text-muted">{currencyFormatter.format(product.productPrice)}</del></div>
//                               <div className="offer-price text-success fw-bold">{currencyFormatter.format(product.productOfferPrice)}</div>
//                             </div>

//                             <div className="action-buttons">
//                               <div className="d-flex justify-content-between mb-2">
//                                 <EditProduct product={product} />
//                                 <button className="btn btn-outline-danger" onClick={() => handleDeleteProduct(product._id)}>
//                                   <i className="bi bi-trash"></i><span className="d-sm-inline ms-1">Delete</span>
//                                 </button>
//                               </div>

//                               <button
//                                 className={`btn btn-sm w-100 ${product.homeSelected ? 'btn-danger' : 'btn-success'}`}
//                                 onClick={() => handleToggleHome(product._id)}
//                                 disabled={!product.homeSelected && selectedCount >= maxHomeProducts}
//                                 title={!product.homeSelected && selectedCount >= maxHomeProducts ? 'Maximum 4 products allowed on home page' : ''}
//                               >
//                                 {product.homeSelected ? (<><i className="bi bi-house-dash me-1"></i>Remove from Home</>) : (<><i className="bi bi-house-add me-1"></i>Add to Home</>)}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="col-12">
//                       <div className="text-center py-5">
//                         <i className="bi bi-inbox text-muted" style={{ fontSize: '4rem' }}></i>
//                         <h4 className="text-muted mt-3">No Products Found</h4>
//                         <p className="text-muted">{searchKey ? 'Try adjusting your search terms' : 'No products available in this category'}</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {totalPages > 1 && (
//                   <div className="pagination-container">
//                     <nav aria-label="Products pagination">
//                       <ul className="pagination justify-content-center mb-0">
//                         <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                           <button className="page-link" onClick={handlePrev} disabled={currentPage === 1}>
//                             <i className="bi bi-chevron-left"></i><span className="d-sm-inline ms-1">{limit === 4 ? `<<` : `Prev`}</span>
//                           </button>
//                         </li>

//                         {[...Array(totalPages)].map((_, index) => {
//                           const pageNum = index + 1;
//                           return (
//                             <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
//                               <button className="page-link" onClick={() => handlePageClick(pageNum)}>{pageNum}</button>
//                             </li>
//                           );
//                         })}

//                         <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                           <button className="page-link" onClick={handleNext} disabled={currentPage === totalPages}>
//                             <span className="d-sm-inline me-1">{limit === 4 ? `>>` : `Next`}</span><i className="bi bi-chevron-right"></i>
//                           </button>
//                         </li>
//                       </ul>
//                     </nav>

//                     <div className="pagination-info text-center mt-2">
//                       <small className="text-muted">
//                         Page {currentPage} of {totalPages} | Showing {pageSize || allProducts.length} item{(pageSize || allProducts.length) !== 1 ? 's' : ''} on this page (server limit: {serverLimit})
//                       </small>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </main>
//         </div>
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
//     </>
//   )
// }

// export default DisplayHomeProducts
