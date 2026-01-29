import React from "react";

function AboutUs() {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">About Us</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <img src="/images/about-grid-1.jpg" className="img-fluid rounded shadow" alt="about1" />
          </div>
          <div className="col-md-4">
            <img src="/images/about-grid-2.jpg" className="img-fluid rounded shadow" alt="about2" />
          </div>
          <div className="col-md-4">
            <img src="/images/about-grid-3.jpg" className="img-fluid rounded shadow" alt="about3" />
          </div>
          <div className="col-md-4">
            <img src="/images/about-grid-4.jpg" className="img-fluid rounded shadow" alt="about4" />
          </div>
          <div className="col-md-4">
            <img src="/images/about-grid-5.jpg" className="img-fluid rounded shadow" alt="about5" />
          </div>
          <div className="col-md-4">
            <img src="/images/about-grid-6.jpg" className="img-fluid rounded shadow" alt="about6" />
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <h5 className="text-primary fw-bold">
          Every Business Needs Great Content
        </h5>
      </div>

      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img src="/images/about-1.jpg" className="img-fluid rounded shadow" alt="mission" />
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Our Mission</h5>
            <p className="text-muted">
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and productivity.
              We strive to provide accurate and reliable sensor solutions that enable
              customers to monitor and analyze environmental conditions, detect
              changes, and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center g-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="/images/about-2.jpg" className="img-fluid rounded shadow" alt="quality" />
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Quality and Reliability</h5>
            <p className="text-muted">
              At SensorSphere, quality and reliability are our top priorities.
              We source our sensors from reputable manufacturers known for their
              precision and durability. Each sensor undergoes rigorous testing
              and quality control to ensure it meets high standards.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img src="/images/about-3.jpg" className="img-fluid rounded shadow" alt="custom" />
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Custom Solutions</h5>
            <p className="text-muted">
              In addition to standard sensor offerings, we provide custom sensor
              solutions tailored to meet specific requirements. Our skilled engineers
              and technicians work closely with clients to design and develop
              customized systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center g-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="/images/about-4.jpg" className="img-fluid rounded shadow" alt="support" />
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold">Customer Support</h5>
            <p className="text-muted">
              Our dedicated customer support team is always ready to assist you
              with inquiries, technical assistance, and after-sales support.
              We ensure a smooth and hassle-free experience for all customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs