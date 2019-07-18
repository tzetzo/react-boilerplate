const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080; //process.env.PORT is provided by heroku
const app = express();

console.log(__dirname);

app.use(express.static(__dirname + "/build")); //provides a static website with bundle.js containing all JS code build by webpack

app.get("*", (req, res) => {
  //sends the user index.html by default
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
