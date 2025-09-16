// import React, { useState } from 'react';
// import { Button, Container, Row, Col, Modal, Form, ModalBody, ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Banner() {

//     const [homeshow, setHomeshow] = useState(false);
//     const handleCloseHome = () => setHomeshow(false);
//     const handleShowHome = () => setHomeshow(true);

//     const [productshow, setProductshow] = useState(false);
//     const handleCloseProduct = () => setProductshow(false);
//     const handleShowProduct = () => setProductshow(true);

//     const [serviceshow, setServiceshow] = useState(false);
//     const handleCloseService = () => setServiceshow(false);
//     const handleShowService = () => setServiceshow(true);

//     // const uploadedBanners = [];

//     return (
//         <>

//         <a
//           href="/uiedits"
//           className="fw-bold text-info d-inline-flex align-items-center mb-3"
//           style={{ textDecoration: "none" }}
//         >
//           <i className="fa-solid fa-arrow-left me-2"></i> Back
//         </a>
//             {/* <Link
//                 to="/uiedits"
//                 className="text-info"
//                 style={{
//                     position: "fixed",
//                     top: "100px",
//                     left: "20px",
//                     padding: "8px 14px",
//                     borderRadius: "8px",
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
//                 }}
//             >
//                 ← Back
//             </Link> */}

//             <Container className="text-center my-5">
//                 <Row className="g-3 justify-content-center">
//                     <Col xs="auto ">
//                         <Button variant="info" className='px-4 fw-bold shadow-sm' onClick={handleShowHome}>
//                             Home Banner
//                         </Button>

//                         <Modal
//                             show={homeshow}
//                             onHide={handleCloseHome}
//                             backdrop="static"
//                             keyboard={false}

//                         >
//                             <Modal.Header closeButton>
//                                 <Modal.Title className='text-info'>Home Banner</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                                 <Form>
//                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                         <Form.Label></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             autoFocus
//                                         />
//                                     </Form.Group>
//                                     <Form.Group
//                                         className="mb-3"
//                                         controlId="exampleForm.ControlTextarea1"
//                                     >
//                                         <Form.Label>Uploaded Banners:</Form.Label>
//                                         <ModalBody className='d-flex gap-1 flex-wrap justify-content-center'>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                         </ModalBody>
//                                     </Form.Group>
//                                 </Form>

//                             </Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={handleCloseHome}>
//                                     Close
//                                 </Button>
//                                 <Button variant="primary" className='btn-info'>Save Changes</Button>
//                             </Modal.Footer>
//                         </Modal>







//                     </Col>
//                     <Col xs="auto">
//                         <Button variant="info" className="px-4 fw-bold shadow-sm" onClick={handleShowProduct}>
//                             Product Banner
//                         </Button>

//                         <Modal
//                             show={productshow}
//                             onHide={handleCloseProduct}
//                             backdrop="static"
//                             keyboard={false}

//                         >
//                             <Modal.Header closeButton>
//                                 <Modal.Title className='text-info'>Product Banner</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                                 <Form>
//                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                         <Form.Label></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             autoFocus
//                                         />
//                                     </Form.Group>
//                                     <Form.Group
//                                         className="mb-3"
//                                         controlId="exampleForm.ControlTextarea1"
//                                     >
//                                         <Form.Label>Uploaded Banners:</Form.Label>
//                                         <ModalBody className='d-flex gap-1 flex-wrap justify-content-center'>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                         </ModalBody>
//                                     </Form.Group>
//                                 </Form>

//                             </Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={handleCloseProduct}>
//                                     Close
//                                 </Button>
//                                 <Button variant="primary" className='btn-info'>Save Changes</Button>
//                             </Modal.Footer>
//                         </Modal>
//                     </Col>
//                     <Col xs="auto">
//                         <Button variant="info" className="px-4 fw-bold shadow-sm" onClick={handleShowService}>
//                             Service Banner
//                         </Button>

//                         <Modal
//                             show={serviceshow}
//                             onHide={handleCloseService}
//                             backdrop="static"
//                             keyboard={false}

