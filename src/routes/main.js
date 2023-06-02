const express= require('express')

const Detail= require("../models/detail")


const routes = express.Router()

routes.get("/", async(req, res) => {
    const details= await Detail.findOne({"_id":"647791b347f66cb3e8463d87"})
console.log(details)
    res.render('index', {
        details:details
    })    
})
routes.get("/gallery", (req, res) => {
    res.render('gallery')    
    })
module.exports = routes;