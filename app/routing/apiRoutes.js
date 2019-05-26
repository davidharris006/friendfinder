var friendsData = require("../data/friends");
var path = require('path')

var friendsInfo = friendsData.friends



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsInfo);
    });

}