const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080; //process.env.PORT is provided by heroku
const app = express();

app.use(express.static(__dirname + "/build")); //provides a static website under the build folder containing all JS code build by webpack

app.get("*", (req, res) => {
  //sends the user index.html by default
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
