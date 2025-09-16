// import React from 'react'

// function FreeQuote() {
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
//                                     Request/Issue
//                                 </th>
//                                 <th className="bg-info text-light" style={{ width: "120px" }}>
//                                     Email
//                                 </th>

//                                 <th className="bg-info text-light" style={{ width: "120px" }}>
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-info fw-bolder">
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
//                                     dhanish123@gmail.com
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


//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FreeQuote





















// import React, { useEffect, useState } from "react";
// import { Table, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { GetFreeQuotesApi, UpdateFreeQuoteApi, DeleteFreeQuoteApi } from "../../Services/allAPI";


// function FreeQuote() {
//   const [quotes, setQuotes] = useState([]);

//   // fetch all quotes
//   const fetchQuotes = async () => {
//     try {
//       const result = await GetFreeQuotesApi();
//       if (result.status === 200) {
//         setQuotes(result.data);
//       }
//     } catch (err) {
//       toast.error("Failed to fetch free quotes");
//     }
//   };

//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   const handleStatusChange = async (id, status) => {
//     try {
//       await UpdateFreeQuoteApi(id, { status });
//       toast.success("Status updated");
//       fetchQuotes();
//     } catch {
//       toast.error("Failed to update status");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await DeleteFreeQuoteApi(id);
//       toast.success("Quote deleted");
//       fetchQuotes();
//     } catch {
//       toast.error("Failed to delete quote");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-info mb-3">Free Quote Requests</h3>
//       <Table bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Bike Model</th>
//             <th>Message</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody >
//           {/* {quotes.map((q) => ( */}
//             <tr key="{q._id}">
//               <td>jenkgnerjkgnejkgnejrngjknergn g erg </td>
//               <td>jnjerjvjevnjevnvernvnervnvrvkrnvjlrevjer</td>
//               <td>klmerkkrnvnkrnvknvnvvrlvenv</td>
//               <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, natus hic. Iusto, praesentium atque sunt ab sint dolor, neque earum et vel nam doloremque deleniti qui vero reiciendis animi accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex eos quod optio corporis! Voluptatum inventore, distinctio, corporis dolorem nisi cum laboriosam eum, laudantium dolorum earum ea facere nostrum libero!</td>
//               <td> cre vklre vkrevk</td>
//               <td className="d-grid gap-2 d-md-flex ">
//                 <Button size="sm" variant="success" onClick={() => handleStatusChange(q._id, "approved")}>Approve</Button>{" "}
//                 <Button size="sm" variant="warning" onClick={() => handleStatusChange(q._id, "rejected")}>Reject</Button>{" "}
//                 <Button size="sm" variant="danger" onClick={() => handleDelete(q._id)}>Delete</Button>
//               </td>
//             </tr>
//           {/* ))} */}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default FreeQuote;










import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
    GetFreeQuotesApi,
    UpdateFreeQuoteApi,
    DeleteFreeQuoteApi,
    SendCustomEmailApi,
} from "../../Services/allAPI";


