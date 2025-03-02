import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "../css/Contact.css";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update state as inputs change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Additional client-side validations before submission
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // validate exactly 10 digits

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setFormData(null); // Set formData to null after successful submission
      console.log("Response:", response.data);
      alert("Send Email Successfully!");
    } catch (error) {
      console.error("Error Sending Email:", error.response?.data || error);
      alert("Error Sending mail, please try again.");
    }
  };

  return (
    <section className="allpage" id="contact">
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Us - Hotel DreamCity Nepalgunj</title>
        <meta
          name="description"
          content="Contact us for inquiries, bookings, or technical support at Hotel DreamCity Nepalgunj. We're here to assist you!"
        />
        <meta
          name="keywords"
          content="Hotel DreamCity contact, email support Nepalgunj, booking inquiries Nepalgunj hotel, technical support hotel"
        />
        <meta
          property="og:title"
          content="Contact Us - Hotel DreamCity Nepalgunj"
        />
        <meta
          property="og:description"
          content="Reach out to Hotel DreamCity Nepalgunj for bookings, queries, or support via email or contact form."
        />
        <meta property="og:image" content="/hotel-dreamcity-contact.jpg" />
        <meta property="og:url" content="https://hoteldreamcity.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Hotel DreamCity Contact",
            url: "https://hoteldreamcity.com/contact",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "jungabdr@gmail.com",
                telephone: "+977-9858028454",
                areaServed: "NP",
                availableLanguage: "English",
              },
              {
                "@type": "ContactPoint",
                contactType: "technical support",
                email: "prashant@gmail.com",
                telephone: "+977-9858028454",
                areaServed: "NP",
                availableLanguage: "English",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="con1">
        <div className="sect1">
          <p className="pt">
            <i className="i"></i>
            CONTACT US <i className="i"></i>
          </p>
          <p className="pb">
            <span>CONTACT</span> For Any Query
          </p>
        </div>
        <div className="sect2">
          <div>
            <p className="head">
              BOOKING <i className="i"></i>
            </p>
            <p className="gname">
              <span>
                <IoIosMail style={{ fontSize: "large" }} />
              </span>{" "}
              Jungabdr@gmail.com
            </p>
          </div>
          <div>
            <p className="head">
              TECHNICAL <i className="i"></i>
            </p>
            <p className="gname">
              <span>
                <IoIosMail style={{ fontSize: "large" }} />
              </span>{" "}
              prashant@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="con2">
        <div className="secb1" style={{ width: "80%", height: "400px" }}>
          <iframe
            title="Hotel DreamCity Location"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.97515502885767!2d81.66441207529898!3d28.097666021228793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998675a30f8e175%3A0x93c04013828c9891!2sNepalgunj!5e0!3m2!1sen!2snp!4v1739616680405!5m2!1sen!2snp"
          ></iframe>
        </div>
        <div className="secb2">
          <form onSubmit={handleSubmit}>
            <h1>
              Contact Us <i className="i"></i>
            </h1>
            <input
              className="ipt"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              className="ipt"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Your Number"
              title="Please enter a valid 10-digit phone number"
            />
            <input
              className="ipt"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              className="tpt"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button className="buttonf" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
