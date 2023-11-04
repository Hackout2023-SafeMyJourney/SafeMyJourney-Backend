const express = require("express");
const app = express();

// PORT
const port = process.env.PORT || 8000;

// Starting a Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
