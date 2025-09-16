// import React from "react";
// import { Link } from "react-router-dom";

// function Booked() {
//   return (
//     <>

//       <a
//         href="/admin"
//         className="fw-bold text-info d-inline-flex align-items-center"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>
//       <div className="container-fluid booked-container py-4">
//         {/* Back Button */}
//         <div className="mb-3">
//         </div>

//         {/* Tabs */}
//         <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
//           <div className="tab-card bg-info text-white px-3 py-2 rounded">
//             Services
//           </div>
//           <Link
//             style={{ textDecoration: "none" }}
//             to={"/confirmedorders"}
//           >
//             <div className="tab-card bg-info text-white px-3 py-2 rounded">
//               Confirmed Orders
//             </div>
//           </Link>
//         </div>

//         {/* Table */}
//         <div className="table-responsive">
//           <table className="table table-striped table-hover table-bordered align-middle">
//             <thead className="text-info text-center">
//               <tr className="bg-info">
//                 <th className="bg-info text-light">#</th>
//                 <th className="bg-info text-light">Name</th>
//                 <th className="bg-info text-light">Email</th>
//                 <th className="bg-info text-light">Phone No:</th>
//                 <th className="bg-info text-light">Description</th>
//                 <th
//                   style={{ minWidth: "150px" }}
//                   className="bg-info text-light"
//                 >
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-info fw-bolder text-center">
//               <tr>
//                 <td>1</td>
//                 <td>Dhanish</td>
//                 <td>nishal@gmail.com</td>
//                 <td>6383844274686</td>
//                 <td>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
//                   magni deleniti reiciendis saepe tempora libero, cumque nesciunt
//                 </td>
//                 <td>
//                   <div className="d-flex flex-wrap justify-content-center gap-2">
//                     <button className="btn btn-danger btn-sm">Delete</button>
//                     <button className="btn btn-info btn-sm">Confirm</button>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Dhanish</td>
//                 <td>nishal@gmail.com</td>
//                 <td>6383844274686</td>
//                 <td>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
//                   magni deleniti reiciendis saepe tempora libero, cumque nesciunt.
//                 </td>
//                 <td>
//                   <div className="d-flex flex-wrap justify-content-center gap-2">
//                     <button className="btn btn-danger btn-sm">Delete</button>
//                     <button className="btn btn-info btn-sm">Confirm</button>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </>
//   );
// }

// export default Booked;


import './Adminstyles/Booked.css'

import React, { useEffect, useState } from "react";
import { GetAllBookServiceApi, UpdateBookServiceStatusApi } from "../../Services/allAPI";
import { toast } from "react-toastify";

function Booked() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 10; 

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warn("Please login");
      return;
    }

    const reqHeader = { Authorization: `Bearer ${token}` };

    try {
      const result = await GetAllBookServiceApi(reqHeader);
      if (result.status === 200) {
        setBookings(result.data);
      } else {
        toast.error("Failed to fetch bookings");
      }
    } catch {
      toast.error("Error while fetching bookings");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = { Authorization: `Bearer ${token}` };

    try {
      const result = await UpdateBookServiceStatusApi(id, { status: newStatus }, reqHeader);
      if (result.status === 200) {
        toast.success(`Status updated to ${newStatus}`);
        fetchBookings(); // refresh list
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Error while updating status");
    }
  };

  // ✅ Apply filter + search
  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = filter === "All" || b.status === filter;

    const bookingDate = new Date(b.createdAt).toLocaleDateString();
    const matchesSearch =
      b.BScustomerName.toLowerCase().includes(search.toLowerCase()) ||
      b.BScustomerEmail.toLowerCase().includes(search.toLowerCase()) ||
      String(b.BScustomerPhone).includes(search) ||
      bookingDate.includes(search);

    return matchesStatus && matchesSearch;
  });

  // ✅ Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mt-4">
      <h3 className="text-info">All Booked Services</h3>

      {/* Filter & Search Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <label className="me-2 fw-bold">Filter by Status:</label>
          <select
            className="form-select d-inline-block w-auto"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1); // reset to first page on filter change
            }}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className='' style={{overflowX:'auto'}}>
          <input
            type="text"
            placeholder="Search by name, email, phone, date..."
            className="form-control"
            style={{ width: "280px" }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // reset page on search
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className='table-responsive'>
      <table className="table table-bordered table-striped"  >
        <thead className="table-info ">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Request</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.length > 0 ? (
            currentBookings.map((b) => (
              <tr key={b._id}>
                <td>{b.BScustomerName}</td>
                <td>{b.BScustomerEmail}</td>
                <td>{b.BScustomerPhone}</td>
                <td>{b.BScustomerRequest}</td>
                <td>
                  <span
                    className={`badge ${b.status === "Pending"
                      ? "bg-warning"
                      : b.status === "Approved"
                        ? "bg-success"
                        : b.status === "Completed"
                          ? "bg-primary"
                          : "bg-danger"
                      }`}
                  >
                    {b.status}
                  </span>                  
                </td> 
                <td className="break-commas">{new Date(b.createdAt).toLocaleString().replace(/,/g, ",\n")}</td>
                <td style={{minWidth:"150px"}}>
                  <select
                    className="form-select"
                    value={b.status}
                    onChange={(e) => handleStatusChange(b._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No bookings found
              </td>
            </tr>
          )}
        </tbody>
      </table>
          </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <nav>
            <ul className="pagination">
              

              <li className="page-item">
                <button
                  className="page-link"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {pageNumbers.map((num) => (
                <li key={num} className={`page-item ${currentPage === num ? "active" : ""}`} >
                  <button className="page-link" onClick={() => setCurrentPage(num)}>
                    {num}
                  </button>
                </li>
              ))}

              

              <li className="page-item">
                <button
                  className="page-link"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Booked;
