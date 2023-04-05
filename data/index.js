const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'funko'
});

db.connect(err => {
  if (err) {
    console.log(err.message)
    return;
  }
  console.log("Connected to MySQL database")
});

// Get all products
app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Add new product
app.post("/products", (req, res) => {
  const q = "INSERT INTO products(`productName`, `id`, `productURL`, `productDesc`, 'price') VALUES (?)";
  const values = [
    req.body.productName,
    req.body.id,
    req.body.productURL,
    req.body.productDesc,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Push contact info
app.post("/contact", (req, res) => {
  const q = "INSERT INTO contacts(`name`, `email`, `message`) VALUES (?, ?, ?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
