
function Footer() {
    const WHATSAPP_NUMBER = "966508383937";

    return (
        <>
        <footer className="main-footer dark-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4">
        {/* About Footer Start */}
        <div className="about-footer-box">
          {/* Footer Logo Start */}
          <div className="footer-logo">
            <img src="images/logo-white.svg" alt="" />
          </div>
          {/* Footer Logo End */}
          {/* About Footer Content Start */}
          <div className="about-footer-content">
            <p>
              Serving clients over 35+ countries, deliver premium tiles and
              marble with consistent quality and timely delivery.
            </p>
          </div>
          {/* About Footer Content End */}
          {/* Footer Social Links Start */}
          <div className="footer-social-links">
            <h2>Follow Us On Social:</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* Footer Social Links End */}
        </div>
        {/* About Footer End */}
      </div>
      <div className="col-lg-8">
        {/* Footer Links Box Start */}
        <div className="footer-links-box">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li>
                <a href="blog.html">Blogs</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
          {/* Footer Links Start */}
          <div className="footer-links">
            <h2>Our Collection</h2>
            <ul>
              <li>
                <a href="collection.html">Living Room Tiles</a>
              </li>
              <li>
                <a href="collection.html">Kitchen Tiles</a>
              </li>
              <li>
                <a href="collection.html">Bathroom Tiles</a>
              </li>
              <li>
                <a href="collection.html">Bedroom Tiles</a>
              </li>
              <li>
                <a href="collection.html">Outdoor Tiles</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
          {/* Footer Newsletter Form Start */}
          <div className="footer-links footer-newsletter-form">
            <h2>Subscribe To Newsletter</h2>
            <p>
              Subscribe to our newsletter for the latest tiles trends, design
              inspiration, etc.
            </p>
            <form id="newslettersForm" action="#" method="POST">
              <div className="form-group">
                <input
                  type="email"
                  name="mail"
                  className="form-control"
                  id="mail"
                  placeholder="Enter Your Email Address"
                  required=""
                />
                <button type="submit" className="newsletter-btn">
                  <img src="images/arrow-white.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
          {/* Footer Newsletter Form End */}
          {/* Footer Policy Info Box Start */}
          <div className="footer-policy-info-box">
            {/* Footer Policy Box Title Start */}
            <div className="footer-policy-box-title">
              <h3>Premium Tiles &amp; Marble Manufacturing Excellence</h3>
            </div>
            {/* Footer Policy Box Title End */}
            {/* Footer Privacy Policy Start */}
            <div className="footer-privacy-policy">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
            {/* Footer Privacy Policy End */}
          </div>
          {/* Footer Policy Info Box End */}
        </div>
        {/* Footer Links Box End */}
      </div>
      <div className="col-lg-12">
        {/* Footer Copyright Text Start */}
        <div className="footer-copyright-text">
          <p>Copyright © 2026 All Rights Reserved.</p>
        </div>
        {/* Footer Copyright Text End */}
      </div>
    </div>
  </div>
</footer>

<a
  href={`https://wa.me/${WHATSAPP_NUMBER}`}
  target="_blank"
  rel="noopener noreferrer"
  title="WhatsApp"
  aria-label="WhatsApp chat"
  style={{
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 9999,
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
    textDecoration: "none",
  }}
>
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    style={{
      width: 30,
      height: 30,
      display: "block",
    }}
  >
    <path
      fill="#FFFFFF"
      d="M19.11 17.25c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.26s.98 2.61 1.11 2.79c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.44 1.56.56.66.21 1.25.18 1.72.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.29-.06-.11-.24-.18-.5-.32Z"
    />
    <path
      fill="#FFFFFF"
      d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.57-1.68A12.72 12.72 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2Zm0 23.49c-1.92 0-3.8-.51-5.44-1.48l-.39-.23-3.9 1 .99-3.81-.25-.39A10.62 10.62 0 0 1 5.39 16c0-5.85 4.76-10.61 10.61-10.61S26.61 10.15 26.61 16 21.85 26.69 16 26.69Z"
    />
  </svg>
</a>

        </>
    )
}

export default Footer
