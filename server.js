const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Menetapkan folder 'public' sebagai folder statis
app.use(express.static(path.join(__dirname, "public")));

// Routing untuk halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
