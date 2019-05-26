var friendsData = require("./app/data/friends.js")
var express = require("express");
var app = express();
// var createPath = require("./app/routing/htmlRoutes")
var createApiPath = require("./app/routing/apiRoutes")(app)
var createHomePath = require("./app/routing/htmlRoutes")(app)



// var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;            

var newPerson = {
    Name: "David",
    Photo: "Somelink.html",
    Scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
};
createHomePath
createApiPath

friendsData.addPerson(newPerson)




app.listen(PORT, function () {
                console.log("App listening on PORT " + PORT);
              })


