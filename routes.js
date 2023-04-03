var express = require("express");
var app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "public/index.html");
});

app.get("/guestbook", function (req, res) {
  res.sendFile(__dirname + "/public/guestbook.html");
});

app.get("/newmessage", function (req, res) {
  res.sendFile(__dirname + "/public/new.html");
});

app.post("/newmessage", function (req, res) {
  var newdata = require("./public/guestdata.json");
  //save data from request body to variables
  var username = req.body.username;
  var country = req.body.country;
  var message = req.body.message;
  //check data for correctness
  if (
    username.length >= 1 &&
    username.length <= 20 &&
    country.length >= 1 &&
    country.length <= 20 &&
    message.length >= 1 &&
    message.length <= 20
  ) {
    //Add data to end of array
    newdata.push({
      username: username,
      country: country,
      date: Date(),
      message: message,
    });
    //Send answer
    res.sendFile(__dirname + "/public/success.html");
  } else {
    res.sendFile(__dirname + "/public/fail.html");
  }
});

app.get("/ajaxmessage", function (req, res) {
  res.sendFile(__dirname + "/public/ajaxmessage.html");
});

app.post("/ajaxmessage", function (req, res) {
  var array = require("./public/person.json");
  //save request body as variable (array)
  var person = req.body;
  //save data from array to variables
  var username = person[0].username;
  var country = person[0].country;
  var message = person[0].message;
  //add data to array
  array.push({
    username: username,
    country: country,
    date: Date(),
    message: message,
  });
  //format answer with data
  let table =
    "<tr><th>" +
    "Name" +
    "</th><th>" +
    "Country" +
    "</th><th>" +
    "Date" +
    "</th><th>" +
    "Message" +
    "</th></tr>" +
    "<tr>" +
    "<td>";
  //cycle through array
  for (var i = 0; i < array.length; i++) {
    table +=
      "<tr>" +
      "<td>" +
      array[i].username +
      "</td>" +
      "<td>" +
      array[i].country +
      "</td>" +
      "<td>" +
      array[i].date +
      "</td>" +
      "<td>" +
      array[i].message +
      "</td>" +
      "</tr>";
  }
  //send answer
  res.send(table);
  res.end();
});

app.listen(8081, function () {
  console.log("Listening on port 8081");
});
