const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nContact Number: ${phone}\nMessage: ${message}\n\n`;
  const filePath = path.join(__dirname, "contacts.txt");

  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Data saved successfully");
      res.send("Form submitted successfully!");
    }
  });
});

module.exports = router;