//                         >
//                             <Modal.Header closeButton>
//                                 <Modal.Title className='text-info'>Service Banner</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                                 <Form>
//                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                         <Form.Label></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             autoFocus
//                                         />
//                                     </Form.Group>
//                                     <Form.Group
//                                         className="mb-3"
//                                         controlId="exampleForm.ControlTextarea1"
//                                     >
//                                         <Form.Label>Uploaded Banners:</Form.Label>
//                                         <ModalBody className='d-flex gap-1 flex-wrap justify-content-center'>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                             <ListGroup style={{ maxHeight: '200px', maxWidth: '200px' }}>
//                                                 <img src="https://static.vecteezy.com/system/resources/previews/055/420/404/non_2x/mechanics-repair-engine-adjustment-mechanic-working-on-a-motorcycle-engine-in-a-workshop-photo.jpeg" alt="" />
//                                                 <Button variant="danger" size="sm" onClick={() => handleDeleteBanner(index)}>Delete</Button>
//                                             </ListGroup>
//                                         </ModalBody>
//                                     </Form.Group>
//                                 </Form>

//                             </Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={handleCloseService}>
//                                     Close
//                                 </Button>
//                                 <Button variant="primary" className='btn-info'>Save Changes</Button>
//                             </Modal.Footer>
//                         </Modal>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default Banner;



// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Row,
//   Col,
//   Modal,
//   Form,
//   ModalBody,
//   ListGroup,
// } from "react-bootstrap";

// function Banner() {
//   // States for modal visibility
//   const [homeshow, setHomeshow] = useState(false);
//   const [productshow, setProductshow] = useState(false);
//   const [serviceshow, setServiceshow] = useState(false);

//   // State for banners
//   const [homeBanners, setHomeBanners] = useState([]);
//   const [productBanners, setProductBanners] = useState([]);
//   const [serviceBanners, setServiceBanners] = useState([]);

//   // Handle file upload
//   const handleFileUpload = (event, type) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (type === "home") {
//           setHomeBanners([...homeBanners, reader.result]);
//         } else if (type === "product") {
//           setProductBanners([...productBanners, reader.result]);
//         } else if (type === "service") {
//           setServiceBanners([...serviceBanners, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle delete
//   const handleDeleteBanner = (type, index) => {
//     if (type === "home") {
//       setHomeBanners(homeBanners.filter((_, i) => i !== index));
//     } else if (type === "product") {
//       setProductBanners(productBanners.filter((_, i) => i !== index));
//     } else if (type === "service") {
//       setServiceBanners(serviceBanners.filter((_, i) => i !== index));
//     }
//   };

//   // Reusable modal
//   const renderModal = (show, handleClose, title, type, banners, setBanners) => (
//     <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//       <Modal.Header closeButton>
//         <Modal.Title className="text-info">{title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="file"
//               onChange={(e) => handleFileUpload(e, type)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Uploaded Banners:</Form.Label>
//             <ModalBody className="d-flex gap-2 flex-wrap justify-content-center">
//               {banners.length > 0 ? (
//                 banners.map((banner, index) => (
//                   <ListGroup
//                     key={index}
//                     style={{ maxHeight: "200px", maxWidth: "200px" }}
//                   >
//                     <img
//                       src={banner}
//                       alt="banner"
//                       style={{
//                         width: "100%",
//                         height: "120px",
//                         objectFit: "cover",
//                       }}
//                     />
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       className="mt-2"
//                       onClick={() => handleDeleteBanner(type, index)}
//                     >
//                       Delete
//                     </Button>
//                   </ListGroup>
//                 ))
//               ) : (
//                 <p className="text-muted">No banners uploaded yet.</p>
//               )}
//             </ModalBody>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="info">Save Changes</Button>
//       </Modal.Footer>
//     </Modal>
//   );

//   return (
//     <>
//       <a
//         href="/uiedits"
//         className="fw-bold text-info d-inline-flex align-items-center mb-3"
//         style={{ textDecoration: "none" }}
//       >
//         <i className="fa-solid fa-arrow-left me-2"></i> Back
//       </a>

