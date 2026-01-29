import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f3b6d", color: "#fff" }}>
      <div className="container py-5">
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">SensorSphere</h5>
            <p className="small text-light opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              ex obcaecati rem reiciendis, tempora natus amet aspernatur
              exercitationem ratione cum corporis est expedita facilis doloribus.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Latest News</h5>
            <div className="d-flex mb-3">
              <img src="/images/card_img-1.jpeg" alt="news" width="50" height="50" className="me-3 rounded"/>
              <p className="small mb-0 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="d-flex">
              <img src="/images/card_img-2.jpeg" alt="news" width="50" height="50" className="me-3 rounded"/>
              <p className="small mb-0 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQ's</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Other Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Privacy Notice</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms Of Use</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Security</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Service Status</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: "#0b2e55" }}>
        <small className="opacity-75">
          © {new Date().getFullYear()} SensorSphere. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer