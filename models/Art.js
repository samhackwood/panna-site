const mongoose = require("mongoose");


const artSchema = mongoose.Schema({
    test: {
        type: String,
        required: true,
        maxlength: [300, "You exceeded the number of characters"]
    },
},
{
    timestamps: true
})

const Art = mongoose.model("Art", artSchema);

module.exports = Art;