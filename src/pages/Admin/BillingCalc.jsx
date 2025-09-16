import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { GetAllProductforBillingAPI, AddBillApi } from "../../Services/allAPI";
import { serverUrl } from "../../Services/serverUrl";

function BillingCalc() {
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  // 🔹 Billing form state
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    phone: "",
    vehicleName: "",
    vehicleNumber: "",
    date: "",
  });

  // 🔹 Products + Cart
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await GetAllProductforBillingAPI();
    if (res.status === 200) {
      setProducts(res.data);
    } else {
      console.log("Error fetching products:", res);
    }
  };

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  // 🔹 Add to Bill
  const handleAddtobill = (product) => {
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          _id: product._id,
          name: product.productName,
          price: product.productOfferPrice,
          qty: 1,
        },
      ]);
    }
  };

  // 🔹 Change quantity
  const handleQtyChange = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // 🔹 Remove product
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // 🔹 Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 🔹 Checkout & Save Bill
  const handleCheckout = async () => {
    if (!billingDetails.fullName || !billingDetails.phone || cart.length === 0) {
      alert("⚠️ Please fill billing details & add products");
      return;
    }

    const billData = {
      billingDetails,
      products: cart,
      totalAmount: total,
    };

    try {
      
      const userId = sessionStorage.getItem("userId") // for identify admin

      const res = await AddBillApi(userId, billData, {
        "Content-Type": "application/json",
      });

      if (res.status === 201) {
        alert("✅ Bill Saved Successfully");
        setCart([]);
        setBillingDetails({
          fullName: "",
          phone: "",
          vehicleName: "",
          vehicleNumber: "",
          date: "",
        });
      } else {
        alert("❌ Error saving bill");
        console.log(res);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("❌ Failed to save bill");
    }
  };

  

  return (
    <>
      <a
        href="/billing"
        className="fw-bold text-info d-inline-flex align-items-center mb-3"
        style={{ textDecoration: "none" }}
      >
        <i className="fa-solid fa-arrow-left me-2"></i> Back
      </a>

      {/* Billing Form */}
      <Container className="my-4">
        <Row className="g-3">
          <Col md={7}>
            <Card className="shadow-sm border-0 rounded p-3">
              <h5 className="text-info fw-bold mb-3">Billing Details</h5>
              <Form>
                <Row>
                  <Col md={6} className="mb-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="fullName"
                      value={billingDetails.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                    />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      size="sm"
                      type="tel"
                      name="phone"
                      value={billingDetails.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-2">
                    <Form.Label>Vehicle Name</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="vehicleName"
                      value={billingDetails.vehicleName}
                      onChange={handleChange}
                      placeholder="Enter vehicle name"
                    />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label>Vehicle Number</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="vehicleNumber"
                      value={billingDetails.vehicleNumber}
                      onChange={handleChange}
                      placeholder="Enter vehicle number"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}></Col>
                  <Col md={6} className="mb-2">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      size="sm"
                      type="date"
                      name="date"
                      value={billingDetails.date}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      <hr />

      {/* Product Search + Cart */}
      <Container className="my-4">
        <Row className="g-3">
          {/* Left - Search & Add Products */}
          <Col md={7}>
            <Card className="shadow-sm border-0 rounded p-3">
              <h5 className="text-info fw-bold mb-3">Search & Add Products</h5>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-3"
              />
              <Row className="g-3">
                {products
                  .filter((p) =>
                    p.productName.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((product) => (
                    <div
                      key={product._id}
                      className="col-12 col-sm-4 col-md-4 col-xl-3"
                    >
                      <div className="product-card card h-100 shadow-sm">
                        <div className="card-img-container">
                          <img
                            src={`${serverUrl}/Uploads/${product?.productImage}`}
                            alt={product.productName}
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-body d-flex flex-column p-3">
                          <div className="category-section">
                            <span className="category-badge">
                              {product.productCategory || "N/A"}
                            </span>
                          </div>
                          <h6 className="product-name card-title mb-2">
                            {truncateText(product.productName, 50)}
                          </h6>
                          <div className="price-section mb-3 mt-auto">
                            <div className="original-price">
                              <del className="text-muted">
                                {currencyFormatter.format(product.productPrice)}
                              </del>
                            </div>
                            <div className="offer-price text-success fw-bold">
                              {currencyFormatter.format(
                                product.productOfferPrice
                              )}
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => handleAddtobill(product)}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Row>
            </Card>
          </Col>

          {/* Right - Billing Summary */}
          <Col md={5}>
            <Card className="shadow-sm border-0 rounded p-3">
              <h5 className="text-info fw-bold mb-3">Billing Summary</h5>
              {cart.length === 0 ? (
                <p className="text-muted">No products added yet</p>
              ) : (
                <Table bordered hover size="sm">
                  <thead>
                    <tr className="table-light">
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQtyChange(item._id, -1)}
                          >
                            -
                          </Button>{" "}
                          {item.qty}{" "}
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQtyChange(item._id, 1)}
                          >
                            +
                          </Button>
                        </td>
                        <td>₹{item.price * item.qty}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleRemoveFromCart(item._id)}
                          >
                            x
                          </Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2" className="fw-bold text-end">
                        Total
                      </td>
                      <td colSpan="2" className="fw-bold text-success">
                        ₹{total}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}

              <Button
                variant="success"
                size="lg"
                className="w-100 fw-bold"
                disabled={cart.length === 0}
                onClick={handleCheckout}
              >
                ✅ Checkout & Print Bill
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BillingCalc;
