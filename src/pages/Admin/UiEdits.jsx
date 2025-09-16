// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function UiEdits() {
//   return (
//     <>
//       <Container className="mt-4">
//       {/* Page Title */}
//       <div className="text-center mb-4">
//         <h2 className="fw-bold text-info">UI Edits</h2>
//       </div>

//       {/* Top Cards */}
//       <Row className="mb-4 g-4">
//         {/* Customer Orders */}
//         <Col md={4}>
//           <Link style={{ textDecoration: "none" }} to={"/orders"}>
//             <Card className="shadow-sm h-100 text-center p-3">
//               <div
//                 className="d-flex justify-content-center align-items-center mb-3"
//                 style={{ height: "60px" }}
//               >
               
//                 <i
//                   className="fa-solid fa-house fa-2xl"
//                   style={{ color: "#0d6efd" }}
//                 ></i>
//               </div>
//               <h5 className="fw-bold text-info">Home</h5>
//               <p className="text-dark fw-bold">
//                 Manage customer orders and track delivery status
//               </p>
//             </Card>
//           </Link>
//         </Col>

//         {/* Booked Services */}
//         <Col md={4}>
//           <Link style={{ textDecoration: "none" }} to={"/booked"}>
//             <Card className="shadow-sm h-100 text-center p-3">
//               <div
//                 className="d-flex justify-content-center align-items-center mb-3"
//                 style={{ height: "60px" }}
//               >
//                 <i
//                   className="fa-solid fa-calendar fa-2xl"
//                   style={{ color: "#198754" }}
//                 ></i>
//               </div>
//               <h5 className="fw-bold text-info">Products</h5>
//               <p className="text-dark fw-bold">
//                 View and manage service appointments
//               </p>
//             </Card>
//           </Link>
//         </Col>

//         {/* UI Edits */}
//         <Col md={4}>
//           <Link style={{ textDecoration: "none" }} to={"/uiedits"}>
//             <Card className="shadow-sm h-100 text-center p-3">
//               <div
//                 className="d-flex justify-content-center align-items-center mb-3"
//                 style={{ height: "60px" }}
//               >
//                 <i
//                   className="fa-solid fa-globe fa-2xl"
//                   style={{ color: "#6f42c1" }}
//                 ></i>
//               </div>
//               <h5 className="fw-bold text-info">Services</h5>
//               <p className="text-dark fw-bold">
//                 View and manage service appointments
//               </p>
//             </Card>
//           </Link>
//         </Col>

       
//       </Row>
//     </Container>
//     </>
//   )
// }

// export default UiEdits


import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function UiEdits() {
  return (
    <>
<a
        href="/admin"
        className="fw-bold text-info"
        style={{ textDecoration: "none" }}
        >
        <i className="fa-solid fa-arrow-left"></i> Back
      </a>
  
      {/* <Link
        to="/admin"
        className="text-info"
        style={{
          position: "fixed",
          top: "100px",
          left: "20px",
          padding: "8px 14px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0)",
        }}
      >
        ← Back
      </Link> */}

      <Container className="mt-4">
        {/* Page Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-info">UI Edits</h2>
        </div>

        {/* Top Cards */}
        <Row className="mb-4 g-4">
          {/* Home Display Products */}
          <Col md={4}>
            <Link style={{ textDecoration: "none" }} to={"/displayhomeproducts"}>
              <Card className="shadow-sm h-100 text-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "60px" }}
                >
                  <i
                    className="fa-solid fa-house fa-2xl"
                    style={{ color: "#0d6efd" }}
                  ></i>
                </div>
                <h5 className="fw-bold text-info">Home Display Products</h5>
                <p className="text-dark fw-semibold">
                  Manage and edit products displayed on the home page and product page
                </p>
              </Card>
            </Link>
          </Col>

          {/* Add Products */}
          <Col md={4}>
            <Link style={{ textDecoration: "none" }} to={"/addproducts"}>
              <Card className="shadow-sm h-100 text-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "60px" }}
                >
                  <i
                    className="fa-solid fa-calendar fa-2xl"
                    style={{ color: "#198754" }}
                  ></i>
                </div>
                <h5 className="fw-bold text-info">Add Products</h5>
                <p className="text-dark fw-semibold">
                  Add new products to the product page.
                </p>
              </Card>
            </Link>
          </Col>

          {/* Banner */}
          <Col md={4}>
            <Link style={{ textDecoration: "none" }} to={"/banner"}>
              <Card className="shadow-sm h-100 text-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "60px" }}
                >
                  <i
                    className="fa-solid fa-globe fa-2xl"
                    style={{ color: "#6f42c1" }}
                  ></i>
                </div>
                <h5 className="fw-bold text-info">Banner</h5>
                <p className="text-dark fw-semibold">
                  Manage and edit the promotional banner displayed on <br /> home page <br /> product page <br /> service page.
                </p>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UiEdits;

