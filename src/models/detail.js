const mongoose = require('mongoose');
const Detail = mongoose.Schema({
    Brandname: String,
    brandIcon: String,
    links: [
        {
            label: String,
            url:String
        }
    ]
})
module.exports=mongoose.model("detail",Detail)