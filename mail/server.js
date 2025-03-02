const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { booking } = require("./booking");
const { sendEmail } = require("./sendmail");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to send a booking request
app.post("/send-booking", booking);
app.post("/send-email", sendEmail);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
