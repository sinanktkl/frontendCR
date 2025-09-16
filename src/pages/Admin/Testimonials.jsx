// import React from 'react'
// import { FaStar } from 'react-icons/fa';
// import DummyyImg from '../../assets/profile_image_dummy.jpg';

// function Testimonials() {
//   return (
//     <>
//       <div className='mt-5'>
//   <a href="/admin" style={{ textDecoration: "none", color: "#007bff",fontWeight:'bolder' }}>
//     <i className="fa-solid fa-arrow-left"></i> Back</a>

//   <div
//     style={{
//       background: "#fff",
//       padding: "10px",
//       borderRadius: "8px",
//       marginTop: "15px",
//     }}
//   >
//     <table className="table table-striped table-hover  table-bordered  ">
//       <thead  className='text-info text-center'>
//         <tr  className='bg-info'>
//           <th className='bg-info text-light'>#</th>
//           <th className='bg-info text-light'>Customer Name</th>
//           <th className='bg-info text-light'>Vehicle Name</th>
//           <th style={{width: "500px"}} className='bg-info text-light'>Testimonial Text</th>
//           <th className='bg-info text-light'>Image</th>
//           <th style={{minWidth: "100px"}} className='bg-info text-light'>Rating</th>
//           <th style={{minWidth: "100px"}} className='bg-info text-light'>Action</th>
//         </tr>
//       </thead>
//       <tbody  className='text-info fw-bolder text-center'>
//         <tr>
//           <td>1</td>
//           <td>Dhanish</td>
//           <td>Unicorn</td>
//           <td><p style={{
//           maxWidth: "150px",
//           whiteSpace: "nowrap",
//           overflow: "hidden",
//           textOverflow: "ellipsis"
//         }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad non dolorem voluptas magnam fugit natus commodi minima accusamus sint ducimus eaque quaerat labore, deserunt expedita harum repudiandae, quis voluptatum.</p></td>
//           <td><img src={DummyyImg} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="Testimonial" /></td>
//           <td><p><FaStar/></p></td>
//             <td >
//                 <button className='btn btn-danger btn-sm me-2'>Delete</button>
//                 <button className='btn btn-info btn-sm me-2'>Confirm</button>
//             </td>

//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Sinan</td>
//           <td>Access</td>
//           <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis commodi sint sit sequi qui similique impedit velit dolore eum distinctio tenetur iste reiciendis dignissimos, quod aliquam, at facere deleniti!</td>
//           <td><img src={DummyyImg} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="Testimonial" /></td>
//           <td>
//           <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>

//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
//     </>
//   )
// }

// export default Testimonials















// import './Adminstyles/Testimonials.css';
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import DummyyImg from "../../assets/profile_image_dummy.jpg";
// import { useEffect } from "react";
// // import { Tooltip } from "bootstrap";

// function Testimonials() {
//     useEffect(() => {
//         // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//         // [...tooltipTriggerList].forEach(el => new Tooltip(el));


//     }, []);
//     return (
//         <>
//             <a
//                 href="/admin"
//                 className='text-info'
//                 style={{
//                     textDecoration: "none",
//                     fontWeight: "bolder",
//                 }}
//             >
//                 <i className="fa-solid fa-arrow-left"></i> Back
//             </a>
//             <div className="mt-5">

//                 <div
//                     style={{
//                         background: "#fff",
//                         padding: "10px",
//                         borderRadius: "8px",
//                         marginTop: "15px",
//                         overflowX: "auto", // horizontal scroll on mobile
//                     }}
//                 >
//                     <table
//                         className="table table-striped table-hover table-bordered text-center"
//                         style={{
//                             tableLayout: "fixed", // important for max-width
//                             width: "100%",
//                         }}
//                     >
//                         <thead className="text-info">
//                             <tr className="bg-info">
//                                 <th className="bg-info text-light" style={{ width: "50px" }}>
//                                     #
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "150px" }}>
//                                     Customer Name
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "150px" }}>
//                                     Vehicle Name
//                                 </th>
//                                 <th
//                                     className="bg-info text-light"
//                                     style={{
//                                         width: "200px",
//                                         whiteSpace: "nowrap",
//                                         overflow: "hidden",
//                                         textOverflow: "ellipsis",
//                                     }}
//                                 >
//                                     Testimonial Text
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "120px" }}>
//                                     Image
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "100px" }}>
//                                     Rating
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "120px" }}>
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-info fw-bolder d-flex  align-items-center justify-content-center">
//                             <tr>
//                                 <td>1</td>
//                                 <td>Dhanish</td>
//                                 <td>Unicorn</td>
//                                 <td
//                                     style={{
//                                         whiteSpace: "nowrap",
//                                         overflow: "hidden",
//                                         textOverflow: "ellipsis",
//                                     }}
//                                 >
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
//                                     ad non dolorem voluptas magnam fugit natus commodi minima
//                                     accusamus sint ducimus eaque quaerat labore, deserunt expedita
//                                     harum repudiandae, quis voluptatum.
//                                 </td>
//                                 <td>
//                                     <img
//                                         src={DummyyImg}
//                                         style={{
//                                             width: "100px",
//                                             height: "100px",
//                                             objectFit: "cover",
//                                         }}
//                                         alt="Testimonial"
//                                     />
//                                 </td>
//                                 <td>
//                                     <FaStar />
//                                 </td>
//                                 <td >
//                                     <button className="btn btn-danger btn-sm m-1"
//                                     // data-bs-toggle="tooltip"
//                                     // data-bs-placement="top"
//                                     // title="Delete Testimonial"

