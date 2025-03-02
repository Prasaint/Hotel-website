import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import XFoot from "./components/XFoot";
import XHead from "./components/XHead";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Rooms from "./Pages/Rooms";
import Services from "./Pages/Services";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hotel DreamCity - Best Hotel in Nepalgunj</title>
        <meta
          name="description"
          content="Book your stay at Hotel DreamCity, located near Nepalgunj Ranjha Airport. Experience luxury, comfort, and great hospitality."
        />
        <meta
          name="keywords"
          content="Hotel DreamCity, Nepalgunj hotel, book hotel in Nepalgunj, Ranjha airport hotel"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Hotel DreamCity - Best Stay in Nepalgunj"
        />
        <meta
          property="og:description"
          content="Stay at Hotel DreamCity near Nepalgunj Ranjha Airport. Book comfortable rooms now!"
        />
        <meta property="og:image" content="/hotel-dreamcity.jpg" />
        <meta property="og:url" content="https://hoteldreamcity.com" />
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
            image: "/hotel-dreamcity.jpg",
          })}
        </script>
      </Helmet>

      <header>
        <XHead />
      </header>

      <main>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Rooms />
        </section>
        <section>
          <Booking />
        </section>
        <section>
          <Contact />
        </section>
      </main>

      <footer>
        <XFoot />
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/9858028454"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <IoLogoWhatsapp
          color="green"
          style={{
            backgroundColor: "white",
            borderRadius: "32px",
            padding: "8px",
            boxShadow: "0 0 0 3px rgba(53, 53, 53, 0.5)",
          }}
          size={50}
        />
        <p>Direct Message</p>
      </a>
    </HelmetProvider>
  );
}

export default App;
