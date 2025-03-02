import React from "react";
import "../css/Xfoot.css";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet-async";

// Footer Component
function XFoot() {
  return (
    <div className="fot">
      {/* SEO Metadata */}
      <Helmet>
        <title>DreamCity Hotel - Contact, Location & Company Information</title>
        <meta
          name="description"
          content="Contact DreamCity Hotel located near Nepalgunj Airport. Get details about our location, services, terms, and policies."
        />
        <meta
          name="keywords"
          content="hotel, contact, location, terms, privacy policy, Nepalgunj, DreamCity"
        />
        <meta
          property="og:title"
          content="DreamCity Hotel - Contact & Information"
        />
        <meta
          property="og:description"
          content="Find out how to contact DreamCity Hotel in Nepalgunj, including our address, phone number, email, and more."
        />
        <meta property="og:image" content="https://path_to_image" />
        <meta property="og:url" content="https://dreamcityhotel.com/contact" />
      </Helmet>

      <div className="Fcontainer1">
        {/* Hotel Description */}
        <div className="Fhdetail">
          <h1>DreamCity</h1>
          <p>
            DreamCity Hotel, located near Nepalgunj Airport, offers a
            comfortable and affordable stay for both business and leisure
            travelers. The well-furnished, clean rooms come with modern
            amenities, providing a relaxing environment without exceeding your
            budget.
          </p>
        </div>

        {/* Contact Information */}
        <div className="Fcontact">
          <h1>
            Contact <i className="i"></i>
          </h1>
          <address className="contact">
            <p>
              <FaLocationDot aria-label="Location Icon" /> Ranjha Airport,
              Nepalgunj-20
            </p>
            <p>
              <FaPhoneAlt aria-label="Phone Icon" /> +977 9858028454
            </p>
            <p>
              <IoIosMail aria-label="Email Icon" /> DreamCity@gmail.com
            </p>
          </address>

          <div className="ficon">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook size={30} />
            </a>
            <a href="https://wa.me/+9779858028454" aria-label="WhatsApp">
              <IoLogoWhatsapp size={30} />
            </a>
          </div>
        </div>

        {/* Company Information Links */}
        <div className="Fcompany">
          <h1>
            COMPANY <i className="i"></i>
          </h1>
          <div className="Fcompany-links">
            <a href="/about">
              <MdKeyboardArrowRight /> About Us
            </a>
            <a href="/contact">
              <MdKeyboardArrowRight /> Contact Us
            </a>
            <a href="/privacy-policy">
              <MdKeyboardArrowRight /> Privacy Policy
            </a>
            <a href="/terms">
              <MdKeyboardArrowRight /> Terms & Condition
            </a>
            <a href="/support">
              <MdKeyboardArrowRight /> Support
            </a>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="Fcontainer2">
        <p>@dreamcity.com, All Rights Reserved. Designed By Prashant Khadka</p>
        <div className="nav">
          <a href="/">Home</a>
          <a href="/cookies">Cookies</a>
          <a href="/help">Help</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default XFoot;
