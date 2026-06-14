import React from 'react'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <div>
      <div className="page-header dark-section parallaxie">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Page Header Box Start */}
        <div className="page-header-box">
          <h1
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Events"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  E
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  v
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>
            </div>
          </h1>
          <nav
            className="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Event List
              </li>
            </ol>
          </nav>
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>


<div className="page-events">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="event-item-image">
            <Link to="/event-single/5" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-1.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/5">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/5">
                  Tile Expo &amp; Design Showcase 2026
                </Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="event-item-image">
            <Link to="/event-single/5" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-2.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/5">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/5">
                  Interior Design &amp; Architecture Meet
                </Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          <div className="event-item-image">
            <Link to="/event-single/5" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-3.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/5">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/5">Modern Living Spaces Workshop</Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          <div className="event-item-image">
            <Link to="/event-single/5" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-4.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/5">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/5">
                  Sustainable Building Materials Expo
                </Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          data-wow-delay="0.8s"
          style={{
            visibility: "visible",
            animationDelay: "0.8s",
            animationName: "fadeInUp"
          }}
        >
          <div className="event-item-image">
            <Link to="/event-single/5" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-5.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/5">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/5">
                  Luxury Interiors &amp; Tile Trends Seminar
                </Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Event Item Start */}
        <div
          className="event-item wow fadeInUp"
          data-wow-delay="1s"
          style={{
            visibility: "visible",
            animationDelay: "1s",
            animationName: "fadeInUp"
          }}
        >
          <div className="event-item-image">
            <Link to="/event-single/6" data-cursor-text="View">
              <figure>
                <img src="/images/event-item-image-6.jpg" alt="" />
              </figure>
            </Link>
          </div>
          <div className="event-item-body">
            <div className="event-item-btn">
              <Link to="/event-single/6">
                <img src="/images/arrow-white.svg" alt="" />
              </Link>
            </div>
            <div className="event-item-content">
              <h2>
                <Link to="/event-single/6">Contemporary Home Design Expo</Link>
              </h2>
            </div>
          </div>
        </div>
        {/* Event Item End */}
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default Event
