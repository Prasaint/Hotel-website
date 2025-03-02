import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import "../css/Xhead.css";
import { Helmet } from "react-helmet-async";

function XHead() {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id, event) => {
    event.preventDefault();
    setActiveSection(id);
    setIsNavOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

  useEffect(() => {
    console.log("Nav Open:", isNavOpen);
  }, [isNavOpen]);

  return (
    <header className="home">
      <Helmet>
        <title>DreamCity Hotel - Comfortable Stay Near Nepalgunj Airport</title>
        <meta
          name="description"
          content="DreamCity Hotel offers well-furnished rooms and modern amenities for business and leisure travelers near Nepalgunj Airport."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="hotel, rooms, booking, Nepalgunj, DreamCity"
        />
        <meta property="og:title" content="DreamCity Hotel" />
        <meta
          property="og:description"
          content="Stay at DreamCity Hotel for a relaxing experience with easy access to Nepalgunj Airport."
        />
        <meta property="og:image" content="URL-to-image" />
        <meta property="og:url" content="http://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DreamCity Hotel" />
        <meta
          name="twitter:description"
          content="DreamCity Hotel offers the best services and rooms near Nepalgunj Airport."
        />
        <meta name="twitter:image" content="URL-to-image" />
      </Helmet>

      <p className="title">
        Hotel <span>DreamCity</span>
      </p>
      <button
        ref={buttonRef}
        className="menu-btn"
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Toggle navigation menu"
      >
        <FaBars color="white" size={24} />
      </button>

      <nav className={`nav-links ${isNavOpen ? "open" : ""}`} ref={navRef}>
        <a
          href="#home"
          onClick={(event) => handleLinkClick("home", event)}
          className={activeSection === "home" ? "active" : ""}
          aria-label="Go to Home section"
        >
          HOME
        </a>
        <a
          href="#about"
          onClick={(event) => handleLinkClick("about", event)}
          className={activeSection === "about" ? "active" : ""}
          aria-label="Go to About section"
        >
          ABOUT
        </a>
        <a
          href="#services"
          onClick={(event) => handleLinkClick("services", event)}
          className={activeSection === "services" ? "active" : ""}
          aria-label="Go to Services section"
        >
          SERVICE
        </a>
        <a
          href="#rooms"
          onClick={(event) => handleLinkClick("rooms", event)}
          className={activeSection === "rooms" ? "active" : ""}
          aria-label="Go to Rooms section"
        >
          ROOMS
        </a>
        <a
          href="#booking"
          onClick={(event) => handleLinkClick("booking", event)}
          className={activeSection === "booking" ? "active" : ""}
          aria-label="Go to Booking section"
        >
          BOOKING
        </a>
        <a
          href="#contact"
          onClick={(event) => handleLinkClick("contact", event)}
          className={activeSection === "contact" ? "active" : ""}
          aria-label="Go to Contact section"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
}

export default XHead;
