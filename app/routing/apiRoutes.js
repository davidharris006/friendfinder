var friendsData = require("../data/friends");
var path = require('path')
var express = require("express");
var app = express();


var friendsInfo = friendsData.friends



module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());;

    app.post("/api/friends", function (req, res) {
        console.log(req.body);



        // newfriend.routeName = newfriend.Name.replace(/\s+/g, "").toLowerCase();


        return res.json(friendsInfo)
    });
    app.get("/api/friends", function (req, res) {
        return res.json(friendsInfo);
    });

}