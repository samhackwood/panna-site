const Art = require("../models/Art");
const moment = require('moment');



// HTTP POST - To save the data into the database
exports.art_create_post = (req, res) => {
    let art = new Art(req.body); 
    art.test = req.body.test;
    art.save()
    .then(()=> {
        res.redirect('art');
    })

    .catch((err) => {
        console.log(err);
        res.send("Something went wrong!");
    })
    }