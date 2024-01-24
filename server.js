const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const contactRoutes = require("./contact");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/")));
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
