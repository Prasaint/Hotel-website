import React from "react";
import "../css/Rooms.css";
import room from "../assets/room1.jpg";
import { FaBed, FaWifi, FaBath } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Rooms Component
function Rooms() {
  const rooms = [
    {
      image: room,
      title: "Normal Room",
      description: "Affordable and cozy normal room",
      price: 600,
      bed: "1",
      bath: "0",
      wifi: "1",
    },
    {
      image: room,
      title: "Attached Room",
      description: "Affordable attached room with a bathroom",
      price: 800,
      bed: "2",
      bath: "1",
      wifi: "1",
    },
    {
      image: room,
      title: "AC Room",
      description: "Comfortable air-conditioned room for relaxation",
      price: 1500,
      bed: "2",
      bath: "1",
      wifi: "1",
    },
  ];

  return (
    <section className="allpage" id="rooms">
      {/* SEO Metadata */}
      <Helmet>
        <title>
          Hotel DreamCity - Rooms in Nepalgunj | Book Affordable Rooms
        </title>
        <meta
          name="description"
          content="Explore affordable rooms at Hotel DreamCity, Nepalgunj. Book your comfortable and cozy rooms with top amenities like AC, Wi-Fi, and more."
        />
        <meta
          name="keywords"
          content="hotel rooms, budget rooms, Nepalgunj hotel, book rooms, affordable rooms, hotel with AC, rooms with WiFi, Hotel DreamCity"
        />
        <meta
          property="og:title"
          content="Hotel DreamCity - Rooms in Nepalgunj"
        />
        <meta
          property="og:description"
          content="Discover a variety of rooms at Hotel DreamCity, Nepalgunj, ranging from normal rooms to attached rooms and AC rooms, each with modern amenities."
        />
        <meta property="og:image" content={room} />
        <meta property="og:url" content="https://hoteldreamcity.com/rooms" />
      </Helmet>

      <div className="roomcon1">
        <h1>
          <i className="i"></i> OUR ROOMS <i className="i"></i>
        </h1>
        <h2>
          Explore Our <span> ROOMS</span>
        </h2>
      </div>
      <div className="roomcon2">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img
              className="room-image"
              src={room.image}
              alt={`Image of ${room.title} at Hotel DreamCity`}
              title={`Book ${room.title} at Hotel DreamCity`}
            />
            <div className="room-content">
              <h2 className="room-title">{room.title}</h2>
              <p className="ricon">
                <FaBed color="#fea116" /> {room.bed} Bed{" "}
                <FaBath color="#fea116" /> {room.bath} Bath{" "}
                <FaWifi color="#fea116" /> {room.wifi} Wifi
              </p>
              <p className="room-description">{room.description}</p>
              <div className="room-footer">
                <span className="room-price">
                  NRS: <span>{room.price}/night</span>
                </span>
                <button className="book-button">
                  <a href="#booking">Book Now</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
