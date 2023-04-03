function ajaxmessage() {
  const form = document.getElementById("form");

  var username = form.elements["username"];
  var country = form.elements["country"];
  var message = form.elements["message"];
  var username = username.value;
  var country = country.value;
  var message = message.value;

  console.log(username);
  if (
    username.length >= 1 &&
    username.length <= 20 &&
    country.length >= 1 &&
    country.length <= 20 &&
    message.length >= 1 &&
    message.length <= 20
  ) {
    console.log("so far so good");

    var newdata = [];

    newdata.push({
      username: username,
      country: country,
      date: Date(),
      message: message,
    });

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

    for (var i = 0; i < newdata.length; i++) {
      table +=
        "<tr>" +
        "<td>" +
        newdata[i].username +
        "</td>" +
        "<td>" +
        newdata[i].country +
        "</td>" +
        "<td>" +
        newdata[i].date +
        "</td>" +
        "<td>" +
        newdata[i].message +
        "</td>" +
        "</tr>";
    }

    console.log(newdata);
    document.getElementById("table").innerHTML = table;
  } else {
    document.getElementById("table").innerHTML = "<h1>Failed</h1>";
  }
}

var data = require("./public/guestdata.json");
  var results =
    "<h1>" +
    "This is a Header" +
    "</>" +
    '<a href="http://localhost:8081/"><button class="btn btn-primary btn-lg">Home</button>' +
    "</a>" +
    '<a href="http://localhost:8081/newmessage"><button class="btn btn-primary btn-lg">New message</button>' +
    "</a>" +
    '<a href="http://localhost:8081/ajaxmessage"><button class="btn btn-primary btn-lg">Ajax message</button>' +
    "</a>" +
    "<table border='1'>" +
    "<tr><th>" +
    "Name" +
    "</th><th>" +
    "Country" +
    "</th><th>" +
    "Date" +
    "</th><th>" +
    "Message" +
    "</th></tr>";

  for (var i = 0; i < data.length; i++) {
    results +=
      "<tr>" +
      "<td>" +
      data[i].username +
      "</td>" +
      "<td>" +
      data[i].country +
      "</td>" +
      "<td>" +
      data[i].date +
      "</td>" +
      "<td>" +
      data[i].message +
      "</td>" +
      "</tr>";
  }

  res.send(results);
});

res.sendFile(__dirname + "/public/guestbook.html");
});