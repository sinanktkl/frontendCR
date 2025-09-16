import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function Admin() {


  return (
    <Container className="mt-4">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-info">Admin Dashboard</h2>
        <p className="text-dark fw-bolder">Welcome back, Admin!</p>
      </div>

      {/* Top Cards */}
      <Row className="mb-4 g-4">
        {/* Customer Orders */}
        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/orders"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-cart-arrow-down fa-2xl"
                  style={{ color: "#007bff" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">Customer Orders</h5>
              <p className="text-dark fw-bold">
                Manage customer orders and track delivery status
              </p>
            </Card>
          </Link>
        </Col>

        {/* Booked Services */}
        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/booked"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-square-check fa-2xl"
                  style={{ color: "#28a745" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">Booked Services</h5>
              <p className="text-dark fw-bold">
                View and manage service appointments
              </p>
            </Card>
          </Link>
        </Col>

        {/* UI Edits */}
        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/uiedits"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-pen-to-square fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">UI Edits</h5>
              <div className="mt-2 text-danger">
                <i
                  className="fa-solid fa-house me-2"
                  style={{ color: "#0d6efd" }}
                ></i>{" "}
                Home Display Products
              </div>
              <div className="mt-2 text-danger">
                <i
                  className="fa-solid fa-calendar me-2"
                  style={{ color: "#198754" }}
                ></i>{" "}
                Add Products
              </div>
              <div className="mt-2 text-danger">
                <i
                  className="fa-solid fa-globe me-2"
                  style={{ color: "#6f42c1" }}
                ></i>{" "}
                Banner
              </div>
            </Card>
          </Link>
        </Col>

        {/* Testimonials */}
        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/testimonials"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-message fa-2xl"
                  style={{ color: "#0d6efd" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">Testimonials</h5>
              <p className="text-dark fw-bold">
                Read what our happy customers have to say about their experience
                with us.
              </p>
            </Card>
          </Link>
        </Col>

        {/* Free Quote */}
        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/freequote"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-file-pen fa-2xl"
                  style={{ color: "#28a745" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">Free Quote</h5>
              <p className="text-dark fw-bold">
                Get a personalized service estimate at no cost. Quick, easy, and
                hassle-free!
              </p>
            </Card>
          </Link>
        </Col>

        {/* billing */}

        <Col md={4}>
          <Link style={{ textDecoration: "none" }} to={"/billing"}>
            <Card className="shadow-sm h-100 text-center p-3">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "60px" }}
              >
                <i
                  className="fa-solid fa-receipt fa-2xl"
                  style={{ color: "#ffc107" }}
                ></i>
              </div>
              <h5 className="fw-bold text-info">Billing Section</h5>
              <p className="text-dark fw-bold">
                Manage invoices, track payment history, and generate detailed
                billing reports with ease. Keep your finances transparent and
                organized.
              </p>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