//                                     >
//                                         <i className="fa-solid fa-trash"></i> Delete
//                                     </button>
//                                     <button className="btn btn-info btn-sm "
//                                     //  data-bs-toggle="tooltip"
//                                     //     data-bs-placement="top"
//                                     //     title="Confirm Testimonial"
//                                     >
//                                         <i className="fa-solid fa-check"></i> Confirm
//                                     </button>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td>2</td>
//                                 <td>Sinan</td>
//                                 <td>Access</td>
//                                 <td
//                                     style={{
//                                         whiteSpace: "nowrap",
//                                         overflow: "hidden",
//                                         textOverflow: "ellipsis",
//                                     }}
//                                 >
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                     Voluptatum officiis commodi sint sit sequi qui similique
//                                     impedit velit dolore eum distinctio tenetur iste reiciendis
//                                     dignissimos, quod aliquam, at facere deleniti!
//                                 </td>
//                                 <td>
//                                     <img
//                                         src={DummyyImg}
//                                         style={{
//                                             width: "100px",
//                                             height: "100px",
//                                             objectFit: "cover",
//                                         }}
//                                         alt="Testimonial"
//                                     />
//                                 </td>
//                                 <td>
//                                     <FaStar />
//                                     <FaStar />
//                                     <FaStar />
//                                     <FaStar />
//                                     <FaStar />
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-danger btn-sm m-1">
//                                         <i className="fa-solid fa-trash"></i> Delete
//                                     </button>
//                                     <button className="btn btn-info btn-sm">
//                                         <i className="fa-solid fa-check"></i> Confirm
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Testimonials;






// import './Adminstyles/Testimonials.css';
// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import DummyyImg from "../../assets/profile_image_dummy.jpg";
// import { GetTestimonyAPI, DeleteTestimonyAPI, ApproveTestimonyAPI } from "../../Services/allAPI"; // Create APIs
// import { serverUrl } from '../../Services/serverUrl';

// function Testimonials() {
//     const [testimonials, setTestimonials] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchTestimonials = async () => {
//         setLoading(true);
//         try {
//             const result = await GetTestimonyAPI();
//             console.log(result);

//             if (result.status === 200) {
//                 setTestimonials(result.data);
//             }
//         } catch (err) {
//             console.error("Error fetching testimonials", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         // if (window.confirm("Are you sure you want to delete this testimonial?")) {
//             try {
//                 await DeleteTestimonyAPI(id);
//                 fetchTestimonials();
//             } catch (err) {
//                 console.error("Error deleting testimonial", err);
//             }
//         // }
//     };

//     const handleApprove = async (id) => {
//         try {
//             await ApproveTestimonyAPI(id);
//             fetchTestimonials();
//         } catch (err) {
//             console.error("Error confirming testimonial", err);
//         }
//     };

//     useEffect(() => {
//         fetchTestimonials();
//     }, []);

//     return (
//         <>
//             <a
//                 href="/admin"
//                 className='text-info back-link'
//             >
//                 <i className="fa-solid fa-arrow-left"></i> Back
//             </a>

//             <div className="admin-container mt-4">
//                 <h3 className="text-info mb-3">Manage Testimonials</h3>

