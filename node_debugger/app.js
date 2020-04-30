const express = require("express");
// making a new espress app
const app = express();
// has one get route, url /, when something hit the route second is the callback func
app.get('/', (req,res) => {
  debugger;
  res.send("Hey is working");
});

app.listen(3000,() => console.log("Server is up and running!."))




// let myName = "Yenisbel";
// console.log(`Hello ${myName}`);