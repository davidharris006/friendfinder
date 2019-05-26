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
 const friend = {};
  friend.Name = req.body.Name;
  friend.Photo = req.body.photo;
  const scores = [];
        for (const key in req.body) {
            
            if (req.body.hasOwnProperty(key)) {
                const element = req.body[key];
                const numbers = parseFloat(element.charAt(0))

                if (element === "Please select value"){
                    return res.render("/survey")
                }
                else if (typeof numbers === "integer"){
                    scores.push(numbers)
                }

                
                console.log(scores + friend);
            }
        }

        // newfriend.routeName = newfriend.Name.replace(/\s+/g, "").toLowerCase();


        return res.render("/survey")
    });
    app.get("/api/friends", function (req, res) {
        return res.json(friendsInfo);
    });

}