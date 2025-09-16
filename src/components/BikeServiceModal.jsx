import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function BikeServiceModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>🚲 Book Your Bike Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <h5 className="text-primary">Special Offer This Month!</h5>
          <p className="text-muted">
            ✅ 15% Off Your First Service <br />
            ✅ Free Pickup & Drop in City Limits <br />
            ✅ Same-Day Delivery Available*
          </p>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formServiceDetails">
            <Form.Label>Service Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe the issue or type of service needed (e.g., engine tuning, brake check, tyre change)"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Book My Service
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-light text-muted small">
        *Same-day service available for selected jobs.  
        Call us for urgent repairs: <strong>+91-98765-43210</strong>
      </Modal.Footer>
    </Modal>
  );
}

export default BikeServiceModal;