//       <Container className="text-center my-5">
//         <Row className="g-3 justify-content-center">
//           <Col xs="auto">
//             <Button
//               variant="info"
//               className="px-4 fw-bold shadow-sm"
//               onClick={() => setHomeshow(true)}
//             >
//               Home Banner
//             </Button>
//             {renderModal(homeshow, () => setHomeshow(false), "Home Banner", "home", homeBanners, setHomeBanners)}
//           </Col>

//           <Col xs="auto">
//             <Button
//               variant="info"
//               className="px-4 fw-bold shadow-sm"
//               onClick={() => setProductshow(true)}
//             >
//               Product Banner
//             </Button>
//             {renderModal(productshow, () => setProductshow(false), "Product Banner", "product", productBanners, setProductBanners)}
//           </Col>

//           <Col xs="auto">
//             <Button
//               variant="info"
//               className="px-4 fw-bold shadow-sm"
//               onClick={() => setServiceshow(true)}
//             >
//               Service Banner
//             </Button>
//             {renderModal(serviceshow, () => setServiceshow(false), "Service Banner", "service", serviceBanners, setServiceBanners)}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Banner;



// import React, { useState, useEffect } from "react";
// import {
//     Button,
//     Container,
//     Row,
//     Col,
//     Modal,
//     Form,
//     ModalBody,
//     ListGroup,
// } from "react-bootstrap";
// import { AddBannerApi, DeleteBannerApi, GetBannerApi } from "../../Services/allAPI";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function Banner() {
//     const [homeshow, setHomeshow] = useState(false);
//     const [productshow, setProductshow] = useState(false);
//     const [serviceshow, setServiceshow] = useState(false);

//     const [homeBanners, setHomeBanners] = useState([]);
//     const [productBanners, setProductBanners] = useState([]);
//     const [serviceBanners, setServiceBanners] = useState([]);

//     // Load banners on mount
//     useEffect(() => {
//         fetchBanners("home", setHomeBanners);
//         fetchBanners("product", setProductBanners);
//         fetchBanners("service", setServiceBanners);
//     }, []);

//     // const handleFileUpload = async (e,category) => {
//     //     e.preventDefault();
//     //     const token = sessionStorage.getItem("token");
//     //     if (!token) {
//     //         toast.error("Please login first");
//     //         return;
//     //     }

//     //     const bannerImage = e.target.files[0];
//     //     if(!bannerImage) return;


//     //     const reqBody = new FormData();
//     //     reqBody.append("bannerImage", bannerImage)
//     //     reqBody.append("category", category)

//     //     const reqHeader = {
//     //         "Authorization": `Bearer ${token}`, // ✅ token
//     //         "Content-Type": "multipart/form-data", // ✅ for image
//     //     };

//     //     try {
//     //         const result = await AddBannerApi()
//     //         if (result.status == 201)
//     //     } catch (err) {

//     //     }
//     // }

//     const fetchBanners = async (category, setter) => {
//         const { data } = await GetBannerApi(category);
//         setter(data);
//     };

//     const handleFileUpload = async (e, category) => {
//   e.preventDefault();
//   const token = sessionStorage.getItem("token");
//   if (!token) {
//     toast.error("Please login first");
//     return;
//   }

//   const file = e.target.files[0];
//   if (!file) return;

//   const reqBody = new FormData();
//   reqBody.append("image", file);       // must match multer.single("image")
//   reqBody.append("category", category);

//   const reqHeader = {
//     Authorization: `Bearer ${token}`,
//   };

//   try {
//     const result = await AddBannerApi(reqBody, reqHeader);
//     if (result.status === 201) {
//       toast.success("Banner uploaded successfully!");
//       if (category === "home") setHomeBanners((prev) => [...prev, result.data]);
//       else if (category === "product") setProductBanners((prev) => [...prev, result.data]);
//       else setServiceBanners((prev) => [...prev, result.data]);
//     }
//   } catch (err) {
//     toast.error("Upload failed");
//     console.error(err);
//   }
// };


//     // const handleFileUpload = async (event, category) => {
//     //     const file = event.target.files[0];
//     //     if (!file) return;

//     //     const reader = new FileReader();
//     //     reader.onloadend = async () => {
//     //         const { data } = await AddBannerApi(category, reader.result);
//     //         if (category === "home") setHomeBanners((prev) => [...prev, data]);
//     //         else if (category === "product") setProductBanners((prev) => [...prev, data]);
//     //         else setServiceBanners((prev) => [...prev, data]);
//     //     };
//     //     reader.readAsDataURL(file);
//     // };

