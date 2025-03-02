import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <FaChevronRight style={{ fontSize: "30px" }} />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft style={{ fontSize: "30px" }} />
    </div>
  );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  // Array of images with metadata
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bageshwori_Temple_Nepalgunj.JPG/1280px-Bageshwori_Temple_Nepalgunj.JPG",
      alt: "Bageshwori Temple, Nepalgunj",
      title: "Simple Living",
      description: "Explore Nepalgunj, a place of peace and history.",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nepalgunj_AIrport_.jpg/1024px-Nepalgunj_AIrport_.jpg",
      alt: "Nepalgunj Airport",
      title: "Hotel DreamCity",
      description: "A hotel near the airport for your convenience.",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/BRP_Lumbini_Mayadevi_temple.jpg/1920px-BRP_Lumbini_Mayadevi_temple.jpg",
      alt: "Lumbini, Nepal",
      title: "Contact Us",
      description: "Get in touch with us for booking and inquiries.",
    },
  ];

  return (
    <section className="allpages" id="home">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hotel DreamCity - Nepalgunj | Your Dream Stay Awaits</title>
        <meta
          name="description"
          content="Discover Hotel DreamCity, located in Nepalgunj, offering serene accommodations near historical landmarks and convenient access to the airport."
        />
        <meta
          name="keywords"
          content="hotel dreamcity, hotel in Nepalgunj, accommodations in Nepalgunj, Nepalgunj history, Nepalgunj temples, Lumbini Nepal"
        />
        <meta property="og:title" content="Hotel DreamCity - Nepalgunj" />
        <meta
          property="og:description"
          content="Book your stay at Hotel DreamCity in Nepalgunj. Enjoy peace, history, and convenience with stunning views and modern amenities."
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nepalgunj_AIrport_.jpg/1024px-Nepalgunj_AIrport_.jpg"
        />
        <meta property="og:url" content="https://hoteldreamcity.com" />
      </Helmet>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img
              src={image.url}
              alt={image.alt}
              className="slider-image"
              title={image.title}
            />
            <div className="slider-content">
              <h2 className="Stitle">
                <i className="i"></i>
                {image.title}
                <i className="i"></i>
              </h2>
              <p className="Sdis">{image.description}</p>
              <div className="btn">
                <div className="btna">
                  <a href="#rooms">OUR ROOMS</a>
                </div>
                <div className="btnb">
                  <a href="#booking">BOOK A ROOM</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Home;
