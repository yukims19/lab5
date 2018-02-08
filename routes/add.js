var data = require("../data.json");

exports.addFriend = function(req, res) { 
                                        var newJ = {};
                                        newJ['name'] = req.query.name;
                                        newJ['description'] = req.query.description;
                                        newJ['imageURL'] = 'http://lorempixel.com/400/400/people';
                                        console.log(newJ)
                                        data.friends.push(newJ);

                                        res.render('index', data);
 }