//     const handleDeleteBanner = async (category, id) => {
//         await DeleteBannerApi(id);
//         if (category === "home") setHomeBanners(homeBanners.filter((b) => b._id !== id));
//         else if (category === "product")
//             setProductBanners(productBanners.filter((b) => b._id !== id));
//         else setServiceBanners(serviceBanners.filter((b) => b._id !== id));
//     };

//     const renderModal = (show, handleClose, title, category, banners) => (
//         <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//             <Modal.Header closeButton>
//                 <Modal.Title className="text-info">{title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group className="mb-3">
//                         <Form.Control
//                             type="file"
//                             onChange={(e) => handleFileUpload(e, category)}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Uploaded Banners:</Form.Label>
//                         <ModalBody className="d-flex gap-2 flex-wrap justify-content-center">
//                             {banners.length > 0 ? (
//                                 banners.map((banner) => (
//                                     <ListGroup
//                                         key={banner._id}
//                                         style={{ maxHeight: "200px", maxWidth: "200px" }}
//                                     >
//                                         <img
//                                             src={banner.imageUrl}
//                                             alt="banner"
//                                             style={{
//                                                 width: "100%",
//                                                 height: "120px",
//                                                 objectFit: "cover",
//                                             }}
//                                         />
//                                         <Button
//                                             variant="danger"
//                                             size="sm"
//                                             className="mt-2"
//                                             onClick={() => handleDeleteBanner(category, banner._id)}
//                                         >
//                                             Delete
//                                         </Button>
//                                     </ListGroup>
//                                 ))
//                             ) : (
//                                 <p className="text-muted">No banners uploaded yet.</p>
//                             )}
//                         </ModalBody>
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );

//     return (
//         <Container className="text-center my-5">
//             <Row className="g-3 justify-content-center">
//                 <Col xs="auto">
//                     <Button variant="info" onClick={() => setHomeshow(true)}>
//                         Home Banner
//                     </Button>
//                     {renderModal(homeshow, () => setHomeshow(false), "Home Banner", "home", homeBanners)}
//                 </Col>

//                 <Col xs="auto">
//                     <Button variant="info" onClick={() => setProductshow(true)}>
//                         Product Banner
//                     </Button>
//                     {renderModal(productshow, () => setProductshow(false), "Product Banner", "product", productBanners)}
//                 </Col>

//                 <Col xs="auto">
//                     <Button variant="info" onClick={() => setServiceshow(true)}>
//                         Service Banner
//                     </Button>
//                     {renderModal(serviceshow, () => setServiceshow(false), "Service Banner", "service", serviceBanners)}
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Banner;






import React, { useState, useEffect } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    Modal,
    Form,
    ModalBody,
    ListGroup,
} from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddBannerApi, DeleteBannerApi, GetBannerApi } from "../../Services/allAPI";
import { serverUrl } from "../../Services/serverUrl";

