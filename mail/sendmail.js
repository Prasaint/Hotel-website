// sendMail.js
const nodemailer = require("nodemailer");
const mysql = require("mysql2");

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Developer's email
    pass: process.env.GMAIL_PASS,
  },
});

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gmail",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Endpoint to send an email
const sendEmail = (req, res) => {
  const { name, email, phone, message, person, room, checkin, checkout } =
    req.body;

  const sql =
    "insert into customers (name, email, phone, message) values (?, ?, ?, ?)";
  const values = [name, email, phone, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Data saved successfully!", result });
  });

  // Server-side validation
  if (!name || !email || !phone || !message) {
    return res.status(400).send("All fields are required.");
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send("Invalid email address.");
  }

  // Validate phone number (example: exactly 10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res
      .status(400)
      .send("Invalid phone number. Please enter a 10-digit phone number.");
  }

  // Compose email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: `New Booking from ${name}`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
          <h2 style="color: #4CAF50;">New Email Got! From Hotel</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${
             message || "No additional message provided."
           }</p>
          <hr />
          <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply directly to this email.</p>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully.");
  });
};

module.exports = { sendEmail };
