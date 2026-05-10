import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const linkStyle = { color: '#000000' }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
   <>
   
   <header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo Start */}
        <a className="navbar-brand" href="./">
          <img src="images/logo.svg" alt="Logo" />
        </a>
        {/* Logo End */}
        {/* Main Menu Start */}
        <div className="navbar-collapse main-menu d-none d-lg-block">
          <div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item">
                <a className="nav-link" href="./" style={linkStyle}>
                  Home
                </a>
            
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={linkStyle}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events" style={linkStyle}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs" style={linkStyle}>
                  Blog
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={linkStyle}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item highlighted-menu">
                <Link className="nav-link" to="/catalogue" style={linkStyle}>
                  Request a Catalogue
                </Link>
              </li>
            </ul>
          </div>
          {/* Header Btn Start */}
          <div className="header-btn">
            <Link className="btn-default" to="/catalogue" style={linkStyle}>
              Request a Catalogue
            </Link>
          </div>
          {/* Header Btn End */}
        </div>
        {/* Main Menu End */}
        <div className="navbar-toggle">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              setMobileMenuOpen((open) => !open)
            }}
            aria-haspopup="true"
            aria-expanded={mobileMenuOpen}
            className={`slicknav_btn ${mobileMenuOpen ? 'slicknav_open' : 'slicknav_collapsed'}`}
            style={{}}
          >
            <span className="slicknav_menutxt" />
            <span className="slicknav_icon slicknav_no-text">
              <span className="slicknav_icon-bar" />
              <span className="slicknav_icon-bar" />
              <span className="slicknav_icon-bar" />
            </span>
          </button>
        </div>
      </div>
    </nav>
    <div className="responsive-menu">
      <div className="slicknav_menu">
        <ul
          className={`slicknav_nav ${mobileMenuOpen ? '' : 'slicknav_hidden'}`}
          aria-hidden={!mobileMenuOpen}
          role="menu"
          style={{ display: mobileMenuOpen ? 'block' : 'none' }}
        >
          <li className="nav-item submenu slicknav_collapsed slicknav_parent">
            <button
              type="button"
              aria-label="Home submenu"
              aria-haspopup="true"
              className="slicknav_item slicknav_row"
              style={{}}
            />
            <a className="nav-link" href="./" tabIndex={-1} style={linkStyle}>
              Home
            </a>
            <span className="slicknav_arrow">►</span>
            <ul
              role="menu"
              className="slicknav_hidden"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="index.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Home - Version 1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="index-2.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Home - Version 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="index-3.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Home - Version 3
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={linkStyle}
              to="/about"
              role="menuitem"
              tabIndex={-1}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={linkStyle}
              to="/events"
              role="menuitem"
              tabIndex={-1}
            >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={linkStyle}
              to="/blogs"
              role="menuitem"
              tabIndex={-1}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item submenu slicknav_collapsed slicknav_parent">
            <button
              type="button"
              aria-label="Pages submenu"
              aria-haspopup="true"
              className="slicknav_item slicknav_row"
              style={{}}
            />
            <span className="nav-link" tabIndex={-1} style={linkStyle}>
              Pages
            </span>
            <span className="slicknav_arrow">►</span>
            <ul
              role="menu"
              className="slicknav_hidden"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="event-single.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Event Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="blog-single.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Blog Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="team.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="team-single.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Team Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="collection.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="products.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="export.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Export
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="pricing.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Pricing Plan
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="testimonials.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="image-gallery.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Image Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="video-gallery.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  Video Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="faqs.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={linkStyle}
                  href="404.html"
                  role="menuitem"
                  tabIndex={-1}
                >
                  404
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={linkStyle}
              href="contact.html"
              role="menuitem"
              tabIndex={-1}
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item highlighted-menu">
            <a
              className="nav-link"
              style={linkStyle}
              href="catalogue.html"
              role="menuitem"
              tabIndex={-1}
            >
              Request a Catalogue
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

   
   </>
  
  
  )
}

export default Header