function Banner() {
    const [homeshow, setHomeshow] = useState(false);
    const [productshow, setProductshow] = useState(false);
    const [serviceshow, setServiceshow] = useState(false);

    const [homeBanners, setHomeBanners] = useState([]);
    const [productBanners, setProductBanners] = useState([]);
    const [serviceBanners, setServiceBanners] = useState([]);

    const [bannerFile, setBannerFile] = useState(null);
    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerDescription, setBannerDescription] = useState("");

    // Load banners on mount
    useEffect(() => {
        fetchBanners("home", setHomeBanners);
        fetchBanners("product", setProductBanners);
        fetchBanners("service", setServiceBanners);
    }, []);

    const fetchBanners = async (category, setter) => {
        try {
            const { data } = await GetBannerApi(category);
            setter(data || []);
        } catch (err) {
            console.error("Failed to fetch banners:", err);
        }
    };

    const handleFileUpload = async ( category) => {
       
        const token = sessionStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            return;
        }

        if(!bannerFile){
            toast.error("please select a file");
            return;
        }

        const reqBody = new FormData();
        reqBody.append("bannerImage", bannerFile);//multer("bannerImage")
        reqBody.append("category", category);
        reqBody.append("bannerTitle", bannerTitle);
        reqBody.append("bannerDescription", bannerDescription);
                                            
        const reqHeader = {
            "Authorization": `Bearer ${token}`,

        };

        try {
            const result = await AddBannerApi(reqBody, reqHeader);
            if (result.status === 201) {
                toast.success("Banner uploaded successfully!");
                if (category === "home")
                    setHomeBanners((prev) => [...prev, result.data]);
                else if (category === "product")
                    setProductBanners((prev) => [...prev, result.data]);
                else setServiceBanners((prev) => [...prev, result.data]);

                setBannerFile(null);
                document.getElementById("bannerImageID").value=""
                setBannerTitle("");
                setBannerDescription("");
            } else {
                toast.error("Upload failed");
            }
        } catch (err) {
            toast.error("Upload failed");
            console.error(err);
        }
    };

    const handleDeleteBanner = async (category, id) => {
        const token = sessionStorage.getItem("token");
        const reqHeader = { Authorization: `Bearer ${token}` };

        try {
            const res = await DeleteBannerApi(id, reqHeader);
            if (res.status === 200) {
                toast.success("Banner deleted successfully");
                if (category === "home")
                    setHomeBanners(homeBanners.filter((b) => b._id !== id));
                else if (category === "product")
                    setProductBanners(productBanners.filter((b) => b._id !== id));
                else setServiceBanners(serviceBanners.filter((b) => b._id !== id));
            }
        } catch (err) {
            toast.error("Failed to delete banner");
            console.error(err);
        }
    };
const handleCloseModal = (setter) => {
    // reset fields
    setBannerFile(null);
    setBannerTitle("");
    setBannerDescription("");
    setter(false); // close modal
};

    const renderModal = (show, handleClose, title, category, banners) => (
        <Modal show={show} onHide={()=>handleCloseModal(handleClose)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className="text-info">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control
                        id="bannerImageID"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setBannerFile(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Banner Title"
                            value={bannerTitle}
                            onChange={(e) => setBannerTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Banner Description"
                            value={bannerDescription}
                            onChange={(e) => setBannerDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="info"
                        onClick={() => handleFileUpload(category)}
                        disabled={!bannerFile}
                    >
                        Upload Banner
                    </Button>
                    <Form.Group>
                        <Form.Label>Uploaded Banners:</Form.Label>
                        <ModalBody className="d-flex gap-2 flex-wrap justify-content-center">
                            {banners.length > 0 ? (
                                banners.map((banner) => (
                                    <ListGroup
                                        key={banner._id}
                                        style={{ maxHeight: "200px", maxWidth: "200px" }}
                                    >
                                        <img
                                            src={`${serverUrl}/Uploads/${banner.bannerImage}`}
                                            alt="banner"
                                            style={{
                                                width: "100%",
                                                height: "120px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="mt-2"
                                            onClick={() => handleDeleteBanner(category, banner._id)}
                                        >
                                            Delete
                                        </Button>
                                    </ListGroup>
                                ))
                            ) : (
                                <p className="text-muted">No banners uploaded yet.</p>
                            )}
                        </ModalBody>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <Container className="text-center my-5">
            <Row className="g-3 justify-content-center">
                <Col xs="auto">
                    <Button variant="info" onClick={() => setHomeshow(true)}>
                        Home Banner
                    </Button>
                    {renderModal(
                        homeshow,
                        () => setHomeshow(false),
                        "Home Banner",
                        "home",
                        homeBanners
                    )}
                </Col>

                <Col xs="auto">
                    <Button variant="info" onClick={() => setProductshow(true)}>
                        Product Banner
                    </Button>
                    {renderModal(
                        productshow,
                        () => setProductshow(false),
                        "Product Banner",
                        "product",
                        productBanners
                    )}
                </Col>

                <Col xs="auto">
                    <Button variant="info" onClick={() => setServiceshow(true)}>
                        Service Banner
                    </Button>
                    {renderModal(
                        serviceshow,
                        () => setServiceshow(false),
                        "Service Banner",
                        "service",
                        serviceBanners
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
