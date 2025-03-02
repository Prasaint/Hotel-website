import React from "react";
import "../css/Services.css";
import { MdAir } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Services Component
function Services() {
  const data = [
    {
      icon: <FaHotel size={50} aria-label="Hotel Icon" />,
      title: "Rooms",
      disc: "Our rooms are spacious, well-furnished, and equipped with modern amenities to provide maximum comfort. Daily housekeeping ensures a clean and cozy environment throughout your stay.",
    },
    {
      icon: <FaBowlFood size={50} aria-label="Food Icon" />,
      title: "Food",
      disc: "We offer a variety of delicious multi-cuisine dishes prepared by expert chefs. Guests can enjoy buffet meals, in-room dining, and special dietary options tailored to their needs.",
    },
    {
      icon: <FaWifi size={50} aria-label="Wi-Fi Icon" />,
      title: "Free WIFI",
      disc: "Stay connected with our high-speed WiFi, available throughout the hotel. Whether for work or leisure, our secure and fast internet ensures a seamless browsing experience.",
    },
    {
      icon: <MdAir size={50} aria-label="AC Icon" />,
      title: "AC",
      disc: "All our rooms are fully air-conditioned, allowing guests to adjust the temperature for a comfortable and refreshing stay. Our energy-efficient cooling system ensures a pleasant atmosphere at all times.",
    },
  ];

  return (
    <section className="allpage" id="services">
      {/* SEO Metadata */}
      <Helmet>
        <title>
          Hotel DreamCity - Top Services in Nepalgunj | Rooms, Food, Wi-Fi, AC
        </title>
        <meta
          name="description"
          content="Discover the services offered at Hotel DreamCity, Nepalgunj. Enjoy luxurious rooms, delicious food, free Wi-Fi, and air-conditioned rooms for a comfortable stay."
        />
        <meta
          name="keywords"
          content="hotel services, rooms, food, free Wi-Fi, AC rooms, hotel in Nepalgunj, luxurious services"
        />
        <meta
          property="og:title"
          content="Hotel DreamCity - Services in Nepalgunj"
        />
        <meta
          property="og:description"
          content="Explore premium services including luxurious rooms, multi-cuisine food options, free Wi-Fi, and air-conditioned rooms at Hotel DreamCity in Nepalgunj."
        />
        <meta property="og:image" content="https://path_to_image" />
        <meta property="og:url" content="https://hoteldreamcity.com/services" />
      </Helmet>

      <div className="Scontainer-1">
        <h2>
          <i className="i"></i>OUR Services <i className="i"></i>
        </h2>
        <h1>
          Explore Our <span>SERVICES</span>
        </h1>
      </div>
      <div className="Scontainer-2">
        {data.map((data, index) => (
          <div className="card" key={index}>
            <div className="icon">{data.icon}</div>
            <h1 className="title">{data.title}</h1>
            <p className="description">{data.disc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
