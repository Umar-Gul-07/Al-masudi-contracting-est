import React from 'react'
import { Link } from 'react-router-dom'
import ThemeIcon from '../Components/ThemeIcon'

const Blogs = () => {
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
            aria-label="Our blog"
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
                  O
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
                  u
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
                  r
                </div>
              </div>{" "}
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
                  b
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
                  l
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
                  o
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
                  g
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
                <a href="index-2.html">home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>




<div className="page-blog">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/1" data-cursor-text="View">
              <figure>
                <img src="images/post-1.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/1">
                  How to Choose the Right Modern &amp; Functional Interior
                  Spaces
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/1" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/2" data-cursor-text="View">
              <figure>
                <img src="images/post-2.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/2">
                  Understanding Tile Finishes: Glossy, Matte, &amp; Textured
                  Surfaces
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/2" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/3" data-cursor-text="View">
              <figure>
                <img src="images/post-3.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/3">
                  Top Tile Trends That Are Redefining Modern Interiors
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/3" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/4" data-cursor-text="View">
              <figure>
                <img src="images/post-4.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/4">
                  5 Tips to Choose the Perfect Living Room Tiles
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/4" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.8s"
          style={{
            visibility: "visible",
            animationDelay: "0.8s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/5" data-cursor-text="View">
              <figure>
                <img src="images/post-5.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/5   ">
                  How to Maintain Your Bathroom Tiles for Longevity
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/5" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="1s"
          style={{
            visibility: "visible",
            animationDelay: "1s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <Link to="/blog-details/6" data-cursor-text="View">
              <figure>
                <img src="images/post-6.jpg" alt="" />
              </figure>
            </Link>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <Link to="/blog-details/6">
                  Accent &amp; Feature Tiles: Transform Your Walls
                </Link>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <Link to="/blog-details/6" className="readmore-btn">
                Learn More
              </Link>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-lg-12">
        {/* Page Pagination Start */}
        <div
          className="page-pagination wow fadeInUp"
          data-wow-delay="1.2s"
          style={{
            visibility: "hidden",
            animationDelay: "1.2s",
            animationName: "none"
          }}
        >
          <ul className="pagination">
            <li>
              <Link to="#">
                <ThemeIcon name="angle-left" />
              </Link>
            </li>
            <li className="active">
              <Link to="#">1</Link>
            </li>
            <li>
              <Link to="#">2</Link>
            </li>
            <li>
              <Link to="#">3</Link>
            </li>
            <li>
              <Link to="#">
                <ThemeIcon name="angle-right" />
              </Link>
            </li>
          </ul>
        </div>
        {/* Page Pagination End */}
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default Blogs
