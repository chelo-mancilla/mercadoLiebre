const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
