// EmailForm.jsx
import React, { useState } from "react";
import axios from "axios";
import "../css/emailform.css";

const EmailForm = () => {
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
      console.log("Response:", response.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="eform">
      <div className="con1">
        <div className="sect1">
          <p className="pt">CONTACT US</p>
          <p className="pb">
            <span>CONTACT </span>For Any Query
          </p>
        </div>
        <div className="sect2">
          <div>
            <p className="head">BOOKING</p>
            <p className="gname">
              <span>icon</span> Jungabdr@gmail.com
            </p>
          </div>
          <div>
            <p className="head">TECHNICAL</p>
            <p className="gname">
              <span>icon</span> prashant@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="con2">
        <div className="secb1" style={{ width: "80%", height: "400px" }}>
          <iframe
            width="80%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.97515502885767!2d81.66441207529898!3d28.097666021228793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998675a30f8e175%3A0x93c04013828c9891!2sNepalgunj!5e0!3m2!1sen!2snp!4v1739616680405!5m2!1sen!2snp"
          ></iframe>
        </div>
        <div className="secb2">
          {" "}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />{" "}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                placeholder="Your Number"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <div>
              <div className="buttonf" type="submit">
                SEND MESSAGE
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
