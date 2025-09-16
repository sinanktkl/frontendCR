import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../componentsStyles/InstagramFeed.css";
import I1 from "../assets/instagram/1.jpeg";
import I2 from "../assets/instagram/2.webp";
import I3 from "../assets/instagram/3.webp";
import I4 from "../assets/instagram/4.webp";
import I5 from "../assets/instagram/5.jpeg";
import I6 from "../assets/instagram/6.jpeg";
import I7 from "../assets/instagram/7.jpg";
import I8 from "../assets/instagram/8.webp";

function InstagramFeed() {
    const posts = [
    I1,
    I2,
    I3,
    I4,
    I5,
    I6,
    I7,
    I8
  ];

  return (
    <>
      <section className="instagram-feed-section py-5">
      <Container className="text-center">
        <h3 className="mb-4 text-info">Follow Us on Instagram</h3>
        <Row className="g-3 justify-content-center">
          {posts.map((post, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={2}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                <img src={posts[idx]} alt={`Instagram post ${idx + 1}`} className="insta-img " />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  )
}

export default InstagramFeed


