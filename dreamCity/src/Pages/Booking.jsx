import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../css/Booking.css";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    person: "",
    room: "",
    checkin: "",
    checkout: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/send-booking", formData)
      .then(() => {
        alert("Booking successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          person: "",
          room: "",
          checkin: "",
          checkout: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Error booking room, please try again.");
      });
  };

  return (
    <section className="allpage" id="booking">
      {/* SEO Metadata */}
      <Helmet>
        <title>Book a Room - Hotel DreamCity</title>
        <meta
          name="description"
          content="Book a comfortable and affordable room at Hotel DreamCity near Nepalgunj Ranjha Airport. Enjoy modern amenities at the best rates."
        />
        <meta
          name="keywords"
          content="Hotel DreamCity booking, Nepalgunj hotel reservation, Ranjha Airport stay, book hotel Nepalgunj"
        />
        <meta property="og:title" content="Book a Room - Hotel DreamCity" />
        <meta
          property="og:description"
          content="Reserve a room at Hotel DreamCity, Nepalgunj. Choose from Normal, Attach, or AC rooms for a comfortable stay."
        />
        <meta property="og:image" content="/hotel-dreamcity-booking.jpg" />
        <meta property="og:url" content="https://hoteldreamcity.com/booking" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Hotel DreamCity",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nepalgunj-20, Ranjha Airport",
              addressLocality: "Nepalgunj",
              addressCountry: "Nepal",
            },
            telephone: "+977-9858028454",
            url: "https://hoteldreamcity.com",
            potentialAction: {
              "@type": "ReserveAction",
              target: "https://hoteldreamcity.com/booking",
              result: {
                "@type": "LodgingReservation",
                name: "Hotel DreamCity Booking",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="bsec1">
        <h1>
          <i className="i"></i> ROOM BOOKING <i className="i"></i>
        </h1>
        <h2>Book Our Room</h2>
      </div>
      <div className="bsec2">
        <form onSubmit={handleSubmit}>
          <div className="f">
            <input
              className="ib"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <select
              className="sb"
              name="person"
              id="personSelect"
              value={formData.person}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Number of Guests
              </option>
              <option value="1 Person">1 Person</option>
              <option value="2 Person">2 Persons</option>
              <option value="3 Person">3 Persons</option>
              <option value="4 Person">4 Persons</option>
            </select>
          </div>
          <div className="f">
            <input
              className="ib"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              className="ib"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="f">
            <input
              className="ib"
              type="date"
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              required
            />
            <input
              className="ib"
              type="date"
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              required
            />
          </div>
          <select
            className="sbf"
            name="room"
            id="roomSelect"
            value={formData.room}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Room Type
            </option>
            <option value="Normal Room">Normal Room</option>
            <option value="Attach Room">Attach Room</option>
            <option value="AC Room">AC Room</option>
          </select>
          <textarea
            className="tb"
            name="message"
            placeholder="Special Requests (Optional)"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="buttonf" type="submit">
            Book Now <IoMdSend />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