//                 <div className="table-container text-center " style={{
//                               background: "#fff",
//                               padding: "10px",
//                               borderRadius: "8px",
//                               marginTop: "15px",
//                               overflowX: "auto", // horizontal scroll on mobile
//                           }}>
//                     {loading ? (
//                         <p className="text-center text-secondary">Loading testimonials...</p>
//                     ) : testimonials.length === 0 ? (
//                         <p className="text-center text-muted">No testimonials found.</p>
//                     ) : (
//                         <table className="table table-striped table-hover table-bordered  ">
//                             <thead className='text-center '>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Customer</th>
//                                     <th>Vehicle</th>
//                                     <th>Text</th>
//                                     <th>Image</th>
//                                     <th>Rating</th>
//                                     <th>Status</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className='text-center'>
//                                 {testimonials.map((item, index) => (
//                                     <tr key={item._id}>
//                                         <td>{index + 1}</td>
//                                         <td className=''>{item.customerName}</td>
//                                         <td>{item.customerVehicle}</td>
//                                         <td className="truncate-text" style={{maxWidth:"450px"}} >{item.customerText}</td>
//                                         <td>
//                                             <img
//                                                 src={item.customerImage ? `${serverUrl}/Uploads/${item.customerImage}` : DummyyImg}
//                                                 className="testimonial-img"
//                                                 alt="customerImage"
//                                                 style={{
//                                                     height: '130px',
//                                                     objectFit: 'contain',
//                                                     padding: '8px'
//                                                 }}
//                                             />
//                                         </td>
//                                         <td>
//                                             {[...Array(item.customerRating)].map((_, i) => (
//                                                 <FaStar key={i} color="#f39c12" />
//                                             ))}
//                                         </td>
//                                         <td>
//                                             <span
//                                                 className={`badge ${item.status === "approved" ? "bg-success" : "bg-warning text-dark"
//                                                     }`}
//                                             >
//                                                 {item.status || "pending"}
//                                             </span>
//                                         </td>
//                                         <td>
//                                             {item.status !== "approved" && (
//                                                 <button
//                                                     className="btn btn-sm btn-info me-2 mb-1"
//                                                     onClick={() => handleApprove(item._id)}
//                                                 >
//                                                     Confirm
//                                                 </button>
//                                             )}
//                                             <button
//                                                 className="btn btn-sm btn-danger mb-1"
//                                                 onClick={() => handleDelete(item._id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Testimonials;




import './Adminstyles/Testimonials.css';
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import DummyyImg from "../../assets/profile_image_dummy.jpg";
import { GetTestimonyAPI, DeleteTestimonyAPI, ApproveTestimonyAPI } from "../../Services/allAPI"; 
import { serverUrl } from '../../Services/serverUrl';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);
    const [expandedRows, setExpandedRows] = useState({}); // Track which row is expanded

    const fetchTestimonials = async () => {
        setLoading(true);
        try {
            const result = await GetTestimonyAPI();
            if (result.status === 200) {
                setTestimonials(result.data);
            }
        } catch (err) {
            console.error("Error fetching testimonials", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await DeleteTestimonyAPI(id);
            fetchTestimonials();
        } catch (err) {
            console.error("Error deleting testimonial", err);
        }
    };

    const handleApprove = async (id) => {
        try {
            await ApproveTestimonyAPI(id);
            fetchTestimonials();
        } catch (err) {
            console.error("Error confirming testimonial", err);
        }
    };

    const toggleReadMore = (id) => {
        setExpandedRows((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    return (
        <>
            <a href="/admin" className='text-info back-link'>
                <i className="fa-solid fa-arrow-left"></i> Back
            </a>

            <div className="admin-container mt-4">
                <h3 className="text-info mb-3 text-center">Manage Testimonials</h3>

                <div className="table-container text-center" style={{
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "15px",
                    overflowX: "auto"
                }}>
                    {loading ? (
                        <p className="text-center text-secondary">Loading testimonials...</p>
                    ) : testimonials.length === 0 ? (
                        <p className="text-center text-muted">No testimonials found.</p>
                    ) : (
                        <table className="table table-striped table-hover table-bordered">
                            <thead className='text-center'>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Vehicle</th>
                                    <th style={{ minWidth: "250px" }}>Text</th>
                                    <th>Image</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {testimonials.map((item, index) => {
                                    const isExpanded = expandedRows[item._id];
                                    const text = item.customerText || "";

                                    return (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.customerName}</td>
                                            <td>{item.customerVehicle}</td>
                                            <td className="responsive-text">
                                                {isExpanded ? text : text.slice(0, 100)}
                                                {text.length > 100 && (
                                                    <button
                                                        onClick={() => toggleReadMore(item._id)}
                                                        className="btn btn-link p-0 ms-1"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        {isExpanded ? "Read less" : "...Read more"}
                                                    </button>
                                                )}
                                            </td>
                                            <td>
                                                <img
                                                    src={item.customerImage ? `${serverUrl}/Uploads/${item.customerImage}` : DummyyImg}
                                                    className="testimonial-img"
                                                    alt="customer"
                                                    style={{
                                                        height: '130px',
                                                        objectFit: 'contain',
                                                        padding: '8px'
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                {[...Array(item.customerRating)].map((_, i) => (
                                                    <FaStar key={i} color="#f39c12" />
                                                ))}
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge ${item.status === "approved" ? "bg-success" : "bg-warning text-dark"}`}
                                                >
                                                    {item.status || "pending"}
                                                </span>
                                            </td>
                                            <td>
                                                {item.status !== "approved" && (
                                                    <button
                                                        className="btn btn-sm btn-info me-2 mb-1"
                                                        onClick={() => handleApprove(item._id)}
                                                    >
                                                        Confirm
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-sm btn-danger mb-1"
                                                    onClick={() => handleDelete(item._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}

export default Testimonials;
