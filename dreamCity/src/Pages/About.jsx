import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../css/About.css";
import { FaHotel, FaUser, FaEnvelope } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll(".allpage").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="allpage" id="about">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us - Hotel DreamCity</title>
        <meta
          name="description"
          content="Hotel DreamCity, near Nepalgunj Ranjha Airport, offers comfortable and affordable accommodation with modern amenities."
        />
        <meta
          name="keywords"
          content="Hotel DreamCity, Nepalgunj hotel, budget hotel in Nepalgunj, Ranjha airport hotel"
        />
        <meta
          property="og:title"
          content="About Hotel DreamCity - Best Stay in Nepalgunj"
        />
        <meta
          property="og:description"
          content="Stay at Hotel DreamCity near Nepalgunj Ranjha Airport. Enjoy modern rooms, friendly staff, and a relaxing experience."
        />
        <meta property="og:image" content="/hotel-dreamcity-about.jpg" />
        <meta property="og:url" content="https://hoteldreamcity.com/about" />
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
            image: "/hotel-dreamcity-about.jpg",
          })}
        </script>
      </Helmet>

      <div className="container-1">
        <h1>
          ABOUT US<i className="i"></i>
        </h1>
        <h2>
          Welcome to <span>Hotel DreamCity</span>
        </h2>
        <p>
          Hotel DreamCity, located near Nepalgunj Ranjha Airport, provides
          comfortable and budget-friendly accommodation for travelers. Our
          well-furnished rooms come with modern amenities to ensure a pleasant
          stay.
        </p>

        <div className="icons-container">
          <div className="icon-item">
            <FaHotel className="icon" />
            <h1>Rooms</h1>
            <span
              style={{
                color: "#fea116",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              10
            </span>
          </div>
          <div className="icon-item">
            <FaUser className="icon" />
            <h1>Staff</h1>
            <span
              style={{
                color: "#fea116",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              3
            </span>
          </div>
          <div className="icon-item">
            <FaEnvelope className="icon" />
            <h1>Clients</h1>
            <span
              style={{
                color: "#fea116",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              3/day
            </span>
          </div>
        </div>

        <div className="btna">
          <a href="#about">Explore More !</a>
        </div>
      </div>

      <div className="container-2">
        <h1>
          Gallery <i className="i"></i>
        </h1>
        <div className="gimg">
          <img
            src="https://images.pexels.com/photos/27731531/pexels-photo-27731531/free-photo-of-withered-tree-in-the-desert-by-the-dune.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Desert landscape near Hotel DreamCity"
            className="img1"
          />
          <img
            src="https://images.pexels.com/photos/12026053/pexels-photo-12026053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hotel DreamCity comfortable rooms"
            className="img2"
          />
          <img
            src="https://images.pexels.com/photos/11612809/pexels-photo-11612809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Relaxing ambiance at Hotel DreamCity"
            className="img3"
          />
          <img
            src="https://images.pexels.com/photos/12026053/pexels-photo-12026053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cozy beds in Hotel DreamCity"
            className="img4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