function FreeQuote() {
    const [quotes, setQuotes] = useState([]);
    const [expandedMsg, setExpandedMsg] = useState({}); // track expanded rows
    const [loading, setLoading] = useState(false)
    const [sending, setSending] = useState(false);


    // fetch all quotes
    const fetchQuotes = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        setLoading(true)
        try {
            const result = await GetFreeQuotesApi(reqHeader);
            if (result.status === 200) {
                setQuotes(result.data);
            }
        } catch (err) {
            toast.error("Failed to fetch free quotes");
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    const handleStatusChange = async (id, status) => {
        const token = sessionStorage.getItem("token")

        const reqBody = {
            status
        }
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            await UpdateFreeQuoteApi(id, reqBody, reqHeader);
            toast.success("Status updated");
            fetchQuotes();
        } catch (err) {
            // toast.error("Failed to update status");
            toast.error(err?.response?.data?.message || "Failed to update status");

        }
    };

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            await DeleteFreeQuoteApi(id, reqHeader);
            toast.success("Quote deleted");
            fetchQuotes();
        } catch {
            toast.error("Failed to delete quote");
        }
    };

    // toggle read more/less
    const toggleReadMore = (id) => {
        setExpandedMsg((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    ///mannual email

    const [showModal, setShowModal] = useState(false);
    const [emailData, setEmailData] = useState({ email: "", subject: "", message: "" });

    const openEmailModal = (email) => {
        setEmailData({ ...emailData, email });
        setShowModal(true);
    };

    const handleSendEmail = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = { Authorization: `Bearer ${token}` };
        setSending(true)
        try {
            const result = await SendCustomEmailApi(emailData, reqHeader);
            if (result.status === 200) {
                toast.success("Email sent successfully!");
                setShowModal(false);
            }
        } catch (err) {
            toast.error("Failed to send email");
        } finally{
            setSending(false)
        }
    };



    return (
        loading ?
            <div className="container mt-4">
                <h3 className="text-info mb-3 text-center">Free Quote Requests</h3>
                <p className="text-center">Loading...</p>
            </div> :
            (
                <div className="container mt-4">
                    <h3 className="text-info mb-3 text-center">Free Quote Requests</h3>
                    <Table bordered hover responsive className="align-middle text-center">
                        <thead className="table-info ">
                            <tr>
                                <th style={{ width: "15%" }}>Name</th>
                                <th style={{ width: "20%" }}>Email</th>
                                <th style={{ width: "15%" }}>Bike Model</th>
                                <th style={{ width: "25%" }}>Message</th>
                                <th style={{ width: "10%" }}>Status</th>
                                <th style={{ width: "15%" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotes.length > 0 ? (
                                quotes.map((q) => (
                                    <tr key={q._id}>
                                        {/* Name with max 18 chars */}
                                        <td style={{ wordBreak: "break-word", minWidth: "150px" }}>
                                            {q.FQname.length > 18
                                                ? q.FQname.slice(0, 18) + "..."
                                                : q.FQname}
                                        </td>

                                        {/* Email */}
                                        <td style={{ wordBreak: "break-word", minWidth: "300px" }}>{q.FQemail}</td>

                                        {/* Bike Model */}
                                        <td style={{ wordBreak: "break-word", minWidth: "130px" }}>{q.FQbikeModel}</td>

                                        {/* Message with 4 line clamp */}
                                        <td className="text-start" style={{ whiteSpace: "pre-wrap" }}>
                                            <div
                                                style={{
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: expandedMsg[q._id] ? "unset" : 4,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {q.FQmessage}
                                            </div>
                                            {q.FQmessage.length > 150 && (
                                                <Button
                                                    size="sm"
                                                    variant="link"
                                                    className="p-0 mt-1"
                                                    onClick={() => toggleReadMore(q._id)}
                                                >
                                                    {expandedMsg[q._id] ? "Read less" : "Read more"}
                                                </Button>
                                            )}
                                        </td>

                                        {/* Status */}
                                        <td>
                                            <span className={`badge text-capitalize ${q.status === "approved"
                                                ? "bg-success"
                                                : q.status === "rejected"
                                                    ? "bg-danger"
                                                    : "bg-warning text-dark"
                                                }`}>
                                                {q.status}
                                            </span>
                                        </td>
                                        {/* Actions - responsive */}
                                        <td className="d-flex flex-column flex-md-row justify-content-center gap-2">
                                            <Button
                                                size="sm"
                                                variant="success"
                                                onClick={() => handleStatusChange(q._id, "approved")}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="warning"
                                                onClick={() => handleStatusChange(q._id, "rejected")}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="danger"
                                                onClick={() => window.confirm("are you sure") && handleDelete(q._id)}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="info"
                                                onClick={() => openEmailModal(q.FQemail)}
                                            >
                                                Send Email
                                            </Button>


                                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Send Email</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group>
                                                            <Form.Label>To</Form.Label>
                                                            <Form.Control type="email" value={emailData.email} readOnly />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Subject</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                value={emailData.subject}
                                                                onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Message</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={4}
                                                                value={emailData.message}
                                                                onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                                                            />
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                                                    
                                                    <Button variant="info" onClick={handleSendEmail} disabled={sending}>
                                                        {sending ? "Sending..." : "Send"}
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">
                                        No free quotes found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            )
    );
}

export default FreeQuote;
